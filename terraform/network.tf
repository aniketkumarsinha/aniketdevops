resource "azurerm_virtual_network" "vnet" {
  name                = var.vnet_name
  address_space       = var.vnet_address_space
  location            = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name
}

resource "azurerm_subnet" "aks_argocd" {
  name                 = var.aks_argocd_subnet_name
  resource_group_name  = azurerm_resource_group.resource_group.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = [var.subnet_prefixes["aks_argocd"]]
}

resource "azurerm_subnet" "appgw_argocd" {
  name                 = var.appgw_argocd_subnet_name
  resource_group_name  = azurerm_resource_group.resource_group.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = [var.subnet_prefixes["appgw_argocd"]]
}

resource "azurerm_public_ip" "appgw_argocd" {
  name                = var.argocd_frontend_ip_name
  location            = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name
  allocation_method   = "Static"
  sku                 = "Standard"
}

resource "azurerm_subnet" "aks_webapp" {
  name                 = var.aks_webapp_subnet_name
  resource_group_name  = azurerm_resource_group.resource_group.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = [var.subnet_prefixes["aks_webapp"]]
}

resource "azurerm_subnet" "appgw_webapp" {
  name                 = var.appgw_webapp_subnet_name
  resource_group_name  = azurerm_resource_group.resource_group.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = [var.subnet_prefixes["appgw_webapp"]]
}

resource "azurerm_public_ip" "appgw_webapp" {
  name                = var.webapp_frontend_ip_name
  location            = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name
  allocation_method   = "Static"
  sku                 = "Standard"
}