# POSTMAN note

在開發web，常常會用到WEB API來對SERVER溝通，在撰寫API的時候雖然可以用Browser來測試，不過如果進行到不同HTTP Method測試的時候，Browser的作用就有限。
所以Postman 就是一項可以加快協助開發API、測試API的工具

## 基本操作

1. 輸入指定的URL
2. 選擇HTTP Method
4. 按下【SEND】會回傳內容 
5. 下方就會產生內容
也可用於查看API的資料，輸入好URL按下URL param，可以顯示API設定的參數
按下【SEND】，會收到SERVER回傳的資料內容
按下【Params】，會顯示參數
按下【Header】，可以查看資料資訊
按下【PRIVIEW】，會顯示REQUEST CONTENT
【PRETTY】為易讀 【RAW】為原始資料

### HTTP 有幾種方法: 
GET = 從SERVER取得資料
POST = 新增資料(新增全新的資料，無論是否相同)
PUT = 在指定位置的新增資料(相同資料會被覆蓋)
PATCH = 在現有資料欄位，增加OR更新一筆資料(就是修改已存在的資料)
DELETE 刪除資料

### safe & idempotent 
為HTTP狀態描述的專有名詞

#### safe 表示該操作不會改變原有的資料狀態，同樣結果可以被cache

ex: 查看訂單不會改變訂單本身紀錄

#### idempotent 指操作不管幾遍，都會得到同樣資源狀態結果
ex: 刪除一筆資料



## HTTP 協議
HTTP通訊協定 (HyperText Transfer Protocol) base on TCP傳輸協定的傳輸機制，可以確保傳輸過程Package不會遺失，接收及傳送順序一致

Header
Content-Type 內容格式
Content-Length 內容長度
Content-Encoding 內容編碼方式or壓縮格式
Authorization 認證資料

### 常用HTTP Method: 
| 請求方法 | 安全性 | 冪等性 | 可快取性 | 描述 |
| --- | --- | --- | --- | --- |
| GET | O | O | O | 傳輸 **目標資源** 目前的 表示 (representation)。 |
| HEAD | O | O | O | 與 GET 方法相同，但 Server 只傳輸 狀態行 以及 表頭部分。 |
| POST | X | X | O \[註\] | 對請求的 酬載 (payload)，執行 特定 資源的 處理。 |
| PUT | X | O | X | 以請求的 酬載 (payload)，替換 **目標資源** 所有目前的 表示 (representations)。 |
| DELETE | X | O | X | 移除 **目標資源** 所有目前的 表示 (representations)。 |
| CONNECT | X | X | X | 建立 「藉由 **目標資源** 辨識的 Server」的 隧道 (tunnel)。 |
| OPTIONS | O | O | X | 描述 **目標資源** 的 通訊選項。 |
| TRACE | O | O | X | 沿著 **目標資源** 的 路徑 執行 訊息 loop-back 測試。 |
(轉載自 https://notfalse.net/43/http-request-method)

### 常見STATUS: 
* 200 代表OK 
* 400 代表Bad Request，code錯誤
* 401 代表Unauthorized，沒有認證
* 403 代表Forbidden ，禁止request
* 404 代表Not Found ，找不到路徑
* 500 代表Internal Server Error ，伺服器內部錯誤
* 501 代表Not Implemented ，無法執行
* 503 代表Service Unavailable，伺服器無法回應，可能過載或維修



## 參考資料
1. https://xenby.com/b/151-%E6%8E%A8%E8%96%A6-%E4%BD%BF%E9%96%8B%E7%99%BCapi%E6%9B%B4%E6%96%B9%E4%BE%BF%E7%9A%84%E5%B7%A5%E5%85%B7-postman
2. https://progressbar.tw/posts/53
