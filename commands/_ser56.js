/*CMD
  command: /ser56
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat");
if (user.telegramid == key){
let key = Bot.getProperty("Prkey");
let key2 = Bot.getProperty("Pukey");
Libs.CoinPayments.setPrivateKey(""+key+"");
Libs.CoinPayments.setPublicKey(""+key2+"");
Libs.CoinPayments.setBBApiKey('tfomtXY8xMcpuEdmzh1NWOxMdyKXEhcPD8vqfj0a');
Bot.sendMessage("OK");
}else{
return
}

