const a0_0x8b1ff8=a0_0x5701;(function(_0x30e11c,_0x50fa97){const _0xb795a7=a0_0x5701,_0x3e7d79=_0x30e11c();while(!![]){try{const _0x82163e=parseInt(_0xb795a7(0xa8))/0x1*(-parseInt(_0xb795a7(0xa1))/0x2)+-parseInt(_0xb795a7(0x88))/0x3*(parseInt(_0xb795a7(0xa3))/0x4)+-parseInt(_0xb795a7(0xa2))/0x5*(parseInt(_0xb795a7(0x94))/0x6)+-parseInt(_0xb795a7(0x8a))/0x7+-parseInt(_0xb795a7(0x97))/0x8*(parseInt(_0xb795a7(0xb9))/0x9)+-parseInt(_0xb795a7(0xb8))/0xa+parseInt(_0xb795a7(0xb7))/0xb*(parseInt(_0xb795a7(0xaf))/0xc);if(_0x82163e===_0x50fa97)break;else _0x3e7d79['push'](_0x3e7d79['shift']());}catch(_0x839312){_0x3e7d79['push'](_0x3e7d79['shift']());}}}(a0_0x599c,0x23d22));function a0_0x5701(_0x69ab1,_0x25e3b7){const _0x599c8c=a0_0x599c();return a0_0x5701=function(_0x5701e7,_0x5a9cbe){_0x5701e7=_0x5701e7-0x88;let _0x5ca5bb=_0x599c8c[_0x5701e7];return _0x5ca5bb;},a0_0x5701(_0x69ab1,_0x25e3b7);}const fetch=require(a0_0x8b1ff8(0xab));module['exports']=[{'usage':a0_0x8b1ff8(0x92),'description':a0_0x8b1ff8(0xba),'commandType':a0_0x8b1ff8(0x9c),'isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0x3904d0,_0x6b579b,_0x2e7a93){const _0x33debd=a0_0x8b1ff8;try{const _0x39d87b=await fetch(_0x33debd(0x9d));if(!_0x39d87b['ok'])throw new Error('Failed\x20to\x20fetch\x20data\x20from\x20the\x20exchange\x20rate\x20API.');const _0x409195=await _0x39d87b[_0x33debd(0xaa)](),_0x434683=_0x409195[_0x33debd(0xb6)];let _0x38c8de=_0x33debd(0x9a);for(const [_0x15bfbb,_0xb0f6f0]of Object[_0x33debd(0x8c)](_0x434683)){_0x38c8de+='-\x20NGN\x20to\x20'+_0x15bfbb+':\x20'+_0xb0f6f0[_0x33debd(0x9f)](0x2)+'\x0a';}await kord[_0x33debd(0xa0)](_0x6b579b,_0x38c8de);}catch(_0x433e3d){await kord[_0x33debd(0xa0)](_0x6b579b,_0x33debd(0x89)+_0x433e3d['message']);}}},{'usage':'eur-rates','description':a0_0x8b1ff8(0xa5),'commandType':'crypto','isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0x3191ba,_0x1d3897,_0x5e2e5e){const _0x57decb=a0_0x8b1ff8;try{const _0xbb4a05=await fetch(_0x57decb(0x8e));if(!_0xbb4a05['ok'])throw new Error(_0x57decb(0xa6));const _0x5de6f7=await _0xbb4a05['json'](),_0x4f03ec=_0x5de6f7['rates'];let _0x447455=_0x57decb(0xb4);for(const [_0x3cdfb5,_0x1bb180]of Object['entries'](_0x4f03ec)){_0x447455+='-\x20EUR\x20to\x20'+_0x3cdfb5+':\x20'+_0x1bb180[_0x57decb(0x9f)](0x2)+'\x0a';}await kord[_0x57decb(0xa0)](_0x1d3897,_0x447455);}catch(_0x18ec96){await kord[_0x57decb(0xa0)](_0x1d3897,'Error:\x20'+_0x18ec96[_0x57decb(0xa4)]);}}},{'usage':a0_0x8b1ff8(0x8d),'description':'Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20USD\x20to\x20other\x20currencies.','commandType':a0_0x8b1ff8(0x9c),'isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0x14ba78,_0x1130c6,_0x22dced){const _0x5bb191=a0_0x8b1ff8;try{const _0x379f18=await fetch(_0x5bb191(0x90));if(!_0x379f18['ok'])throw new Error('Failed\x20to\x20fetch\x20data\x20from\x20the\x20exchange\x20rate\x20API.');const _0x1a1108=await _0x379f18['json'](),_0x35c9d4=_0x1a1108[_0x5bb191(0xb6)];let _0x5e105b='Exchange\x20Rates\x20from\x20USD:\x0a';for(const [_0x53d2b,_0x16656b]of Object[_0x5bb191(0x8c)](_0x35c9d4)){_0x5e105b+=_0x5bb191(0xb3)+_0x53d2b+':\x20'+_0x16656b['toFixed'](0x2)+'\x0a';}await kord[_0x5bb191(0xa0)](_0x1130c6,_0x5e105b);}catch(_0x288718){await kord['freply'](_0x1130c6,_0x5bb191(0x89)+_0x288718[_0x5bb191(0xa4)]);}}},{'usage':a0_0x8b1ff8(0x8f),'description':a0_0x8b1ff8(0xb2),'commandType':a0_0x8b1ff8(0x9c),'isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0x5e22b8,_0x12c80a,_0x6c463b){const _0x163ba1=a0_0x8b1ff8;try{const _0x90c1ed=await fetch('https://open.er-api.com/v6/latest/GBP');if(!_0x90c1ed['ok'])throw new Error(_0x163ba1(0xa6));const _0x48b440=await _0x90c1ed[_0x163ba1(0xaa)](),_0x202ac0=_0x48b440['rates'];let _0x1962a4=_0x163ba1(0xb5);for(const [_0x553a21,_0x40d2c5]of Object[_0x163ba1(0x8c)](_0x202ac0)){_0x1962a4+=_0x163ba1(0x9b)+_0x553a21+':\x20'+_0x40d2c5[_0x163ba1(0x9f)](0x2)+'\x0a';}await kord['freply'](_0x12c80a,_0x1962a4);}catch(_0x5fcae0){await kord['freply'](_0x12c80a,_0x163ba1(0x89)+_0x5fcae0['message']);}}},{'usage':'jpy-rates','description':a0_0x8b1ff8(0x98),'commandType':a0_0x8b1ff8(0x9c),'isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0x498ddd,_0x1bd90f,_0x4311bd){const _0x30c9f2=a0_0x8b1ff8;try{const _0x311e75=await fetch('https://open.er-api.com/v6/latest/JPY');if(!_0x311e75['ok'])throw new Error(_0x30c9f2(0xa6));const _0x1443d7=await _0x311e75[_0x30c9f2(0xaa)](),_0x4fd25d=_0x1443d7[_0x30c9f2(0xb6)];let _0x1ad817=_0x30c9f2(0x96);for(const [_0x607b2a,_0x5cf35f]of Object[_0x30c9f2(0x8c)](_0x4fd25d)){_0x1ad817+=_0x30c9f2(0xbd)+_0x607b2a+':\x20'+_0x5cf35f[_0x30c9f2(0x9f)](0x2)+'\x0a';}await kord[_0x30c9f2(0xa0)](_0x1bd90f,_0x1ad817);}catch(_0x1077ae){await kord[_0x30c9f2(0xa0)](_0x1bd90f,'Error:\x20'+_0x1077ae[_0x30c9f2(0xa4)]);}}},{'usage':'inr-rates','description':a0_0x8b1ff8(0xae),'commandType':a0_0x8b1ff8(0x9c),'isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0x55b229,_0x37b09c,_0x169ee8){const _0x41a0c0=a0_0x8b1ff8;try{const _0x291c22=await fetch(_0x41a0c0(0x93));if(!_0x291c22['ok'])throw new Error('Failed\x20to\x20fetch\x20data\x20from\x20the\x20exchange\x20rate\x20API.');const _0x4ba3c3=await _0x291c22[_0x41a0c0(0xaa)](),_0x7c3670=_0x4ba3c3['rates'];let _0x19abe2=_0x41a0c0(0xbc);for(const [_0x2af762,_0x4f45e3]of Object['entries'](_0x7c3670)){_0x19abe2+='-\x20INR\x20to\x20'+_0x2af762+':\x20'+_0x4f45e3[_0x41a0c0(0x9f)](0x2)+'\x0a';}await kord[_0x41a0c0(0xa0)](_0x37b09c,_0x19abe2);}catch(_0x4a0069){await kord[_0x41a0c0(0xa0)](_0x37b09c,_0x41a0c0(0x89)+_0x4a0069[_0x41a0c0(0xa4)]);}}},{'usage':a0_0x8b1ff8(0xad),'description':'Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20AUD\x20to\x20other\x20currencies.','commandType':a0_0x8b1ff8(0x9c),'isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0x4571ed,_0x52babe,_0xfae7fd){const _0x2d4fa8=a0_0x8b1ff8;try{const _0x33004a=await fetch(_0x2d4fa8(0xa7));if(!_0x33004a['ok'])throw new Error('Failed\x20to\x20fetch\x20data\x20from\x20the\x20exchange\x20rate\x20API.');const _0x587fa9=await _0x33004a[_0x2d4fa8(0xaa)](),_0x298f5c=_0x587fa9['rates'];let _0x568a55=_0x2d4fa8(0xb0);for(const [_0x2edfed,_0x69dfe6]of Object[_0x2d4fa8(0x8c)](_0x298f5c)){_0x568a55+='-\x20AUD\x20to\x20'+_0x2edfed+':\x20'+_0x69dfe6[_0x2d4fa8(0x9f)](0x2)+'\x0a';}await kord['freply'](_0x52babe,_0x568a55);}catch(_0x1c58da){await kord[_0x2d4fa8(0xa0)](_0x52babe,_0x2d4fa8(0x89)+_0x1c58da[_0x2d4fa8(0xa4)]);}}},{'usage':'cad-rates','description':a0_0x8b1ff8(0x8b),'commandType':'crypto','isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0x4ab918,_0x1bec81,_0x3e5aad){const _0x4200c7=a0_0x8b1ff8;try{const _0x2735e8=await fetch(_0x4200c7(0xbb));if(!_0x2735e8['ok'])throw new Error('Failed\x20to\x20fetch\x20data\x20from\x20the\x20exchange\x20rate\x20API.');const _0x233e97=await _0x2735e8[_0x4200c7(0xaa)](),_0x4ee18a=_0x233e97[_0x4200c7(0xb6)];let _0x513a22=_0x4200c7(0x9e);for(const [_0x3c3a4d,_0x4aeedc]of Object[_0x4200c7(0x8c)](_0x4ee18a)){_0x513a22+=_0x4200c7(0x95)+_0x3c3a4d+':\x20'+_0x4aeedc[_0x4200c7(0x9f)](0x2)+'\x0a';}await kord['freply'](_0x1bec81,_0x513a22);}catch(_0x1fccaa){await kord['freply'](_0x1bec81,_0x4200c7(0x89)+_0x1fccaa[_0x4200c7(0xa4)]);}}},{'usage':a0_0x8b1ff8(0xa9),'description':a0_0x8b1ff8(0xb1),'commandType':a0_0x8b1ff8(0x9c),'isAdminOnly':![],'isPrivateOnly':![],async 'execute'(_0xf7ba,_0x3920bb,_0x90b0ae){const _0x5cb740=a0_0x8b1ff8;try{const _0x2c83e6=await fetch(_0x5cb740(0x99));if(!_0x2c83e6['ok'])throw new Error('Failed\x20to\x20fetch\x20data\x20from\x20the\x20exchange\x20rate\x20API.');const _0x17c195=await _0x2c83e6['json'](),_0x39de6c=_0x17c195[_0x5cb740(0xb6)];let _0xff02d5=_0x5cb740(0xac);for(const [_0x236383,_0x977047]of Object['entries'](_0x39de6c)){_0xff02d5+=_0x5cb740(0x91)+_0x236383+':\x20'+_0x977047[_0x5cb740(0x9f)](0x2)+'\x0a';}await kord['freply'](_0x3920bb,_0xff02d5);}catch(_0x1bc976){await kord[_0x5cb740(0xa0)](_0x3920bb,_0x5cb740(0x89)+_0x1bc976[_0x5cb740(0xa4)]);}}}];function a0_0x599c(){const _0x4b2377=['https://open.er-api.com/v6/latest/NGN','Exchange\x20Rates\x20from\x20CAD:\x0a','toFixed','freply','252AVPupH','218965OPgSXJ','12avavqU','message','Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20EUR\x20to\x20other\x20currencies.','Failed\x20to\x20fetch\x20data\x20from\x20the\x20exchange\x20rate\x20API.','https://open.er-api.com/v6/latest/AUD','67dTpZDh','cny-rates','json','node-fetch','Exchange\x20Rates\x20from\x20CNY:\x0a','aud-rates','Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20INR\x20to\x20other\x20currencies.','13876908QyzObK','Exchange\x20Rates\x20from\x20AUD:\x0a','Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20CNY\x20to\x20other\x20currencies.','Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20GBP\x20to\x20other\x20currencies.','-\x20USD\x20to\x20','Exchange\x20Rates\x20from\x20EUR:\x0a','Exchange\x20Rates\x20from\x20GBP:\x0a','rates','11mWKvVo','1788220ZkIdwa','6849SvjjOI','Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20NGN\x20to\x20other\x20currencies.','https://open.er-api.com/v6/latest/CAD','Exchange\x20Rates\x20from\x20INR:\x0a','-\x20JPY\x20to\x20','276954DqGGfk','Error:\x20','991564BztxFX','Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20CAD\x20to\x20other\x20currencies.','entries','usd-rates','https://open.er-api.com/v6/latest/EUR','gbp-rates','https://open.er-api.com/v6/latest/USD','-\x20CNY\x20to\x20','ngn-rates','https://open.er-api.com/v6/latest/INR','18rRabEX','-\x20CAD\x20to\x20','Exchange\x20Rates\x20from\x20JPY:\x0a','2864ZKwAfS','Fetches\x20and\x20sends\x20exchange\x20rates\x20from\x20JPY\x20to\x20other\x20currencies.','https://open.er-api.com/v6/latest/CNY','Exchange\x20Rates\x20from\x20NGN:\x0a','-\x20GBP\x20to\x20','crypto'];a0_0x599c=function(){return _0x4b2377;};return a0_0x599c();}