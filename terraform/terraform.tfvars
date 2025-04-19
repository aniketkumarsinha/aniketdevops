resource_group_name   = "aniketdevops"
vnet_name             = "advnet"
vnet_address_space    = ["10.0.0.0/16"]
subnet_prefixes       = {
  aks   = "10.0.1.0/24"
  appgw = "10.0.2.0/24"
}
acr_name              = "adacr"
aks_name              = "adaks"
app_gateway_name      = "adappgw"
frontend_ip_name      = "adappgw-ip"