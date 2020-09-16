const epress = require("express");
const app = epress()
const host = 'localhost';
const port = 2345;




//Configuration des parametres de connexion du serveur


app.get("/", function(req, res) {
    res.send(`<html class="js flexbox cssmask objectfit object-fit pc fonts-loaded" prefix="og: https://ogp.me/ns#" lang="fr"><!--<![endif]--><head><meta charset="utf-8"><link rel="shortcut icon" type="image/png" sizes="32x32" href="https://skybot.fr/uploads/1599999433.png"><link rel="apple-touch-icon" sizes="180x180" href="https://skybot.fr/uploads/1599999267.png"><link rel="icon"type="image/png" sizes="16x16" href"https://skybot.fr/uploads/1599999189.png"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Kirito</title><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="msapplication-tap-highlight" content="no"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/4d/4dd/4dd8tz.css?ph=3f711ab880" rel="stylesheet"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/2r/2rf/2rf8hy.css?ph=3f711ab880" rel="stylesheet"><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/0e/0e1/0e1be2.css?ph=3f711ab880" data-wnd_color_scheme_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/42/42e/42e5o5.css?ph=3f711ab880" data-wnd_additive_color_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/1x/1xk/1xkzbf.css?ph=3f711ab880" data-wnd_typography_file=""><meta name="description" content="pour invité Kirito"><meta name="keywords" content=""><meta name="generator" content="Webnode 2"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">

    <meta property="og:url" content="https://kirito67.webnode.fr/"><meta property="og:title" content="Kirito"><meta property="og:type" content="article"><meta property="og:description" content="pour invité Kirito"><meta property="og:site_name" content="Kirito"><meta property="og:image" content="https://kirito67.webnode.fr/_files/200000000-20a8e20a90/700/IMG_20200912_182715.jpg"><meta property="og:article:published_time" content="2020-09-12T00:00:00+0200"><meta name="robots" content="index,follow"><link rel="canonical" href="https://kirito67.webnode.fr/"><script async="" src="//www.google-analytics.com/analytics.js"></script><script>window.checkAndChangeSvgColor=function(c){try{var a=document.getElementById(c);if(a){c=[["border","borderColor"],["outline","outlineColor"],["color","color"]];for(var h,b,d,f=[],e=0,m=c.length;e<m;e++)if(h=window.getComputedStyle(a)[c[e][1]].replace(/\s/g,"").match(/^rgb[a]?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i)){b="";for(var g=1;3>=g;g++)b+=("0"+parseInt(h[g],10).toString(16)).slice(-2);"0"===b.charAt(0)&&(d=parseInt(b.substr(0,2),16),d=Math.max(16,d),b=d.toString(16)+b.slice(-4));f.push(c[e][0]+"="+b)}if(f.length){var k=a.getAttribute("data-src"),l=k+(0>k.indexOf("?")?"?":"&")+f.join("&");a.src!=l&&(a.src=l,a.outerHTML=a.outerHTML)}}}catch(n){}};</script><link rel="stylesheet" href="https://use.typekit.net/lab8xti.css"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-797705-6', 'auto',{"name":"wnd_header"});ga('wnd_header.set', 'dimension1', 'W2');ga('wnd_header.set', 'anonymizeIp', true);ga('wnd_header.send', 'pageview');</script></head><body class="l l-02 layout-02 c-s-n wt-home ac-h ac-i b-btn-sq b-btn-s-l b-btn-dn b-btn-bw-1 img-d-n img-t-o img-h-z line-solid b-e-sbs lbox-d c-s-n wnd-fe desktop safari">
      <div class="wnd-page cs-gray ac-none">
    
        <div id="wrapper" class="l-w cf t-33">
    
          <header id="header" class="l-h cf"><div id="layout-section" class="s section header header-01 claim-section cf design-03 sc-w">
              <div class="section-fixed wnd-fixed">
                <div class="section-inner">
                  <div class="nav-line cf">
    
                    <div class="logo logo-default brandon-grotesque wnd-logo-with-text wnd-image-vector">
        <div class="logo-content">
            
                
                <div class="embed-content">
                  <div class="embed-content-cell">
                        <embed id="wnd_LogoBlock_663084_img" type="image/svg+xml" data-src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880" src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880&amp;border=100000&amp;outline=100000&amp;color=100000"><script>checkAndChangeSvgColor('wnd_LogoBlock_663084_img');</script></div>
                </div>
              <div class="text-content-outer">
                    <span class="text-content">𝕿𝕳𝕰</span>
              </div>
            
        </div>
    </div>
    
                    
    
                    <nav id="menu" role="navigation" style=""><div class="menu-font">
      <a href="#" class="close-menu" rel="nofollow">
        <span>Close Menu</span>
      </a>
      <ul class="level-1"><li class="wnd-active wnd-homepage">
          <a class="menu-item" href="/home/"><span class="menu-item-text">Accueil</span></a>
          
        </li><li>
          <a class="menu-item" href="/notre-serveur-suport/"><span class="menu-item-text">Notre serveur suport</span></a>
          
        </li><li>
          <a class="menu-item" href="/a-propos/"><span class="menu-item-text">À propos de Kirito</span></a>
          
        </li><li class="wnd-with-submenu">
          <a class="menu-item" href="/notre-equipe/"><span class="menu-item-text">Notre équipe</span></a>
          <ul class="level-2"><li>
          <a class="menu-item" href="/createur/"><span class="menu-item-text">Créateur</span></a>
          
        </li><li>
          <a class="menu-item" href="/equipe-staff/"><span class="menu-item-text">Équipe staff</span></a>
          
        </li>
      </ul>
        <a class="mm-arrow mm-down" href="#"></a></li>
      </ul><span class="more-text">Plus</span>
    </div></nav><script type="application/javascript">var el=document.getElementById("menu");"undefined"!=typeof el&&(el.style.display="none")</script><div id="menu-mobile" class="">
                      <a href="#" id="menu-submit"><span></span>Menu</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </header><main id="main" class="l-m cf" role="main">
    
            <div class="section-wrapper cf">
      <div class="section-wrapper-content cf"><div class="s section header header-01 claim-section cf design-03 sc-w">
      <div class="section-bg">
        <div class="section-bg-layer">
          
        </div>
        <div class="section-bg-layer section-bg-overlay"></div>
      </div>
      <div class="section-inner section-claim header-height-hp-01">
        <div class="claim-content cf">
          <div class="header-claim cf">
            <h1>
              <div class="big-claim auto-font-size cf"><span class="styled-inline-text claim-bg-inv abril-fatface">
      <span><span>&nbsp; &nbsp; &nbsp; &nbsp; Kirito&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></span>
    </span></div>
              <div class="small-claim cf"><span class="styled-inline-text claim-default wnd-font-size-20 proxima-nova">
      <span><span></span></span>
    </span></div>
            </h1>
          </div>
        </div>
      </div>
    </div><section class="s section default-01 design-01 sc-w"><div class="section-bg s-bg">
        <div class="section-bg-layer">
          
        </div>
        <div class="section-bg-layer section-bg-overlay"></div>
      </div>
      <div class="section-inner">
        <div class="content ez cf wnd-no-cols">
      <div class="ez-c">
        <div class="b-img b-img-default b b-s cf wnd-orientation-square wnd-type-image img-s-n" style="margin-left:12.22%;margin-right:12.22%;" id="wnd_ImageBlock_21582">
        <div class="b-img-w">
            <div class="b-img-c cf" style="padding-bottom:100%;text-align:center;">
                <img src="https://kirito67.webnode.fr/_files/200000000-20a8e20a90/700/IMG_20200912_182715.jpg" alt="" style="top:0%;left:0%;width:100%;height:100%;position:absolute;"><div class="b-img-embed">
                    </div>
            </div>
    
            <div class="b-img-t"></div>
        </div>
    </div><div class="b b-text cf">
      <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;pour invité Kirito&nbsp;</h2></div>
    </div><div class="b b-s b-s-t150 b-s-b150 b-btn b-btn-1 wnd-align-center">
      <div class="b-btn-c">
        <a class="b-btn-l" href="https://discord.com/oauth2/authorize?client_id=707916735612846152&amp;scope=bot&amp;permissions=2146958847" rel="nofollow" target="_blank">
          <span class="b-btn-t">cliquer ici</span>
        </a>
      </div>
    </div>
      </div>
      
    </div>
      </div>
    </section></div>
    </div>
    
          </main><footer id="footer" class="l-f cf">
    
            <div class="section-wrapper cf">
      <div class="section-wrapper-content cf"><div wn-border="top" wn-border-element="footer-line" class="s section footer-01 footer-font design-01 sc-b">
      <div class="section-bg s-bg">
        <div class="section-bg-layer">
          
        </div>
        <div class="section-bg-layer section-bg-overlay"></div>
      </div>
      <div class="section-inner">
        
      </div>
    </div></div>
    </div>
    
          </footer></div>
    
      </div>
    
      
    <script type="text/javascript" src="https://d1di2lzuh97fh2.cloudfront.net/files/3f/3f4/3f40k1.js?ph=3f711ab880"></script><script type="application/javascript">!function(){if(0==document.getElementsByClassName("wnd-cms").length)for(var e=document.getElementsByClassName("column-content"),s=0;s<e.length;s++){var t=e[s].querySelector("div"),l=t.getElementsByClassName("b-text-c");void 0!=l[0]&&t.firstChild==t.lastChild&&""===l[0].innerText&&(e[s].classList?e[s].classList.add("column-empty"):(e[s].classList?e[s].classList.contains("column-empty"):new RegExp("\\bcolumn-empty\\b").test(e[s].className))&&(e[s].className+=" column-empty"))}}()</script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/lang.fr.230.js?ph=3f711ab880" crossorigin="anonymous"></script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/compiled.multi.2-766.js?ph=3f711ab880" crossorigin="anonymous"></script><script>var wnd = wnd || {};wnd.$data = {"image_content_items":{"wnd_ThumbnailBlock_334498":{"id":"wnd_ThumbnailBlock_334498","type":"wnd.pc.ThumbnailBlock"},"wnd_HeaderSection_header_1_468215":{"id":"wnd_HeaderSection_header_1_468215","type":"wnd.pc.HeaderSection"},"wnd_Section_text_image_622377":{"id":"wnd_Section_text_image_622377","type":"wnd.pc.Section"},"wnd_ImageBlock_21582":{"id":"wnd_ImageBlock_21582","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"},"wnd_FooterSection_footer_497077":{"id":"wnd_FooterSection_footer_497077","type":"wnd.pc.FooterSection"}},"svg_content_items":{"wnd_ImageBlock_21582":{"id":"wnd_ImageBlock_21582","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"}},"content_items":[],"project_info":{"isMultilanguage":false,"eshop_tax_enabled":"1","country_code":"","contact_state":"","eshop_tax_type":"VAT","eshop_discounts":false}};</script><script>wnd.$system = {"filesPath":"https:\/\/kirito67.webnode.fr\/_files\/","staticFiles":"https:\/\/d1di2lzuh97fh2.cloudfront.net\/files","isCms":false,"staticCDNServers":["https:\/\/d1di2lzuh97fh2.cloudfront.net\/"],"fileUploadAllowExtension":["jpg","jpeg","png","gif","bmp","ico","svg","webp","tiff","pdf","doc","docx","ppt","pptx","pps","ppsx","odt","xls","xlsx","txt","rtf","mp3","wma","wav","ogg","amr","flac","m4a","3gp","avi","wmv","mov","mpg","mkv","mp4","mpeg","m4v","swf","gpx","stl","csv","xml","txt","dxf","dwg","iges","igs","step","stp"],"maxUserFormFileLimit":4194304,"frontendLanguage":"fr","backendLanguage":"fr","page":{"id":200000025,"identifier":"home","template":{"id":200000005,"styles":{"typography":"t-33","scheme":"cs-gray","additiveColor":"ac-none","acHeadings":true,"acSubheadings":false,"acIcons":true,"acOthers":false,"imageStyle":"img-d-n","imageHover":"img-h-z","imageTitle":"img-t-o","buttonStyle":"b-btn-sq","buttonSize":"b-btn-s-l","buttonDecoration":"b-btn-dn","buttonBorders":"b-btn-bw-1","lineStyle":"line-solid","eshopGridItemStyle":"b-e-sbs","lightboxStyle":"lbox-d","columnSpaces":"c-s-n","background":{"default":null},"backgroundSettings":{"default":""}}},"layout":"homepage","name":"Accueil","html_title":"","language":"fr","langId":1,"isHomepage":true,"meta_description":"","meta_keywords":"","header_code":"","footer_code":"","styles":[],"countFormsEntries":[]},"listingsPrefix":"\/l\/","productPrefix":"\/p\/","cartPrefix":"\/cart\/","checkoutPrefix":"\/checkout\/","isCheckout":false,"isEshop":false,"isProductDetail":false,"isListingDetail":false,"hasEshopAnalytics":false,"gTagId":null,"currency":"USD","format":{"be":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}},"fe":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}}},"e_product":null,"listing_item":null,"labels":{"wnd.fe.CheckoutZipField.brInvalid":"Please enter valid ZIP code in format XXXXX-XXX","wnd.fe.CookieBar.message":"Ce site web utilise des \u00ab cookies \u00bb afin d'optimiser l'acc\u00e8s et am\u00e9liorer votre exp\u00e9rience sur notre site. En utilisant votre navigation sur ce site, vous acceptez des cookies.","wnd.fe.FeFooter.createWebsite":"Cr\u00e9ez votre site web gratuitement !","wnd.fe.FormManager.error.file.notAllowedExtension":"Le type de fichier \u0022{EXTENSION}\u0022 n'est pas autoris\u00e9.","wnd.fe.FormManager.error.file.required":"S\u00e9lectionnez un fichier.","wnd.fe.FormManager.error.file.sizeExceeded":"La taille limite des fichiers \u00e0 envoyer est de {SIZE} Mo.","wnd.fe.FormManager.error.userChangePassword":"Les mots de passe ne correspondent pas","wnd.fe.FormManager.error.userLogin.inactiveAccount":"Votre inscription n'est pas encore confirm\u00e9e, vous ne pouvez pas vous connecter.","wnd.fe.FormManager.error.userLogin.invalidLogin":"Le nom d'utilisateur ou le mot de passe est incorrect !","wnd.fe.ListingData.shortMonthName.Apr":"avr.","wnd.fe.ListingData.shortMonthName.Aug":"ao\u00fbt","wnd.fe.ListingData.shortMonthName.Dec":"d\u00e9c.","wnd.fe.ListingData.shortMonthName.Feb":"f\u00e9vr.","wnd.fe.ListingData.shortMonthName.Jan":"janv.","wnd.fe.ListingData.shortMonthName.Jul":"juill.","wnd.fe.ListingData.shortMonthName.Jun":"juin","wnd.fe.ListingData.shortMonthName.Mar":"mars","wnd.fe.ListingData.shortMonthName.May":"mai","wnd.fe.ListingData.shortMonthName.Nov":"nov.","wnd.fe.ListingData.shortMonthName.Oct":"oct.","wnd.fe.ListingData.shortMonthName.Sep":"sept.","wnd.fe.ShoppingCartManager.count.between2And4":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.moreThan5":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.one":"{COUNT} article","wnd.fe.ShoppingCartTable.label.itemsInStock":"Only {COUNT} pcs available in stock","wnd.fe.ShoppingCartTable.label.itemsInStock.between2And4":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.moreThan5":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.one":"Seulement {COUNT} pi\u00e8ce disponible en stock","wnd.fe.ShoppingCartTable.label.outOfStock":"\u00c9puis\u00e9","wnd.fe.UserBar.logOut":"Se d\u00e9connecter","wnd.pc.BlogDetailPageZone.next":"Articles r\u00e9cents","wnd.pc.BlogDetailPageZone.previous":"Anciens articles","wnd.pc.FileBlock.download":"T\u00c9L\u00c9CHARGER","wnd.pc.FormBlock.action.defaultMessage.text":"Le formulaire a \u00e9t\u00e9 correctement envoy\u00e9.","wnd.pc.FormBlock.action.defaultMessage.title":"Merci !","wnd.pc.ListingDetailPageZone.next":"Suivant","wnd.pc.ListingDetailPageZone.previous":"Pr\u00e9c\u00e9dent","wnd.pc.ListingItemCopy.namePrefix":"Copie de","wnd.pc.Option.defaultText":"Nouvelle option","wnd.pc.PageCopy.namePrefix":"Copie de","wnd.pc.ProductAddToCartBlock.addToCart":"Ajouter au panier","wnd.pc.ProductItem.button.viewDetail":"Page produit","wnd.pc.ProductOptionGroupBlock.notSelected":"Aucune variante n'a \u00e9t\u00e9 s\u00e9lectionn\u00e9e","wnd.pc.ProductOutOfStockBlock.label":"\u00c9puis\u00e9","wnd.pc.ProductPriceBlock.prefixText":"\u00c0 partir de ","wnd.pc.ProductPriceBlock.suffixText":"","wnd.pc.ProductsZone.label.collections":"Cat\u00e9gories","wnd.pc.ProductsZoneModel.label.allCollections":"Tous les produits","wnd.pc.ShoppingCartTable.label.checkout":"Passer commande","wnd.pc.ShoppingCartTable.label.checkoutDisabled":"La page de paiement n'est actuellement pas disponible (pas de moyen de paiement et de livraison)","wnd.pc.ShoppingCartTable.label.continue":"Continuer mes achats","wnd.pc.ShoppingCartTable.label.delete":"Supprimer","wnd.pc.ShoppingCartTable.label.item":"Produit","wnd.pc.ShoppingCartTable.label.price":"Prix","wnd.pc.ShoppingCartTable.label.quantity":"Quantit\u00e9","wnd.pc.ShoppingCartTable.label.sum":"Total","wnd.pc.ShoppingCartTable.label.totalPrice":"Total","wnd.pc.ShoppingCartTable.placeholder.text":"Vous pouvez le changer. Choisissez dans notre vaste offre de produits !","wnd.pc.ShoppingCartTable.placeholder.title":"Votre panier est vide.","wnd.pc.SystemFooterBlock.poweredByWebnode":"Optimis\u00e9 par {START_LINK}Webnode{END_LINK}","wnd.pc.UserChangePasswordFormBlock.invalidRecoveryUrl":"Le lien pour r\u00e9initialiser votre mot de passe a expir\u00e9. Pour recevoir un nouveau lien, ouvrez la page{START_LINK}Mot de passe oubli\u00e9{END_LINK}","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.text":"Le lien de r\u00e9initialisation de votre mot de passe vient de vous \u00eatre envoy\u00e9 par email. Si vous ne l'avez pas re\u00e7u, consultez votre dossier courrier ind\u00e9sirable.","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.title":"Un e-mail vient de vous \u00eatre envoy\u00e9 avec des instructions","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.text":"Votre inscription est en attente d'approbation. Une fois l'inscription approuv\u00e9e, vous recevrez un e-mail de confirmation.","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.title":"Merci pour votre inscription sur notre site.","wnd.pm.AddNewPagePattern.onlineStore":"Boutique en ligne"},"kbLinks":{"faq":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/371\/","domainRegistration":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3369\/","domainTransfer":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/340\/","webmailLogin":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/828\/","webmail":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/437\/","introduction":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/783\/","orderTracking":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5247\/","storageBandwidth":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/811\/","subPage":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3171\/","eshopPromo":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/440\/","eshopDiscounts":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5489\/","domainBirthdateInfo":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/150\/","skRegistration":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/228\/","euTransfer":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/230\/","import":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5157\/","eshopPromoVariants":"https:\/\/www.webnode.com\/blog\/2018\/09\/variants-are-here-sell-your-products-in-all-sizes-colors-or-flavors\/","checkoutFi":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5392\/","emailAccounts":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/3211\/","freightPriceSettings":"https:\/\/www.webnode.co.uk\/support\/index.php?\/Knowledgebase\/Article\/View\/5659\/"},"aviary":[]};</script>
    <!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!--Start of Tawk.to Script--> <script type="text/javascript"> var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/5f5d0397f0e7167d000fc5a0/default'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0); })(); </script> <!--End of Tawk.to Script--></body></html>`)
});

