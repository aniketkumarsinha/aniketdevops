data "azurerm_kubernetes_cluster" "aks_argocd" {
  name                = var.aks_argocd_name
  resource_group_name = azurerm_resource_group.resource_group.name
}