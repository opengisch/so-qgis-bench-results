/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 226.0, "minX": 0.0, "maxY": 10149.0, "series": [{"data": [[0.0, 226.0], [0.1, 226.0], [0.2, 262.0], [0.3, 265.0], [0.4, 265.0], [0.5, 266.0], [0.6, 267.0], [0.7, 272.0], [0.8, 272.0], [0.9, 274.0], [1.0, 278.0], [1.1, 279.0], [1.2, 279.0], [1.3, 283.0], [1.4, 283.0], [1.5, 284.0], [1.6, 284.0], [1.7, 285.0], [1.8, 286.0], [1.9, 286.0], [2.0, 287.0], [2.1, 289.0], [2.2, 290.0], [2.3, 290.0], [2.4, 290.0], [2.5, 294.0], [2.6, 299.0], [2.7, 299.0], [2.8, 300.0], [2.9, 301.0], [3.0, 304.0], [3.1, 304.0], [3.2, 307.0], [3.3, 307.0], [3.4, 307.0], [3.5, 313.0], [3.6, 314.0], [3.7, 315.0], [3.8, 315.0], [3.9, 315.0], [4.0, 316.0], [4.1, 317.0], [4.2, 317.0], [4.3, 318.0], [4.4, 318.0], [4.5, 318.0], [4.6, 318.0], [4.7, 322.0], [4.8, 330.0], [4.9, 333.0], [5.0, 333.0], [5.1, 335.0], [5.2, 347.0], [5.3, 347.0], [5.4, 353.0], [5.5, 367.0], [5.6, 369.0], [5.7, 369.0], [5.8, 372.0], [5.9, 373.0], [6.0, 374.0], [6.1, 374.0], [6.2, 376.0], [6.3, 380.0], [6.4, 385.0], [6.5, 385.0], [6.6, 385.0], [6.7, 386.0], [6.8, 386.0], [6.9, 394.0], [7.0, 397.0], [7.1, 399.0], [7.2, 399.0], [7.3, 400.0], [7.4, 402.0], [7.5, 403.0], [7.6, 403.0], [7.7, 406.0], [7.8, 406.0], [7.9, 407.0], [8.0, 407.0], [8.1, 413.0], [8.2, 414.0], [8.3, 420.0], [8.4, 420.0], [8.5, 422.0], [8.6, 425.0], [8.7, 425.0], [8.8, 426.0], [8.9, 427.0], [9.0, 429.0], [9.1, 429.0], [9.2, 431.0], [9.3, 432.0], [9.4, 433.0], [9.5, 433.0], [9.6, 435.0], [9.7, 436.0], [9.8, 437.0], [9.9, 437.0], [10.0, 439.0], [10.1, 439.0], [10.2, 439.0], [10.3, 439.0], [10.4, 440.0], [10.5, 441.0], [10.6, 441.0], [10.7, 442.0], [10.8, 444.0], [10.9, 446.0], [11.0, 446.0], [11.1, 448.0], [11.2, 450.0], [11.3, 453.0], [11.4, 453.0], [11.5, 454.0], [11.6, 457.0], [11.7, 457.0], [11.8, 457.0], [11.9, 460.0], [12.0, 461.0], [12.1, 461.0], [12.2, 462.0], [12.3, 463.0], [12.4, 464.0], [12.5, 464.0], [12.6, 465.0], [12.7, 465.0], [12.8, 466.0], [12.9, 466.0], [13.0, 467.0], [13.1, 467.0], [13.2, 467.0], [13.3, 467.0], [13.4, 467.0], [13.5, 469.0], [13.6, 469.0], [13.7, 469.0], [13.8, 469.0], [13.9, 469.0], [14.0, 469.0], [14.1, 471.0], [14.2, 471.0], [14.3, 471.0], [14.4, 471.0], [14.5, 473.0], [14.6, 474.0], [14.7, 474.0], [14.8, 474.0], [14.9, 475.0], [15.0, 475.0], [15.1, 475.0], [15.2, 476.0], [15.3, 477.0], [15.4, 477.0], [15.5, 477.0], [15.6, 477.0], [15.7, 479.0], [15.8, 480.0], [15.9, 480.0], [16.0, 481.0], [16.1, 483.0], [16.2, 483.0], [16.3, 483.0], [16.4, 484.0], [16.5, 484.0], [16.6, 485.0], [16.7, 485.0], [16.8, 486.0], [16.9, 486.0], [17.0, 486.0], [17.1, 486.0], [17.2, 487.0], [17.3, 487.0], [17.4, 487.0], [17.5, 488.0], [17.6, 488.0], [17.7, 489.0], [17.8, 489.0], [17.9, 489.0], [18.0, 490.0], [18.1, 492.0], [18.2, 492.0], [18.3, 492.0], [18.4, 493.0], [18.5, 493.0], [18.6, 493.0], [18.7, 494.0], [18.8, 494.0], [18.9, 494.0], [19.0, 495.0], [19.1, 495.0], [19.2, 495.0], [19.3, 495.0], [19.4, 496.0], [19.5, 498.0], [19.6, 499.0], [19.7, 499.0], [19.8, 502.0], [19.9, 503.0], [20.0, 503.0], [20.1, 503.0], [20.2, 503.0], [20.3, 503.0], [20.4, 503.0], [20.5, 503.0], [20.6, 504.0], [20.7, 506.0], [20.8, 506.0], [20.9, 506.0], [21.0, 507.0], [21.1, 508.0], [21.2, 508.0], [21.3, 508.0], [21.4, 508.0], [21.5, 511.0], [21.6, 511.0], [21.7, 512.0], [21.8, 512.0], [21.9, 512.0], [22.0, 512.0], [22.1, 515.0], [22.2, 515.0], [22.3, 515.0], [22.4, 515.0], [22.5, 517.0], [22.6, 519.0], [22.7, 519.0], [22.8, 519.0], [22.9, 520.0], [23.0, 521.0], [23.1, 521.0], [23.2, 521.0], [23.3, 522.0], [23.4, 522.0], [23.5, 523.0], [23.6, 524.0], [23.7, 526.0], [23.8, 526.0], [23.9, 526.0], [24.0, 527.0], [24.1, 527.0], [24.2, 527.0], [24.3, 527.0], [24.4, 528.0], [24.5, 528.0], [24.6, 528.0], [24.7, 529.0], [24.8, 530.0], [24.9, 530.0], [25.0, 530.0], [25.1, 530.0], [25.2, 531.0], [25.3, 531.0], [25.4, 531.0], [25.5, 533.0], [25.6, 533.0], [25.7, 533.0], [25.8, 534.0], [25.9, 535.0], [26.0, 536.0], [26.1, 536.0], [26.2, 537.0], [26.3, 538.0], [26.4, 540.0], [26.5, 540.0], [26.6, 540.0], [26.7, 540.0], [26.8, 540.0], [26.9, 541.0], [27.0, 543.0], [27.1, 544.0], [27.2, 544.0], [27.3, 545.0], [27.4, 546.0], [27.5, 550.0], [27.6, 550.0], [27.7, 550.0], [27.8, 550.0], [27.9, 550.0], [28.0, 550.0], [28.1, 552.0], [28.2, 552.0], [28.3, 552.0], [28.4, 552.0], [28.5, 554.0], [28.6, 554.0], [28.7, 554.0], [28.8, 555.0], [28.9, 556.0], [29.0, 556.0], [29.1, 556.0], [29.2, 556.0], [29.3, 556.0], [29.4, 556.0], [29.5, 556.0], [29.6, 558.0], [29.7, 558.0], [29.8, 558.0], [29.9, 558.0], [30.0, 559.0], [30.1, 560.0], [30.2, 560.0], [30.3, 560.0], [30.4, 561.0], [30.5, 561.0], [30.6, 561.0], [30.7, 561.0], [30.8, 562.0], [30.9, 562.0], [31.0, 562.0], [31.1, 563.0], [31.2, 564.0], [31.3, 565.0], [31.4, 565.0], [31.5, 566.0], [31.6, 566.0], [31.7, 566.0], [31.8, 567.0], [31.9, 568.0], [32.0, 569.0], [32.1, 569.0], [32.2, 569.0], [32.3, 569.0], [32.4, 569.0], [32.5, 569.0], [32.6, 570.0], [32.7, 570.0], [32.8, 573.0], [32.9, 573.0], [33.0, 573.0], [33.1, 573.0], [33.2, 574.0], [33.3, 574.0], [33.4, 574.0], [33.5, 575.0], [33.6, 575.0], [33.7, 575.0], [33.8, 576.0], [33.9, 576.0], [34.0, 576.0], [34.1, 576.0], [34.2, 576.0], [34.3, 577.0], [34.4, 577.0], [34.5, 578.0], [34.6, 579.0], [34.7, 579.0], [34.8, 579.0], [34.9, 579.0], [35.0, 584.0], [35.1, 584.0], [35.2, 585.0], [35.3, 585.0], [35.4, 586.0], [35.5, 586.0], [35.6, 586.0], [35.7, 586.0], [35.8, 587.0], [35.9, 587.0], [36.0, 588.0], [36.1, 591.0], [36.2, 591.0], [36.3, 591.0], [36.4, 592.0], [36.5, 592.0], [36.6, 593.0], [36.7, 593.0], [36.8, 594.0], [36.9, 594.0], [37.0, 594.0], [37.1, 594.0], [37.2, 594.0], [37.3, 594.0], [37.4, 594.0], [37.5, 595.0], [37.6, 595.0], [37.7, 598.0], [37.8, 598.0], [37.9, 600.0], [38.0, 601.0], [38.1, 601.0], [38.2, 601.0], [38.3, 601.0], [38.4, 601.0], [38.5, 601.0], [38.6, 602.0], [38.7, 602.0], [38.8, 602.0], [38.9, 602.0], [39.0, 602.0], [39.1, 603.0], [39.2, 603.0], [39.3, 603.0], [39.4, 604.0], [39.5, 607.0], [39.6, 607.0], [39.7, 607.0], [39.8, 609.0], [39.9, 609.0], [40.0, 611.0], [40.1, 611.0], [40.2, 611.0], [40.3, 613.0], [40.4, 613.0], [40.5, 614.0], [40.6, 614.0], [40.7, 615.0], [40.8, 615.0], [40.9, 616.0], [41.0, 617.0], [41.1, 618.0], [41.2, 618.0], [41.3, 619.0], [41.4, 619.0], [41.5, 622.0], [41.6, 622.0], [41.7, 624.0], [41.8, 625.0], [41.9, 625.0], [42.0, 625.0], [42.1, 626.0], [42.2, 627.0], [42.3, 627.0], [42.4, 627.0], [42.5, 631.0], [42.6, 632.0], [42.7, 632.0], [42.8, 633.0], [42.9, 633.0], [43.0, 634.0], [43.1, 634.0], [43.2, 634.0], [43.3, 639.0], [43.4, 639.0], [43.5, 639.0], [43.6, 642.0], [43.7, 643.0], [43.8, 643.0], [43.9, 646.0], [44.0, 647.0], [44.1, 648.0], [44.2, 648.0], [44.3, 650.0], [44.4, 652.0], [44.5, 655.0], [44.6, 655.0], [44.7, 655.0], [44.8, 656.0], [44.9, 659.0], [45.0, 659.0], [45.1, 659.0], [45.2, 662.0], [45.3, 662.0], [45.4, 662.0], [45.5, 663.0], [45.6, 663.0], [45.7, 663.0], [45.8, 664.0], [45.9, 664.0], [46.0, 669.0], [46.1, 669.0], [46.2, 670.0], [46.3, 671.0], [46.4, 672.0], [46.5, 672.0], [46.6, 673.0], [46.7, 674.0], [46.8, 674.0], [46.9, 676.0], [47.0, 676.0], [47.1, 677.0], [47.2, 677.0], [47.3, 678.0], [47.4, 679.0], [47.5, 680.0], [47.6, 680.0], [47.7, 683.0], [47.8, 684.0], [47.9, 688.0], [48.0, 688.0], [48.1, 689.0], [48.2, 689.0], [48.3, 691.0], [48.4, 691.0], [48.5, 691.0], [48.6, 693.0], [48.7, 693.0], [48.8, 699.0], [48.9, 699.0], [49.0, 701.0], [49.1, 701.0], [49.2, 703.0], [49.3, 703.0], [49.4, 706.0], [49.5, 706.0], [49.6, 709.0], [49.7, 711.0], [49.8, 712.0], [49.9, 712.0], [50.0, 714.0], [50.1, 714.0], [50.2, 714.0], [50.3, 715.0], [50.4, 716.0], [50.5, 721.0], [50.6, 721.0], [50.7, 724.0], [50.8, 725.0], [50.9, 727.0], [51.0, 727.0], [51.1, 728.0], [51.2, 728.0], [51.3, 730.0], [51.4, 730.0], [51.5, 731.0], [51.6, 734.0], [51.7, 734.0], [51.8, 735.0], [51.9, 735.0], [52.0, 736.0], [52.1, 736.0], [52.2, 736.0], [52.3, 738.0], [52.4, 738.0], [52.5, 738.0], [52.6, 738.0], [52.7, 739.0], [52.8, 740.0], [52.9, 740.0], [53.0, 741.0], [53.1, 743.0], [53.2, 743.0], [53.3, 743.0], [53.4, 743.0], [53.5, 743.0], [53.6, 743.0], [53.7, 749.0], [53.8, 751.0], [53.9, 751.0], [54.0, 751.0], [54.1, 752.0], [54.2, 752.0], [54.3, 754.0], [54.4, 754.0], [54.5, 757.0], [54.6, 759.0], [54.7, 764.0], [54.8, 764.0], [54.9, 764.0], [55.0, 765.0], [55.1, 765.0], [55.2, 765.0], [55.3, 768.0], [55.4, 768.0], [55.5, 768.0], [55.6, 771.0], [55.7, 774.0], [55.8, 776.0], [55.9, 776.0], [56.0, 776.0], [56.1, 776.0], [56.2, 777.0], [56.3, 777.0], [56.4, 780.0], [56.5, 783.0], [56.6, 786.0], [56.7, 786.0], [56.8, 787.0], [56.9, 788.0], [57.0, 788.0], [57.1, 790.0], [57.2, 792.0], [57.3, 793.0], [57.4, 793.0], [57.5, 794.0], [57.6, 795.0], [57.7, 801.0], [57.8, 801.0], [57.9, 801.0], [58.0, 804.0], [58.1, 808.0], [58.2, 808.0], [58.3, 811.0], [58.4, 812.0], [58.5, 812.0], [58.6, 815.0], [58.7, 818.0], [58.8, 818.0], [58.9, 818.0], [59.0, 820.0], [59.1, 821.0], [59.2, 824.0], [59.3, 824.0], [59.4, 827.0], [59.5, 828.0], [59.6, 830.0], [59.7, 830.0], [59.8, 840.0], [59.9, 841.0], [60.0, 848.0], [60.1, 848.0], [60.2, 848.0], [60.3, 866.0], [60.4, 866.0], [60.5, 870.0], [60.6, 874.0], [60.7, 878.0], [60.8, 878.0], [60.9, 888.0], [61.0, 891.0], [61.1, 891.0], [61.2, 891.0], [61.3, 893.0], [61.4, 894.0], [61.5, 894.0], [61.6, 894.0], [61.7, 902.0], [61.8, 915.0], [61.9, 915.0], [62.0, 922.0], [62.1, 924.0], [62.2, 936.0], [62.3, 936.0], [62.4, 938.0], [62.5, 944.0], [62.6, 950.0], [62.7, 950.0], [62.8, 956.0], [62.9, 957.0], [63.0, 971.0], [63.1, 971.0], [63.2, 971.0], [63.3, 978.0], [63.4, 978.0], [63.5, 980.0], [63.6, 982.0], [63.7, 982.0], [63.8, 982.0], [63.9, 986.0], [64.0, 987.0], [64.1, 988.0], [64.2, 988.0], [64.3, 989.0], [64.4, 994.0], [64.5, 996.0], [64.6, 996.0], [64.7, 1004.0], [64.8, 1006.0], [64.9, 1008.0], [65.0, 1008.0], [65.1, 1008.0], [65.2, 1010.0], [65.3, 1010.0], [65.4, 1013.0], [65.5, 1018.0], [65.6, 1018.0], [65.7, 1018.0], [65.8, 1018.0], [65.9, 1019.0], [66.0, 1021.0], [66.1, 1021.0], [66.2, 1021.0], [66.3, 1022.0], [66.4, 1023.0], [66.5, 1023.0], [66.6, 1024.0], [66.7, 1024.0], [66.8, 1024.0], [66.9, 1026.0], [67.0, 1028.0], [67.1, 1029.0], [67.2, 1029.0], [67.3, 1031.0], [67.4, 1032.0], [67.5, 1033.0], [67.6, 1033.0], [67.7, 1033.0], [67.8, 1034.0], [67.9, 1036.0], [68.0, 1036.0], [68.1, 1037.0], [68.2, 1037.0], [68.3, 1038.0], [68.4, 1038.0], [68.5, 1040.0], [68.6, 1043.0], [68.7, 1043.0], [68.8, 1045.0], [68.9, 1052.0], [69.0, 1058.0], [69.1, 1058.0], [69.2, 1058.0], [69.3, 1062.0], [69.4, 1062.0], [69.5, 1062.0], [69.6, 1063.0], [69.7, 1064.0], [69.8, 1064.0], [69.9, 1064.0], [70.0, 1069.0], [70.1, 1072.0], [70.2, 1072.0], [70.3, 1076.0], [70.4, 1077.0], [70.5, 1078.0], [70.6, 1078.0], [70.7, 1079.0], [70.8, 1081.0], [70.9, 1082.0], [71.0, 1082.0], [71.1, 1082.0], [71.2, 1082.0], [71.3, 1083.0], [71.4, 1083.0], [71.5, 1088.0], [71.6, 1088.0], [71.7, 1088.0], [71.8, 1088.0], [71.9, 1089.0], [72.0, 1089.0], [72.1, 1089.0], [72.2, 1090.0], [72.3, 1091.0], [72.4, 1093.0], [72.5, 1093.0], [72.6, 1094.0], [72.7, 1098.0], [72.8, 1101.0], [72.9, 1101.0], [73.0, 1101.0], [73.1, 1105.0], [73.2, 1105.0], [73.3, 1105.0], [73.4, 1107.0], [73.5, 1107.0], [73.6, 1107.0], [73.7, 1107.0], [73.8, 1107.0], [73.9, 1108.0], [74.0, 1108.0], [74.1, 1112.0], [74.2, 1112.0], [74.3, 1112.0], [74.4, 1112.0], [74.5, 1116.0], [74.6, 1116.0], [74.7, 1117.0], [74.8, 1117.0], [74.9, 1117.0], [75.0, 1117.0], [75.1, 1117.0], [75.2, 1125.0], [75.3, 1127.0], [75.4, 1127.0], [75.5, 1127.0], [75.6, 1129.0], [75.7, 1130.0], [75.8, 1132.0], [75.9, 1132.0], [76.0, 1136.0], [76.1, 1140.0], [76.2, 1140.0], [76.3, 1140.0], [76.4, 1142.0], [76.5, 1143.0], [76.6, 1144.0], [76.7, 1144.0], [76.8, 1146.0], [76.9, 1155.0], [77.0, 1155.0], [77.1, 1155.0], [77.2, 1163.0], [77.3, 1165.0], [77.4, 1165.0], [77.5, 1166.0], [77.6, 1171.0], [77.7, 1182.0], [77.8, 1182.0], [77.9, 1186.0], [78.0, 1186.0], [78.1, 1195.0], [78.2, 1195.0], [78.3, 1200.0], [78.4, 1202.0], [78.5, 1202.0], [78.6, 1205.0], [78.7, 1213.0], [78.8, 1221.0], [78.9, 1221.0], [79.0, 1224.0], [79.1, 1226.0], [79.2, 1237.0], [79.3, 1237.0], [79.4, 1238.0], [79.5, 1239.0], [79.6, 1249.0], [79.7, 1249.0], [79.8, 1250.0], [79.9, 1255.0], [80.0, 1255.0], [80.1, 1255.0], [80.2, 1263.0], [80.3, 1272.0], [80.4, 1272.0], [80.5, 1273.0], [80.6, 1277.0], [80.7, 1278.0], [80.8, 1278.0], [80.9, 1282.0], [81.0, 1282.0], [81.1, 1293.0], [81.2, 1293.0], [81.3, 1295.0], [81.4, 1307.0], [81.5, 1318.0], [81.6, 1318.0], [81.7, 1324.0], [81.8, 1327.0], [81.9, 1327.0], [82.0, 1332.0], [82.1, 1337.0], [82.2, 1340.0], [82.3, 1340.0], [82.4, 1340.0], [82.5, 1340.0], [82.6, 1341.0], [82.7, 1341.0], [82.8, 1344.0], [82.9, 1362.0], [83.0, 1363.0], [83.1, 1363.0], [83.2, 1373.0], [83.3, 1383.0], [83.4, 1383.0], [83.5, 1386.0], [83.6, 1389.0], [83.7, 1393.0], [83.8, 1393.0], [83.9, 1394.0], [84.0, 1398.0], [84.1, 1401.0], [84.2, 1401.0], [84.3, 1405.0], [84.4, 1411.0], [84.5, 1412.0], [84.6, 1412.0], [84.7, 1417.0], [84.8, 1418.0], [84.9, 1425.0], [85.0, 1425.0], [85.1, 1426.0], [85.2, 1429.0], [85.3, 1429.0], [85.4, 1432.0], [85.5, 1433.0], [85.6, 1437.0], [85.7, 1437.0], [85.8, 1439.0], [85.9, 1445.0], [86.0, 1453.0], [86.1, 1453.0], [86.2, 1457.0], [86.3, 1457.0], [86.4, 1459.0], [86.5, 1459.0], [86.6, 1461.0], [86.7, 1465.0], [86.8, 1465.0], [86.9, 1473.0], [87.0, 1474.0], [87.1, 1481.0], [87.2, 1481.0], [87.3, 1485.0], [87.4, 1486.0], [87.5, 1491.0], [87.6, 1491.0], [87.7, 1491.0], [87.8, 1498.0], [87.9, 1502.0], [88.0, 1502.0], [88.1, 1512.0], [88.2, 1524.0], [88.3, 1526.0], [88.4, 1526.0], [88.5, 1531.0], [88.6, 1535.0], [88.7, 1535.0], [88.8, 1539.0], [88.9, 1540.0], [89.0, 1542.0], [89.1, 1542.0], [89.2, 1547.0], [89.3, 1551.0], [89.4, 1553.0], [89.5, 1553.0], [89.6, 1557.0], [89.7, 1560.0], [89.8, 1568.0], [89.9, 1568.0], [90.0, 1572.0], [90.1, 1578.0], [90.2, 1578.0], [90.3, 1595.0], [90.4, 1609.0], [90.5, 1617.0], [90.6, 1617.0], [90.7, 1621.0], [90.8, 1624.0], [90.9, 1628.0], [91.0, 1628.0], [91.1, 1630.0], [91.2, 1636.0], [91.3, 1639.0], [91.4, 1639.0], [91.5, 1639.0], [91.6, 1647.0], [91.7, 1647.0], [91.8, 1652.0], [91.9, 1661.0], [92.0, 1666.0], [92.1, 1666.0], [92.2, 1678.0], [92.3, 1681.0], [92.4, 1684.0], [92.5, 1684.0], [92.6, 1693.0], [92.7, 1697.0], [92.8, 1699.0], [92.9, 1699.0], [93.0, 1718.0], [93.1, 1726.0], [93.2, 1737.0], [93.3, 1737.0], [93.4, 1773.0], [93.5, 1789.0], [93.6, 1789.0], [93.7, 1792.0], [93.8, 1796.0], [93.9, 1823.0], [94.0, 1823.0], [94.1, 1899.0], [94.2, 1914.0], [94.3, 1926.0], [94.4, 1926.0], [94.5, 1939.0], [94.6, 1962.0], [94.7, 1962.0], [94.8, 1962.0], [94.9, 1966.0], [95.0, 1970.0], [95.1, 1970.0], [95.2, 1981.0], [95.3, 1987.0], [95.4, 2021.0], [95.5, 2021.0], [95.6, 2036.0], [95.7, 2046.0], [95.8, 2049.0], [95.9, 2049.0], [96.0, 2052.0], [96.1, 2062.0], [96.2, 2096.0], [96.3, 2096.0], [96.4, 2187.0], [96.5, 2210.0], [96.6, 2212.0], [96.7, 2212.0], [96.8, 2279.0], [96.9, 2310.0], [97.0, 2310.0], [97.1, 2366.0], [97.2, 2405.0], [97.3, 2443.0], [97.4, 2443.0], [97.5, 2487.0], [97.6, 2497.0], [97.7, 2504.0], [97.8, 2504.0], [97.9, 2551.0], [98.0, 2607.0], [98.1, 2609.0], [98.2, 2609.0], [98.3, 2649.0], [98.4, 2692.0], [98.5, 2692.0], [98.6, 2700.0], [98.7, 2724.0], [98.8, 2800.0], [98.9, 2800.0], [99.0, 2986.0], [99.1, 3334.0], [99.2, 4228.0], [99.3, 4228.0], [99.4, 4403.0], [99.5, 4681.0], [99.6, 5144.0], [99.7, 5144.0], [99.8, 8594.0], [99.9, 10149.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 133.0, "series": [{"data": [[8500.0, 1.0], [600.0, 82.0], [10100.0, 1.0], [700.0, 64.0], [800.0, 29.0], [900.0, 22.0], [1000.0, 60.0], [1100.0, 40.0], [1200.0, 23.0], [1300.0, 20.0], [1400.0, 28.0], [1500.0, 18.0], [1600.0, 19.0], [1700.0, 7.0], [1800.0, 2.0], [1900.0, 9.0], [2000.0, 7.0], [2100.0, 1.0], [2200.0, 3.0], [2300.0, 2.0], [2400.0, 4.0], [2500.0, 2.0], [2600.0, 4.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 1.0], [200.0, 20.0], [3300.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [4600.0, 1.0], [300.0, 33.0], [5100.0, 1.0], [400.0, 92.0], [500.0, 133.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 89.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 501.0, "series": [{"data": [[0.0, 145.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 501.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 89.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 19.74285714285715, "minX": 1.60183398E12, "maxY": 19.74285714285715, "series": [{"data": [[1.60183398E12, 19.74285714285715]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183398E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 437.0, "minX": 1.0, "maxY": 4681.0, "series": [{"data": [[8.0, 469.0], [2.0, 4228.0], [9.0, 486.0], [11.0, 479.5], [12.0, 1341.0], [3.0, 2692.0], [13.0, 2096.0], [14.0, 1272.0], [15.0, 437.0], [16.0, 1792.0], [4.0, 1340.0], [1.0, 4681.0], [17.0, 454.0], [18.0, 619.0], [19.0, 469.0], [20.0, 916.2932960893852], [5.0, 1045.0], [6.0, 574.0], [7.0, 484.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.74285714285715, 927.2163265306118]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5523.033333333334, "minX": 1.60183398E12, "maxY": 2195682.2, "series": [{"data": [[1.60183398E12, 2195682.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60183398E12, 5523.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183398E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 927.2163265306118, "minX": 1.60183398E12, "maxY": 927.2163265306118, "series": [{"data": [[1.60183398E12, 927.2163265306118]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 871.0326530612241, "minX": 1.60183398E12, "maxY": 871.0326530612241, "series": [{"data": [[1.60183398E12, 871.0326530612241]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.5074829931972794, "minX": 1.60183398E12, "maxY": 0.5074829931972794, "series": [{"data": [[1.60183398E12, 0.5074829931972794]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 226.0, "minX": 1.60183398E12, "maxY": 10149.0, "series": [{"data": [[1.60183398E12, 10149.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60183398E12, 273.24799964904787]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60183398E12, 275.1456002807617]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60183398E12, 273.98399982452395]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60183398E12, 226.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60183398E12, 714.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183398E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 475.0, "minX": 2.0, "maxY": 2776.0, "series": [{"data": [[2.0, 2776.0], [33.0, 603.0], [35.0, 538.0], [37.0, 475.0], [3.0, 1340.0], [13.0, 1449.0], [14.0, 1016.0], [15.0, 982.0], [16.0, 743.0], [17.0, 1136.0], [18.0, 906.0], [19.0, 593.0], [21.0, 807.5], [22.0, 971.0], [23.0, 707.5], [24.0, 683.5], [25.0, 651.0], [26.0, 498.0], [29.0, 601.0], [30.0, 539.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 470.0, "minX": 2.0, "maxY": 2662.0, "series": [{"data": [[2.0, 2662.0], [33.0, 558.0], [35.0, 512.0], [37.0, 470.0], [3.0, 1337.0], [13.0, 1359.0], [14.0, 982.0], [15.0, 937.0], [16.0, 704.5], [17.0, 1081.0], [18.0, 840.0], [19.0, 577.5], [21.0, 749.0], [22.0, 871.0], [23.0, 663.0], [24.0, 638.0], [25.0, 612.0], [26.0, 494.0], [29.0, 564.5], [30.0, 511.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 12.25, "minX": 1.60183398E12, "maxY": 12.25, "series": [{"data": [[1.60183398E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183398E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 12.25, "minX": 1.60183398E12, "maxY": 12.25, "series": [{"data": [[1.60183398E12, 12.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60183398E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 12.25, "minX": 1.60183398E12, "maxY": 12.25, "series": [{"data": [[1.60183398E12, 12.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 12.25, "minX": 1.60183398E12, "maxY": 12.25, "series": [{"data": [[1.60183398E12, 12.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60183398E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