app.get('/home', function(req, res) {
res.send(`<html class="js flexbox cssmask objectfit object-fit pc fonts-loaded" prefix="og: https://ogp.me/ns#" lang="fr"><!--<![endif]--><head><meta charset="utf-8"><link rel="shortcut icon" type="image/png" sizes="32x32" href="https://skybot.fr/uploads/1599999433.png"><link rel="apple-touch-icon" sizes="180x180" href="https://skybot.fr/uploads/1599999267.png"><link rel="icon"type="image/png" sizes="16x16" href"https://skybot.fr/uploads/1599999189.png"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Kirito</title><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="msapplication-tap-highlight" content="no"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/4d/4dd/4dd8tz.css?ph=3f711ab880" rel="stylesheet"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/2r/2rf/2rf8hy.css?ph=3f711ab880" rel="stylesheet"><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/0e/0e1/0e1be2.css?ph=3f711ab880" data-wnd_color_scheme_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/42/42e/42e5o5.css?ph=3f711ab880" data-wnd_additive_color_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/1x/1xk/1xkzbf.css?ph=3f711ab880" data-wnd_typography_file=""><meta name="description" content="pour invité Kirito"><meta name="keywords" content=""><meta name="generator" content="Webnode 2"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">

<meta property="og:url" content="https://kirito67.webnode.fr/"><meta property="og:title" content="Kirito"><meta property="og:type" content="article"><meta property="og:description" content="pour invité Kirito"><meta property="og:site_name" content="Kirito"><meta property="og:image" content="https://kirito67.webnode.fr/_files/200000000-20a8e20a90/700/IMG_20200912_182715.jpg"><meta property="og:article:published_time" content="2020-09-12T00:00:00+0200"><meta name="robots" content="index,follow"><link rel="canonical" href="https://kirito67.webnode.fr/"><script async="" src="//www.google-analytics.com/analytics.js"></script><script>window.checkAndChangeSvgColor=function(c){try{var a=document.getElementById(c);if(a){c=[["border","borderColor"],["outline","outlineColor"],["color","color"]];for(var h,b,d,f=[],e=0,m=c.length;e<m;e++)if(h=window.getComputedStyle(a)[c[e][1]].replace(/\s/g,"").match(/^rgb[a]?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i)){b="";for(var g=1;3>=g;g++)b+=("0"+parseInt(h[g],10).toString(16)).slice(-2);"0"===b.charAt(0)&&(d=parseInt(b.substr(0,2),16),d=Math.max(16,d),b=d.toString(16)+b.slice(-4));f.push(c[e][0]+"="+b)}if(f.length){var k=a.getAttribute("data-src"),l=k+(0>k.indexOf("?")?"?":"&")+f.join("&");a.src!=l&&(a.src=l,a.outerHTML=a.outerHTML)}}}catch(n){}};</script><link rel="stylesheet" href="https://use.typekit.net/lab8xti.css"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-797705-6', 'auto',{"name":"wnd_header"});ga('wnd_header.set', 'dimension1', 'W2');ga('wnd_header.set', 'anonymizeIp', true);ga('wnd_header.send', 'pageview');</script></head><body class="l l-02 layout-02 c-s-n wt-home ac-h ac-i b-btn-sq b-btn-s-l b-btn-dn b-btn-bw-1 img-d-n img-t-o img-h-z line-solid b-e-sbs lbox-d c-s-n wnd-fe desktop safari">
  <div class="wnd-page cs-gray ac-none">

    <div id="wrapper" class="l-w cf t-33">

      <header id="header" class="l-h cf"><div id="layout-section" class="s section header header-01 claim-section cf design-03 sc-w">
          <div class="section-fixed wnd-fixed">
            <div class="section-inner">
              <div class="nav-line cf">

                <div class="logo logo-default brandon-grotesque wnd-logo-with-text wnd-image-vector">
    <div class="logo-content">
        
            
            <div class="embed-content">
              <div class="embed-content-cell">
                    <embed id="wnd_LogoBlock_663084_img" type="image/svg+xml" data-src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880" src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880&amp;border=100000&amp;outline=100000&amp;color=100000"><script>checkAndChangeSvgColor('wnd_LogoBlock_663084_img');</script></div>
            </div>
          <div class="text-content-outer">
                <span class="text-content">𝕿𝕳𝕰</span>
          </div>
        
    </div>
</div>

                

                <nav id="menu" role="navigation" style=""><div class="menu-font">
  <a href="#" class="close-menu" rel="nofollow">
    <span>Close Menu</span>
  </a>
  <ul class="level-1"><li class="wnd-active wnd-homepage">
      <a class="menu-item" href="/home/"><span class="menu-item-text">Accueil</span></a>
      
    </li><li>
      <a class="menu-item" href="/notre-serveur-suport/"><span class="menu-item-text">Notre serveur suport</span></a>
      
    </li><li>
      <a class="menu-item" href="/a-propos/"><span class="menu-item-text">À propos de Kirito</span></a>
      
    </li><li class="wnd-with-submenu">
      <a class="menu-item" href="/notre-equipe/"><span class="menu-item-text">Notre équipe</span></a>
      <ul class="level-2"><li>
      <a class="menu-item" href="/createur/"><span class="menu-item-text">Créateur</span></a>
      
    </li><li>
      <a class="menu-item" href="/equipe-staff/"><span class="menu-item-text">Équipe staff</span></a>
      
    </li>
  </ul>
    <a class="mm-arrow mm-down" href="#"></a></li>
  </ul><span class="more-text">Plus</span>
</div></nav><script type="application/javascript">var el=document.getElementById("menu");"undefined"!=typeof el&&(el.style.display="none")</script><div id="menu-mobile" class="">
                  <a href="#" id="menu-submit"><span></span>Menu</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header><main id="main" class="l-m cf" role="main">

        <div class="section-wrapper cf">
  <div class="section-wrapper-content cf"><div class="s section header header-01 claim-section cf design-03 sc-w">
  <div class="section-bg">
    <div class="section-bg-layer">
      
    </div>
    <div class="section-bg-layer section-bg-overlay"></div>
  </div>
  <div class="section-inner section-claim header-height-hp-01">
    <div class="claim-content cf">
      <div class="header-claim cf">
        <h1>
          <div class="big-claim auto-font-size cf"><span class="styled-inline-text claim-bg-inv abril-fatface">
  <span><span>&nbsp; &nbsp; &nbsp; &nbsp; Kirito&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></span>
</span></div>
          <div class="small-claim cf"><span class="styled-inline-text claim-default wnd-font-size-20 proxima-nova">
  <span><span></span></span>
</span></div>
        </h1>
      </div>
    </div>
  </div>
</div><section class="s section default-01 design-01 sc-w"><div class="section-bg s-bg">
    <div class="section-bg-layer">
      
    </div>
    <div class="section-bg-layer section-bg-overlay"></div>
  </div>
  <div class="section-inner">
    <div class="content ez cf wnd-no-cols">
  <div class="ez-c">
    <div class="b-img b-img-default b b-s cf wnd-orientation-square wnd-type-image img-s-n" style="margin-left:12.22%;margin-right:12.22%;" id="wnd_ImageBlock_21582">
    <div class="b-img-w">
        <div class="b-img-c cf" style="padding-bottom:100%;text-align:center;">
            <img src="https://kirito67.webnode.fr/_files/200000000-20a8e20a90/700/IMG_20200912_182715.jpg" alt="" style="top:0%;left:0%;width:100%;height:100%;position:absolute;"><div class="b-img-embed">
                </div>
        </div>

        <div class="b-img-t"></div>
    </div>
</div><div class="b b-text cf">
  <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;pour invité Kirito&nbsp;</h2></div>
</div><div class="b b-s b-s-t150 b-s-b150 b-btn b-btn-1 wnd-align-center">
  <div class="b-btn-c">
    <a class="b-btn-l" href="https://discord.com/oauth2/authorize?client_id=707916735612846152&amp;scope=bot&amp;permissions=2146958847" rel="nofollow" target="_blank">
      <span class="b-btn-t">cliquer ici</span>
    </a>
  </div>
</div>
  </div>
  
</div>
  </div>
</section></div>
</div>

      </main><footer id="footer" class="l-f cf">

        <div class="section-wrapper cf">
  <div class="section-wrapper-content cf"><div wn-border="top" wn-border-element="footer-line" class="s section footer-01 footer-font design-01 sc-b">
  <div class="section-bg s-bg">
    <div class="section-bg-layer">
      
    </div>
    <div class="section-bg-layer section-bg-overlay"></div>
  </div>
  <div class="section-inner">
    
  </div>
</div></div>
</div>

      </footer></div>

  </div>

  
<script type="text/javascript" src="https://d1di2lzuh97fh2.cloudfront.net/files/3f/3f4/3f40k1.js?ph=3f711ab880"></script><script type="application/javascript">!function(){if(0==document.getElementsByClassName("wnd-cms").length)for(var e=document.getElementsByClassName("column-content"),s=0;s<e.length;s++){var t=e[s].querySelector("div"),l=t.getElementsByClassName("b-text-c");void 0!=l[0]&&t.firstChild==t.lastChild&&""===l[0].innerText&&(e[s].classList?e[s].classList.add("column-empty"):(e[s].classList?e[s].classList.contains("column-empty"):new RegExp("\\bcolumn-empty\\b").test(e[s].className))&&(e[s].className+=" column-empty"))}}()</script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/lang.fr.230.js?ph=3f711ab880" crossorigin="anonymous"></script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/compiled.multi.2-766.js?ph=3f711ab880" crossorigin="anonymous"></script><script>var wnd = wnd || {};wnd.$data = {"image_content_items":{"wnd_ThumbnailBlock_334498":{"id":"wnd_ThumbnailBlock_334498","type":"wnd.pc.ThumbnailBlock"},"wnd_HeaderSection_header_1_468215":{"id":"wnd_HeaderSection_header_1_468215","type":"wnd.pc.HeaderSection"},"wnd_Section_text_image_622377":{"id":"wnd_Section_text_image_622377","type":"wnd.pc.Section"},"wnd_ImageBlock_21582":{"id":"wnd_ImageBlock_21582","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"},"wnd_FooterSection_footer_497077":{"id":"wnd_FooterSection_footer_497077","type":"wnd.pc.FooterSection"}},"svg_content_items":{"wnd_ImageBlock_21582":{"id":"wnd_ImageBlock_21582","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"}},"content_items":[],"project_info":{"isMultilanguage":false,"eshop_tax_enabled":"1","country_code":"","contact_state":"","eshop_tax_type":"VAT","eshop_discounts":false}};</script><script>wnd.$system = {"filesPath":"https:\/\/kirito67.webnode.fr\/_files\/","staticFiles":"https:\/\/d1di2lzuh97fh2.cloudfront.net\/files","isCms":false,"staticCDNServers":["https:\/\/d1di2lzuh97fh2.cloudfront.net\/"],"fileUploadAllowExtension":["jpg","jpeg","png","gif","bmp","ico","svg","webp","tiff","pdf","doc","docx","ppt","pptx","pps","ppsx","odt","xls","xlsx","txt","rtf","mp3","wma","wav","ogg","amr","flac","m4a","3gp","avi","wmv","mov","mpg","mkv","mp4","mpeg","m4v","swf","gpx","stl","csv","xml","txt","dxf","dwg","iges","igs","step","stp"],"maxUserFormFileLimit":4194304,"frontendLanguage":"fr","backendLanguage":"fr","page":{"id":200000025,"identifier":"home","template":{"id":200000005,"styles":{"typography":"t-33","scheme":"cs-gray","additiveColor":"ac-none","acHeadings":true,"acSubheadings":false,"acIcons":true,"acOthers":false,"imageStyle":"img-d-n","imageHover":"img-h-z","imageTitle":"img-t-o","buttonStyle":"b-btn-sq","buttonSize":"b-btn-s-l","buttonDecoration":"b-btn-dn","buttonBorders":"b-btn-bw-1","lineStyle":"line-solid","eshopGridItemStyle":"b-e-sbs","lightboxStyle":"lbox-d","columnSpaces":"c-s-n","background":{"default":null},"backgroundSettings":{"default":""}}},"layout":"homepage","name":"Accueil","html_title":"","language":"fr","langId":1,"isHomepage":true,"meta_description":"","meta_keywords":"","header_code":"","footer_code":"","styles":[],"countFormsEntries":[]},"listingsPrefix":"\/l\/","productPrefix":"\/p\/","cartPrefix":"\/cart\/","checkoutPrefix":"\/checkout\/","isCheckout":false,"isEshop":false,"isProductDetail":false,"isListingDetail":false,"hasEshopAnalytics":false,"gTagId":null,"currency":"USD","format":{"be":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}},"fe":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}}},"e_product":null,"listing_item":null,"labels":{"wnd.fe.CheckoutZipField.brInvalid":"Please enter valid ZIP code in format XXXXX-XXX","wnd.fe.CookieBar.message":"Ce site web utilise des \u00ab cookies \u00bb afin d'optimiser l'acc\u00e8s et am\u00e9liorer votre exp\u00e9rience sur notre site. En utilisant votre navigation sur ce site, vous acceptez des cookies.","wnd.fe.FeFooter.createWebsite":"Cr\u00e9ez votre site web gratuitement !","wnd.fe.FormManager.error.file.notAllowedExtension":"Le type de fichier \u0022{EXTENSION}\u0022 n'est pas autoris\u00e9.","wnd.fe.FormManager.error.file.required":"S\u00e9lectionnez un fichier.","wnd.fe.FormManager.error.file.sizeExceeded":"La taille limite des fichiers \u00e0 envoyer est de {SIZE} Mo.","wnd.fe.FormManager.error.userChangePassword":"Les mots de passe ne correspondent pas","wnd.fe.FormManager.error.userLogin.inactiveAccount":"Votre inscription n'est pas encore confirm\u00e9e, vous ne pouvez pas vous connecter.","wnd.fe.FormManager.error.userLogin.invalidLogin":"Le nom d'utilisateur ou le mot de passe est incorrect !","wnd.fe.ListingData.shortMonthName.Apr":"avr.","wnd.fe.ListingData.shortMonthName.Aug":"ao\u00fbt","wnd.fe.ListingData.shortMonthName.Dec":"d\u00e9c.","wnd.fe.ListingData.shortMonthName.Feb":"f\u00e9vr.","wnd.fe.ListingData.shortMonthName.Jan":"janv.","wnd.fe.ListingData.shortMonthName.Jul":"juill.","wnd.fe.ListingData.shortMonthName.Jun":"juin","wnd.fe.ListingData.shortMonthName.Mar":"mars","wnd.fe.ListingData.shortMonthName.May":"mai","wnd.fe.ListingData.shortMonthName.Nov":"nov.","wnd.fe.ListingData.shortMonthName.Oct":"oct.","wnd.fe.ListingData.shortMonthName.Sep":"sept.","wnd.fe.ShoppingCartManager.count.between2And4":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.moreThan5":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.one":"{COUNT} article","wnd.fe.ShoppingCartTable.label.itemsInStock":"Only {COUNT} pcs available in stock","wnd.fe.ShoppingCartTable.label.itemsInStock.between2And4":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.moreThan5":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.one":"Seulement {COUNT} pi\u00e8ce disponible en stock","wnd.fe.ShoppingCartTable.label.outOfStock":"\u00c9puis\u00e9","wnd.fe.UserBar.logOut":"Se d\u00e9connecter","wnd.pc.BlogDetailPageZone.next":"Articles r\u00e9cents","wnd.pc.BlogDetailPageZone.previous":"Anciens articles","wnd.pc.FileBlock.download":"T\u00c9L\u00c9CHARGER","wnd.pc.FormBlock.action.defaultMessage.text":"Le formulaire a \u00e9t\u00e9 correctement envoy\u00e9.","wnd.pc.FormBlock.action.defaultMessage.title":"Merci !","wnd.pc.ListingDetailPageZone.next":"Suivant","wnd.pc.ListingDetailPageZone.previous":"Pr\u00e9c\u00e9dent","wnd.pc.ListingItemCopy.namePrefix":"Copie de","wnd.pc.Option.defaultText":"Nouvelle option","wnd.pc.PageCopy.namePrefix":"Copie de","wnd.pc.ProductAddToCartBlock.addToCart":"Ajouter au panier","wnd.pc.ProductItem.button.viewDetail":"Page produit","wnd.pc.ProductOptionGroupBlock.notSelected":"Aucune variante n'a \u00e9t\u00e9 s\u00e9lectionn\u00e9e","wnd.pc.ProductOutOfStockBlock.label":"\u00c9puis\u00e9","wnd.pc.ProductPriceBlock.prefixText":"\u00c0 partir de ","wnd.pc.ProductPriceBlock.suffixText":"","wnd.pc.ProductsZone.label.collections":"Cat\u00e9gories","wnd.pc.ProductsZoneModel.label.allCollections":"Tous les produits","wnd.pc.ShoppingCartTable.label.checkout":"Passer commande","wnd.pc.ShoppingCartTable.label.checkoutDisabled":"La page de paiement n'est actuellement pas disponible (pas de moyen de paiement et de livraison)","wnd.pc.ShoppingCartTable.label.continue":"Continuer mes achats","wnd.pc.ShoppingCartTable.label.delete":"Supprimer","wnd.pc.ShoppingCartTable.label.item":"Produit","wnd.pc.ShoppingCartTable.label.price":"Prix","wnd.pc.ShoppingCartTable.label.quantity":"Quantit\u00e9","wnd.pc.ShoppingCartTable.label.sum":"Total","wnd.pc.ShoppingCartTable.label.totalPrice":"Total","wnd.pc.ShoppingCartTable.placeholder.text":"Vous pouvez le changer. Choisissez dans notre vaste offre de produits !","wnd.pc.ShoppingCartTable.placeholder.title":"Votre panier est vide.","wnd.pc.SystemFooterBlock.poweredByWebnode":"Optimis\u00e9 par {START_LINK}Webnode{END_LINK}","wnd.pc.UserChangePasswordFormBlock.invalidRecoveryUrl":"Le lien pour r\u00e9initialiser votre mot de passe a expir\u00e9. Pour recevoir un nouveau lien, ouvrez la page{START_LINK}Mot de passe oubli\u00e9{END_LINK}","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.text":"Le lien de r\u00e9initialisation de votre mot de passe vient de vous \u00eatre envoy\u00e9 par email. Si vous ne l'avez pas re\u00e7u, consultez votre dossier courrier ind\u00e9sirable.","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.title":"Un e-mail vient de vous \u00eatre envoy\u00e9 avec des instructions","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.text":"Votre inscription est en attente d'approbation. Une fois l'inscription approuv\u00e9e, vous recevrez un e-mail de confirmation.","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.title":"Merci pour votre inscription sur notre site.","wnd.pm.AddNewPagePattern.onlineStore":"Boutique en ligne"},"kbLinks":{"faq":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/371\/","domainRegistration":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3369\/","domainTransfer":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/340\/","webmailLogin":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/828\/","webmail":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/437\/","introduction":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/783\/","orderTracking":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5247\/","storageBandwidth":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/811\/","subPage":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3171\/","eshopPromo":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/440\/","eshopDiscounts":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5489\/","domainBirthdateInfo":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/150\/","skRegistration":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/228\/","euTransfer":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/230\/","import":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5157\/","eshopPromoVariants":"https:\/\/www.webnode.com\/blog\/2018\/09\/variants-are-here-sell-your-products-in-all-sizes-colors-or-flavors\/","checkoutFi":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5392\/","emailAccounts":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/3211\/","freightPriceSettings":"https:\/\/www.webnode.co.uk\/support\/index.php?\/Knowledgebase\/Article\/View\/5659\/"},"aviary":[]};</script>
<!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!--Start of Tawk.to Script--> <script type="text/javascript"> var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/5f5d0397f0e7167d000fc5a0/default'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0); })(); </script> <!--End of Tawk.to Script--></body></html>`)
});

