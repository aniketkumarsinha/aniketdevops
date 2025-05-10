resource "azurerm_application_gateway" "appgw_argocd" {
  name                = var.app_gateway_argocd_name
  location            = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name

  sku {
    name     = "Standard_v2"
    tier     = "Standard_v2"
    capacity = 1
  }

  gateway_ip_configuration {
    name      = "gateway-ip-config"
    subnet_id = azurerm_subnet.appgw_argocd.id
  }

  frontend_ip_configuration {
    name                 = var.argocd_frontend_ip_name
    public_ip_address_id = azurerm_public_ip.appgw_argocd.id
  }

  frontend_port {
    name = "frontend-port"
    port = 80
  }

  backend_address_pool {
    name = "default-backend"
  }

  backend_http_settings {
    name     = "http-settings"
    port     = 80
    protocol = "Http"
    cookie_based_affinity = "Disabled"
  }

  http_listener {
    name                           = "http-listener"
    frontend_ip_configuration_name = var.argocd_frontend_ip_name
    frontend_port_name             = "frontend-port"
    protocol                       = "Http"
  }

  request_routing_rule {
    name                       = "http-rule"
    rule_type                  = "Basic"
    http_listener_name         = "http-listener"
    backend_address_pool_name  = "default-backend"
    backend_http_settings_name = "http-settings"
  }
}

resource "azurerm_user_assigned_identity" "agic_identity_argocd" {
  name                = "agic-argocd-identity"
  resource_group_name = azurerm_resource_group.resource_group.name
  location            = azurerm_resource_group.resource_group.location
}

resource "azurerm_role_assignment" "agic_argocd_contributor" {
  principal_id         = azurerm_user_assigned_identity.agic_identity_argocd.principal_id
  role_definition_name = "Contributor"
  scope                = azurerm_application_gateway.appgw_argocd.id
}



resource "azurerm_application_gateway" "appgw_webapp" {
  name                = var.app_gateway_webapp_name
  location            = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name

  sku {
    name     = "Standard_v2"
    tier     = "Standard_v2"
    capacity = 1
  }

  gateway_ip_configuration {
    name      = "gateway-ip-config"
    subnet_id = azurerm_subnet.appgw_webapp.id
  }

  frontend_ip_configuration {
    name                 = var.webapp_frontend_ip_name
    public_ip_address_id = azurerm_public_ip.appgw_webapp.id
  }

  frontend_port {
    name = "frontend-port"
    port = 80
  }

  backend_address_pool {
    name = "default-backend"
  }

  backend_http_settings {
    name     = "http-settings"
    port     = 80
    protocol = "Http"
    cookie_based_affinity = "Disabled"
  }

  http_listener {
    name                           = "http-listener"
    frontend_ip_configuration_name = var.webapp_frontend_ip_name
    frontend_port_name             = "frontend-port"
    protocol                       = "Http"
  }

  request_routing_rule {
    name                       = "http-rule"
    rule_type                  = "Basic"
    http_listener_name         = "http-listener"
    backend_address_pool_name  = "default-backend"
    backend_http_settings_name = "http-settings"
  }
}

resource "azurerm_user_assigned_identity" "agic_identity_webapp" {
  name                = "agic-webapp-identity"
  resource_group_name = azurerm_resource_group.resource_group.name
  location            = azurerm_resource_group.resource_group.location
}

resource "azurerm_role_assignment" "agic_webapp_contributor" {
  principal_id         = azurerm_user_assigned_identity.agic_identity_webapp.principal_id
  role_definition_name = "Contributor"
  scope                = azurerm_application_gateway.appgw_webapp.id
}