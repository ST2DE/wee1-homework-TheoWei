# GIt 操作
版本控制/GUI/GIT HUB PAGE

## Git 介紹
Git 是一套分散式版本控制系統，比起中心化控制，Git讓軟體工程師更容易同步及維護管理版本系統，本地控制、備份容易、彈性分支和合併，這樣就不會有更新過後產生重複檔案的問題，可以加快版本更新流程效率。
1. 不需要server端支援，即可以運作版本控制
2. 每個人都有一份repostiory 副本，提交版本變更到本地儲存庫，而且不需要網路
3. git在弄版本控制時，權限唯一差別在於可以存取 upstream repository (上層) or remote repository(遠端)
4. 合併多人版本，只要有共用儲存庫(shared repository)的權限或管道即可 ex:同server透過資料夾權限即可共用、SSH遠端另一台server的Git repository、web server共用git repository
---
## 實際操作

### 1. 建立repository
```
mkdir <資料夾名稱> 
cd <資料夾名稱>
git init 
```
### 2. Clone repository(clone別人的repository)
如果對某些開發者的專案感興趣，可以透過clone將他們的repository 下載到我們的資料夾內
```
git clone <http://...address.git>
```

### 功能指令
```
git status 查看目前Git狀態 
(如果出現Untracked file 代表檔案在過去的git repository 沒有這支檔案，所以未被追蹤)

git add <filename> 【追蹤檔案】
git add . 【追蹤全部檔案】
git add -i
(已追蹤的檔案會出現change to be commit，此時狀態為stage，代表修改過，未修改是unstage)

git commit -m "輸入這次紀錄內容"  【提交節點】
(一個commit在Git為一個節點，做為未來追蹤或回溯的參考，類似存檔概念)
git commit -am "輸入紀錄內容" 【將曾修改過但未被add的檔案列入追蹤】
git commit -v 【列出更動紀錄】
(+代表新增部分 -代表刪除部分)

git log 【查看過去commit紀錄】
git log --stat 【查看更詳細內容】
(順序為: commit版號 > commmit訊息 > 時間)
```
---
## Git branch 介紹
當專案開發的時候，會遇到bug修正或是新功能測試的時候，這時就會從主branch分出一條新的branch，也因為這條新的branch會包含主branch所有最新的狀態，所以等問題解決之後，merge合併回主branch，便可以將新增的功能或是已經解決的bug，一併加入到主branch內
```
git branch 【查詢目前所有的branch】
git branch <branch name> 【新增branch】
(前面有*代表為目前所在的branch)
git checkout <branch name> 【切換到指定的branch】
```


### 常用指令
```
git add . 
git status  查詢當前Git狀態 (預設branch為master)
git commit  建立版本
git log  查詢版本紀錄
git rm <filename>  刪除檔案(包括實體及快取)
git mv <file1> <file2>  把file1更名為file2
```
### 參考資料
https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md
https://gogojimmy.net/2012/01/17/how-to-use-git-1-git-basic/