app.get('/notre-serveur-suport', function(req, res) {
    res.send(`<html class="js flexbox cssmask objectfit object-fit pc fonts-loaded" prefix="og: https://ogp.me/ns#" lang="fr"><!--<![endif]--><head><meta charset="utf-8"><link rel="shortcut icon" href=""><link rel="apple-touch-icon" href=""><link rel="icon" href=""><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Kirito</title><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="msapplication-tap-highlight" content="no"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/4d/4dd/4dd8tz.css?ph=3f711ab880" rel="stylesheet"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/2r/2rf/2rf8hy.css?ph=3f711ab880" rel="stylesheet"><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/0e/0e1/0e1be2.css?ph=3f711ab880" data-wnd_color_scheme_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/42/42e/42e5o5.css?ph=3f711ab880" data-wnd_additive_color_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/1x/1xk/1xkzbf.css?ph=3f711ab880" data-wnd_typography_file=""><meta name="description" content=""><meta name="keywords" content=""><meta name="generator" content="Webnode 2"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">

    <meta property="og:url" content="https://kiritiiio.herokuapp.com/notre-serveur-suport/"><meta property="og:title" content="Notre serveur suport :: Kirito"><meta property="og:type" content="article"><meta property="og:site_name" content="Kirito"><meta property="og:article:published_time" content="2020-09-13T00:00:00+0200"><meta name="robots" content="index,follow"><link rel="canonical" href="https://kirito67.webnode.fr/notre-serveur-suport/"><script async="" src="//www.google-analytics.com/analytics.js"></script><script>window.checkAndChangeSvgColor=function(c){try{var a=document.getElementById(c);if(a){c=[["border","borderColor"],["outline","outlineColor"],["color","color"]];for(var h,b,d,f=[],e=0,m=c.length;e<m;e++)if(h=window.getComputedStyle(a)[c[e][1]].replace(/\s/g,"").match(/^rgb[a]?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i)){b="";for(var g=1;3>=g;g++)b+=("0"+parseInt(h[g],10).toString(16)).slice(-2);"0"===b.charAt(0)&&(d=parseInt(b.substr(0,2),16),d=Math.max(16,d),b=d.toString(16)+b.slice(-4));f.push(c[e][0]+"="+b)}if(f.length){var k=a.getAttribute("data-src"),l=k+(0>k.indexOf("?")?"?":"&")+f.join("&");a.src!=l&&(a.src=l,a.outerHTML=a.outerHTML)}}}catch(n){}};</script><link rel="stylesheet" href="https://use.typekit.net/lab8xti.css"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-797705-6', 'auto',{"name":"wnd_header"});ga('wnd_header.set', 'dimension1', 'W2');ga('wnd_header.set', 'anonymizeIp', true);ga('wnd_header.send', 'pageview');</script></head><body class="l l-02 layout-02 c-s-n wt-page ac-h ac-i b-btn-sq b-btn-s-l b-btn-dn b-btn-bw-1 img-d-n img-t-o img-h-z line-solid b-e-sbs lbox-d c-s-n wnd-fe desktop safari">
      <div class="wnd-page cs-gray ac-none">
    
        <div id="wrapper" class="l-w cf t-33">
    
          <header id="header" class="l-h cf"><div id="layout-section" class="s section header header-01 claim-section cf design-04 sc-w">
              <div class="section-fixed wnd-fixed">
                <div class="section-inner">
                  <div class="nav-line cf">
    
                    <div class="logo logo-default brandon-grotesque wnd-logo-with-text wnd-image-vector">
        <div class="logo-content">
            <a href="/home/">
                
                <div class="embed-content">
                  <div class="embed-content-cell">
                        <embed id="wnd_LogoBlock_663084_img" type="image/svg+xml" data-src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880" src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880&amp;border=100000&amp;outline=100000&amp;color=100000"><script>checkAndChangeSvgColor('wnd_LogoBlock_663084_img');</script></div>
                </div>
              <div class="text-content-outer">
                    <span class="text-content">𝕿𝕳𝕰</span>
              </div>
            </a>
        </div>
    </div>
    
                    
    
                    <nav id="menu" role="navigation" style=""><div class="menu-font">
      <a href="#" class="close-menu" rel="nofollow">
        <span>Close Menu</span>
      </a>
      <ul class="level-1"><li class="wnd-homepage">
          <a class="menu-item" href="/home/"><span class="menu-item-text">Accueil</span></a>
          
        </li><li class="wnd-active wnd-active-path">
          <a class="menu-item" href="/notre-serveur-suport/"><span class="menu-item-text">Notre serveur suport</span></a>
          
        </li><li>
          <a class="menu-item" href="/a-propos/"><span class="menu-item-text">À propos de Kirito</span></a>
          
        </li><li class="wnd-with-submenu">
          <a class="menu-item" href="/notre-equipe/"><span class="menu-item-text">Notre équipe</span></a>
          <ul class="level-2"><li>
          <a class="menu-item" href="/createur/"><span class="menu-item-text">Créateur</span></a>
          
        </li><li>
          <a class="menu-item" href="/equipe-staff/"><span class="menu-item-text">Équipe staff</span></a>
          
        </li>
      </ul>
        <a class="mm-arrow mm-down" href="#"></a></li>
      </ul><span class="more-text">Plus</span>
    </div></nav><script type="application/javascript">var el=document.getElementById("menu");"undefined"!=typeof el&&(el.style.display="none")</script><div id="menu-mobile" class="">
                      <a href="#" id="menu-submit"><span></span>Menu</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </header><main id="main" class="l-m cf" role="main">
    
            <div class="section-wrapper cf">
      <div class="section-wrapper-content cf"><div class="s section header header-01 claim-section cf design-04 sc-w">
      <div class="section-bg">
        <div class="section-bg-layer">
          
        </div>
        <div class="section-bg-layer section-bg-overlay"></div>
      </div>
      <div class="section-inner section-claim header-height-sp-01">
        <div class="claim-content cf">
          <div class="header-claim cf">
            <h1>
              <div class="big-claim auto-font-size cf"><span class="styled-inline-text claim-borders abril-fatface">
      <span><span>Notre serveur suport</span></span>
    </span></div>
              <div class="small-claim cf"><span class="styled-inline-text claim-default wnd-font-size-20 proxima-nova">
      <span><span></span></span>
    </span></div>
            </h1>
          </div>
        </div>
      </div>
    </div><section class="s section default-01 design-01 sc-w"><div class="section-bg s-bg">
        <div class="section-bg-layer">
          
        </div>
        <div class="section-bg-layer section-bg-overlay"></div>
      </div>
      <div class="section-inner">
        <div class="content ez cf wnd-no-cols">
      <div class="ez-c">
        <div class="b b-s b-s-t150 b-s-b150 b-btn b-btn-1 wnd-align-center">
      <div class="b-btn-c">
        <a class="b-btn-l" href="https://discord.gg/DHbdety" rel="nofollow">
          <span class="b-btn-t">cliquer ici</span>
        </a>
      </div>
    </div><div class="b b-text cf">
      <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"></div>
    </div>
      </div>
      
    </div>
      </div>
    </section></div>
    </div>
    
          </main><footer id="footer" class="l-f cf">
    
            <div class="section-wrapper cf">
      <div class="section-wrapper-content cf"><div wn-border="top" wn-border-element="footer-line" class="s section footer-01 footer-font design-01 sc-b">
      <div class="section-bg s-bg">
        <div class="section-bg-layer">
          
        </div>
        <div class="section-bg-layer section-bg-overlay"></div>
      </div>
      <div class="section-inner">
        
      </div>
    </div></div>
    </div>
    
          </footer></div>
    
      </div>
    
      
    <script type="text/javascript" src="https://d1di2lzuh97fh2.cloudfront.net/files/3f/3f4/3f40k1.js?ph=3f711ab880"></script><script type="application/javascript">!function(){if(0==document.getElementsByClassName("wnd-cms").length)for(var e=document.getElementsByClassName("column-content"),s=0;s<e.length;s++){var t=e[s].querySelector("div"),l=t.getElementsByClassName("b-text-c");void 0!=l[0]&&t.firstChild==t.lastChild&&""===l[0].innerText&&(e[s].classList?e[s].classList.add("column-empty"):(e[s].classList?e[s].classList.contains("column-empty"):new RegExp("\\bcolumn-empty\\b").test(e[s].className))&&(e[s].className+=" column-empty"))}}()</script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/lang.fr.230.js?ph=3f711ab880" crossorigin="anonymous"></script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/compiled.multi.2-766.js?ph=3f711ab880" crossorigin="anonymous"></script><script>var wnd = wnd || {};wnd.$data = {"image_content_items":{"wnd_ThumbnailBlock_334498":{"id":"wnd_ThumbnailBlock_334498","type":"wnd.pc.ThumbnailBlock"},"wnd_HeaderSection_header_1_274423":{"id":"wnd_HeaderSection_header_1_274423","type":"wnd.pc.HeaderSection"},"wnd_Section_default_148495":{"id":"wnd_Section_default_148495","type":"wnd.pc.Section"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"},"wnd_FooterSection_footer_497077":{"id":"wnd_FooterSection_footer_497077","type":"wnd.pc.FooterSection"}},"svg_content_items":{"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"}},"content_items":[],"project_info":{"isMultilanguage":false,"eshop_tax_enabled":"1","country_code":"","contact_state":"","eshop_tax_type":"VAT","eshop_discounts":false}};</script><script>wnd.$system = {"filesPath":"https:\/\/kirito67.webnode.fr\/_files\/","staticFiles":"https:\/\/d1di2lzuh97fh2.cloudfront.net\/files","isCms":false,"staticCDNServers":["https:\/\/d1di2lzuh97fh2.cloudfront.net\/"],"fileUploadAllowExtension":["jpg","jpeg","png","gif","bmp","ico","svg","webp","tiff","pdf","doc","docx","ppt","pptx","pps","ppsx","odt","xls","xlsx","txt","rtf","mp3","wma","wav","ogg","amr","flac","m4a","3gp","avi","wmv","mov","mpg","mkv","mp4","mpeg","m4v","swf","gpx","stl","csv","xml","txt","dxf","dwg","iges","igs","step","stp"],"maxUserFormFileLimit":4194304,"frontendLanguage":"fr","backendLanguage":"fr","page":{"id":200000078,"identifier":"notre-serveur-suport","template":{"id":200000005,"styles":{"typography":"t-33","scheme":"cs-gray","additiveColor":"ac-none","acHeadings":true,"acSubheadings":false,"acIcons":true,"acOthers":false,"imageStyle":"img-d-n","imageHover":"img-h-z","imageTitle":"img-t-o","buttonStyle":"b-btn-sq","buttonSize":"b-btn-s-l","buttonDecoration":"b-btn-dn","buttonBorders":"b-btn-bw-1","lineStyle":"line-solid","eshopGridItemStyle":"b-e-sbs","lightboxStyle":"lbox-d","columnSpaces":"c-s-n","background":{"default":null},"backgroundSettings":{"default":""}}},"layout":"default","name":"Notre serveur suport","html_title":"","language":"fr","langId":1,"isHomepage":false,"meta_description":null,"meta_keywords":null,"header_code":null,"footer_code":null,"styles":[],"countFormsEntries":[]},"listingsPrefix":"\/l\/","productPrefix":"\/p\/","cartPrefix":"\/cart\/","checkoutPrefix":"\/checkout\/","isCheckout":false,"isEshop":false,"isProductDetail":false,"isListingDetail":false,"hasEshopAnalytics":false,"gTagId":null,"currency":"USD","format":{"be":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}},"fe":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}}},"e_product":null,"listing_item":null,"labels":{"wnd.fe.CheckoutZipField.brInvalid":"Please enter valid ZIP code in format XXXXX-XXX","wnd.fe.CookieBar.message":"Ce site web utilise des \u00ab cookies \u00bb afin d'optimiser l'acc\u00e8s et am\u00e9liorer votre exp\u00e9rience sur notre site. En utilisant votre navigation sur ce site, vous acceptez des cookies.","wnd.fe.FeFooter.createWebsite":"Cr\u00e9ez votre site web gratuitement !","wnd.fe.FormManager.error.file.notAllowedExtension":"Le type de fichier \u0022{EXTENSION}\u0022 n'est pas autoris\u00e9.","wnd.fe.FormManager.error.file.required":"S\u00e9lectionnez un fichier.","wnd.fe.FormManager.error.file.sizeExceeded":"La taille limite des fichiers \u00e0 envoyer est de {SIZE} Mo.","wnd.fe.FormManager.error.userChangePassword":"Les mots de passe ne correspondent pas","wnd.fe.FormManager.error.userLogin.inactiveAccount":"Votre inscription n'est pas encore confirm\u00e9e, vous ne pouvez pas vous connecter.","wnd.fe.FormManager.error.userLogin.invalidLogin":"Le nom d'utilisateur ou le mot de passe est incorrect !","wnd.fe.ListingData.shortMonthName.Apr":"avr.","wnd.fe.ListingData.shortMonthName.Aug":"ao\u00fbt","wnd.fe.ListingData.shortMonthName.Dec":"d\u00e9c.","wnd.fe.ListingData.shortMonthName.Feb":"f\u00e9vr.","wnd.fe.ListingData.shortMonthName.Jan":"janv.","wnd.fe.ListingData.shortMonthName.Jul":"juill.","wnd.fe.ListingData.shortMonthName.Jun":"juin","wnd.fe.ListingData.shortMonthName.Mar":"mars","wnd.fe.ListingData.shortMonthName.May":"mai","wnd.fe.ListingData.shortMonthName.Nov":"nov.","wnd.fe.ListingData.shortMonthName.Oct":"oct.","wnd.fe.ListingData.shortMonthName.Sep":"sept.","wnd.fe.ShoppingCartManager.count.between2And4":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.moreThan5":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.one":"{COUNT} article","wnd.fe.ShoppingCartTable.label.itemsInStock":"Only {COUNT} pcs available in stock","wnd.fe.ShoppingCartTable.label.itemsInStock.between2And4":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.moreThan5":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.one":"Seulement {COUNT} pi\u00e8ce disponible en stock","wnd.fe.ShoppingCartTable.label.outOfStock":"\u00c9puis\u00e9","wnd.fe.UserBar.logOut":"Se d\u00e9connecter","wnd.pc.BlogDetailPageZone.next":"Articles r\u00e9cents","wnd.pc.BlogDetailPageZone.previous":"Anciens articles","wnd.pc.FileBlock.download":"T\u00c9L\u00c9CHARGER","wnd.pc.FormBlock.action.defaultMessage.text":"Le formulaire a \u00e9t\u00e9 correctement envoy\u00e9.","wnd.pc.FormBlock.action.defaultMessage.title":"Merci !","wnd.pc.ListingDetailPageZone.next":"Suivant","wnd.pc.ListingDetailPageZone.previous":"Pr\u00e9c\u00e9dent","wnd.pc.ListingItemCopy.namePrefix":"Copie de","wnd.pc.Option.defaultText":"Nouvelle option","wnd.pc.PageCopy.namePrefix":"Copie de","wnd.pc.ProductAddToCartBlock.addToCart":"Ajouter au panier","wnd.pc.ProductItem.button.viewDetail":"Page produit","wnd.pc.ProductOptionGroupBlock.notSelected":"Aucune variante n'a \u00e9t\u00e9 s\u00e9lectionn\u00e9e","wnd.pc.ProductOutOfStockBlock.label":"\u00c9puis\u00e9","wnd.pc.ProductPriceBlock.prefixText":"\u00c0 partir de ","wnd.pc.ProductPriceBlock.suffixText":"","wnd.pc.ProductsZone.label.collections":"Cat\u00e9gories","wnd.pc.ProductsZoneModel.label.allCollections":"Tous les produits","wnd.pc.ShoppingCartTable.label.checkout":"Passer commande","wnd.pc.ShoppingCartTable.label.checkoutDisabled":"La page de paiement n'est actuellement pas disponible (pas de moyen de paiement et de livraison)","wnd.pc.ShoppingCartTable.label.continue":"Continuer mes achats","wnd.pc.ShoppingCartTable.label.delete":"Supprimer","wnd.pc.ShoppingCartTable.label.item":"Produit","wnd.pc.ShoppingCartTable.label.price":"Prix","wnd.pc.ShoppingCartTable.label.quantity":"Quantit\u00e9","wnd.pc.ShoppingCartTable.label.sum":"Total","wnd.pc.ShoppingCartTable.label.totalPrice":"Total","wnd.pc.ShoppingCartTable.placeholder.text":"Vous pouvez le changer. Choisissez dans notre vaste offre de produits !","wnd.pc.ShoppingCartTable.placeholder.title":"Votre panier est vide.","wnd.pc.SystemFooterBlock.poweredByWebnode":"Optimis\u00e9 par {START_LINK}Webnode{END_LINK}","wnd.pc.UserChangePasswordFormBlock.invalidRecoveryUrl":"Le lien pour r\u00e9initialiser votre mot de passe a expir\u00e9. Pour recevoir un nouveau lien, ouvrez la page{START_LINK}Mot de passe oubli\u00e9{END_LINK}","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.text":"Le lien de r\u00e9initialisation de votre mot de passe vient de vous \u00eatre envoy\u00e9 par email. Si vous ne l'avez pas re\u00e7u, consultez votre dossier courrier ind\u00e9sirable.","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.title":"Un e-mail vient de vous \u00eatre envoy\u00e9 avec des instructions","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.text":"Votre inscription est en attente d'approbation. Une fois l'inscription approuv\u00e9e, vous recevrez un e-mail de confirmation.","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.title":"Merci pour votre inscription sur notre site.","wnd.pm.AddNewPagePattern.onlineStore":"Boutique en ligne"},"kbLinks":{"faq":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/371\/","domainRegistration":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3369\/","domainTransfer":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/340\/","webmailLogin":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/828\/","webmail":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/437\/","introduction":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/783\/","orderTracking":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5247\/","storageBandwidth":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/811\/","subPage":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3171\/","eshopPromo":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/440\/","eshopDiscounts":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5489\/","domainBirthdateInfo":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/150\/","skRegistration":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/228\/","euTransfer":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/230\/","import":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5157\/","eshopPromoVariants":"https:\/\/www.webnode.com\/blog\/2018\/09\/variants-are-here-sell-your-products-in-all-sizes-colors-or-flavors\/","checkoutFi":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5392\/","emailAccounts":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/3211\/","freightPriceSettings":"https:\/\/www.webnode.co.uk\/support\/index.php?\/Knowledgebase\/Article\/View\/5659\/"},"aviary":[]};</script>
    <!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!--Start of Tawk.to Script--> <script type="text/javascript"> var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/5f5d0397f0e7167d000fc5a0/default'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0); })(); </script> <!--End of Tawk.to Script--></body></html>`)
})




