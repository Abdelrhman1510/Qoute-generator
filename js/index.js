var arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Bernard M. Baruch', 
     'quote': 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {
     'author': 'Robert Frost',
     'quote':'In three words I can sum up everything I\'ve learned about life: it goes on.'

    },
    { 
     'author' : 'Mark Twain',
     'quote':'If you tell the truth, you don\'t have to remember anything.'
        
    },
];
var arrayOfQuotesAr = [
    {'author': 'عمر بن الخطاب', 
     'quote': '.عاملوا الناس بما يُظهرون لكم، والله يتولّى مافي صدورهم'
    },
    {'author': 'أبو الطيب المتنبي', 
     'quote': '.من لم يمت بالسيف مات بغيره ... تعددت الاسباب و الموت واحد'
    },
    {'author': 'صلاح الدين الايوبي', 
     'quote': '.قد يتحول كل شي ضدك و يبقى الله معك ، فكن مع الله يكن كل شي معك  '
    },
    {'author': 'جبران خليل جبران', 
     'quote': '.قد تنسى الذي ضحكت معه ، و لـكن لن تنسى الذي بكيت معه '
    },
    {'author': 'ابن تيمية', 
     'quote': '.من عمل بما علم ، أورثــه الله علم ما لم يعلم '
    },
    {'author': 'عباس محمود العقاد', 
     'quote': ' .إننا نقرأ لنبتعد عن نقطة الجهل، لا لنصل إلى نقطة العلم'
    },
    {
     'author': 'عبد الله بن المقفع',
     'quote':'.اذا أسدى شخص اليك جميلا فحذار أن تنساه '

    },
    { 
     'author' : 'الشافعي',
     'quote':'.لا ترفع سعرك فيـردك الله الى ثمنك'
        
    },
];

function generateQuote(){
    var random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.getElementById("quote").innerHTML = `\"${arrayOfQuotes[random].quote}\"`;
    document.getElementById("author").innerHTML = `--${arrayOfQuotes[random].author}`;
       
    
}
function generateQuoteِِِAr(){

    var random = Number.parseInt(Math.random()*arrayOfQuotesAr.length + 1);
    document.getElementById("quoteAr").innerHTML = `\"${arrayOfQuotesAr[random].quote}\"`;
    document.getElementById("authorAr").innerHTML = `${arrayOfQuotesAr[random].author}--`;
       
    
}
