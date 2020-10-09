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
        data: {"result": {"minY": 220.0, "minX": 0.0, "maxY": 9122.0, "series": [{"data": [[0.0, 220.0], [0.1, 220.0], [0.2, 221.0], [0.3, 224.0], [0.4, 224.0], [0.5, 225.0], [0.6, 229.0], [0.7, 232.0], [0.8, 232.0], [0.9, 236.0], [1.0, 237.0], [1.1, 237.0], [1.2, 237.0], [1.3, 241.0], [1.4, 241.0], [1.5, 241.0], [1.6, 241.0], [1.7, 245.0], [1.8, 249.0], [1.9, 249.0], [2.0, 251.0], [2.1, 255.0], [2.2, 257.0], [2.3, 257.0], [2.4, 260.0], [2.5, 265.0], [2.6, 265.0], [2.7, 265.0], [2.8, 266.0], [2.9, 269.0], [3.0, 270.0], [3.1, 270.0], [3.2, 272.0], [3.3, 273.0], [3.4, 273.0], [3.5, 280.0], [3.6, 280.0], [3.7, 280.0], [3.8, 280.0], [3.9, 281.0], [4.0, 282.0], [4.1, 284.0], [4.2, 284.0], [4.3, 287.0], [4.4, 296.0], [4.5, 300.0], [4.6, 300.0], [4.7, 305.0], [4.8, 309.0], [4.9, 309.0], [5.0, 309.0], [5.1, 311.0], [5.2, 314.0], [5.3, 314.0], [5.4, 327.0], [5.5, 327.0], [5.6, 328.0], [5.7, 328.0], [5.8, 335.0], [5.9, 340.0], [6.0, 341.0], [6.1, 341.0], [6.2, 342.0], [6.3, 344.0], [6.4, 347.0], [6.5, 347.0], [6.6, 350.0], [6.7, 350.0], [6.8, 350.0], [6.9, 351.0], [7.0, 352.0], [7.1, 354.0], [7.2, 354.0], [7.3, 355.0], [7.4, 356.0], [7.5, 357.0], [7.6, 357.0], [7.7, 359.0], [7.8, 361.0], [7.9, 363.0], [8.0, 363.0], [8.1, 363.0], [8.2, 366.0], [8.3, 366.0], [8.4, 366.0], [8.5, 369.0], [8.6, 370.0], [8.7, 370.0], [8.8, 378.0], [8.9, 380.0], [9.0, 381.0], [9.1, 381.0], [9.2, 384.0], [9.3, 385.0], [9.4, 388.0], [9.5, 388.0], [9.6, 388.0], [9.7, 389.0], [9.8, 391.0], [9.9, 391.0], [10.0, 392.0], [10.1, 392.0], [10.2, 392.0], [10.3, 393.0], [10.4, 394.0], [10.5, 396.0], [10.6, 396.0], [10.7, 397.0], [10.8, 399.0], [10.9, 400.0], [11.0, 400.0], [11.1, 403.0], [11.2, 403.0], [11.3, 404.0], [11.4, 404.0], [11.5, 404.0], [11.6, 404.0], [11.7, 404.0], [11.8, 404.0], [11.9, 405.0], [12.0, 405.0], [12.1, 405.0], [12.2, 407.0], [12.3, 408.0], [12.4, 409.0], [12.5, 409.0], [12.6, 409.0], [12.7, 409.0], [12.8, 410.0], [12.9, 410.0], [13.0, 410.0], [13.1, 411.0], [13.2, 414.0], [13.3, 414.0], [13.4, 414.0], [13.5, 416.0], [13.6, 416.0], [13.7, 416.0], [13.8, 417.0], [13.9, 418.0], [14.0, 418.0], [14.1, 418.0], [14.2, 418.0], [14.3, 419.0], [14.4, 419.0], [14.5, 421.0], [14.6, 421.0], [14.7, 422.0], [14.8, 422.0], [14.9, 423.0], [15.0, 426.0], [15.1, 426.0], [15.2, 426.0], [15.3, 428.0], [15.4, 429.0], [15.5, 429.0], [15.6, 429.0], [15.7, 429.0], [15.8, 429.0], [15.9, 429.0], [16.0, 430.0], [16.1, 430.0], [16.2, 431.0], [16.3, 431.0], [16.4, 431.0], [16.5, 431.0], [16.6, 432.0], [16.7, 432.0], [16.8, 435.0], [16.9, 435.0], [17.0, 435.0], [17.1, 436.0], [17.2, 436.0], [17.3, 439.0], [17.4, 439.0], [17.5, 439.0], [17.6, 439.0], [17.7, 439.0], [17.8, 439.0], [17.9, 440.0], [18.0, 440.0], [18.1, 440.0], [18.2, 440.0], [18.3, 441.0], [18.4, 441.0], [18.5, 441.0], [18.6, 442.0], [18.7, 443.0], [18.8, 444.0], [18.9, 444.0], [19.0, 444.0], [19.1, 446.0], [19.2, 448.0], [19.3, 448.0], [19.4, 449.0], [19.5, 450.0], [19.6, 451.0], [19.7, 451.0], [19.8, 451.0], [19.9, 452.0], [20.0, 453.0], [20.1, 453.0], [20.2, 454.0], [20.3, 455.0], [20.4, 455.0], [20.5, 455.0], [20.6, 457.0], [20.7, 458.0], [20.8, 458.0], [20.9, 459.0], [21.0, 463.0], [21.1, 464.0], [21.2, 464.0], [21.3, 464.0], [21.4, 465.0], [21.5, 465.0], [21.6, 465.0], [21.7, 467.0], [21.8, 467.0], [21.9, 467.0], [22.0, 469.0], [22.1, 469.0], [22.2, 469.0], [22.3, 469.0], [22.4, 470.0], [22.5, 470.0], [22.6, 471.0], [22.7, 471.0], [22.8, 471.0], [22.9, 472.0], [23.0, 472.0], [23.1, 472.0], [23.2, 472.0], [23.3, 472.0], [23.4, 472.0], [23.5, 472.0], [23.6, 473.0], [23.7, 474.0], [23.8, 474.0], [23.9, 474.0], [24.0, 475.0], [24.1, 476.0], [24.2, 476.0], [24.3, 476.0], [24.4, 477.0], [24.5, 477.0], [24.6, 477.0], [24.7, 477.0], [24.8, 479.0], [24.9, 485.0], [25.0, 485.0], [25.1, 486.0], [25.2, 486.0], [25.3, 486.0], [25.4, 487.0], [25.5, 487.0], [25.6, 488.0], [25.7, 488.0], [25.8, 489.0], [25.9, 490.0], [26.0, 491.0], [26.1, 491.0], [26.2, 492.0], [26.3, 493.0], [26.4, 493.0], [26.5, 493.0], [26.6, 494.0], [26.7, 495.0], [26.8, 495.0], [26.9, 496.0], [27.0, 496.0], [27.1, 497.0], [27.2, 497.0], [27.3, 497.0], [27.4, 498.0], [27.5, 501.0], [27.6, 501.0], [27.7, 502.0], [27.8, 502.0], [27.9, 503.0], [28.0, 503.0], [28.1, 503.0], [28.2, 504.0], [28.3, 504.0], [28.4, 504.0], [28.5, 504.0], [28.6, 505.0], [28.7, 505.0], [28.8, 506.0], [28.9, 506.0], [29.0, 507.0], [29.1, 507.0], [29.2, 509.0], [29.3, 510.0], [29.4, 510.0], [29.5, 510.0], [29.6, 512.0], [29.7, 512.0], [29.8, 513.0], [29.9, 513.0], [30.0, 513.0], [30.1, 514.0], [30.2, 514.0], [30.3, 515.0], [30.4, 515.0], [30.5, 516.0], [30.6, 516.0], [30.7, 517.0], [30.8, 517.0], [30.9, 517.0], [31.0, 517.0], [31.1, 517.0], [31.2, 518.0], [31.3, 518.0], [31.4, 518.0], [31.5, 518.0], [31.6, 519.0], [31.7, 519.0], [31.8, 519.0], [31.9, 520.0], [32.0, 520.0], [32.1, 520.0], [32.2, 520.0], [32.3, 521.0], [32.4, 522.0], [32.5, 522.0], [32.6, 522.0], [32.7, 523.0], [32.8, 524.0], [32.9, 524.0], [33.0, 525.0], [33.1, 525.0], [33.2, 526.0], [33.3, 526.0], [33.4, 527.0], [33.5, 528.0], [33.6, 528.0], [33.7, 530.0], [33.8, 531.0], [33.9, 535.0], [34.0, 535.0], [34.1, 537.0], [34.2, 537.0], [34.3, 539.0], [34.4, 539.0], [34.5, 541.0], [34.6, 542.0], [34.7, 543.0], [34.8, 543.0], [34.9, 543.0], [35.0, 543.0], [35.1, 543.0], [35.2, 544.0], [35.3, 544.0], [35.4, 545.0], [35.5, 545.0], [35.6, 545.0], [35.7, 546.0], [35.8, 548.0], [35.9, 548.0], [36.0, 548.0], [36.1, 548.0], [36.2, 551.0], [36.3, 551.0], [36.4, 553.0], [36.5, 555.0], [36.6, 555.0], [36.7, 555.0], [36.8, 555.0], [36.9, 555.0], [37.0, 555.0], [37.1, 555.0], [37.2, 558.0], [37.3, 560.0], [37.4, 560.0], [37.5, 563.0], [37.6, 563.0], [37.7, 564.0], [37.8, 564.0], [37.9, 565.0], [38.0, 565.0], [38.1, 566.0], [38.2, 566.0], [38.3, 566.0], [38.4, 566.0], [38.5, 566.0], [38.6, 566.0], [38.7, 568.0], [38.8, 568.0], [38.9, 568.0], [39.0, 569.0], [39.1, 569.0], [39.2, 570.0], [39.3, 570.0], [39.4, 573.0], [39.5, 573.0], [39.6, 577.0], [39.7, 577.0], [39.8, 580.0], [39.9, 582.0], [40.0, 586.0], [40.1, 586.0], [40.2, 586.0], [40.3, 587.0], [40.4, 587.0], [40.5, 588.0], [40.6, 588.0], [40.7, 589.0], [40.8, 589.0], [40.9, 589.0], [41.0, 591.0], [41.1, 592.0], [41.2, 592.0], [41.3, 592.0], [41.4, 592.0], [41.5, 593.0], [41.6, 593.0], [41.7, 593.0], [41.8, 593.0], [41.9, 593.0], [42.0, 594.0], [42.1, 595.0], [42.2, 595.0], [42.3, 595.0], [42.4, 595.0], [42.5, 596.0], [42.6, 597.0], [42.7, 597.0], [42.8, 599.0], [42.9, 602.0], [43.0, 602.0], [43.1, 602.0], [43.2, 603.0], [43.3, 605.0], [43.4, 605.0], [43.5, 606.0], [43.6, 608.0], [43.7, 609.0], [43.8, 609.0], [43.9, 610.0], [44.0, 613.0], [44.1, 614.0], [44.2, 614.0], [44.3, 614.0], [44.4, 615.0], [44.5, 615.0], [44.6, 615.0], [44.7, 616.0], [44.8, 617.0], [44.9, 617.0], [45.0, 617.0], [45.1, 618.0], [45.2, 619.0], [45.3, 619.0], [45.4, 621.0], [45.5, 621.0], [45.6, 622.0], [45.7, 622.0], [45.8, 624.0], [45.9, 624.0], [46.0, 626.0], [46.1, 626.0], [46.2, 627.0], [46.3, 627.0], [46.4, 628.0], [46.5, 628.0], [46.6, 632.0], [46.7, 633.0], [46.8, 633.0], [46.9, 634.0], [47.0, 640.0], [47.1, 640.0], [47.2, 640.0], [47.3, 643.0], [47.4, 644.0], [47.5, 646.0], [47.6, 646.0], [47.7, 647.0], [47.8, 648.0], [47.9, 649.0], [48.0, 649.0], [48.1, 650.0], [48.2, 651.0], [48.3, 652.0], [48.4, 652.0], [48.5, 652.0], [48.6, 655.0], [48.7, 655.0], [48.8, 656.0], [48.9, 657.0], [49.0, 659.0], [49.1, 659.0], [49.2, 660.0], [49.3, 661.0], [49.4, 661.0], [49.5, 661.0], [49.6, 662.0], [49.7, 666.0], [49.8, 667.0], [49.9, 667.0], [50.0, 669.0], [50.1, 669.0], [50.2, 669.0], [50.3, 669.0], [50.4, 670.0], [50.5, 670.0], [50.6, 670.0], [50.7, 672.0], [50.8, 672.0], [50.9, 672.0], [51.0, 672.0], [51.1, 674.0], [51.2, 674.0], [51.3, 676.0], [51.4, 676.0], [51.5, 678.0], [51.6, 679.0], [51.7, 679.0], [51.8, 682.0], [51.9, 682.0], [52.0, 684.0], [52.1, 684.0], [52.2, 685.0], [52.3, 685.0], [52.4, 685.0], [52.5, 685.0], [52.6, 686.0], [52.7, 687.0], [52.8, 687.0], [52.9, 687.0], [53.0, 688.0], [53.1, 690.0], [53.2, 690.0], [53.3, 690.0], [53.4, 691.0], [53.5, 695.0], [53.6, 695.0], [53.7, 700.0], [53.8, 700.0], [53.9, 701.0], [54.0, 701.0], [54.1, 701.0], [54.2, 703.0], [54.3, 703.0], [54.4, 703.0], [54.5, 704.0], [54.6, 704.0], [54.7, 704.0], [54.8, 704.0], [54.9, 706.0], [55.0, 708.0], [55.1, 708.0], [55.2, 718.0], [55.3, 718.0], [55.4, 721.0], [55.5, 721.0], [55.6, 722.0], [55.7, 725.0], [55.8, 729.0], [55.9, 729.0], [56.0, 732.0], [56.1, 739.0], [56.2, 747.0], [56.3, 747.0], [56.4, 748.0], [56.5, 750.0], [56.6, 750.0], [56.7, 750.0], [56.8, 752.0], [56.9, 755.0], [57.0, 755.0], [57.1, 756.0], [57.2, 757.0], [57.3, 761.0], [57.4, 761.0], [57.5, 761.0], [57.6, 761.0], [57.7, 761.0], [57.8, 761.0], [57.9, 765.0], [58.0, 769.0], [58.1, 775.0], [58.2, 775.0], [58.3, 777.0], [58.4, 778.0], [58.5, 778.0], [58.6, 778.0], [58.7, 786.0], [58.8, 786.0], [58.9, 786.0], [59.0, 792.0], [59.1, 793.0], [59.2, 794.0], [59.3, 794.0], [59.4, 794.0], [59.5, 796.0], [59.6, 799.0], [59.7, 799.0], [59.8, 800.0], [59.9, 801.0], [60.0, 802.0], [60.1, 802.0], [60.2, 803.0], [60.3, 804.0], [60.4, 804.0], [60.5, 805.0], [60.6, 805.0], [60.7, 808.0], [60.8, 808.0], [60.9, 811.0], [61.0, 814.0], [61.1, 816.0], [61.2, 816.0], [61.3, 818.0], [61.4, 819.0], [61.5, 823.0], [61.6, 823.0], [61.7, 824.0], [61.8, 825.0], [61.9, 825.0], [62.0, 825.0], [62.1, 825.0], [62.2, 826.0], [62.3, 826.0], [62.4, 828.0], [62.5, 834.0], [62.6, 834.0], [62.7, 834.0], [62.8, 835.0], [62.9, 836.0], [63.0, 838.0], [63.1, 838.0], [63.2, 840.0], [63.3, 841.0], [63.4, 841.0], [63.5, 852.0], [63.6, 853.0], [63.7, 860.0], [63.8, 860.0], [63.9, 861.0], [64.0, 861.0], [64.1, 862.0], [64.2, 862.0], [64.3, 863.0], [64.4, 863.0], [64.5, 868.0], [64.6, 868.0], [64.7, 874.0], [64.8, 875.0], [64.9, 875.0], [65.0, 875.0], [65.1, 876.0], [65.2, 876.0], [65.3, 876.0], [65.4, 876.0], [65.5, 877.0], [65.6, 877.0], [65.7, 877.0], [65.8, 879.0], [65.9, 882.0], [66.0, 889.0], [66.1, 889.0], [66.2, 897.0], [66.3, 899.0], [66.4, 901.0], [66.5, 901.0], [66.6, 901.0], [66.7, 903.0], [66.8, 903.0], [66.9, 905.0], [67.0, 908.0], [67.1, 912.0], [67.2, 912.0], [67.3, 916.0], [67.4, 917.0], [67.5, 918.0], [67.6, 918.0], [67.7, 923.0], [67.8, 923.0], [67.9, 924.0], [68.0, 924.0], [68.1, 926.0], [68.2, 927.0], [68.3, 927.0], [68.4, 927.0], [68.5, 928.0], [68.6, 929.0], [68.7, 929.0], [68.8, 931.0], [68.9, 931.0], [69.0, 934.0], [69.1, 934.0], [69.2, 935.0], [69.3, 939.0], [69.4, 944.0], [69.5, 944.0], [69.6, 955.0], [69.7, 955.0], [69.8, 960.0], [69.9, 960.0], [70.0, 964.0], [70.1, 965.0], [70.2, 965.0], [70.3, 968.0], [70.4, 969.0], [70.5, 970.0], [70.6, 970.0], [70.7, 971.0], [70.8, 972.0], [70.9, 976.0], [71.0, 976.0], [71.1, 977.0], [71.2, 980.0], [71.3, 985.0], [71.4, 985.0], [71.5, 988.0], [71.6, 988.0], [71.7, 988.0], [71.8, 988.0], [71.9, 989.0], [72.0, 994.0], [72.1, 994.0], [72.2, 995.0], [72.3, 1000.0], [72.4, 1001.0], [72.5, 1001.0], [72.6, 1002.0], [72.7, 1003.0], [72.8, 1004.0], [72.9, 1004.0], [73.0, 1004.0], [73.1, 1011.0], [73.2, 1012.0], [73.3, 1012.0], [73.4, 1012.0], [73.5, 1013.0], [73.6, 1013.0], [73.7, 1020.0], [73.8, 1020.0], [73.9, 1021.0], [74.0, 1021.0], [74.1, 1023.0], [74.2, 1024.0], [74.3, 1026.0], [74.4, 1026.0], [74.5, 1029.0], [74.6, 1033.0], [74.7, 1033.0], [74.8, 1033.0], [74.9, 1036.0], [75.0, 1039.0], [75.1, 1039.0], [75.2, 1039.0], [75.3, 1039.0], [75.4, 1041.0], [75.5, 1041.0], [75.6, 1049.0], [75.7, 1050.0], [75.8, 1053.0], [75.9, 1053.0], [76.0, 1056.0], [76.1, 1056.0], [76.2, 1058.0], [76.3, 1058.0], [76.4, 1059.0], [76.5, 1061.0], [76.6, 1063.0], [76.7, 1063.0], [76.8, 1066.0], [76.9, 1071.0], [77.0, 1071.0], [77.1, 1075.0], [77.2, 1083.0], [77.3, 1086.0], [77.4, 1086.0], [77.5, 1100.0], [77.6, 1101.0], [77.7, 1102.0], [77.8, 1102.0], [77.9, 1102.0], [78.0, 1107.0], [78.1, 1111.0], [78.2, 1111.0], [78.3, 1112.0], [78.4, 1116.0], [78.5, 1116.0], [78.6, 1119.0], [78.7, 1131.0], [78.8, 1134.0], [78.9, 1134.0], [79.0, 1144.0], [79.1, 1145.0], [79.2, 1147.0], [79.3, 1147.0], [79.4, 1150.0], [79.5, 1152.0], [79.6, 1166.0], [79.7, 1166.0], [79.8, 1175.0], [79.9, 1180.0], [80.0, 1180.0], [80.1, 1180.0], [80.2, 1183.0], [80.3, 1185.0], [80.4, 1185.0], [80.5, 1191.0], [80.6, 1193.0], [80.7, 1197.0], [80.8, 1197.0], [80.9, 1198.0], [81.0, 1211.0], [81.1, 1211.0], [81.2, 1211.0], [81.3, 1216.0], [81.4, 1224.0], [81.5, 1225.0], [81.6, 1225.0], [81.7, 1231.0], [81.8, 1233.0], [81.9, 1233.0], [82.0, 1237.0], [82.1, 1250.0], [82.2, 1251.0], [82.3, 1251.0], [82.4, 1262.0], [82.5, 1269.0], [82.6, 1273.0], [82.7, 1273.0], [82.8, 1276.0], [82.9, 1282.0], [83.0, 1290.0], [83.1, 1290.0], [83.2, 1306.0], [83.3, 1308.0], [83.4, 1308.0], [83.5, 1314.0], [83.6, 1314.0], [83.7, 1316.0], [83.8, 1316.0], [83.9, 1332.0], [84.0, 1339.0], [84.1, 1341.0], [84.2, 1341.0], [84.3, 1343.0], [84.4, 1360.0], [84.5, 1360.0], [84.6, 1360.0], [84.7, 1361.0], [84.8, 1363.0], [84.9, 1369.0], [85.0, 1369.0], [85.1, 1370.0], [85.2, 1386.0], [85.3, 1386.0], [85.4, 1395.0], [85.5, 1398.0], [85.6, 1406.0], [85.7, 1406.0], [85.8, 1415.0], [85.9, 1417.0], [86.0, 1419.0], [86.1, 1419.0], [86.2, 1419.0], [86.3, 1420.0], [86.4, 1421.0], [86.5, 1421.0], [86.6, 1426.0], [86.7, 1426.0], [86.8, 1426.0], [86.9, 1431.0], [87.0, 1432.0], [87.1, 1444.0], [87.2, 1444.0], [87.3, 1446.0], [87.4, 1448.0], [87.5, 1450.0], [87.6, 1450.0], [87.7, 1451.0], [87.8, 1458.0], [87.9, 1463.0], [88.0, 1463.0], [88.1, 1467.0], [88.2, 1468.0], [88.3, 1469.0], [88.4, 1469.0], [88.5, 1471.0], [88.6, 1471.0], [88.7, 1471.0], [88.8, 1476.0], [88.9, 1484.0], [89.0, 1487.0], [89.1, 1487.0], [89.2, 1489.0], [89.3, 1490.0], [89.4, 1493.0], [89.5, 1493.0], [89.6, 1496.0], [89.7, 1504.0], [89.8, 1504.0], [89.9, 1504.0], [90.0, 1513.0], [90.1, 1515.0], [90.2, 1515.0], [90.3, 1527.0], [90.4, 1530.0], [90.5, 1533.0], [90.6, 1533.0], [90.7, 1536.0], [90.8, 1537.0], [90.9, 1539.0], [91.0, 1539.0], [91.1, 1542.0], [91.2, 1543.0], [91.3, 1554.0], [91.4, 1554.0], [91.5, 1559.0], [91.6, 1564.0], [91.7, 1564.0], [91.8, 1579.0], [91.9, 1586.0], [92.0, 1586.0], [92.1, 1586.0], [92.2, 1609.0], [92.3, 1614.0], [92.4, 1615.0], [92.5, 1615.0], [92.6, 1616.0], [92.7, 1632.0], [92.8, 1633.0], [92.9, 1633.0], [93.0, 1645.0], [93.1, 1649.0], [93.2, 1655.0], [93.3, 1655.0], [93.4, 1660.0], [93.5, 1665.0], [93.6, 1665.0], [93.7, 1672.0], [93.8, 1674.0], [93.9, 1675.0], [94.0, 1675.0], [94.1, 1678.0], [94.2, 1699.0], [94.3, 1699.0], [94.4, 1699.0], [94.5, 1703.0], [94.6, 1719.0], [94.7, 1744.0], [94.8, 1744.0], [94.9, 1745.0], [95.0, 1769.0], [95.1, 1769.0], [95.2, 1778.0], [95.3, 1808.0], [95.4, 1809.0], [95.5, 1809.0], [95.6, 1813.0], [95.7, 1815.0], [95.8, 1850.0], [95.9, 1850.0], [96.0, 1856.0], [96.1, 1858.0], [96.2, 1920.0], [96.3, 1920.0], [96.4, 1954.0], [96.5, 1957.0], [96.6, 1961.0], [96.7, 1961.0], [96.8, 1976.0], [96.9, 2088.0], [97.0, 2088.0], [97.1, 2236.0], [97.2, 2283.0], [97.3, 2335.0], [97.4, 2335.0], [97.5, 2348.0], [97.6, 2393.0], [97.7, 2432.0], [97.8, 2432.0], [97.9, 2492.0], [98.0, 2544.0], [98.1, 2581.0], [98.2, 2581.0], [98.3, 2588.0], [98.4, 2669.0], [98.5, 2669.0], [98.6, 2796.0], [98.7, 2799.0], [98.8, 3063.0], [98.9, 3063.0], [99.0, 3109.0], [99.1, 3177.0], [99.2, 3327.0], [99.3, 3327.0], [99.4, 4080.0], [99.5, 5474.0], [99.6, 5689.0], [99.7, 5689.0], [99.8, 7591.0], [99.9, 9122.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 122.0, "series": [{"data": [[9100.0, 1.0], [600.0, 79.0], [700.0, 45.0], [800.0, 49.0], [900.0, 43.0], [1000.0, 38.0], [1100.0, 26.0], [1200.0, 16.0], [1300.0, 18.0], [1400.0, 30.0], [1500.0, 18.0], [1600.0, 17.0], [1700.0, 6.0], [1800.0, 7.0], [1900.0, 5.0], [2000.0, 1.0], [2200.0, 2.0], [2300.0, 3.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 1.0], [2700.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 33.0], [3300.0, 1.0], [4000.0, 1.0], [300.0, 47.0], [5600.0, 1.0], [5400.0, 1.0], [400.0, 122.0], [7500.0, 1.0], [500.0, 113.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 76.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 457.0, "series": [{"data": [[0.0, 202.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 457.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 76.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.608695652173914, "minX": 1.60224774E12, "maxY": 10.0, "series": [{"data": [[1.60224774E12, 10.0], [1.6022478E12, 9.608695652173914]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022478E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 363.0, "minX": 1.0, "maxY": 5474.0, "series": [{"data": [[8.0, 432.0], [4.0, 1262.0], [2.0, 3177.0], [1.0, 1306.0], [9.0, 451.0], [10.0, 851.0812672176307], [5.0, 2799.0], [6.0, 363.0], [3.0, 5474.0], [7.0, 491.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 862.0952380952381]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 854.3333333333334, "minX": 1.60224774E12, "maxY": 1905776.0166666666, "series": [{"data": [[1.60224774E12, 1905776.0166666666], [1.6022478E12, 289486.4666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224774E12, 4668.7], [1.6022478E12, 854.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022478E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 756.1130434782608, "minX": 1.60224774E12, "maxY": 881.753225806451, "series": [{"data": [[1.60224774E12, 881.753225806451], [1.6022478E12, 756.1130434782608]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022478E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 755.1304347826084, "minX": 1.60224774E12, "maxY": 880.1661290322585, "series": [{"data": [[1.60224774E12, 880.1661290322585], [1.6022478E12, 755.1304347826084]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022478E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0608695652173913, "minX": 1.60224774E12, "maxY": 0.15806451612903216, "series": [{"data": [[1.60224774E12, 0.15806451612903216], [1.6022478E12, 0.0608695652173913]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022478E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 220.0, "minX": 1.60224774E12, "maxY": 9122.0, "series": [{"data": [[1.60224774E12, 9122.0], [1.6022478E12, 5474.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224774E12, 230.76699955582617], [1.6022478E12, 269.04399997234344]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224774E12, 232.5916002368927], [1.6022478E12, 269.1484000110626]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224774E12, 231.6984997779131], [1.6022478E12, 269.10199998617173]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224774E12, 220.0], [1.6022478E12, 269.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224774E12, 702.0], [1.6022478E12, 504.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022478E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 472.0, "minX": 1.0, "maxY": 2988.0, "series": [{"data": [[2.0, 1029.5], [8.0, 684.0], [9.0, 685.0], [10.0, 809.5], [11.0, 708.0], [12.0, 700.5], [13.0, 695.5], [14.0, 759.0], [15.0, 511.0], [16.0, 645.5], [4.0, 2988.0], [1.0, 1306.0], [17.0, 603.0], [19.0, 565.0], [5.0, 1513.0], [20.0, 475.5], [21.0, 472.0], [6.0, 923.5], [7.0, 1053.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 471.5, "minX": 1.0, "maxY": 2982.5, "series": [{"data": [[2.0, 1027.5], [8.0, 683.5], [9.0, 684.0], [10.0, 809.0], [11.0, 707.0], [12.0, 697.0], [13.0, 694.5], [14.0, 758.0], [15.0, 511.0], [16.0, 645.0], [4.0, 2982.5], [1.0, 1306.0], [17.0, 603.0], [19.0, 564.0], [5.0, 1511.0], [20.0, 475.5], [21.0, 471.5], [6.0, 921.5], [7.0, 1051.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.75, "minX": 1.60224774E12, "maxY": 10.5, "series": [{"data": [[1.60224774E12, 10.5], [1.6022478E12, 1.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022478E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60224774E12, "maxY": 10.333333333333334, "series": [{"data": [[1.60224774E12, 10.333333333333334], [1.6022478E12, 1.9166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6022478E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60224774E12, "maxY": 10.333333333333334, "series": [{"data": [[1.60224774E12, 10.333333333333334], [1.6022478E12, 1.9166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022478E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60224774E12, "maxY": 10.333333333333334, "series": [{"data": [[1.60224774E12, 10.333333333333334], [1.6022478E12, 1.9166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6022478E12, "title": "Total Transactions Per Second"}},
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