app.get('/a-propos', function(req, res) {
  res.send(`<html class="js flexbox cssmask objectfit object-fit pc fonts-loaded" prefix="og: https://ogp.me/ns#" lang="fr"><!--<![endif]--><head><meta charset="utf-8"><link rel="shortcut icon" href=""><link rel="apple-touch-icon" href=""><link rel="icon" href=""><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Kirito</title><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="msapplication-tap-highlight" content="no"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/4d/4dd/4dd8tz.css?ph=3f711ab880" rel="stylesheet"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/2r/2rf/2rf8hy.css?ph=3f711ab880" rel="stylesheet"><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/0e/0e1/0e1be2.css?ph=3f711ab880" data-wnd_color_scheme_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/42/42e/42e5o5.css?ph=3f711ab880" data-wnd_additive_color_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/1x/1xk/1xkzbf.css?ph=3f711ab880" data-wnd_typography_file=""><meta name="description" content="pour voir mon temp de latence"><meta name="keywords" content=""><meta name="generator" content="Webnode 2"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">

  <meta property="og:url" content="https://kirito67.webnode.fr/a-propos/"><meta property="og:title" content="À propos de Kirito :: Kirito"><meta property="og:type" content="article"><meta property="og:description" content="pour voir mon temp de latence"><meta property="og:site_name" content="Kirito"><meta property="og:article:published_time" content="2020-09-12T00:00:00+0200"><meta name="robots" content="index,follow"><link rel="canonical" href="https://kirito67.webnode.fr/a-propos/"><script async="" src="//www.google-analytics.com/analytics.js"></script><script>window.checkAndChangeSvgColor=function(c){try{var a=document.getElementById(c);if(a){c=[["border","borderColor"],["outline","outlineColor"],["color","color"]];for(var h,b,d,f=[],e=0,m=c.length;e<m;e++)if(h=window.getComputedStyle(a)[c[e][1]].replace(/\s/g,"").match(/^rgb[a]?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i)){b="";for(var g=1;3>=g;g++)b+=("0"+parseInt(h[g],10).toString(16)).slice(-2);"0"===b.charAt(0)&&(d=parseInt(b.substr(0,2),16),d=Math.max(16,d),b=d.toString(16)+b.slice(-4));f.push(c[e][0]+"="+b)}if(f.length){var k=a.getAttribute("data-src"),l=k+(0>k.indexOf("?")?"?":"&")+f.join("&");a.src!=l&&(a.src=l,a.outerHTML=a.outerHTML)}}}catch(n){}};</script><link rel="stylesheet" href="https://use.typekit.net/lab8xti.css"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-797705-6', 'auto',{"name":"wnd_header"});ga('wnd_header.set', 'dimension1', 'W2');ga('wnd_header.set', 'anonymizeIp', true);ga('wnd_header.send', 'pageview');</script></head><body class="l l-02 layout-02 c-s-n wt-page ac-h ac-i b-btn-sq b-btn-s-l b-btn-dn b-btn-bw-1 img-d-n img-t-o img-h-z line-solid b-e-sbs lbox-d c-s-n wnd-fe desktop safari">
    <div class="wnd-page cs-gray ac-none">
  
      <div id="wrapper" class="l-w cf t-33">
  
        <header id="header" class="l-h cf"><div id="layout-section" class="s section header header-01 claim-section cf design-04 sc-w">
            <div class="section-fixed wnd-fixed">
              <div class="section-inner">
                <div class="nav-line cf">
  
                  <div class="logo logo-default brandon-grotesque wnd-logo-with-text wnd-image-vector">
      <div class="logo-content">
          <a href="/home/">
              
              <div class="embed-content">
                <div class="embed-content-cell">
                      <embed id="wnd_LogoBlock_663084_img" type="image/svg+xml" data-src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880" src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880&amp;border=100000&amp;outline=100000&amp;color=100000"><script>checkAndChangeSvgColor('wnd_LogoBlock_663084_img');</script></div>
              </div>
            <div class="text-content-outer">
                  <span class="text-content">𝕿𝕳𝕰</span>
            </div>
          </a>
      </div>
  </div>
  
                  
  
                  <nav id="menu" role="navigation" style=""><div class="menu-font">
    <a href="#" class="close-menu" rel="nofollow">
      <span>Close Menu</span>
    </a>
    <ul class="level-1"><li class="wnd-homepage">
        <a class="menu-item" href="/home/"><span class="menu-item-text">Accueil</span></a>
        
      </li><li>
        <a class="menu-item" href="/notre-serveur-suport/"><span class="menu-item-text">Notre serveur suport</span></a>
        
      </li><li class="wnd-active wnd-active-path">
        <a class="menu-item" href="/a-propos/"><span class="menu-item-text">À propos de Kirito</span></a>
        
      </li><li class="wnd-with-submenu">
        <a class="menu-item" href="/notre-equipe/"><span class="menu-item-text">Notre équipe</span></a>
        <ul class="level-2"><li>
        <a class="menu-item" href="/createur/"><span class="menu-item-text">Créateur</span></a>
        
      </li><li>
        <a class="menu-item" href="/equipe-staff/"><span class="menu-item-text">Équipe staff</span></a>
        
      </li>
    </ul>
      <a class="mm-arrow mm-down" href="#"></a></li>
    </ul><span class="more-text">Plus</span>
  </div></nav><script type="application/javascript">var el=document.getElementById("menu");"undefined"!=typeof el&&(el.style.display="none")</script><div id="menu-mobile" class="">
                    <a href="#" id="menu-submit"><span></span>Menu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </header><main id="main" class="l-m cf" role="main">
  
          <div class="section-wrapper cf">
    <div class="section-wrapper-content cf"><div class="s section header header-01 claim-section cf design-04 sc-w">
    <div class="section-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner section-claim header-height-sp-01">
      <div class="claim-content cf">
        <div class="header-claim cf">
          <h1>
            <div class="big-claim auto-font-size cf"><span class="styled-inline-text claim-borders wnd-font-size-80 abril-fatface">
    <span><span>À propos de Kirito</span></span>
  </span></div>
            <div class="small-claim cf"><span class="styled-inline-text claim-default wnd-font-size-20 proxima-nova">
    <span><span></span></span>
  </span></div>
          </h1>
        </div>
      </div>
    </div>
  </div><section class="s section default-01 design-01 sc-w"><div class="section-bg s-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner">
      <div class="content ez cf wnd-no-cols">
    <div class="ez-c">
      <div class="b b-s b-hr-line c-s-v">
    <hr class="line-style line-color">
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><h2>k!lock</h2></div>
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf">pour bloquer un salon</div>
  </div><div class="b b-s b-hr-line c-s-v">
    <hr class="line-style line-color">
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><h2>k!unlock</h2></div>
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf">pour debloquer un salon</div>
  </div><div class="b b-s b-hr-line c-s-v">
    <hr class="line-style line-color">
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><h2>k!ping</h2></div>
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf">pour voir mon temp de latence</div>
  </div><div class="b b-s b-hr-line c-s-v">
    <hr class="line-style line-color">
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><h2>k!clear</h2></div>
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf">pour suprimer des message</div>
  </div><div class="b b-s b-hr-line c-s-v">
    <hr class="line-style line-color">
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><h2>k!start</h2></div>
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf">pour lancer le mmo rpg</div>
  </div>
    </div>
    
  </div>
    </div>
  </section></div>
  </div>
  
        </main><footer id="footer" class="l-f cf">
  
          <div class="section-wrapper cf">
    <div class="section-wrapper-content cf"><div wn-border="top" wn-border-element="footer-line" class="s section footer-01 footer-font design-01 sc-b">
    <div class="section-bg s-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner">
      
    </div>
  </div></div>
  </div>
  
        </footer></div>
  
    </div>
  
    
  <script type="text/javascript" src="https://d1di2lzuh97fh2.cloudfront.net/files/3f/3f4/3f40k1.js?ph=3f711ab880"></script><script type="application/javascript">!function(){if(0==document.getElementsByClassName("wnd-cms").length)for(var e=document.getElementsByClassName("column-content"),s=0;s<e.length;s++){var t=e[s].querySelector("div"),l=t.getElementsByClassName("b-text-c");void 0!=l[0]&&t.firstChild==t.lastChild&&""===l[0].innerText&&(e[s].classList?e[s].classList.add("column-empty"):(e[s].classList?e[s].classList.contains("column-empty"):new RegExp("\\bcolumn-empty\\b").test(e[s].className))&&(e[s].className+=" column-empty"))}}()</script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/lang.fr.230.js?ph=3f711ab880" crossorigin="anonymous"></script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/compiled.multi.2-766.js?ph=3f711ab880" crossorigin="anonymous"></script><script>var wnd = wnd || {};wnd.$data = {"image_content_items":{"wnd_ThumbnailBlock_334498":{"id":"wnd_ThumbnailBlock_334498","type":"wnd.pc.ThumbnailBlock"},"wnd_HeaderSection_header_1_558980":{"id":"wnd_HeaderSection_header_1_558980","type":"wnd.pc.HeaderSection"},"wnd_Section_default_257387":{"id":"wnd_Section_default_257387","type":"wnd.pc.Section"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"},"wnd_FooterSection_footer_497077":{"id":"wnd_FooterSection_footer_497077","type":"wnd.pc.FooterSection"}},"svg_content_items":{"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"}},"content_items":[],"project_info":{"isMultilanguage":false,"eshop_tax_enabled":"1","country_code":"","contact_state":"","eshop_tax_type":"VAT","eshop_discounts":false}};</script><script>wnd.$system = {"filesPath":"https:\/\/kirito67.webnode.fr\/_files\/","staticFiles":"https:\/\/d1di2lzuh97fh2.cloudfront.net\/files","isCms":false,"staticCDNServers":["https:\/\/d1di2lzuh97fh2.cloudfront.net\/"],"fileUploadAllowExtension":["jpg","jpeg","png","gif","bmp","ico","svg","webp","tiff","pdf","doc","docx","ppt","pptx","pps","ppsx","odt","xls","xlsx","txt","rtf","mp3","wma","wav","ogg","amr","flac","m4a","3gp","avi","wmv","mov","mpg","mkv","mp4","mpeg","m4v","swf","gpx","stl","csv","xml","txt","dxf","dwg","iges","igs","step","stp"],"maxUserFormFileLimit":4194304,"frontendLanguage":"fr","backendLanguage":"fr","page":{"id":200000026,"identifier":"a-propos","template":{"id":200000005,"styles":{"typography":"t-33","scheme":"cs-gray","additiveColor":"ac-none","acHeadings":true,"acSubheadings":false,"acIcons":true,"acOthers":false,"imageStyle":"img-d-n","imageHover":"img-h-z","imageTitle":"img-t-o","buttonStyle":"b-btn-sq","buttonSize":"b-btn-s-l","buttonDecoration":"b-btn-dn","buttonBorders":"b-btn-bw-1","lineStyle":"line-solid","eshopGridItemStyle":"b-e-sbs","lightboxStyle":"lbox-d","columnSpaces":"c-s-n","background":{"default":null},"backgroundSettings":{"default":""}}},"layout":"default","name":"\u00c0 propos de Kirito","html_title":"","language":"fr","langId":1,"isHomepage":false,"meta_description":"","meta_keywords":"","header_code":"","footer_code":"","styles":[],"countFormsEntries":[]},"listingsPrefix":"\/l\/","productPrefix":"\/p\/","cartPrefix":"\/cart\/","checkoutPrefix":"\/checkout\/","isCheckout":false,"isEshop":false,"isProductDetail":false,"isListingDetail":false,"hasEshopAnalytics":false,"gTagId":null,"currency":"USD","format":{"be":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}},"fe":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}}},"e_product":null,"listing_item":null,"labels":{"wnd.fe.CheckoutZipField.brInvalid":"Please enter valid ZIP code in format XXXXX-XXX","wnd.fe.CookieBar.message":"Ce site web utilise des \u00ab cookies \u00bb afin d'optimiser l'acc\u00e8s et am\u00e9liorer votre exp\u00e9rience sur notre site. En utilisant votre navigation sur ce site, vous acceptez des cookies.","wnd.fe.FeFooter.createWebsite":"Cr\u00e9ez votre site web gratuitement !","wnd.fe.FormManager.error.file.notAllowedExtension":"Le type de fichier \u0022{EXTENSION}\u0022 n'est pas autoris\u00e9.","wnd.fe.FormManager.error.file.required":"S\u00e9lectionnez un fichier.","wnd.fe.FormManager.error.file.sizeExceeded":"La taille limite des fichiers \u00e0 envoyer est de {SIZE} Mo.","wnd.fe.FormManager.error.userChangePassword":"Les mots de passe ne correspondent pas","wnd.fe.FormManager.error.userLogin.inactiveAccount":"Votre inscription n'est pas encore confirm\u00e9e, vous ne pouvez pas vous connecter.","wnd.fe.FormManager.error.userLogin.invalidLogin":"Le nom d'utilisateur ou le mot de passe est incorrect !","wnd.fe.ListingData.shortMonthName.Apr":"avr.","wnd.fe.ListingData.shortMonthName.Aug":"ao\u00fbt","wnd.fe.ListingData.shortMonthName.Dec":"d\u00e9c.","wnd.fe.ListingData.shortMonthName.Feb":"f\u00e9vr.","wnd.fe.ListingData.shortMonthName.Jan":"janv.","wnd.fe.ListingData.shortMonthName.Jul":"juill.","wnd.fe.ListingData.shortMonthName.Jun":"juin","wnd.fe.ListingData.shortMonthName.Mar":"mars","wnd.fe.ListingData.shortMonthName.May":"mai","wnd.fe.ListingData.shortMonthName.Nov":"nov.","wnd.fe.ListingData.shortMonthName.Oct":"oct.","wnd.fe.ListingData.shortMonthName.Sep":"sept.","wnd.fe.ShoppingCartManager.count.between2And4":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.moreThan5":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.one":"{COUNT} article","wnd.fe.ShoppingCartTable.label.itemsInStock":"Only {COUNT} pcs available in stock","wnd.fe.ShoppingCartTable.label.itemsInStock.between2And4":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.moreThan5":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.one":"Seulement {COUNT} pi\u00e8ce disponible en stock","wnd.fe.ShoppingCartTable.label.outOfStock":"\u00c9puis\u00e9","wnd.fe.UserBar.logOut":"Se d\u00e9connecter","wnd.pc.BlogDetailPageZone.next":"Articles r\u00e9cents","wnd.pc.BlogDetailPageZone.previous":"Anciens articles","wnd.pc.FileBlock.download":"T\u00c9L\u00c9CHARGER","wnd.pc.FormBlock.action.defaultMessage.text":"Le formulaire a \u00e9t\u00e9 correctement envoy\u00e9.","wnd.pc.FormBlock.action.defaultMessage.title":"Merci !","wnd.pc.ListingDetailPageZone.next":"Suivant","wnd.pc.ListingDetailPageZone.previous":"Pr\u00e9c\u00e9dent","wnd.pc.ListingItemCopy.namePrefix":"Copie de","wnd.pc.Option.defaultText":"Nouvelle option","wnd.pc.PageCopy.namePrefix":"Copie de","wnd.pc.ProductAddToCartBlock.addToCart":"Ajouter au panier","wnd.pc.ProductItem.button.viewDetail":"Page produit","wnd.pc.ProductOptionGroupBlock.notSelected":"Aucune variante n'a \u00e9t\u00e9 s\u00e9lectionn\u00e9e","wnd.pc.ProductOutOfStockBlock.label":"\u00c9puis\u00e9","wnd.pc.ProductPriceBlock.prefixText":"\u00c0 partir de ","wnd.pc.ProductPriceBlock.suffixText":"","wnd.pc.ProductsZone.label.collections":"Cat\u00e9gories","wnd.pc.ProductsZoneModel.label.allCollections":"Tous les produits","wnd.pc.ShoppingCartTable.label.checkout":"Passer commande","wnd.pc.ShoppingCartTable.label.checkoutDisabled":"La page de paiement n'est actuellement pas disponible (pas de moyen de paiement et de livraison)","wnd.pc.ShoppingCartTable.label.continue":"Continuer mes achats","wnd.pc.ShoppingCartTable.label.delete":"Supprimer","wnd.pc.ShoppingCartTable.label.item":"Produit","wnd.pc.ShoppingCartTable.label.price":"Prix","wnd.pc.ShoppingCartTable.label.quantity":"Quantit\u00e9","wnd.pc.ShoppingCartTable.label.sum":"Total","wnd.pc.ShoppingCartTable.label.totalPrice":"Total","wnd.pc.ShoppingCartTable.placeholder.text":"Vous pouvez le changer. Choisissez dans notre vaste offre de produits !","wnd.pc.ShoppingCartTable.placeholder.title":"Votre panier est vide.","wnd.pc.SystemFooterBlock.poweredByWebnode":"Optimis\u00e9 par {START_LINK}Webnode{END_LINK}","wnd.pc.UserChangePasswordFormBlock.invalidRecoveryUrl":"Le lien pour r\u00e9initialiser votre mot de passe a expir\u00e9. Pour recevoir un nouveau lien, ouvrez la page{START_LINK}Mot de passe oubli\u00e9{END_LINK}","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.text":"Le lien de r\u00e9initialisation de votre mot de passe vient de vous \u00eatre envoy\u00e9 par email. Si vous ne l'avez pas re\u00e7u, consultez votre dossier courrier ind\u00e9sirable.","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.title":"Un e-mail vient de vous \u00eatre envoy\u00e9 avec des instructions","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.text":"Votre inscription est en attente d'approbation. Une fois l'inscription approuv\u00e9e, vous recevrez un e-mail de confirmation.","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.title":"Merci pour votre inscription sur notre site.","wnd.pm.AddNewPagePattern.onlineStore":"Boutique en ligne"},"kbLinks":{"faq":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/371\/","domainRegistration":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3369\/","domainTransfer":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/340\/","webmailLogin":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/828\/","webmail":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/437\/","introduction":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/783\/","orderTracking":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5247\/","storageBandwidth":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/811\/","subPage":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3171\/","eshopPromo":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/440\/","eshopDiscounts":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5489\/","domainBirthdateInfo":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/150\/","skRegistration":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/228\/","euTransfer":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/230\/","import":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5157\/","eshopPromoVariants":"https:\/\/www.webnode.com\/blog\/2018\/09\/variants-are-here-sell-your-products-in-all-sizes-colors-or-flavors\/","checkoutFi":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5392\/","emailAccounts":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/3211\/","freightPriceSettings":"https:\/\/www.webnode.co.uk\/support\/index.php?\/Knowledgebase\/Article\/View\/5659\/"},"aviary":[]};</script>
  <!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!--Start of Tawk.to Script--> <script type="text/javascript"> var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/5f5d0397f0e7167d000fc5a0/default'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0); })(); </script> <!--End of Tawk.to Script--></body></html>`)
});

