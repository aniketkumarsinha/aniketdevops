# resource "helm_release" "agic_argocd" {
#   provider   = helm.argocd
#   name       = "agic"
#   namespace  = "kube-system"
#   repository = "https://appgwingress.blob.core.windows.net/ingress-azure-helm-package/"
#   chart      = "ingress-azure"
#   version    = "1.5.0"

#   set {
#     name  = "appgw.name"
#     value = azurerm_application_gateway.appgw_argocd.name
#   }

#   set {
#     name  = "appgw.resourceGroup"
#     value = azurerm_resource_group.resource_group.name
#   }

#   set {
#     name  = "appgw.subscriptionId"
#     value = var.subscription_id
#   }

#   set {
#     name  = "appgw.usePrivateIP"
#     value = "false"
#   }

#   set {
#     name  = "armAuth.type"
#     value = "aadPodIdentity"
#   }

#   set {
#     name  = "armAuth.identityResourceID"
#     value = azurerm_user_assigned_identity.agic_identity_argocd.id
#   }

#   set {
#     name  = "armAuth.identityClientID"
#     value = azurerm_user_assigned_identity.agic_identity_argocd.client_id
#   }

#   set {
#     name  = "ingressClass"
#     value = "azure/application-gateway"
#   }

#   depends_on = [azurerm_role_assignment.agic_argocd_contributor]
# }



#   resource "helm_release" "agic_webapp" {
#   provider   = helm.webapp
#   name       = "agic"
#   namespace  = "kube-system"
#   repository = "https://appgwingress.blob.core.windows.net/ingress-azure-helm-package/"
#   chart      = "ingress-azure"
#   version    = "1.5.0"

#   set {
#     name  = "appgw.name"
#     value = azurerm_application_gateway.appgw_webapp.name
#   }

#   set {
#     name  = "appgw.resourceGroup"
#     value = azurerm_resource_group.resource_group.name
#   }

#   set {
#     name  = "appgw.subscriptionId"
#     value = var.subscription_id
#   }

#   set {
#     name  = "appgw.usePrivateIP"
#     value = "false"
#   }

#   set {
#     name  = "armAuth.type"
#     value = "aadPodIdentity"
#   }

#   set {
#     name  = "armAuth.identityResourceID"
#     value = azurerm_user_assigned_identity.agic_identity_webapp.id
#   }

#   set {
#     name  = "armAuth.identityClientID"
#     value = azurerm_user_assigned_identity.agic_identity_webapp.client_id
#   }

#   set {
#     name  = "ingressClass"
#     value = "azure/application-gateway"
#   }

#   depends_on = [azurerm_role_assignment.agic_webapp_contributor]
# }

provider "helm" {
  
}

resource "helm_release" "argocd" {
  provider   = helm.argocd
  name       = "argocd"
  namespace  = "argocd"
  create_namespace = true
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"
  version    = "5.46.2"

  set {
    name  = "server.ingress.enabled"
    value = "true"
  }

  set {
    name  = "server.ingress.ingressClassName"
    value = "azure/application-gateway"
  }

  set {
    name  = "server.ingress.hosts[0]"
    value = "argocd.example.com"
  }

  set {
    name  = "server.service.servicePortHttp"
    value = "80"
  }

  set {
    name  = "server.config.url"
    value = "https://argocd.example.com"
  }
}