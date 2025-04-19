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
variable "subnet_prefixes" {
  type = map(string)
}

variable "frontend_ip_name" {
    description = "The name of the public IP address for the Application Gateway."
    type        = string
}

variable "app_gateway_name" {
  description = "The name of the Application Gateway."
  type        = string
}

variable "acr_name" {
  description = "The name of the Azure Container Registry."
  type        = string  
}

variable "aks_name" {
  description = "The name of the Azure Kubernetes Service."
  type        = string  
}