app.get('/notre-equipe', function(req, res) {
  res.send(`<html class="js flexbox cssmask objectfit object-fit pc fonts-loaded flexbox cssmask objectfit object-fit" prefix="og: https://ogp.me/ns#" lang="fr"><!--<![endif]--><head><meta charset="utf-8"><link rel="shortcut icon" href=""><link rel="apple-touch-icon" href=""><link rel="icon" href=""><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Kirito</title><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="msapplication-tap-highlight" content="no"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/4d/4dd/4dd8tz.css?ph=3f711ab880" rel="stylesheet"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/2r/2rf/2rf8hy.css?ph=3f711ab880" rel="stylesheet"><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/0e/0e1/0e1be2.css?ph=3f711ab880" data-wnd_color_scheme_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/42/42e/42e5o5.css?ph=3f711ab880" data-wnd_additive_color_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/1x/1xk/1xkzbf.css?ph=3f711ab880" data-wnd_typography_file=""><meta name="description" content="@[𝕿𝕳𝕰] 𝕯.𝕯.𝕷.𝕸.#1999"><meta name="keywords" content=""><meta name="generator" content="Webnode 2"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">

  <meta property="og:url" content="https://kirito67.webnode.fr/notre-equipe/"><meta property="og:title" content="Notre équipe :: Kirito"><meta property="og:type" content="article"><meta property="og:description" content="@[𝕿𝕳𝕰] 𝕯.𝕯.𝕷.𝕸.#1999"><meta property="og:site_name" content="Kirito"><meta property="og:image" content="https://kirito67.webnode.fr/_files/200000001-05bd405bd7/700/20200813_100604.jpg"><meta property="og:article:published_time" content="2020-09-12T00:00:00+0200"><meta name="robots" content="index,follow"><link rel="canonical" href="https://kirito67.webnode.fr/notre-equipe/"><script async="" src="//www.google-analytics.com/analytics.js"></script><script async="" src="//www.google-analytics.com/analytics.js"></script><script>window.checkAndChangeSvgColor=function(c){try{var a=document.getElementById(c);if(a){c=[["border","borderColor"],["outline","outlineColor"],["color","color"]];for(var h,b,d,f=[],e=0,m=c.length;e<m;e++)if(h=window.getComputedStyle(a)[c[e][1]].replace(/s/g,"").match(/^rgb[a]?(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i)){b="";for(var g=1;3>=g;g++)b+=("0"+parseInt(h[g],10).toString(16)).slice(-2);"0"===b.charAt(0)&&(d=parseInt(b.substr(0,2),16),d=Math.max(16,d),b=d.toString(16)+b.slice(-4));f.push(c[e][0]+"="+b)}if(f.length){var k=a.getAttribute("data-src"),l=k+(0>k.indexOf("?")?"?":"&")+f.join("&");a.src!=l&&(a.src=l,a.outerHTML=a.outerHTML)}}}catch(n){}};</script><link rel="stylesheet" href="https://use.typekit.net/lab8xti.css"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-797705-6', 'auto',{"name":"wnd_header"});ga('wnd_header.set', 'dimension1', 'W2');ga('wnd_header.set', 'anonymizeIp', true);ga('wnd_header.send', 'pageview');</script></head><body class="l l-02 layout-02 c-s-n wt-page ac-h ac-i b-btn-sq b-btn-s-l b-btn-dn b-btn-bw-1 img-d-n img-t-o img-h-z line-solid b-e-sbs lbox-d c-s-n wnd-fe desktop safari">
    <div class="wnd-page cs-gray ac-none">
  
      <div id="wrapper" class="l-w cf t-33">
  
        <header id="header" class="l-h cf"><div id="layout-section" class="s section header header-01 claim-section cf design-04 sc-w">
            <div class="section-fixed wnd-fixed">
              <div class="section-inner">
                <div class="nav-line cf">
  
                  <div class="logo logo-default brandon-grotesque wnd-logo-with-text wnd-image-vector">
      <div class="logo-content">
          <a href="/home/">
              
              <div class="embed-content">
                <div class="embed-content-cell">
                      <embed id="wnd_LogoBlock_663084_img" type="image/svg+xml" data-src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880" src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880&amp;border=100000&amp;outline=100000&amp;color=100000"><script>checkAndChangeSvgColor('wnd_LogoBlock_663084_img');</script></div>
              </div>
            <div class="text-content-outer">
                  <span class="text-content">𝕿𝕳𝕰</span>
            </div>
          </a>
      </div>
  </div>
  
                  
  
                  <nav id="menu" role="navigation" style=""><div class="menu-font">
    <a href="#" class="close-menu" rel="nofollow">
      <span>Close Menu</span>
    </a>
    <ul class="level-1"><li class="wnd-homepage">
        <a class="menu-item" href="/home/"><span class="menu-item-text">Accueil</span></a>
        
      </li><li>
        <a class="menu-item" href="/notre-serveur-suport/"><span class="menu-item-text">Notre serveur suport</span></a>
        
      </li><li>
        <a class="menu-item" href="/a-propos/"><span class="menu-item-text">À propos de Kirito</span></a>
        
      </li><li class="wnd-active wnd-active-path wnd-with-submenu">
        <a class="menu-item" href="/notre-equipe/"><span class="menu-item-text">Notre équipe</span></a>
        <ul class="level-2 open"><li>
        <a class="menu-item" href="/createur/"><span class="menu-item-text">Créateur</span></a>
        
      </li><li>
        <a class="menu-item" href="/equipe-staff/"><span class="menu-item-text">Équipe staff</span></a>
        
      </li>
    </ul>
      <a class="mm-arrow mm-up" href="#"></a></li>
    </ul><span class="more-text">Plus</span>
  </div></nav><script type="application/javascript">var el=document.getElementById("menu");"undefined"!=typeof el&&(el.style.display="none")</script><div id="menu-mobile" class="">
                    <a href="#" id="menu-submit"><span></span>Menu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </header><main id="main" class="l-m cf" role="main">
  
          <div class="section-wrapper cf">
    <div class="section-wrapper-content cf"><div class="s section header header-01 claim-section cf design-04 sc-w">
    <div class="section-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner section-claim header-height-sp-01">
      <div class="claim-content cf">
        <div class="header-claim cf">
          <h1>
            <div class="big-claim auto-font-size cf"><span class="styled-inline-text claim-borders abril-fatface">
    <span><span>Notre équipe</span></span>
  </span></div>
            <div class="small-claim cf"><span class="styled-inline-text claim-default wnd-font-size-20 playfair-display">
    <span><span></span></span>
  </span></div>
          </h1>
        </div>
      </div>
    </div>
  </div><section class="s section default-01 design-01 sc-w"><div class="section-bg s-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner">
      <div class="content ez cf wnd-no-cols">
    <div class="ez-c">
      <div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf">@[𝕿𝕳𝕰] 𝕯.𝕯.𝕷.𝕸.#1999</div>
  </div><div class="b-img b-img-default b b-s cf wnd-orientation-square wnd-type-image img-s-n" style="margin-left:12.22%;margin-right:12.22%;" id="wnd_ImageBlock_94883">
      <div class="b-img-w">
          <div class="b-img-c cf" style="padding-bottom:100%;text-align:center;">
              <img src="https://kirito67.webnode.fr/_files/200000001-05bd405bd7/700/20200813_100604.jpg" alt="" style="top:0%;left:0%;width:100%;height:100%;position:absolute;"><div class="b-img-embed">
                  </div>
          </div>
  
          <div class="b-img-t"></div>
      </div>
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><p dir="ltr"><strong>@𝕂𝕀𝕃𝕃𝔼ℝ 𝕎𝕆𝕃𝔽#9523</strong> </p></div>
  </div><div class="b-img b-img-default b b-s cf wnd-orientation-square wnd-type-image img-s-n" style="margin-left:12.22%;margin-right:12.22%;" id="wnd_ImageBlock_65320">
      <div class="b-img-w">
          <div class="b-img-c cf" style="padding-bottom:100%;text-align:center;">
              <img src="https://kirito67.webnode.fr/_files/200000002-948d4948d6/700/IMG_20200912_184059.jpg" alt="" style="top:0%;left:0%;width:100%;height:100%;position:absolute;"><div class="b-img-embed">
                  </div>
          </div>
  
          <div class="b-img-t"></div>
      </div>
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf">@Catyny#6825</div>
  </div><div class="b-img b-img-default b b-s cf wnd-orientation-square wnd-type-image img-s-n" style="margin-left:12.22%;margin-right:12.22%;" id="wnd_ImageBlock_84791">
      <div class="b-img-w">
          <div class="b-img-c cf" style="padding-bottom:100%;text-align:center;">
              <img src="https://kirito67.webnode.fr/_files/200000006-edd98edd9a/700/IMG_20200912_184630-9.jpg" alt="" style="top:0%;left:0%;width:100%;height:100%;position:absolute;"><div class="b-img-embed">
                  </div>
          </div>
  
          <div class="b-img-t"></div>
      </div>
  </div>
    </div>
    
  </div>
    </div>
  </section></div>
  </div>
  
        </main><footer id="footer" class="l-f cf">
  
          <div class="section-wrapper cf">
    <div class="section-wrapper-content cf"><div wn-border="top" wn-border-element="footer-line" class="s section footer-01 footer-font design-01 sc-b">
    <div class="section-bg s-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner">
      
    </div>
  </div></div>
  </div>
  
        </footer></div>
  
    </div>
  
    
  <script type="text/javascript" src="https://d1di2lzuh97fh2.cloudfront.net/files/3f/3f4/3f40k1.js?ph=3f711ab880"></script><script type="application/javascript">!function(){if(0==document.getElementsByClassName("wnd-cms").length)for(var e=document.getElementsByClassName("column-content"),s=0;s<e.length;s++){var t=e[s].querySelector("div"),l=t.getElementsByClassName("b-text-c");void 0!=l[0]&&t.firstChild==t.lastChild&&""===l[0].innerText&&(e[s].classList?e[s].classList.add("column-empty"):(e[s].classList?e[s].classList.contains("column-empty"):new RegExp("\bcolumn-empty\b").test(e[s].className))&&(e[s].className+=" column-empty"))}}()</script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/lang.fr.230.js?ph=3f711ab880" crossorigin="anonymous"></script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/compiled.multi.2-766.js?ph=3f711ab880" crossorigin="anonymous"></script><script>var wnd = wnd || {};wnd.$data = {"image_content_items":{"wnd_ThumbnailBlock_334498":{"id":"wnd_ThumbnailBlock_334498","type":"wnd.pc.ThumbnailBlock"},"wnd_HeaderSection_header_1_976975":{"id":"wnd_HeaderSection_header_1_976975","type":"wnd.pc.HeaderSection"},"wnd_Section_default_764512":{"id":"wnd_Section_default_764512","type":"wnd.pc.Section"},"wnd_ImageBlock_94883":{"id":"wnd_ImageBlock_94883","type":"wnd.pc.ImageBlock"},"wnd_ImageBlock_65320":{"id":"wnd_ImageBlock_65320","type":"wnd.pc.ImageBlock"},"wnd_ImageBlock_84791":{"id":"wnd_ImageBlock_84791","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"},"wnd_FooterSection_footer_497077":{"id":"wnd_FooterSection_footer_497077","type":"wnd.pc.FooterSection"}},"svg_content_items":{"wnd_ImageBlock_94883":{"id":"wnd_ImageBlock_94883","type":"wnd.pc.ImageBlock"},"wnd_ImageBlock_65320":{"id":"wnd_ImageBlock_65320","type":"wnd.pc.ImageBlock"},"wnd_ImageBlock_84791":{"id":"wnd_ImageBlock_84791","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"}},"content_items":[],"project_info":{"isMultilanguage":false,"eshop_tax_enabled":"1","country_code":"","contact_state":"","eshop_tax_type":"VAT","eshop_discounts":false}};</script><script>wnd.$system = {"filesPath":"https://kirito67.webnode.fr/_files/","staticFiles":"https://d1di2lzuh97fh2.cloudfront.net/files","isCms":false,"staticCDNServers":["https://d1di2lzuh97fh2.cloudfront.net/"],"fileUploadAllowExtension":["jpg","jpeg","png","gif","bmp","ico","svg","webp","tiff","pdf","doc","docx","ppt","pptx","pps","ppsx","odt","xls","xlsx","txt","rtf","mp3","wma","wav","ogg","amr","flac","m4a","3gp","avi","wmv","mov","mpg","mkv","mp4","mpeg","m4v","swf","gpx","stl","csv","xml","txt","dxf","dwg","iges","igs","step","stp"],"maxUserFormFileLimit":4194304,"frontendLanguage":"fr","backendLanguage":"fr","page":{"id":200000035,"identifier":"notre-equipe","template":{"id":200000005,"styles":{"typography":"t-33","scheme":"cs-gray","additiveColor":"ac-none","acHeadings":true,"acSubheadings":false,"acIcons":true,"acOthers":false,"imageStyle":"img-d-n","imageHover":"img-h-z","imageTitle":"img-t-o","buttonStyle":"b-btn-sq","buttonSize":"b-btn-s-l","buttonDecoration":"b-btn-dn","buttonBorders":"b-btn-bw-1","lineStyle":"line-solid","eshopGridItemStyle":"b-e-sbs","lightboxStyle":"lbox-d","columnSpaces":"c-s-n","background":{"default":null},"backgroundSettings":{"default":""}}},"layout":"default","name":"Notre équipe","html_title":"","language":"fr","langId":1,"isHomepage":false,"meta_description":"","meta_keywords":"","header_code":"","footer_code":"","styles":[],"countFormsEntries":[]},"listingsPrefix":"/l/","productPrefix":"/p/","cartPrefix":"/cart/","checkoutPrefix":"/checkout/","isCheckout":false,"isEshop":false,"isProductDetail":false,"isListingDetail":false,"hasEshopAnalytics":false,"gTagId":null,"currency":"USD","format":{"be":{"DATE_TIME":{"mask":"%d/%m/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\/(0?[1-9]|1[0-2])\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d/%m/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\/(0?[1-9]|1[0-2])\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}},"fe":{"DATE_TIME":{"mask":"%d/%m/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\/(0?[1-9]|1[0-2])\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d/%m/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\/(0?[1-9]|1[0-2])\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}}},"e_product":null,"listing_item":null,"labels":{"wnd.fe.CheckoutZipField.brInvalid":"Please enter valid ZIP code in format XXXXX-XXX","wnd.fe.CookieBar.message":"Ce site web utilise des « cookies » afin d'optimiser l'accès et améliorer votre expérience sur notre site. En utilisant votre navigation sur ce site, vous acceptez des cookies.","wnd.fe.FeFooter.createWebsite":"Créez votre site web gratuitement !","wnd.fe.FormManager.error.file.notAllowedExtension":"Le type de fichier "{EXTENSION}" n'est pas autorisé.","wnd.fe.FormManager.error.file.required":"Sélectionnez un fichier.","wnd.fe.FormManager.error.file.sizeExceeded":"La taille limite des fichiers à envoyer est de {SIZE} Mo.","wnd.fe.FormManager.error.userChangePassword":"Les mots de passe ne correspondent pas","wnd.fe.FormManager.error.userLogin.inactiveAccount":"Votre inscription n'est pas encore confirmée, vous ne pouvez pas vous connecter.","wnd.fe.FormManager.error.userLogin.invalidLogin":"Le nom d'utilisateur ou le mot de passe est incorrect !","wnd.fe.ListingData.shortMonthName.Apr":"avr.","wnd.fe.ListingData.shortMonthName.Aug":"août","wnd.fe.ListingData.shortMonthName.Dec":"déc.","wnd.fe.ListingData.shortMonthName.Feb":"févr.","wnd.fe.ListingData.shortMonthName.Jan":"janv.","wnd.fe.ListingData.shortMonthName.Jul":"juill.","wnd.fe.ListingData.shortMonthName.Jun":"juin","wnd.fe.ListingData.shortMonthName.Mar":"mars","wnd.fe.ListingData.shortMonthName.May":"mai","wnd.fe.ListingData.shortMonthName.Nov":"nov.","wnd.fe.ListingData.shortMonthName.Oct":"oct.","wnd.fe.ListingData.shortMonthName.Sep":"sept.","wnd.fe.ShoppingCartManager.count.between2And4":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.moreThan5":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.one":"{COUNT} article","wnd.fe.ShoppingCartTable.label.itemsInStock":"Only {COUNT} pcs available in stock","wnd.fe.ShoppingCartTable.label.itemsInStock.between2And4":"Seulement {COUNT} pièces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.moreThan5":"Seulement {COUNT} pièces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.one":"Seulement {COUNT} pièce disponible en stock","wnd.fe.ShoppingCartTable.label.outOfStock":"Épuisé","wnd.fe.UserBar.logOut":"Se déconnecter","wnd.pc.BlogDetailPageZone.next":"Articles récents","wnd.pc.BlogDetailPageZone.previous":"Anciens articles","wnd.pc.FileBlock.download":"TÉLÉCHARGER","wnd.pc.FormBlock.action.defaultMessage.text":"Le formulaire a été correctement envoyé.","wnd.pc.FormBlock.action.defaultMessage.title":"Merci !","wnd.pc.ListingDetailPageZone.next":"Suivant","wnd.pc.ListingDetailPageZone.previous":"Précédent","wnd.pc.ListingItemCopy.namePrefix":"Copie de","wnd.pc.Option.defaultText":"Nouvelle option","wnd.pc.PageCopy.namePrefix":"Copie de","wnd.pc.ProductAddToCartBlock.addToCart":"Ajouter au panier","wnd.pc.ProductItem.button.viewDetail":"Page produit","wnd.pc.ProductOptionGroupBlock.notSelected":"Aucune variante n'a été sélectionnée","wnd.pc.ProductOutOfStockBlock.label":"Épuisé","wnd.pc.ProductPriceBlock.prefixText":"À partir de ","wnd.pc.ProductPriceBlock.suffixText":"","wnd.pc.ProductsZone.label.collections":"Catégories","wnd.pc.ProductsZoneModel.label.allCollections":"Tous les produits","wnd.pc.ShoppingCartTable.label.checkout":"Passer commande","wnd.pc.ShoppingCartTable.label.checkoutDisabled":"La page de paiement n'est actuellement pas disponible (pas de moyen de paiement et de livraison)","wnd.pc.ShoppingCartTable.label.continue":"Continuer mes achats","wnd.pc.ShoppingCartTable.label.delete":"Supprimer","wnd.pc.ShoppingCartTable.label.item":"Produit","wnd.pc.ShoppingCartTable.label.price":"Prix","wnd.pc.ShoppingCartTable.label.quantity":"Quantité","wnd.pc.ShoppingCartTable.label.sum":"Total","wnd.pc.ShoppingCartTable.label.totalPrice":"Total","wnd.pc.ShoppingCartTable.placeholder.text":"Vous pouvez le changer. Choisissez dans notre vaste offre de produits !","wnd.pc.ShoppingCartTable.placeholder.title":"Votre panier est vide.","wnd.pc.SystemFooterBlock.poweredByWebnode":"Optimisé par {START_LINK}Webnode{END_LINK}","wnd.pc.UserChangePasswordFormBlock.invalidRecoveryUrl":"Le lien pour réinitialiser votre mot de passe a expiré. Pour recevoir un nouveau lien, ouvrez la page{START_LINK}Mot de passe oublié{END_LINK}","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.text":"Le lien de réinitialisation de votre mot de passe vient de vous être envoyé par email. Si vous ne l'avez pas reçu, consultez votre dossier courrier indésirable.","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.title":"Un e-mail vient de vous être envoyé avec des instructions","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.text":"Votre inscription est en attente d'approbation. Une fois l'inscription approuvée, vous recevrez un e-mail de confirmation.","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.title":"Merci pour votre inscription sur notre site.","wnd.pm.AddNewPagePattern.onlineStore":"Boutique en ligne"},"kbLinks":{"faq":"https://www.webnode.fr/support/index.php?/Knowledgebase/List/Index/371/","domainRegistration":"https://www.webnode.fr/support/index.php?/Knowledgebase/Article/View/3369/","domainTransfer":"https://www.webnode.fr/support/index.php?/Knowledgebase/Article/View/340/","webmailLogin":"https://www.webnode.fr/support/index.php?/Knowledgebase/Article/View/828/","webmail":"https://www.webnode.fr/support/index.php?/Knowledgebase/List/Index/437/","introduction":"https://www.webnode.fr/support/index.php?/Knowledgebase/Article/View/783/","orderTracking":"https://www.webnode.fr/support/index.php?/Knowledgebase/Article/View/5247/","storageBandwidth":"https://www.webnode.fr/support/index.php?/Knowledgebase/Article/View/811/","subPage":"https://www.webnode.fr/support/index.php?/Knowledgebase/Article/View/3171/","eshopPromo":"https://www.webnode.fr/support/index.php?/Knowledgebase/List/Index/440/","eshopDiscounts":"https://www.webnode.fr/support/index.php?/Knowledgebase/Article/View/5489/","domainBirthdateInfo":"https://www.webnode.com/support/index.php?/Knowledgebase/Article/View/150/","skRegistration":"https://www.webnode.com/support/index.php?/Knowledgebase/Article/View/228/","euTransfer":"https://www.webnode.com/support/index.php?/Knowledgebase/Article/View/230/","import":"https://www.webnode.com/support/index.php?/Knowledgebase/Article/View/5157/","eshopPromoVariants":"https://www.webnode.com/blog/2018/09/variants-are-here-sell-your-products-in-all-sizes-colors-or-flavors/","checkoutFi":"https://www.webnode.com/support/index.php?/Knowledgebase/Article/View/5392/","emailAccounts":"https://www.webnode.com/support/index.php?/Knowledgebase/Article/View/3211/","freightPriceSettings":"https://www.webnode.co.uk/support/index.php?/Knowledgebase/Article/View/5659/"},"aviary":[]};</script>
  <!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!--Start of Tawk.to Script--> <script type="text/javascript"> var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/5f5d0397f0e7167d000fc5a0/default'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0); })(); </script> <!--End of Tawk.to Script--></body></html>`)
});

