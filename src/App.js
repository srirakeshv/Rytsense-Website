import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/home/HomePage";
import Contactpage from "./Pages/contactuspage/contactpage";
import CaseStudyPage from "./Pages/casestudypage/casestudypage";
import SingleCaseStudy from "./components/casestudies/singlecasestudy-page/singlecasestudypage";
import ScrollToTop from "./scrolltotop";
import ServicePage from "./Pages/servicepage/ServicePage";
import AI_ML from "./components/service-component/services/AI & ML/AI_ML";
import AndroidDev from "./components/service-component/services/Hire_Devlopers/AndroidDev";
import WhoWeAre from "./Pages/CompanyPages/WhoWeAre";
import Event from "./Pages/CompanyPages/Event"
import Career from "./Pages/CompanyPages/Career";
import Footer from "./components/common/Footer";
import AppDev from "./components/service-component/services/Hire_Devlopers/AppDev"
import AngularDev from "./components/service-component/services/Hire_Devlopers/AngularDev"
import WebDev from "./components/service-component/services/Hire_Devlopers/WebDev"
import SoftwareDev from "./components/service-component/services/Hire_Devlopers/SoftwareDev"
import BlockchainDev from "./components/service-component/services/Hire_Devlopers/BlockchainDev"
import BackDev from "./components/service-component/services/Hire_Devlopers/BackDev"
import CakePhpDev from "./components/service-component/services/Hire_Devlopers/CakePhpDev"
import CodeigniterDev from "./components/service-component/services/Hire_Devlopers/CodeigniterDev"
import DartDev from "./components/service-component/services/Hire_Devlopers/DartDev"
import DjangoDev from "./components/service-component/services/Hire_Devlopers/DjangoDev"
import DrupalDev from "./components/service-component/services/Hire_Devlopers/DrupalDev"
import FlutterDev from "./components/service-component/services/Hire_Devlopers/FlutterDev"
import FrontDev from "./components/service-component/services/Hire_Devlopers/FrontDev"
import FullStackDev from "./components/service-component/services/Hire_Devlopers/FullStackDev"
import GoLangDev from "./components/service-component/services/Hire_Devlopers/GoLangDev"
import iPhoneDev from "./components/service-component/services/Hire_Devlopers/iPhoneDev";
import IonicDev from "./components/service-component/services/Hire_Devlopers/IonicDev"
import JavaDev from "./components/service-component/services/Hire_Devlopers/JavaDev"
import IOSDev from "./components/service-component/services/Hire_Devlopers/IOSDev"
import IOTArchi from "./components/service-component/services/Hire_Devlopers/IOTArchi"
import KotlinDev from "./components/service-component/services/Hire_Devlopers/KotlinDev"
import LaravelDev from "./components/service-component/services/Hire_Devlopers/LaravelDev"
import MangetoDev from "./components/service-component/services/Hire_Devlopers/MangetoDev"
import NodeJsdev from "./components/service-component/services/Hire_Devlopers/NodeJsDev"
import PythonDev from "./components/service-component/services/Hire_Devlopers/PythonDev"
import PhpDev from "./components/service-component/services/Hire_Devlopers/PhpDev"
import ReactDev from "./components/service-component/services/Hire_Devlopers/ReactDev"
import ReactNativeDev from "./components/service-component/services/Hire_Devlopers/RectNativeDev"
import SalesForceDev from "./components/service-component/services/Hire_Devlopers/SalesForceDev"
import ShopifyDev from "./components/service-component/services/Hire_Devlopers/ShopifyDev"
import SolidityDev from "./components/service-component/services/Hire_Devlopers/SolidityDev"
import SwiftDev from "./components/service-component/services/Hire_Devlopers/SwiftDev"
import VueJsDev from "./components/service-component/services/Hire_Devlopers/VueJsDev"
import WordpressDev from "./components/service-component/services/Hire_Devlopers/WordpressDev"
import SpringBootDev from "./components/service-component/services/Hire_Devlopers/SpringBootDev"
import UIUX from "./components/service-component/services/Hire_Devlopers/UIUX"
import WooCommerceDev from "./components/service-component/services/Hire_Devlopers/WooCommerceDev"
import YiiDev from './components/service-component/services/Hire_Devlopers/YiiDev'
import MobileApp from "./components/service-component/services/mobile-app/MobileApp"
import Web_Cms from "./components/service-component/services/CMS-Development/Web_Cms"
import ECommerce from "./components/service-component/services/e-commerce/ECommerce"
import Blockchain from "./components/service-component/services/Blockchain/Blockchain"
import Game from "./components/service-component/services/Game-devlopment/Game"
import Salesforce from "./components/service-component/services/Salesforce/Saleforce"
import IOT_Embedded from "./components/service-component/services/IOT_Embedded/IOT_Embedded"
import Devops from './components/service-component/services/Devops/Devops'
import Android from "./components/service-component/services/mobile-app/MobileTab/Android"
import IPhone from "./components/service-component/services/mobile-app/MobileTab/IPhone"
import Hybrid from "./components/service-component/services/mobile-app/MobileTab/Hybrid"
import Flutter from "./components/service-component/services/mobile-app/MobileTab/Flutter"
import ReactNative from "./components/service-component/services/mobile-app/MobileTab/ReactNative"
import Katlin from "./components/service-component/services/mobile-app/MobileTab/Katlin"
import Ionic from "./components/service-component/services/mobile-app/MobileTab/Ionic"
import Swift from "./components/service-component/services/mobile-app/MobileTab/Swift"
import Xamarin from "./components/service-component/services/mobile-app/MobileTab/Xamarin"
import PHP from "./components/service-component/services/CMS-Development/WebTab/PHP"
import WordPress from "./components/service-component/services/CMS-Development/WebTab/Wordpress"
import Drupal from "./components/service-component/services/CMS-Development/WebTab/Drupal"
import Laravel from "./components/service-component/services/CMS-Development/WebTab/Laravel"
import ReactJS from "./components/service-component/services/CMS-Development/WebTab/ReactJs"
import AngularJS from "./components/service-component/services/CMS-Development/WebTab/AngularJS"
import NodeJS from "./components/service-component/services/CMS-Development/WebTab/NodeJs"
import CodeIgniter from "./components/service-component/services/CMS-Development/WebTab/CodeIgniter"
import CakePHP from "./components/service-component/services/CMS-Development/WebTab/CakePHP"
import Python from "./components/service-component/services/CMS-Development/WebTab/Python"
import TypeScript from "./components/service-component/services/CMS-Development/WebTab/TypeScript"
import Mangeto from "./components/service-component/services/e-commerce/ECommereceTab/Mangeto"
import Bigcommerce from "./components/service-component/services/e-commerce/ECommereceTab/BigCommerce"
import Ubercart from "./components/service-component/services/e-commerce/ECommereceTab/Ubercart"
import CSCart from "./components/service-component/services/e-commerce/ECommereceTab/CSCart"
import Prestashop from "./components/service-component/services/e-commerce/ECommereceTab/Prestashop"
import Virtuemart from "./components/service-component/services/e-commerce/ECommereceTab/Virtumart"
import Shopify from "./components/service-component/services/e-commerce/ECommereceTab/Shopify"
import WooCommerce from "./components/service-component/services/e-commerce/ECommereceTab/WooCommerce"
import Wallet from "./components/service-component/services/Blockchain/BloackChainTab/Wallet"
import IndustryPage from "./Pages/industries/industrypage";
import ResourcesPage from "./Pages/Resourcespage/Resourcespage";
import ResourceBlogFull from "./components/Resources/Resourceblog/resourceblogfull/resourceblogfull";
import ResourceMediaCoverageFull from "./components/Resources/Resourcemediacoverage/resourcemediacoveragefull/resourcemediacoveragefull";
import ResourceTechNewsFull from "./components/Resources/ResourceTechnews/resourcetechnewsfull/resourcetechnewsfull";
import ResourcePodcastFull from "./components/Resources/ResourcePodacst/resourcepodcastfull/resourcepodacstfull";
import Research1 from "./components/Researchfull/Research1";
import Research2 from "./components/Researchfull/Research2";

