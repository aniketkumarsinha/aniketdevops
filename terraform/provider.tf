terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.14.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.10.0"
    }
  }
  required_version = "1.10.0"

  backend "azurerm" {
    resource_group_name  = "terraform"  # Can be passed via `-backend-config=`"resource_group_name=<resource group name>"` in the `init` command.
    storage_account_name = "terraformaniketdevops"                      # Can be passed via `-backend-config=`"storage_account_name=<storage account name>"` in the `init` command.
    container_name       = "terraform"                       # Can be passed via `-backend-config=`"container_name=<container name>"` in the `init` command.
    key                  = "terraform.tfstate"        # Can be passed via `-backend-config=`"key=<blob key name>"` in the `init` command.
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  features {}
}

# Helm provider for AKS ArgoCD cluster (uses exec auth)
# provider "helm" {
#   alias = "argocd"
#   kubernetes {
#     host                   = azurerm_kubernetes_cluster.aks_argocd.kube_config[0].host
#     cluster_ca_certificate = base64decode(azurerm_kubernetes_cluster.aks_argocd.kube_config[0].cluster_ca_certificate)

#     exec {
#       api_version = "client.authentication.k8s.io/v1beta1"
#       command     = "az"
#       args        = [
#         "aks",
#         "get-credentials",
#         "--resource-group", azurerm_kubernetes_cluster.aks_argocd.resource_group_name,
#         "--name", azurerm_kubernetes_cluster.aks_argocd.name,
#         "--admin",
#         "--file", "/dev/stdout"
#       ]
#     }
#   }
# }

# provider "helm" {
#   alias = "argocd"
#   debug = true
#   kubernetes {
#     host                   = data.azurerm_kubernetes_cluster.aks_argocd.kube_admin_config[0].host
#     client_key             = base64decode(data.azurerm_kubernetes_cluster.aks_argocd.kube_admin_config[0].client_key)
#     client_certificate     = base64decode(data.azurerm_kubernetes_cluster.aks_argocd.kube_admin_config[0].client_certificate)
#     cluster_ca_certificate = base64decode(data.azurerm_kubernetes_cluster.aks_argocd.kube_admin_config[0].cluster_ca_certificate)
#   }
# }

# Helm provider for AKS WebApp cluster (uses exec auth)
# provider "helm" {
#   alias = "webapp"
#   kubernetes {
#     host                   = azurerm_kubernetes_cluster.aks_webapp.kube_config[0].host
#     cluster_ca_certificate = base64decode(azurerm_kubernetes_cluster.aks_webapp.kube_config[0].cluster_ca_certificate)

#     exec {
#       api_version = "client.authentication.k8s.io/v1beta1"
#       command     = "az"
#       args        = [
#         "aks",
#         "get-credentials",
#         "--resource-group", azurerm_kubernetes_cluster.aks_webapp.resource_group_name,
#         "--name", azurerm_kubernetes_cluster.aks_webapp.name,
#         "--admin",
#         "--file", "/dev/stdout"
#       ]
#     }
#   }
# }