app.get('/createur',function(req, res){
  res.send(`<html class="js flexbox cssmask objectfit object-fit pc fonts-loaded" prefix="og: https://ogp.me/ns#" lang="fr"><!--<![endif]--><head><meta charset="utf-8"><link rel="shortcut icon" href=""><link rel="apple-touch-icon" href=""><link rel="icon" href=""><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Kirito</title><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="msapplication-tap-highlight" content="no"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/4d/4dd/4dd8tz.css?ph=3f711ab880" rel="stylesheet"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/2r/2rf/2rf8hy.css?ph=3f711ab880" rel="stylesheet"><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/0e/0e1/0e1be2.css?ph=3f711ab880" data-wnd_color_scheme_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/42/42e/42e5o5.css?ph=3f711ab880" data-wnd_additive_color_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/1x/1xk/1xkzbf.css?ph=3f711ab880" data-wnd_typography_file=""><meta name="description" content="@[𝕿𝕳𝕰] 𝕯.𝕯.𝕷.𝕸.#1999"><meta name="keywords" content=""><meta name="generator" content="Webnode 2"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">

  <meta property="og:url" content="https://kirito67.webnode.fr/createur/"><meta property="og:title" content="Créateur :: Kirito"><meta property="og:type" content="article"><meta property="og:description" content="@[𝕿𝕳𝕰] 𝕯.𝕯.𝕷.𝕸.#1999"><meta property="og:site_name" content="Kirito"><meta property="og:image" content="https://kirito67.webnode.fr/_files/200000004-c085cc085e/700/20200813_100604-5.jpg"><meta property="og:article:published_time" content="2020-09-13T00:00:00+0200"><meta name="robots" content="index,follow"><link rel="canonical" href="https://kirito67.webnode.fr/createur/"><script async="" src="//www.google-analytics.com/analytics.js"></script><script>window.checkAndChangeSvgColor=function(c){try{var a=document.getElementById(c);if(a){c=[["border","borderColor"],["outline","outlineColor"],["color","color"]];for(var h,b,d,f=[],e=0,m=c.length;e<m;e++)if(h=window.getComputedStyle(a)[c[e][1]].replace(/\s/g,"").match(/^rgb[a]?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i)){b="";for(var g=1;3>=g;g++)b+=("0"+parseInt(h[g],10).toString(16)).slice(-2);"0"===b.charAt(0)&&(d=parseInt(b.substr(0,2),16),d=Math.max(16,d),b=d.toString(16)+b.slice(-4));f.push(c[e][0]+"="+b)}if(f.length){var k=a.getAttribute("data-src"),l=k+(0>k.indexOf("?")?"?":"&")+f.join("&");a.src!=l&&(a.src=l,a.outerHTML=a.outerHTML)}}}catch(n){}};</script><link rel="stylesheet" href="https://use.typekit.net/lab8xti.css"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-797705-6', 'auto',{"name":"wnd_header"});ga('wnd_header.set', 'dimension1', 'W2');ga('wnd_header.set', 'anonymizeIp', true);ga('wnd_header.send', 'pageview');</script></head><body class="l l-02 layout-02 c-s-n wt-page ac-h ac-i b-btn-sq b-btn-s-l b-btn-dn b-btn-bw-1 img-d-n img-t-o img-h-z line-solid b-e-sbs lbox-d c-s-n wnd-fe desktop safari">
    <div class="wnd-page cs-gray ac-none">
  
      <div id="wrapper" class="l-w cf t-33">
  
        <header id="header" class="l-h cf"><div id="layout-section" class="s section header header-01 claim-section cf design-04 sc-w">
            <div class="section-fixed wnd-fixed">
              <div class="section-inner">
                <div class="nav-line cf">
  
                  <div class="logo logo-default brandon-grotesque wnd-logo-with-text wnd-image-vector">
      <div class="logo-content">
          <a href="/home/">
              
              <div class="embed-content">
                <div class="embed-content-cell">
                      <embed id="wnd_LogoBlock_663084_img" type="image/svg+xml" data-src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880" src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880&amp;border=100000&amp;outline=100000&amp;color=100000"><script>checkAndChangeSvgColor('wnd_LogoBlock_663084_img');</script></div>
              </div>
            <div class="text-content-outer">
                  <span class="text-content">𝕿𝕳𝕰</span>
            </div>
          </a>
      </div>
  </div>
  
                  
  
                  <nav id="menu" role="navigation" style=""><div class="menu-font">
    <a href="#" class="close-menu" rel="nofollow">
      <span>Close Menu</span>
    </a>
    <ul class="level-1"><li class="wnd-homepage">
        <a class="menu-item" href="/home/"><span class="menu-item-text">Accueil</span></a>
        
      </li><li>
        <a class="menu-item" href="/notre-serveur-suport/"><span class="menu-item-text">Notre serveur suport</span></a>
        
      </li><li>
        <a class="menu-item" href="/a-propos/"><span class="menu-item-text">À propos de Kirito</span></a>
        
      </li><li class="wnd-active-path wnd-with-submenu">
        <a class="menu-item" href="/notre-equipe/"><span class="menu-item-text">Notre équipe</span></a>
        <ul class="level-2 open"><li class="wnd-active wnd-active-path">
        <a class="menu-item" href="/createur/"><span class="menu-item-text">Créateur</span></a>
        
      </li><li>
        <a class="menu-item" href="/equipe-staff/"><span class="menu-item-text">Équipe staff</span></a>
        
      </li>
    </ul>
      <a class="mm-arrow mm-up" href="#"></a></li>
    </ul><span class="more-text">Plus</span>
  </div></nav><script type="application/javascript">var el=document.getElementById("menu");"undefined"!=typeof el&&(el.style.display="none")</script><div id="menu-mobile" class="">
                    <a href="#" id="menu-submit"><span></span>Menu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </header><main id="main" class="l-m cf" role="main">
  
          <div class="section-wrapper cf">
    <div class="section-wrapper-content cf"><div class="s section header header-01 claim-section cf design-04 sc-w">
    <div class="section-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner section-claim header-height-sp-01">
      <div class="claim-content cf">
        <div class="header-claim cf">
          <h1>
            <div class="big-claim auto-font-size cf"><span class="styled-inline-text claim-borders abril-fatface">
    <span><span>Créateur</span></span>
  </span></div>
            <div class="small-claim cf"><span class="styled-inline-text claim-default wnd-font-size-20 proxima-nova">
    <span><span></span></span>
  </span></div>
          </h1>
        </div>
      </div>
    </div>
  </div><section class="s section default-01 design-01 sc-w"><div class="section-bg s-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner">
      <div class="content ez cf wnd-no-cols">
    <div class="ez-c">
      <div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><p>@[𝕿𝕳𝕰] 𝕯.𝕯.𝕷.𝕸.#1999</p>
  </div>
  </div><div class="b-img b-img-default b b-s cf wnd-orientation-square wnd-type-image img-s-n" style="margin-left:12.22%;margin-right:12.22%;" id="wnd_ImageBlock_10470">
      <div class="b-img-w">
          <div class="b-img-c cf" style="padding-bottom:100%;text-align:center;">
              <img src="https://kirito67.webnode.fr/_files/200000004-c085cc085e/700/20200813_100604-5.jpg" alt="" style="top:0%;left:0%;width:100%;height:100%;position:absolute;"><div class="b-img-embed">
                  </div>
          </div>
  
          <div class="b-img-t"></div>
      </div>
  </div><div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf">@𝕂𝕀𝕃𝕃𝔼ℝ 𝕎𝕆𝕃𝔽#9523</div>
  </div><div class="b-img b-img-default b b-s cf wnd-orientation-square wnd-type-image img-s-n" style="margin-left:12.22%;margin-right:12.22%;" id="wnd_ImageBlock_82188">
      <div class="b-img-w">
          <div class="b-img-c cf" style="padding-bottom:100%;text-align:center;">
              <img src="https://kirito67.webnode.fr/_files/200000005-b7a33b7a35/700/IMG_20200912_184059-1.jpg" alt="" style="top:0%;left:0%;width:100%;height:100%;position:absolute;"><div class="b-img-embed">
                  </div>
          </div>
  
          <div class="b-img-t"></div>
      </div>
  </div>
    </div>
    
  </div>
    </div>
  </section></div>
  </div>
  
        </main><footer id="footer" class="l-f cf">
  
          <div class="section-wrapper cf">
    <div class="section-wrapper-content cf"><div wn-border="top" wn-border-element="footer-line" class="s section footer-01 footer-font design-01 sc-b">
    <div class="section-bg s-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner">
      
    </div>
  </div></div>
  </div>
  
        </footer></div>
  
    </div>
  
    
  <script type="text/javascript" src="https://d1di2lzuh97fh2.cloudfront.net/files/3f/3f4/3f40k1.js?ph=3f711ab880"></script><script type="application/javascript">!function(){if(0==document.getElementsByClassName("wnd-cms").length)for(var e=document.getElementsByClassName("column-content"),s=0;s<e.length;s++){var t=e[s].querySelector("div"),l=t.getElementsByClassName("b-text-c");void 0!=l[0]&&t.firstChild==t.lastChild&&""===l[0].innerText&&(e[s].classList?e[s].classList.add("column-empty"):(e[s].classList?e[s].classList.contains("column-empty"):new RegExp("\\bcolumn-empty\\b").test(e[s].className))&&(e[s].className+=" column-empty"))}}()</script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/lang.fr.230.js?ph=3f711ab880" crossorigin="anonymous"></script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/compiled.multi.2-766.js?ph=3f711ab880" crossorigin="anonymous"></script><script>var wnd = wnd || {};wnd.$data = {"image_content_items":{"wnd_ThumbnailBlock_334498":{"id":"wnd_ThumbnailBlock_334498","type":"wnd.pc.ThumbnailBlock"},"wnd_HeaderSection_header_1_70937":{"id":"wnd_HeaderSection_header_1_70937","type":"wnd.pc.HeaderSection"},"wnd_Section_default_663775":{"id":"wnd_Section_default_663775","type":"wnd.pc.Section"},"wnd_ImageBlock_10470":{"id":"wnd_ImageBlock_10470","type":"wnd.pc.ImageBlock"},"wnd_ImageBlock_82188":{"id":"wnd_ImageBlock_82188","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"},"wnd_FooterSection_footer_497077":{"id":"wnd_FooterSection_footer_497077","type":"wnd.pc.FooterSection"}},"svg_content_items":{"wnd_ImageBlock_10470":{"id":"wnd_ImageBlock_10470","type":"wnd.pc.ImageBlock"},"wnd_ImageBlock_82188":{"id":"wnd_ImageBlock_82188","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"}},"content_items":[],"project_info":{"isMultilanguage":false,"eshop_tax_enabled":"1","country_code":"","contact_state":"","eshop_tax_type":"VAT","eshop_discounts":false}};</script><script>wnd.$system = {"filesPath":"https:\/\/kirito67.webnode.fr\/_files\/","staticFiles":"https:\/\/d1di2lzuh97fh2.cloudfront.net\/files","isCms":false,"staticCDNServers":["https:\/\/d1di2lzuh97fh2.cloudfront.net\/"],"fileUploadAllowExtension":["jpg","jpeg","png","gif","bmp","ico","svg","webp","tiff","pdf","doc","docx","ppt","pptx","pps","ppsx","odt","xls","xlsx","txt","rtf","mp3","wma","wav","ogg","amr","flac","m4a","3gp","avi","wmv","mov","mpg","mkv","mp4","mpeg","m4v","swf","gpx","stl","csv","xml","txt","dxf","dwg","iges","igs","step","stp"],"maxUserFormFileLimit":4194304,"frontendLanguage":"fr","backendLanguage":"fr","page":{"id":200000079,"identifier":"createur","template":{"id":200000005,"styles":{"typography":"t-33","scheme":"cs-gray","additiveColor":"ac-none","acHeadings":true,"acSubheadings":false,"acIcons":true,"acOthers":false,"imageStyle":"img-d-n","imageHover":"img-h-z","imageTitle":"img-t-o","buttonStyle":"b-btn-sq","buttonSize":"b-btn-s-l","buttonDecoration":"b-btn-dn","buttonBorders":"b-btn-bw-1","lineStyle":"line-solid","eshopGridItemStyle":"b-e-sbs","lightboxStyle":"lbox-d","columnSpaces":"c-s-n","background":{"default":null},"backgroundSettings":{"default":""}}},"layout":"default","name":"Cr\u00e9ateur","html_title":"","language":"fr","langId":1,"isHomepage":false,"meta_description":null,"meta_keywords":null,"header_code":null,"footer_code":null,"styles":[],"countFormsEntries":[]},"listingsPrefix":"\/l\/","productPrefix":"\/p\/","cartPrefix":"\/cart\/","checkoutPrefix":"\/checkout\/","isCheckout":false,"isEshop":false,"isProductDetail":false,"isListingDetail":false,"hasEshopAnalytics":false,"gTagId":null,"currency":"USD","format":{"be":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}},"fe":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}}},"e_product":null,"listing_item":null,"labels":{"wnd.fe.CheckoutZipField.brInvalid":"Please enter valid ZIP code in format XXXXX-XXX","wnd.fe.CookieBar.message":"Ce site web utilise des \u00ab cookies \u00bb afin d'optimiser l'acc\u00e8s et am\u00e9liorer votre exp\u00e9rience sur notre site. En utilisant votre navigation sur ce site, vous acceptez des cookies.","wnd.fe.FeFooter.createWebsite":"Cr\u00e9ez votre site web gratuitement !","wnd.fe.FormManager.error.file.notAllowedExtension":"Le type de fichier \u0022{EXTENSION}\u0022 n'est pas autoris\u00e9.","wnd.fe.FormManager.error.file.required":"S\u00e9lectionnez un fichier.","wnd.fe.FormManager.error.file.sizeExceeded":"La taille limite des fichiers \u00e0 envoyer est de {SIZE} Mo.","wnd.fe.FormManager.error.userChangePassword":"Les mots de passe ne correspondent pas","wnd.fe.FormManager.error.userLogin.inactiveAccount":"Votre inscription n'est pas encore confirm\u00e9e, vous ne pouvez pas vous connecter.","wnd.fe.FormManager.error.userLogin.invalidLogin":"Le nom d'utilisateur ou le mot de passe est incorrect !","wnd.fe.ListingData.shortMonthName.Apr":"avr.","wnd.fe.ListingData.shortMonthName.Aug":"ao\u00fbt","wnd.fe.ListingData.shortMonthName.Dec":"d\u00e9c.","wnd.fe.ListingData.shortMonthName.Feb":"f\u00e9vr.","wnd.fe.ListingData.shortMonthName.Jan":"janv.","wnd.fe.ListingData.shortMonthName.Jul":"juill.","wnd.fe.ListingData.shortMonthName.Jun":"juin","wnd.fe.ListingData.shortMonthName.Mar":"mars","wnd.fe.ListingData.shortMonthName.May":"mai","wnd.fe.ListingData.shortMonthName.Nov":"nov.","wnd.fe.ListingData.shortMonthName.Oct":"oct.","wnd.fe.ListingData.shortMonthName.Sep":"sept.","wnd.fe.ShoppingCartManager.count.between2And4":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.moreThan5":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.one":"{COUNT} article","wnd.fe.ShoppingCartTable.label.itemsInStock":"Only {COUNT} pcs available in stock","wnd.fe.ShoppingCartTable.label.itemsInStock.between2And4":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.moreThan5":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.one":"Seulement {COUNT} pi\u00e8ce disponible en stock","wnd.fe.ShoppingCartTable.label.outOfStock":"\u00c9puis\u00e9","wnd.fe.UserBar.logOut":"Se d\u00e9connecter","wnd.pc.BlogDetailPageZone.next":"Articles r\u00e9cents","wnd.pc.BlogDetailPageZone.previous":"Anciens articles","wnd.pc.FileBlock.download":"T\u00c9L\u00c9CHARGER","wnd.pc.FormBlock.action.defaultMessage.text":"Le formulaire a \u00e9t\u00e9 correctement envoy\u00e9.","wnd.pc.FormBlock.action.defaultMessage.title":"Merci !","wnd.pc.ListingDetailPageZone.next":"Suivant","wnd.pc.ListingDetailPageZone.previous":"Pr\u00e9c\u00e9dent","wnd.pc.ListingItemCopy.namePrefix":"Copie de","wnd.pc.Option.defaultText":"Nouvelle option","wnd.pc.PageCopy.namePrefix":"Copie de","wnd.pc.ProductAddToCartBlock.addToCart":"Ajouter au panier","wnd.pc.ProductItem.button.viewDetail":"Page produit","wnd.pc.ProductOptionGroupBlock.notSelected":"Aucune variante n'a \u00e9t\u00e9 s\u00e9lectionn\u00e9e","wnd.pc.ProductOutOfStockBlock.label":"\u00c9puis\u00e9","wnd.pc.ProductPriceBlock.prefixText":"\u00c0 partir de ","wnd.pc.ProductPriceBlock.suffixText":"","wnd.pc.ProductsZone.label.collections":"Cat\u00e9gories","wnd.pc.ProductsZoneModel.label.allCollections":"Tous les produits","wnd.pc.ShoppingCartTable.label.checkout":"Passer commande","wnd.pc.ShoppingCartTable.label.checkoutDisabled":"La page de paiement n'est actuellement pas disponible (pas de moyen de paiement et de livraison)","wnd.pc.ShoppingCartTable.label.continue":"Continuer mes achats","wnd.pc.ShoppingCartTable.label.delete":"Supprimer","wnd.pc.ShoppingCartTable.label.item":"Produit","wnd.pc.ShoppingCartTable.label.price":"Prix","wnd.pc.ShoppingCartTable.label.quantity":"Quantit\u00e9","wnd.pc.ShoppingCartTable.label.sum":"Total","wnd.pc.ShoppingCartTable.label.totalPrice":"Total","wnd.pc.ShoppingCartTable.placeholder.text":"Vous pouvez le changer. Choisissez dans notre vaste offre de produits !","wnd.pc.ShoppingCartTable.placeholder.title":"Votre panier est vide.","wnd.pc.SystemFooterBlock.poweredByWebnode":"Optimis\u00e9 par {START_LINK}Webnode{END_LINK}","wnd.pc.UserChangePasswordFormBlock.invalidRecoveryUrl":"Le lien pour r\u00e9initialiser votre mot de passe a expir\u00e9. Pour recevoir un nouveau lien, ouvrez la page{START_LINK}Mot de passe oubli\u00e9{END_LINK}","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.text":"Le lien de r\u00e9initialisation de votre mot de passe vient de vous \u00eatre envoy\u00e9 par email. Si vous ne l'avez pas re\u00e7u, consultez votre dossier courrier ind\u00e9sirable.","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.title":"Un e-mail vient de vous \u00eatre envoy\u00e9 avec des instructions","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.text":"Votre inscription est en attente d'approbation. Une fois l'inscription approuv\u00e9e, vous recevrez un e-mail de confirmation.","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.title":"Merci pour votre inscription sur notre site.","wnd.pm.AddNewPagePattern.onlineStore":"Boutique en ligne"},"kbLinks":{"faq":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/371\/","domainRegistration":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3369\/","domainTransfer":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/340\/","webmailLogin":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/828\/","webmail":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/437\/","introduction":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/783\/","orderTracking":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5247\/","storageBandwidth":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/811\/","subPage":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3171\/","eshopPromo":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/440\/","eshopDiscounts":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5489\/","domainBirthdateInfo":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/150\/","skRegistration":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/228\/","euTransfer":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/230\/","import":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5157\/","eshopPromoVariants":"https:\/\/www.webnode.com\/blog\/2018\/09\/variants-are-here-sell-your-products-in-all-sizes-colors-or-flavors\/","checkoutFi":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5392\/","emailAccounts":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/3211\/","freightPriceSettings":"https:\/\/www.webnode.co.uk\/support\/index.php?\/Knowledgebase\/Article\/View\/5659\/"},"aviary":[]};</script>
  <!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!--Start of Tawk.to Script--> <script type="text/javascript"> var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/5f5d0397f0e7167d000fc5a0/default'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0); })(); </script> <!--End of Tawk.to Script--></body></html>`)
});

