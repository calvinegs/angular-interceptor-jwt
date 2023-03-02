# 對第一版的 "一個簡易的 Admin Template" 加入額外的功能

在本篇筆記中將繼續使用 Angular Material 中的其他 components 來加強 Admin Template。在此文中除了會使用 SnackBar component 來實做一個 Notifier ，同時也把之前介紹過的 Loading Spnner 功能也一併加入。

除此之外也會建置一個 Login Page，身份驗證是一個應用程式中不可缺少的功能，有了這個登入畫面，將會被應用到另一篇 angular Interceptor - JWT 的應用中（待續）。

有關 Admin Template 第一個版本的介紹請見 *[Loding Spinner](https://calvinegs.github.io/posts/angular-intercoptor-loadingspinner)*

# 加強 Admin Template 功能

實現的功能：

![2023-02-24 18-27-45 的螢幕擷圖](https://user-images.githubusercontent.com/21993717/221155878-aab52fc2-df85-4c72-affe-7a9354531fb1.png)

![image](https://user-images.githubusercontent.com/21993717/221156012-14e07a08-0c83-470b-ba25-b553660968b1.png)

![image](https://user-images.githubusercontent.com/21993717/221141232-318e21f5-0c3f-4484-ba6c-654d373c23fa.png)

![2023-02-24 18-23-28 的螢幕擷圖](https://user-images.githubusercontent.com/21993717/221154856-54df2839-ff07-4ea1-b2b6-f6db2f61af11.png)


![2023-02-24 18-25-08 的螢幕擷圖](https://user-images.githubusercontent.com/21993717/221155236-52735b52-9b9b-4407-ba99-3e7ddb530108.png)

# Angular Intercoptor 使用案例二：搭配 Jason Web Token + Session Storage 來實現使用者身份驗證功能

使用者驗證在所有的應用程式中都是很重要的一個環節。本篇筆記中將使用 Angular Interceptor + Jason Web Token 以及 Session Storage 來實現這個重點功能。

本篇筆記執行步驟：

- 建立 appSettings 來存放程式參數值
- 建立 auth.service.ts
- 建立 token-storage.service.ts
- 完成 login page component 中的程式碼
- 執行測試
- 建立 interceptor 程式
- 建立 Guard 程式
- 微調所有相關功能
