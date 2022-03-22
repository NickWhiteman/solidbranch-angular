# Введите в консоль команду чтобы открыть chrome без cors

  **mac os:**
  
  open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
  
  **windows:**
  
  chrome.exe --disable-web-security
  
  **linux:**
  
  google-chrome --disable-web-security

# Запуск проекта
  Перед запуском проекта, необходимо создать 2 консоли в первой запустить сервер командой: 
    
   **node src/server/server**
    
  Затем запустить проект во второй консоле: 
    
   **npm start**