app.get(`/equipe-staff`, function(req, res) {
  res.send(`<html class="js flexbox cssmask objectfit object-fit pc fonts-loaded" prefix="og: https://ogp.me/ns#" lang="fr"><!--<![endif]--><head><meta charset="utf-8"><link rel="shortcut icon" href=""><link rel="apple-touch-icon" href=""><link rel="icon" href=""><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Kirito</title><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="msapplication-tap-highlight" content="no"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/4d/4dd/4dd8tz.css?ph=3f711ab880" rel="stylesheet"><link href="https://d1di2lzuh97fh2.cloudfront.net/files/2r/2rf/2rf8hy.css?ph=3f711ab880" rel="stylesheet"><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/0e/0e1/0e1be2.css?ph=3f711ab880" data-wnd_color_scheme_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/42/42e/42e5o5.css?ph=3f711ab880" data-wnd_additive_color_file=""><link rel="stylesheet" href="https://d1di2lzuh97fh2.cloudfront.net/files/1x/1xk/1xkzbf.css?ph=3f711ab880" data-wnd_typography_file=""><meta name="description" content="@Catyny#6825"><meta name="keywords" content=""><meta name="generator" content="Webnode 2"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">

  <meta property="og:url" content="https://kirito67.webnode.fr/equipe-staff/"><meta property="og:title" content="Équipe staff :: Kirito"><meta property="og:type" content="article"><meta property="og:description" content="@Catyny#6825"><meta property="og:site_name" content="Kirito"><meta property="og:image" content="https://kirito67.webnode.fr/_files/200000003-a787fa7881/700/IMG_20200912_184630.jpg"><meta property="og:article:published_time" content="2020-09-13T00:00:00+0200"><meta name="robots" content="index,follow"><link rel="canonical" href="https://kirito67.webnode.fr/equipe-staff/"><script async="" src="//www.google-analytics.com/analytics.js"></script><script>window.checkAndChangeSvgColor=function(c){try{var a=document.getElementById(c);if(a){c=[["border","borderColor"],["outline","outlineColor"],["color","color"]];for(var h,b,d,f=[],e=0,m=c.length;e<m;e++)if(h=window.getComputedStyle(a)[c[e][1]].replace(/\s/g,"").match(/^rgb[a]?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i)){b="";for(var g=1;3>=g;g++)b+=("0"+parseInt(h[g],10).toString(16)).slice(-2);"0"===b.charAt(0)&&(d=parseInt(b.substr(0,2),16),d=Math.max(16,d),b=d.toString(16)+b.slice(-4));f.push(c[e][0]+"="+b)}if(f.length){var k=a.getAttribute("data-src"),l=k+(0>k.indexOf("?")?"?":"&")+f.join("&");a.src!=l&&(a.src=l,a.outerHTML=a.outerHTML)}}}catch(n){}};</script><link rel="stylesheet" href="https://use.typekit.net/lab8xti.css"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-797705-6', 'auto',{"name":"wnd_header"});ga('wnd_header.set', 'dimension1', 'W2');ga('wnd_header.set', 'anonymizeIp', true);ga('wnd_header.send', 'pageview');</script></head><body class="l l-02 layout-02 c-s-n wt-page ac-h ac-i b-btn-sq b-btn-s-l b-btn-dn b-btn-bw-1 img-d-n img-t-o img-h-z line-solid b-e-sbs lbox-d c-s-n wnd-fe desktop safari">
    <div class="wnd-page cs-gray ac-none">
  
      <div id="wrapper" class="l-w cf t-33">
  
        <header id="header" class="l-h cf"><div id="layout-section" class="s section header header-01 claim-section cf design-04 sc-w">
            <div class="section-fixed wnd-fixed">
              <div class="section-inner">
                <div class="nav-line cf">
  
                  <div class="logo logo-default brandon-grotesque wnd-logo-with-text wnd-image-vector">
      <div class="logo-content">
          <a href="/home/">
              
              <div class="embed-content">
                <div class="embed-content-cell">
                      <embed id="wnd_LogoBlock_663084_img" type="image/svg+xml" data-src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880" src="https://d1di2lzuh97fh2.cloudfront.net/files/1s/1sy/1sy53q.svg?ph=3f711ab880&amp;border=100000&amp;outline=100000&amp;color=100000"><script>checkAndChangeSvgColor('wnd_LogoBlock_663084_img');</script></div>
              </div>
            <div class="text-content-outer">
                  <span class="text-content">𝕿𝕳𝕰</span>
            </div>
          </a>
      </div>
  </div>
  
                  
  
                  <nav id="menu" role="navigation" style=""><div class="menu-font">
    <a href="#" class="close-menu" rel="nofollow">
      <span>Close Menu</span>
    </a>
    <ul class="level-1"><li class="wnd-homepage">
        <a class="menu-item" href="/home/"><span class="menu-item-text">Accueil</span></a>
        
      </li><li>
        <a class="menu-item" href="/notre-serveur-suport/"><span class="menu-item-text">Notre serveur suport</span></a>
        
      </li><li>
        <a class="menu-item" href="/a-propos/"><span class="menu-item-text">À propos de Kirito</span></a>
        
      </li><li class="wnd-active-path wnd-with-submenu">
        <a class="menu-item" href="/notre-equipe/"><span class="menu-item-text">Notre équipe</span></a>
        <ul class="level-2 open"><li>
        <a class="menu-item" href="/createur/"><span class="menu-item-text">Créateur</span></a>
        
      </li><li class="wnd-active wnd-active-path">
        <a class="menu-item" href="/equipe-staff/"><span class="menu-item-text">Équipe staff</span></a>
        
      </li>
    </ul>
      <a class="mm-arrow mm-up" href="#"></a></li>
    </ul><span class="more-text">Plus</span>
  </div></nav><script type="application/javascript">var el=document.getElementById("menu");"undefined"!=typeof el&&(el.style.display="none")</script><div id="menu-mobile" class="">
                    <a href="#" id="menu-submit"><span></span>Menu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </header><main id="main" class="l-m cf" role="main">
  
          <div class="section-wrapper cf">
    <div class="section-wrapper-content cf"><div class="s section header header-01 claim-section cf design-04 sc-w">
    <div class="section-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner section-claim header-height-sp-01">
      <div class="claim-content cf">
        <div class="header-claim cf">
          <h1>
            <div class="big-claim auto-font-size cf"><span class="styled-inline-text claim-borders abril-fatface">
    <span><span>Équipe staff</span></span>
  </span></div>
            <div class="small-claim cf"><span class="styled-inline-text claim-default wnd-font-size-20 proxima-nova">
    <span><span></span></span>
  </span></div>
          </h1>
        </div>
      </div>
    </div>
  </div><section class="s section default-01 design-01 sc-w"><div class="section-bg s-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner">
      <div class="content ez cf wnd-no-cols">
    <div class="ez-c">
      <div class="b b-text cf">
    <div class="b-c b-text-c b-s b-s-t60 b-s-b60 cf"><p dir="ltr"><strong>@Catyny#6825</strong> </p></div>
  </div><div class="b-img b-img-default b b-s cf wnd-orientation-square wnd-type-image img-s-n" style="margin-left:12.22%;margin-right:12.22%;" id="wnd_ImageBlock_25286">
      <div class="b-img-w">
          <div class="b-img-c cf" style="padding-bottom:100%;text-align:center;">
              <img src="https://kirito67.webnode.fr/_files/200000003-a787fa7881/700/IMG_20200912_184630.jpg" alt="" style="top:0%;left:0%;width:100%;height:100%;position:absolute;"><div class="b-img-embed">
                  </div>
          </div>
  
          <div class="b-img-t"></div>
      </div>
  </div>
    </div>
    
  </div>
    </div>
  </section></div>
  </div>
  
        </main><footer id="footer" class="l-f cf">
  
          <div class="section-wrapper cf">
    <div class="section-wrapper-content cf"><div wn-border="top" wn-border-element="footer-line" class="s section footer-01 footer-font design-01 sc-b">
    <div class="section-bg s-bg">
      <div class="section-bg-layer">
        
      </div>
      <div class="section-bg-layer section-bg-overlay"></div>
    </div>
    <div class="section-inner">
      
    </div>
  </div></div>
  </div>
  
        </footer></div>
  
    </div>
  
    
  <script type="text/javascript" src="https://d1di2lzuh97fh2.cloudfront.net/files/3f/3f4/3f40k1.js?ph=3f711ab880"></script><script type="application/javascript">!function(){if(0==document.getElementsByClassName("wnd-cms").length)for(var e=document.getElementsByClassName("column-content"),s=0;s<e.length;s++){var t=e[s].querySelector("div"),l=t.getElementsByClassName("b-text-c");void 0!=l[0]&&t.firstChild==t.lastChild&&""===l[0].innerText&&(e[s].classList?e[s].classList.add("column-empty"):(e[s].classList?e[s].classList.contains("column-empty"):new RegExp("\\bcolumn-empty\\b").test(e[s].className))&&(e[s].className+=" column-empty"))}}()</script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/lang.fr.230.js?ph=3f711ab880" crossorigin="anonymous"></script><script src="https://d1di2lzuh97fh2.cloudfront.net/client.fe/js.compiled/compiled.multi.2-766.js?ph=3f711ab880" crossorigin="anonymous"></script><script>var wnd = wnd || {};wnd.$data = {"image_content_items":{"wnd_ThumbnailBlock_334498":{"id":"wnd_ThumbnailBlock_334498","type":"wnd.pc.ThumbnailBlock"},"wnd_HeaderSection_header_1_562276":{"id":"wnd_HeaderSection_header_1_562276","type":"wnd.pc.HeaderSection"},"wnd_Section_default_595411":{"id":"wnd_Section_default_595411","type":"wnd.pc.Section"},"wnd_ImageBlock_25286":{"id":"wnd_ImageBlock_25286","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"},"wnd_FooterSection_footer_497077":{"id":"wnd_FooterSection_footer_497077","type":"wnd.pc.FooterSection"}},"svg_content_items":{"wnd_ImageBlock_25286":{"id":"wnd_ImageBlock_25286","type":"wnd.pc.ImageBlock"},"wnd_LogoBlock_663084":{"id":"wnd_LogoBlock_663084","type":"wnd.pc.LogoBlock"}},"content_items":[],"project_info":{"isMultilanguage":false,"eshop_tax_enabled":"1","country_code":"","contact_state":"","eshop_tax_type":"VAT","eshop_discounts":false}};</script><script>wnd.$system = {"filesPath":"https:\/\/kirito67.webnode.fr\/_files\/","staticFiles":"https:\/\/d1di2lzuh97fh2.cloudfront.net\/files","isCms":false,"staticCDNServers":["https:\/\/d1di2lzuh97fh2.cloudfront.net\/"],"fileUploadAllowExtension":["jpg","jpeg","png","gif","bmp","ico","svg","webp","tiff","pdf","doc","docx","ppt","pptx","pps","ppsx","odt","xls","xlsx","txt","rtf","mp3","wma","wav","ogg","amr","flac","m4a","3gp","avi","wmv","mov","mpg","mkv","mp4","mpeg","m4v","swf","gpx","stl","csv","xml","txt","dxf","dwg","iges","igs","step","stp"],"maxUserFormFileLimit":4194304,"frontendLanguage":"fr","backendLanguage":"fr","page":{"id":200000077,"identifier":"equipe-staff","template":{"id":200000005,"styles":{"typography":"t-33","scheme":"cs-gray","additiveColor":"ac-none","acHeadings":true,"acSubheadings":false,"acIcons":true,"acOthers":false,"imageStyle":"img-d-n","imageHover":"img-h-z","imageTitle":"img-t-o","buttonStyle":"b-btn-sq","buttonSize":"b-btn-s-l","buttonDecoration":"b-btn-dn","buttonBorders":"b-btn-bw-1","lineStyle":"line-solid","eshopGridItemStyle":"b-e-sbs","lightboxStyle":"lbox-d","columnSpaces":"c-s-n","background":{"default":null},"backgroundSettings":{"default":""}}},"layout":"default","name":"\u00c9quipe staff","html_title":"","language":"fr","langId":1,"isHomepage":false,"meta_description":null,"meta_keywords":null,"header_code":null,"footer_code":null,"styles":[],"countFormsEntries":[]},"listingsPrefix":"\/l\/","productPrefix":"\/p\/","cartPrefix":"\/cart\/","checkoutPrefix":"\/checkout\/","isCheckout":false,"isEshop":false,"isProductDetail":false,"isListingDetail":false,"hasEshopAnalytics":false,"gTagId":null,"currency":"USD","format":{"be":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}},"fe":{"DATE_TIME":{"mask":"%d\/%m\/%Y %H:%M","regexp":"^(((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})(( [0-1][0-9]| 2[0-3]):[0-5][0-9])?|(([0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1])(0[0-9]|1[0-9]|2[0-3])[0-5][0-9][0-5][0-9])))?$"},"DATE":{"mask":"%d\/%m\/%Y","regexp":"^((0?[1-9]|[1,2][0-9]|3[0,1])\\\/(0?[1-9]|1[0-2])\\\/[0-9]{1,4})$"},"CURRENCY":{"mask":{"point":",","thousands":" ","decimals":2,"mask":"%s","zerofill":true}}}},"e_product":null,"listing_item":null,"labels":{"wnd.fe.CheckoutZipField.brInvalid":"Please enter valid ZIP code in format XXXXX-XXX","wnd.fe.CookieBar.message":"Ce site web utilise des \u00ab cookies \u00bb afin d'optimiser l'acc\u00e8s et am\u00e9liorer votre exp\u00e9rience sur notre site. En utilisant votre navigation sur ce site, vous acceptez des cookies.","wnd.fe.FeFooter.createWebsite":"Cr\u00e9ez votre site web gratuitement !","wnd.fe.FormManager.error.file.notAllowedExtension":"Le type de fichier \u0022{EXTENSION}\u0022 n'est pas autoris\u00e9.","wnd.fe.FormManager.error.file.required":"S\u00e9lectionnez un fichier.","wnd.fe.FormManager.error.file.sizeExceeded":"La taille limite des fichiers \u00e0 envoyer est de {SIZE} Mo.","wnd.fe.FormManager.error.userChangePassword":"Les mots de passe ne correspondent pas","wnd.fe.FormManager.error.userLogin.inactiveAccount":"Votre inscription n'est pas encore confirm\u00e9e, vous ne pouvez pas vous connecter.","wnd.fe.FormManager.error.userLogin.invalidLogin":"Le nom d'utilisateur ou le mot de passe est incorrect !","wnd.fe.ListingData.shortMonthName.Apr":"avr.","wnd.fe.ListingData.shortMonthName.Aug":"ao\u00fbt","wnd.fe.ListingData.shortMonthName.Dec":"d\u00e9c.","wnd.fe.ListingData.shortMonthName.Feb":"f\u00e9vr.","wnd.fe.ListingData.shortMonthName.Jan":"janv.","wnd.fe.ListingData.shortMonthName.Jul":"juill.","wnd.fe.ListingData.shortMonthName.Jun":"juin","wnd.fe.ListingData.shortMonthName.Mar":"mars","wnd.fe.ListingData.shortMonthName.May":"mai","wnd.fe.ListingData.shortMonthName.Nov":"nov.","wnd.fe.ListingData.shortMonthName.Oct":"oct.","wnd.fe.ListingData.shortMonthName.Sep":"sept.","wnd.fe.ShoppingCartManager.count.between2And4":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.moreThan5":"{COUNT} articles","wnd.fe.ShoppingCartManager.count.one":"{COUNT} article","wnd.fe.ShoppingCartTable.label.itemsInStock":"Only {COUNT} pcs available in stock","wnd.fe.ShoppingCartTable.label.itemsInStock.between2And4":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.moreThan5":"Seulement {COUNT} pi\u00e8ces disponibles en stock","wnd.fe.ShoppingCartTable.label.itemsInStock.one":"Seulement {COUNT} pi\u00e8ce disponible en stock","wnd.fe.ShoppingCartTable.label.outOfStock":"\u00c9puis\u00e9","wnd.fe.UserBar.logOut":"Se d\u00e9connecter","wnd.pc.BlogDetailPageZone.next":"Articles r\u00e9cents","wnd.pc.BlogDetailPageZone.previous":"Anciens articles","wnd.pc.FileBlock.download":"T\u00c9L\u00c9CHARGER","wnd.pc.FormBlock.action.defaultMessage.text":"Le formulaire a \u00e9t\u00e9 correctement envoy\u00e9.","wnd.pc.FormBlock.action.defaultMessage.title":"Merci !","wnd.pc.ListingDetailPageZone.next":"Suivant","wnd.pc.ListingDetailPageZone.previous":"Pr\u00e9c\u00e9dent","wnd.pc.ListingItemCopy.namePrefix":"Copie de","wnd.pc.Option.defaultText":"Nouvelle option","wnd.pc.PageCopy.namePrefix":"Copie de","wnd.pc.ProductAddToCartBlock.addToCart":"Ajouter au panier","wnd.pc.ProductItem.button.viewDetail":"Page produit","wnd.pc.ProductOptionGroupBlock.notSelected":"Aucune variante n'a \u00e9t\u00e9 s\u00e9lectionn\u00e9e","wnd.pc.ProductOutOfStockBlock.label":"\u00c9puis\u00e9","wnd.pc.ProductPriceBlock.prefixText":"\u00c0 partir de ","wnd.pc.ProductPriceBlock.suffixText":"","wnd.pc.ProductsZone.label.collections":"Cat\u00e9gories","wnd.pc.ProductsZoneModel.label.allCollections":"Tous les produits","wnd.pc.ShoppingCartTable.label.checkout":"Passer commande","wnd.pc.ShoppingCartTable.label.checkoutDisabled":"La page de paiement n'est actuellement pas disponible (pas de moyen de paiement et de livraison)","wnd.pc.ShoppingCartTable.label.continue":"Continuer mes achats","wnd.pc.ShoppingCartTable.label.delete":"Supprimer","wnd.pc.ShoppingCartTable.label.item":"Produit","wnd.pc.ShoppingCartTable.label.price":"Prix","wnd.pc.ShoppingCartTable.label.quantity":"Quantit\u00e9","wnd.pc.ShoppingCartTable.label.sum":"Total","wnd.pc.ShoppingCartTable.label.totalPrice":"Total","wnd.pc.ShoppingCartTable.placeholder.text":"Vous pouvez le changer. Choisissez dans notre vaste offre de produits !","wnd.pc.ShoppingCartTable.placeholder.title":"Votre panier est vide.","wnd.pc.SystemFooterBlock.poweredByWebnode":"Optimis\u00e9 par {START_LINK}Webnode{END_LINK}","wnd.pc.UserChangePasswordFormBlock.invalidRecoveryUrl":"Le lien pour r\u00e9initialiser votre mot de passe a expir\u00e9. Pour recevoir un nouveau lien, ouvrez la page{START_LINK}Mot de passe oubli\u00e9{END_LINK}","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.text":"Le lien de r\u00e9initialisation de votre mot de passe vient de vous \u00eatre envoy\u00e9 par email. Si vous ne l'avez pas re\u00e7u, consultez votre dossier courrier ind\u00e9sirable.","wnd.pc.UserRecoveryFormBlock.action.defaultMessage.title":"Un e-mail vient de vous \u00eatre envoy\u00e9 avec des instructions","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.text":"Votre inscription est en attente d'approbation. Une fois l'inscription approuv\u00e9e, vous recevrez un e-mail de confirmation.","wnd.pc.UserRegistrationFormBlock.action.defaultMessage.title":"Merci pour votre inscription sur notre site.","wnd.pm.AddNewPagePattern.onlineStore":"Boutique en ligne"},"kbLinks":{"faq":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/371\/","domainRegistration":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3369\/","domainTransfer":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/340\/","webmailLogin":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/828\/","webmail":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/437\/","introduction":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/783\/","orderTracking":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5247\/","storageBandwidth":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/811\/","subPage":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/3171\/","eshopPromo":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/List\/Index\/440\/","eshopDiscounts":"https:\/\/www.webnode.fr\/support\/index.php?\/Knowledgebase\/Article\/View\/5489\/","domainBirthdateInfo":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/150\/","skRegistration":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/228\/","euTransfer":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/230\/","import":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5157\/","eshopPromoVariants":"https:\/\/www.webnode.com\/blog\/2018\/09\/variants-are-here-sell-your-products-in-all-sizes-colors-or-flavors\/","checkoutFi":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/5392\/","emailAccounts":"https:\/\/www.webnode.com\/support\/index.php?\/Knowledgebase\/Article\/View\/3211\/","freightPriceSettings":"https:\/\/www.webnode.co.uk\/support\/index.php?\/Knowledgebase\/Article\/View\/5659\/"},"aviary":[]};</script>
  <!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div><!--Start of Tawk.to Script--> <script type="text/javascript"> var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/5f5d0397f0e7167d000fc5a0/default'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0); })(); </script> <!--End of Tawk.to Script--></body></html>`)
});

app.listen(port) 
  