import Exchange from "./components/service-component/services/Blockchain/BloackChainTab/Exchange"
import Ethereum from "./components/service-component/services/Blockchain/BloackChainTab/Ethereum"
import Hyperledger from "./components/service-component/services/Blockchain/BloackChainTab/Hyperledger"
import Smart_Contract from "./components/service-component/services/Blockchain/BloackChainTab/Smart_Contract"
import Private_Blockchain from "./components/service-component/services/Blockchain/BloackChainTab/Private_Blockchain"
import NFT from "./components/service-component/services/Blockchain/BloackChainTab/NFT"

import Agumented from "./components/service-component/services/Game-devlopment/Game-Tabs/Agumented"
import Unity3D from "./components/service-component/services/Game-devlopment/Game-Tabs/Unity3D"
import Metaverse from "./components/service-component/services/Game-devlopment/Game-Tabs/Metaverse"
import Unreal_Engine from "./components/service-component/services/Game-devlopment/Game-Tabs/Unreal_Engine"
import Virtual from "./components/service-component/services/Game-devlopment/Game-Tabs/Virtual"
import Casual from "./components/service-component/services/Game-devlopment/Game-Tabs/Casual"
import Development from "./components/service-component/services/Salesforce/SaleforceTab/Development"
import Consulting from "./components/service-component/services/Salesforce/SaleforceTab/Consulting"
import Implimantation from "./components/service-component/services/Salesforce/SaleforceTab/Implimantation"
import Alexa from "./components/service-component/services/AI & ML/AI_ML_Tabs/Alexa"
import Business from "./components/service-component/services/AI & ML/AI_ML_Tabs/Buisness"
import Data_Analyst from "./components/service-component/services/AI & ML/AI_ML_Tabs/Data_Analyst"
import Forcasting from "./components/service-component/services/AI & ML/AI_ML_Tabs/Forcasting"
import NaturalLang from "./components/service-component/services/AI & ML/AI_ML_Tabs/NaturalLang"

