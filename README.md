# Restart Linksys EA2700 Router
<img src='https://officedepot.scene7.com/is/image/officedepot/210634_p_C_EA2700_front_edge?id=0ssrv1&fmt=jpg&fit=constrain,1&wid=450&hei=287&op_sharpen=1&qlt=95'>

## Description
Restarts Linksys EA2700 router programmatically from your computer. As long as your computer is connected to your wifi, this app will programmatically restart(reboot) it.

## Setup
1. clone down this repo
```git clone https://github.com/danielrussellLA/restart-linksys-EA2700-router.git```
2. cd into the repo
```cd restart-linksys-EA2700-router```
3. install dependencies with `npm i` 
(you need nodejs installed on your computer. to download, you can `brew install node` on a mac, or on windows, download node from their website https://nodejs.org)
4. run the app
```PASSWORD=yourWifiPassword URL=yourRouterUrl npm start```

## Usage
params:
```
PASSWORD - your wifi password as you would normally enter it
URL - the ip address (url) for your router network. To find this, go to OpenNetworkPreferences > Advanced > TCP/IP > copy your router IP address. Your entry for this variable should look something like 'http://10.245.141.131'.
```

```PASSWORD='yourWifiPassword' URL='http://10.245.141.131' npm start```
