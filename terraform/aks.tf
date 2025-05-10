resource "azurerm_kubernetes_cluster" "aks_argocd" {
  name                = var.aks_argocd_name
  location            = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name
  dns_prefix          = var.aks_argocd_name

  default_node_pool {
    name            = "default"
    node_count      = 1
    vm_size         = "Standard_DS2_v2"
    vnet_subnet_id  = azurerm_subnet.aks_argocd.id
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin    = "azure"
    network_policy    = "azure"
    load_balancer_sku = "standard"
    service_cidr       = "10.230.0.0/16"
  }

  ingress_application_gateway {
    gateway_id = azurerm_application_gateway.appgw_argocd.id
  }
}

resource "azurerm_kubernetes_cluster_node_pool" "argocd" {
  name                  = "argocd"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.aks_argocd.id
  vm_size               = "Standard_DS2_v2"
  auto_scaling_enabled = true
  min_count            = 1
  max_count            = 2
  node_count          = 1
}

resource "azurerm_role_assignment" "acr_argocd_pull_role" {
  principal_id                     = azurerm_kubernetes_cluster.aks_argocd.identity[0].principal_id
  role_definition_name             = "AcrPull"
  scope                            = azurerm_container_registry.acr.id
  skip_service_principal_aad_check = true
}

resource "azurerm_kubernetes_cluster" "aks_webapp" {
  name                = var.aks_webapp_name
  location            = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name
  dns_prefix          = var.aks_webapp_name

  default_node_pool {
    name            = "default"
    node_count      = 1
    vm_size         = "Standard_DS2_v2"
    vnet_subnet_id  = azurerm_subnet.aks_webapp.id
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin    = "azure"
    network_policy    = "azure"
    load_balancer_sku = "standard"
    service_cidr       = "10.240.0.0/16"
  }

  ingress_application_gateway {
    gateway_id = azurerm_application_gateway.appgw_webapp.id
  }
}

resource "azurerm_kubernetes_cluster_node_pool" "web" {
  name                  = "webapp"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.aks_webapp.id
  vm_size               = "Standard_DS2_v2"
  auto_scaling_enabled = true
  min_count            = 1
  max_count            = 3
  node_count          = 1
}

resource "azurerm_role_assignment" "acrpull_role" {
  principal_id                     = azurerm_kubernetes_cluster.aks_webapp.identity[0].principal_id
  role_definition_name             = "AcrPull"
  scope                            = azurerm_container_registry.acr.id
  skip_service_principal_aad_check = true
}