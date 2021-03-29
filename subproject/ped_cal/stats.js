// insert percentile, recieve Z
var qnorm = function(p) {
  p = parseFloat(p);var split = 0.42; var a0 = 2.50662823884; var a1 = -18.61500062529;var a2 = 41.39119773534; var a3 = -25.44106049637;var b1 = -8.47351093090; var b2 = 23.08336743743;var b3 = -21.06224101826; var b4 = 3.13082909833;
  var c0 = -2.78718931138; var c1 = -2.29796479134;var c2 = 4.85014127135; var c3 = 2.32121276858;var d1 = 3.54388924762; var d2 = 1.63706781897;var q = p - 0.5;var r, ppnd;
  if (Math.abs(q) <= split) {r = q * q;ppnd = q * (((a3 * r + a2) * r + a1) * r + a0) / ((((b4 * r + b3) * r + b2) * r + b1) * r + 1);} else {r = p;if (q > 0) r = 1 - p;if (r > 0) {r = Math.sqrt(-Math.log(r));ppnd = (((c3 * r + c2) * r + c1) * r + c0) / ((d2 * r + d1) * r + 1);if (q < 0) ppnd = -ppnd;} else {ppnd = 0;}}return ppnd;
}

// insert z, recieve percentile
function pnorm(z) {
    z=parseFloat(z);var upper=false;var ltone=7.0;var utzero=18.66;var con=1.28;var a1 = 0.398942280444;var a2 = 0.399903438504;var a3 = 5.75885480458;var a4 =29.8213557808;var a5 = 2.62433121679;var a6 =48.6959930692;var a7 = 5.92885724438;var b1 =0.398942280385;var b2 =3.8052e-8;var b3 =1.00000615302;var b4 =3.98064794e-4;var b5 =1.986153813664;var b6 =0.151679116635;var b7 =5.29330324926;var b8 =4.8385912808; var b9 =15.1508972451;var b10=0.742380924027;var b11=30.789933034;var b12=3.99019417011;
    if(z<0) {upper=!upper;z=-z;}
    if(z<=ltone || upper && z<=utzero) {y=0.5*z*z;if(z>con) {alnorm=b1*Math.exp(-y)/(z-b2+b3/(z+b4+b5/(z-b6+b7/(z+b8-b9/(z+b10+b11/(z+b12))))));}else {alnorm=0.5-z*(a1-a2*y/(y+a3-a4/(y+a5+a6/(y+a7))));}}else { alnorm=0;}if(!upper) alnorm=1-alnorm;return(alnorm);
  }

function ask_z(val,mean=0,sd=1){return((val-mean)/sd)}
function ask_p(val,mean=0,sd=1){return(pnorm(ask_z(val,mean,sd)))}