variable "resource_group_name" {
  description = "The name of the resource group."
  type        = string  
}

variable "location" {
  description = "The Azure location where the resource group will be created."
  type        = string
  default     = "centralindia"  
}

variable "vnet_name" {
  description = "The name of the virtual network."
  type        = string 
}

variable "vnet_address_space" {
  type = list(string)
}
# variable "subnet_prefixes" {
#   type = map(string)
# }

variable "acr_name" {
  description = "The name of the Azure Container Registry."
  type        = string  
}

variable "aks_webapp_name" {
  description = "The name of the AKS cluster for webapp."
  type        = string  
}

variable "app_gateway_webapp_name" {
  description = "The name of the Application Gateway for webapp."
  type        = string  
}

variable "webapp_frontend_ip_name" {
  description = "The name of the frontend IP configuration for the Application Gateway for webapp."
  type        = string  
}

variable "aks_argocd_name" {
  description = "The name of the AKS cluster for ArgoCD."
  type        = string  
}

variable "app_gateway_argocd_name" {
  description = "The name of the Application Gateway for ArgoCD."
  type        = string  
}

variable "argocd_frontend_ip_name" {
  description = "The name of the frontend IP configuration for the Application Gateway for ArgoCD."
  type        = string  
}

variable "aks_argocd_subnet_name" {
  description = "The name of the subnet for the AKS cluster for ArgoCD."
  type        = string  
}

variable "appgw_argocd_subnet_name" {
  description = "The name of the subnet for the Application Gateway for ArgoCD."
  type        = string  
}

variable "aks_webapp_subnet_name" {
  description = "The name of the subnet for the AKS cluster for webapp."
  type        = string  
}

variable "appgw_webapp_subnet_name" {
  description = "The name of the subnet for the Application Gateway for webapp."
  type        = string  
}

variable "subnet_prefixes_aks_argocd" {
  description = "The address prefix for the AKS cluster for ArgoCD."
  type        = string  
}

variable "subnet_prefixes_appgw_argocd" {
  description = "The address prefix for the Application Gateway for ArgoCD."
  type        = string  
}

variable "subnet_prefixes_aks_webapp" {
  description = "The address prefix for the AKS cluster for webapp."
  type        = string  
}

variable "subnet_prefixes_appgw_webapp" {
  description = "The address prefix for the Application Gateway for webapp."
  type        = string  
}