import Object_Reco from "./components/service-component/services/AI & ML/AI_ML_Tabs/Object_Reco"
import Reccom_Engine from "./components/service-component/services/AI & ML/AI_ML_Tabs/Reccom_Engine"
import Senti_Analysis from "./components/service-component/services/AI & ML/AI_ML_Tabs/Senti_Analysis"
import TextToSpeech from "./components/service-component/services/AI & ML/AI_ML_Tabs/TextToSpeech"
import Embe_Software from "./components/service-component/services/IOT_Embedded/IOT_Tabs/Embe_Software"
import IOT_App from "./components/service-component/services/IOT_Embedded/IOT_Tabs/IOT_App"
import IOT_Dashboard from "./components/service-component/services/IOT_Embedded/IOT_Tabs/IOT_Dashboard"
import IOT_Hardware from "./components/service-component/services/IOT_Embedded/IOT_Tabs/IOT_Hardware"
import SmartHome from "./components/service-component/services/IOT_Embedded/IOT_Tabs/SmartHome"
import DevopsTab from "./components/service-component/services/Devops/DevopTabs/DevopsTab"
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/casestudy" element={<CaseStudyPage />} />
          <Route path="/casestudies" element={<SingleCaseStudy />} />
          <Route path="/services" element={<ServicePage />} />

          <Route path="/industry/:id" element={<IndustryPage />} />
          <Route path="/resources/:id" element={<ResourcesPage />} />
          <Route path="/blogs/:id" element={<ResourceBlogFull />} />
          <Route
            path="/mediacoverage/:id"
            element={<ResourceMediaCoverageFull />}
          />
          <Route path="/technews/:id" element={<ResourceTechNewsFull />} />
          <Route path="/podcast/:id" element={<ResourcePodcastFull />} />
          <Route
            path="/research/guide-on-how-ai-is-transforming-businesses"
            element={<Research1 />}
          />
          <Route path="/research/hire-php-developers" element={<Research2 />} />

          <Route path="/appdev" element={<AppDev/>}/>
          <Route path="/androiddev" element={<AndroidDev/>}/>
          <Route path="/angulardev" element={<AngularDev/>}/>
          <Route path="/webdev" element={<WebDev/>}/>
          <Route path="/blockchaindev" element={<BlockchainDev/>}/>
          <Route path="/backdev" element={<BackDev/>}/>
          <Route path="/cakephpdev" element={<CakePhpDev/>}/>
          <Route path="/codeigniterdev" element={<CodeigniterDev/>}/>
          <Route path="/dartdev" element={<DartDev/>}/>
          <Route path="/djangodev" element={<DjangoDev/>}/>
          <Route path="/drupaldev" element={<DrupalDev/>}/>
          <Route path="/flutterdev" element={<FlutterDev/>}/>
          <Route path="/frontenddev" element={<FrontDev/>}/>
          <Route path="/fullstackdev" element={<FullStackDev/>}/>
          <Route path="/golangdev" element={<GoLangDev/>}/>
          <Route path="/ionicdev" element={<IonicDev/>}/>
          <Route path="/iosdev" element={<IOSDev/>}/>
          <Route path="/iphonedev" element={<iPhoneDev/>}/>
          <Route path="/cakephpdev" element={<CakePhpDev/>}/>
          <Route path="/iotarchidev" element={<IOTArchi/>}/>
          <Route path="/javadev" element={<JavaDev/>}/>
          <Route path="/kotlindev" element={<KotlinDev/>} />
          <Route path="/laraveldev" element={<LaravelDev/>}/>
          <Route path="/mangetodev" element={<MangetoDev/>}/>
          <Route path="/nodejsdev" element={<NodeJsdev/>}/>
         <Route path="/pythondev" element={<PythonDev/>}/>
         <Route path="/phpdev" element={<PhpDev/>} />
         <Route path="/reactdev" element={<ReactDev/>}/>
         <Route path="/reactnative" element={<ReactNativeDev/>}/>
         <Route path="/salesforcedev" element={<SalesForceDev/>}/>
         <Route path="/shopifydev" from element={<ShopifyDev/>}/>
         <Route path="/webdev" element={<WebDev/>}/>
         <Route path="/softwaredev" element={<SoftwareDev/>}/> 
         <Route path="/soliditydev" element={<SolidityDev/>}/>
         <Route path="/springbootdev" element={<SpringBootDev/>}/>
         <Route path="/swiftdev" element={<SwiftDev/>}/>
         <Route path="/uiuxdev" element={<UIUX/>}/>
         <Route path="/vuejsdev" element={<VueJsDev/>}/>
     
         <Route path="/woodev" element={<WooCommerceDev/>}/>
         <Route path="/wordpressdev" element={<WordpressDev/>}/>
         <Route path="/yiidev" element={<YiiDev/>}/>

         <Route path="/who-we-are" element={<WhoWeAre/>}/>
         <Route path="/career" element={<Career/>}/>

         <Route path="/event" element={<Event/>}/>
         <Route path="/services" element={<ServicePage/>}/>
         <Route path="/android" element={<Android/>}/>
         <Route path="/iphone" element={<IPhone/>}/>
         <Route path="/hybrid" element={<Hybrid/>}/>
         <Route path="/flutter" element={<Flutter/>}/>
         <Route path="/reactnative" element={<ReactNative/>}/>
         <Route path="/kotlin" element={<Katlin/>}/>
         <Route path="/ionic" element={<Ionic/>}/>
         <Route path="/swift" element={<Swift/>}/>
         <Route path="/xamarin" element={<Xamarin/>}/>
         <Route path="/php" element={<PHP/>}/>

         <Route path="/wordpress" element={<WordPress/>}/>
         <Route path="/drupal" element={<Drupal/>}/>
         <Route path="/laravel" element={<Laravel/>}/>
         <Route path="/reactjs" element={<ReactJS/>}/>
         <Route path="/angularjs" element={<AngularJS/>}/>
         <Route path="/nodejs" element={<NodeJS/>}/>
         <Route path="/codeigniter" element={<CodeIgniter/>}/>
         <Route path="/cakephp" element={<CakePHP/>}/>
         <Route path="/python" element={<Python/>}/>
         <Route path="/typescript" element={<TypeScript/>}/>

         <Route path="/mangeto" element={<Mangeto/>}/>
         <Route path="/bigcommerce" element={<Bigcommerce/>}/>
         <Route path="/cscart" element={<CSCart/>}/>
         <Route path="/prestashop" element={<Prestashop/>}/>
         <Route path="/virtumart" element={<Virtuemart/>}/>
         <Route path="/shopify" element={<Shopify/>}/>
         <Route path="/woo" element={<WooCommerce/>}/>
         <Route path="/ubercart" element={<Ubercart/>}/>
         <Route path="/wallet" element={<Wallet/>}/>
         <Route path="/exchnage" element={<Exchange/>}/>
         <Route path="/etherum" element={<Ethereum/>}/>
         <Route path="/hyperledger" element={<Hyperledger/>}/>
         <Route path="/smart" element={<Smart_Contract/>}/>
         <Route path="/private" element={<Private_Blockchain/>}/>
         <Route path="/nft" element={<NFT/>}/>
         <Route path="/unity" element={<Unity3D/>}/>
         <Route path="/metaverse" element={<Metaverse/>}/>
         <Route path="/unreal" element={<Unreal_Engine/>}/>
         <Route path="/agumented" element={<Agumented/>}/>
         <Route path="/virtual" element={<Virtual/>}/>
         <Route path="/casual" element={<Casual/>}/>
         <Route path="/development" element={<Development/>}/>
         <Route path="/consulting" element={<Consulting/>}/>
         <Route path="/implmentation" element={<Implimantation/>}/>
         <Route path="/objectreco" element={<Object_Reco/>}/>
         <Route path="/texttospeech" element={<TextToSpeech/>}/>
         <Route path="/intelligence" element={<Business/>}/>
         <Route path="/forcasting" element={<Forcasting/>}/>
         <Route path="/natural" element={<NaturalLang/>}/>
         <Route path="/data-analytics" element={<Data_Analyst/>}/>
         <Route path="/recom-engine" element={<Reccom_Engine/>}/>
         <Route path="/senti-analysis" element={<Senti_Analysis/>}/>
         <Route path="/alexa-skill" element={<Alexa/>}/>
         <Route path="/iotapp" element={<IOT_App/>}/>
         <Route path="/embedded" element={<Embe_Software/>}/>
         <Route path="/hardware" element={<IOT_Hardware/>}/>
         <Route path="/dashboard" element={<IOT_Dashboard/>}/>
         <Route path="/smarthome" element={<SmartHome/>}/>
         <Route path="/devopstab" element={<DevopsTab/>}/>
         <Route path="/mobile-app" element={<MobileApp/>}/>
         <Route path="/web-app" element={<Web_Cms/>}/>
         <Route path="/ecom-app" element={<ECommerce/>}/>
         <Route path="/block-app" element={<Blockchain/>}/>
         <Route path="/game-app" element={<Game/>}/>
         <Route path="/salesforce-app" element={<Salesforce/>}/>
         <Route path="/ai_ml-app" element={<AI_ML/>}/>
         <Route path="/iot-app" element={<IOT_Embedded/>}/>
         <Route path="/devop-app" element={<Devops/>}/>
          <Route path="/industry" element={<IndustryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </BrowserRouter> 
       
     
    </div>
  );
};

export default App;
