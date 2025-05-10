resource_group_name   = "aniketdevops"
vnet_name             = "advnet"
vnet_address_space    = ["10.0.0.0/16"]
subnet_prefixes       = {
  aks_argocd   = "10.0.16.0/24"
  appgw_argocd = "10.0.20.0/24"
  aks_webapp   = "10.0.32.0/24"
  appgw_webapp = "10.0.33.0/24"
}
aks_argocd_subnet_name = "aks-argocd-subnet"
appgw_argocd_subnet_name = "appgw-argocd-subnet"
aks_webapp_subnet_name = "aks-webapp-subnet"
appgw_webapp_subnet_name = "appgw-webapp-subnet"

acr_name              = "adacr"
aks_webapp_name              = "adaks"
app_gateway_webapp_name      = "adappgw"
webapp_frontend_ip_name      = "adappgw-ip"

aks_argocd_name = "adaksargocd"
app_gateway_argocd_name = "adappgwargocd"
argocd_frontend_ip_name   = "adappgwargocd-ip"
