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
        data: {"result": {"minY": 220.0, "minX": 0.0, "maxY": 9173.0, "series": [{"data": [[0.0, 220.0], [0.1, 220.0], [0.2, 225.0], [0.3, 234.0], [0.4, 234.0], [0.5, 243.0], [0.6, 244.0], [0.7, 247.0], [0.8, 247.0], [0.9, 248.0], [1.0, 251.0], [1.1, 251.0], [1.2, 251.0], [1.3, 253.0], [1.4, 254.0], [1.5, 255.0], [1.6, 255.0], [1.7, 260.0], [1.8, 264.0], [1.9, 264.0], [2.0, 270.0], [2.1, 278.0], [2.2, 278.0], [2.3, 278.0], [2.4, 279.0], [2.5, 280.0], [2.6, 280.0], [2.7, 280.0], [2.8, 285.0], [2.9, 288.0], [3.0, 289.0], [3.1, 289.0], [3.2, 293.0], [3.3, 301.0], [3.4, 301.0], [3.5, 301.0], [3.6, 302.0], [3.7, 303.0], [3.8, 303.0], [3.9, 303.0], [4.0, 303.0], [4.1, 305.0], [4.2, 305.0], [4.3, 306.0], [4.4, 309.0], [4.5, 310.0], [4.6, 310.0], [4.7, 311.0], [4.8, 315.0], [4.9, 316.0], [5.0, 316.0], [5.1, 317.0], [5.2, 317.0], [5.3, 317.0], [5.4, 317.0], [5.5, 318.0], [5.6, 323.0], [5.7, 323.0], [5.8, 324.0], [5.9, 325.0], [6.0, 326.0], [6.1, 326.0], [6.2, 328.0], [6.3, 330.0], [6.4, 331.0], [6.5, 331.0], [6.6, 337.0], [6.7, 338.0], [6.8, 338.0], [6.9, 339.0], [7.0, 357.0], [7.1, 360.0], [7.2, 360.0], [7.3, 365.0], [7.4, 370.0], [7.5, 371.0], [7.6, 371.0], [7.7, 373.0], [7.8, 377.0], [7.9, 380.0], [8.0, 380.0], [8.1, 384.0], [8.2, 385.0], [8.3, 388.0], [8.4, 388.0], [8.5, 389.0], [8.6, 390.0], [8.7, 390.0], [8.8, 391.0], [8.9, 392.0], [9.0, 395.0], [9.1, 395.0], [9.2, 397.0], [9.3, 397.0], [9.4, 398.0], [9.5, 398.0], [9.6, 399.0], [9.7, 403.0], [9.8, 403.0], [9.9, 403.0], [10.0, 404.0], [10.1, 405.0], [10.2, 405.0], [10.3, 405.0], [10.4, 405.0], [10.5, 407.0], [10.6, 407.0], [10.7, 408.0], [10.8, 409.0], [10.9, 410.0], [11.0, 410.0], [11.1, 412.0], [11.2, 416.0], [11.3, 416.0], [11.4, 416.0], [11.5, 416.0], [11.6, 417.0], [11.7, 417.0], [11.8, 417.0], [11.9, 420.0], [12.0, 421.0], [12.1, 421.0], [12.2, 421.0], [12.3, 421.0], [12.4, 421.0], [12.5, 421.0], [12.6, 424.0], [12.7, 425.0], [12.8, 427.0], [12.9, 427.0], [13.0, 429.0], [13.1, 431.0], [13.2, 435.0], [13.3, 435.0], [13.4, 436.0], [13.5, 439.0], [13.6, 439.0], [13.7, 439.0], [13.8, 440.0], [13.9, 440.0], [14.0, 440.0], [14.1, 444.0], [14.2, 444.0], [14.3, 445.0], [14.4, 445.0], [14.5, 445.0], [14.6, 447.0], [14.7, 448.0], [14.8, 448.0], [14.9, 449.0], [15.0, 450.0], [15.1, 450.0], [15.2, 450.0], [15.3, 451.0], [15.4, 451.0], [15.5, 451.0], [15.6, 451.0], [15.7, 451.0], [15.8, 452.0], [15.9, 452.0], [16.0, 455.0], [16.1, 455.0], [16.2, 456.0], [16.3, 456.0], [16.4, 457.0], [16.5, 457.0], [16.6, 458.0], [16.7, 458.0], [16.8, 459.0], [16.9, 460.0], [17.0, 460.0], [17.1, 460.0], [17.2, 462.0], [17.3, 462.0], [17.4, 462.0], [17.5, 463.0], [17.6, 470.0], [17.7, 471.0], [17.8, 471.0], [17.9, 472.0], [18.0, 473.0], [18.1, 475.0], [18.2, 475.0], [18.3, 478.0], [18.4, 478.0], [18.5, 478.0], [18.6, 478.0], [18.7, 478.0], [18.8, 479.0], [18.9, 479.0], [19.0, 481.0], [19.1, 481.0], [19.2, 481.0], [19.3, 481.0], [19.4, 482.0], [19.5, 482.0], [19.6, 483.0], [19.7, 483.0], [19.8, 483.0], [19.9, 483.0], [20.0, 486.0], [20.1, 486.0], [20.2, 487.0], [20.3, 487.0], [20.4, 487.0], [20.5, 492.0], [20.6, 493.0], [20.7, 493.0], [20.8, 493.0], [20.9, 494.0], [21.0, 494.0], [21.1, 496.0], [21.2, 496.0], [21.3, 496.0], [21.4, 498.0], [21.5, 500.0], [21.6, 500.0], [21.7, 500.0], [21.8, 501.0], [21.9, 501.0], [22.0, 501.0], [22.1, 501.0], [22.2, 503.0], [22.3, 503.0], [22.4, 503.0], [22.5, 504.0], [22.6, 504.0], [22.7, 504.0], [22.8, 504.0], [22.9, 505.0], [23.0, 505.0], [23.1, 505.0], [23.2, 505.0], [23.3, 507.0], [23.4, 507.0], [23.5, 507.0], [23.6, 509.0], [23.7, 510.0], [23.8, 510.0], [23.9, 510.0], [24.0, 511.0], [24.1, 511.0], [24.2, 511.0], [24.3, 512.0], [24.4, 512.0], [24.5, 513.0], [24.6, 513.0], [24.7, 514.0], [24.8, 515.0], [24.9, 515.0], [25.0, 515.0], [25.1, 518.0], [25.2, 518.0], [25.3, 518.0], [25.4, 519.0], [25.5, 519.0], [25.6, 519.0], [25.7, 519.0], [25.8, 519.0], [25.9, 523.0], [26.0, 524.0], [26.1, 524.0], [26.2, 527.0], [26.3, 528.0], [26.4, 528.0], [26.5, 528.0], [26.6, 530.0], [26.7, 530.0], [26.8, 530.0], [26.9, 530.0], [27.0, 531.0], [27.1, 532.0], [27.2, 532.0], [27.3, 533.0], [27.4, 533.0], [27.5, 535.0], [27.6, 535.0], [27.7, 536.0], [27.8, 536.0], [27.9, 536.0], [28.0, 536.0], [28.1, 537.0], [28.2, 540.0], [28.3, 543.0], [28.4, 543.0], [28.5, 545.0], [28.6, 546.0], [28.7, 546.0], [28.8, 546.0], [28.9, 546.0], [29.0, 546.0], [29.1, 546.0], [29.2, 546.0], [29.3, 546.0], [29.4, 549.0], [29.5, 549.0], [29.6, 552.0], [29.7, 553.0], [29.8, 554.0], [29.9, 554.0], [30.0, 554.0], [30.1, 555.0], [30.2, 555.0], [30.3, 558.0], [30.4, 558.0], [30.5, 559.0], [30.6, 559.0], [30.7, 560.0], [30.8, 561.0], [30.9, 562.0], [31.0, 562.0], [31.1, 563.0], [31.2, 564.0], [31.3, 565.0], [31.4, 565.0], [31.5, 568.0], [31.6, 569.0], [31.7, 569.0], [31.8, 569.0], [31.9, 570.0], [32.0, 570.0], [32.1, 570.0], [32.2, 570.0], [32.3, 573.0], [32.4, 573.0], [32.5, 573.0], [32.6, 574.0], [32.7, 574.0], [32.8, 575.0], [32.9, 575.0], [33.0, 577.0], [33.1, 577.0], [33.2, 577.0], [33.3, 577.0], [33.4, 578.0], [33.5, 579.0], [33.6, 579.0], [33.7, 579.0], [33.8, 579.0], [33.9, 581.0], [34.0, 581.0], [34.1, 584.0], [34.2, 586.0], [34.3, 587.0], [34.4, 587.0], [34.5, 587.0], [34.6, 589.0], [34.7, 590.0], [34.8, 590.0], [34.9, 590.0], [35.0, 590.0], [35.1, 590.0], [35.2, 590.0], [35.3, 592.0], [35.4, 592.0], [35.5, 592.0], [35.6, 592.0], [35.7, 592.0], [35.8, 594.0], [35.9, 594.0], [36.0, 594.0], [36.1, 596.0], [36.2, 597.0], [36.3, 597.0], [36.4, 597.0], [36.5, 597.0], [36.6, 598.0], [36.7, 598.0], [36.8, 598.0], [36.9, 599.0], [37.0, 599.0], [37.1, 599.0], [37.2, 599.0], [37.3, 599.0], [37.4, 599.0], [37.5, 601.0], [37.6, 603.0], [37.7, 604.0], [37.8, 604.0], [37.9, 604.0], [38.0, 605.0], [38.1, 608.0], [38.2, 608.0], [38.3, 608.0], [38.4, 608.0], [38.5, 608.0], [38.6, 609.0], [38.7, 610.0], [38.8, 614.0], [38.9, 614.0], [39.0, 615.0], [39.1, 615.0], [39.2, 619.0], [39.3, 619.0], [39.4, 620.0], [39.5, 620.0], [39.6, 621.0], [39.7, 621.0], [39.8, 621.0], [39.9, 623.0], [40.0, 624.0], [40.1, 624.0], [40.2, 624.0], [40.3, 626.0], [40.4, 626.0], [40.5, 626.0], [40.6, 626.0], [40.7, 628.0], [40.8, 628.0], [40.9, 628.0], [41.0, 629.0], [41.1, 629.0], [41.2, 629.0], [41.3, 630.0], [41.4, 632.0], [41.5, 632.0], [41.6, 632.0], [41.7, 634.0], [41.8, 637.0], [41.9, 637.0], [42.0, 641.0], [42.1, 642.0], [42.2, 643.0], [42.3, 643.0], [42.4, 644.0], [42.5, 645.0], [42.6, 646.0], [42.7, 646.0], [42.8, 646.0], [42.9, 647.0], [43.0, 649.0], [43.1, 649.0], [43.2, 650.0], [43.3, 650.0], [43.4, 650.0], [43.5, 651.0], [43.6, 652.0], [43.7, 654.0], [43.8, 654.0], [43.9, 654.0], [44.0, 654.0], [44.1, 656.0], [44.2, 656.0], [44.3, 656.0], [44.4, 658.0], [44.5, 660.0], [44.6, 660.0], [44.7, 660.0], [44.8, 660.0], [44.9, 661.0], [45.0, 661.0], [45.1, 662.0], [45.2, 663.0], [45.3, 663.0], [45.4, 664.0], [45.5, 665.0], [45.6, 666.0], [45.7, 666.0], [45.8, 667.0], [45.9, 669.0], [46.0, 669.0], [46.1, 669.0], [46.2, 672.0], [46.3, 672.0], [46.4, 673.0], [46.5, 673.0], [46.6, 677.0], [46.7, 677.0], [46.8, 677.0], [46.9, 678.0], [47.0, 679.0], [47.1, 679.0], [47.2, 679.0], [47.3, 680.0], [47.4, 680.0], [47.5, 681.0], [47.6, 681.0], [47.7, 681.0], [47.8, 683.0], [47.9, 683.0], [48.0, 683.0], [48.1, 685.0], [48.2, 685.0], [48.3, 689.0], [48.4, 689.0], [48.5, 689.0], [48.6, 690.0], [48.7, 690.0], [48.8, 690.0], [48.9, 692.0], [49.0, 693.0], [49.1, 693.0], [49.2, 696.0], [49.3, 696.0], [49.4, 697.0], [49.5, 697.0], [49.6, 698.0], [49.7, 699.0], [49.8, 700.0], [49.9, 700.0], [50.0, 700.0], [50.1, 704.0], [50.2, 704.0], [50.3, 708.0], [50.4, 709.0], [50.5, 713.0], [50.6, 713.0], [50.7, 715.0], [50.8, 717.0], [50.9, 718.0], [51.0, 718.0], [51.1, 720.0], [51.2, 720.0], [51.3, 723.0], [51.4, 723.0], [51.5, 724.0], [51.6, 728.0], [51.7, 728.0], [51.8, 728.0], [51.9, 731.0], [52.0, 731.0], [52.1, 731.0], [52.2, 732.0], [52.3, 736.0], [52.4, 737.0], [52.5, 737.0], [52.6, 739.0], [52.7, 740.0], [52.8, 741.0], [52.9, 741.0], [53.0, 742.0], [53.1, 744.0], [53.2, 744.0], [53.3, 744.0], [53.4, 745.0], [53.5, 745.0], [53.6, 745.0], [53.7, 748.0], [53.8, 748.0], [53.9, 749.0], [54.0, 749.0], [54.1, 751.0], [54.2, 752.0], [54.3, 754.0], [54.4, 754.0], [54.5, 755.0], [54.6, 755.0], [54.7, 756.0], [54.8, 756.0], [54.9, 757.0], [55.0, 761.0], [55.1, 761.0], [55.2, 762.0], [55.3, 773.0], [55.4, 776.0], [55.5, 776.0], [55.6, 778.0], [55.7, 786.0], [55.8, 788.0], [55.9, 788.0], [56.0, 789.0], [56.1, 789.0], [56.2, 790.0], [56.3, 790.0], [56.4, 791.0], [56.5, 792.0], [56.6, 792.0], [56.7, 792.0], [56.8, 793.0], [56.9, 795.0], [57.0, 795.0], [57.1, 795.0], [57.2, 796.0], [57.3, 799.0], [57.4, 799.0], [57.5, 800.0], [57.6, 801.0], [57.7, 801.0], [57.8, 801.0], [57.9, 804.0], [58.0, 805.0], [58.1, 806.0], [58.2, 806.0], [58.3, 807.0], [58.4, 810.0], [58.5, 810.0], [58.6, 811.0], [58.7, 813.0], [58.8, 814.0], [58.9, 814.0], [59.0, 815.0], [59.1, 817.0], [59.2, 819.0], [59.3, 819.0], [59.4, 821.0], [59.5, 821.0], [59.6, 822.0], [59.7, 822.0], [59.8, 825.0], [59.9, 828.0], [60.0, 829.0], [60.1, 829.0], [60.2, 831.0], [60.3, 835.0], [60.4, 835.0], [60.5, 836.0], [60.6, 836.0], [60.7, 836.0], [60.8, 836.0], [60.9, 837.0], [61.0, 837.0], [61.1, 839.0], [61.2, 839.0], [61.3, 840.0], [61.4, 842.0], [61.5, 845.0], [61.6, 845.0], [61.7, 846.0], [61.8, 848.0], [61.9, 848.0], [62.0, 848.0], [62.1, 851.0], [62.2, 855.0], [62.3, 855.0], [62.4, 861.0], [62.5, 863.0], [62.6, 864.0], [62.7, 864.0], [62.8, 867.0], [62.9, 875.0], [63.0, 876.0], [63.1, 876.0], [63.2, 886.0], [63.3, 886.0], [63.4, 886.0], [63.5, 887.0], [63.6, 892.0], [63.7, 893.0], [63.8, 893.0], [63.9, 894.0], [64.0, 899.0], [64.1, 903.0], [64.2, 903.0], [64.3, 908.0], [64.4, 912.0], [64.5, 913.0], [64.6, 913.0], [64.7, 914.0], [64.8, 917.0], [64.9, 918.0], [65.0, 918.0], [65.1, 923.0], [65.2, 928.0], [65.3, 928.0], [65.4, 932.0], [65.5, 932.0], [65.6, 933.0], [65.7, 933.0], [65.8, 937.0], [65.9, 943.0], [66.0, 944.0], [66.1, 944.0], [66.2, 946.0], [66.3, 946.0], [66.4, 952.0], [66.5, 952.0], [66.6, 956.0], [66.7, 960.0], [66.8, 960.0], [66.9, 960.0], [67.0, 961.0], [67.1, 964.0], [67.2, 964.0], [67.3, 964.0], [67.4, 964.0], [67.5, 965.0], [67.6, 965.0], [67.7, 966.0], [67.8, 968.0], [67.9, 969.0], [68.0, 969.0], [68.1, 975.0], [68.2, 976.0], [68.3, 976.0], [68.4, 976.0], [68.5, 978.0], [68.6, 989.0], [68.7, 989.0], [68.8, 992.0], [68.9, 996.0], [69.0, 997.0], [69.1, 997.0], [69.2, 998.0], [69.3, 1003.0], [69.4, 1003.0], [69.5, 1003.0], [69.6, 1004.0], [69.7, 1005.0], [69.8, 1007.0], [69.9, 1007.0], [70.0, 1009.0], [70.1, 1011.0], [70.2, 1011.0], [70.3, 1011.0], [70.4, 1013.0], [70.5, 1017.0], [70.6, 1017.0], [70.7, 1018.0], [70.8, 1020.0], [70.9, 1021.0], [71.0, 1021.0], [71.1, 1029.0], [71.2, 1030.0], [71.3, 1037.0], [71.4, 1037.0], [71.5, 1046.0], [71.6, 1047.0], [71.7, 1047.0], [71.8, 1052.0], [71.9, 1053.0], [72.0, 1055.0], [72.1, 1055.0], [72.2, 1057.0], [72.3, 1061.0], [72.4, 1064.0], [72.5, 1064.0], [72.6, 1066.0], [72.7, 1069.0], [72.8, 1073.0], [72.9, 1073.0], [73.0, 1074.0], [73.1, 1077.0], [73.2, 1078.0], [73.3, 1078.0], [73.4, 1081.0], [73.5, 1084.0], [73.6, 1084.0], [73.7, 1087.0], [73.8, 1091.0], [73.9, 1093.0], [74.0, 1093.0], [74.1, 1093.0], [74.2, 1094.0], [74.3, 1098.0], [74.4, 1098.0], [74.5, 1099.0], [74.6, 1099.0], [74.7, 1103.0], [74.8, 1103.0], [74.9, 1104.0], [75.0, 1116.0], [75.1, 1116.0], [75.2, 1116.0], [75.3, 1118.0], [75.4, 1120.0], [75.5, 1120.0], [75.6, 1129.0], [75.7, 1130.0], [75.8, 1133.0], [75.9, 1133.0], [76.0, 1136.0], [76.1, 1141.0], [76.2, 1144.0], [76.3, 1144.0], [76.4, 1148.0], [76.5, 1155.0], [76.6, 1165.0], [76.7, 1165.0], [76.8, 1165.0], [76.9, 1170.0], [77.0, 1170.0], [77.1, 1176.0], [77.2, 1177.0], [77.3, 1181.0], [77.4, 1181.0], [77.5, 1193.0], [77.6, 1200.0], [77.7, 1202.0], [77.8, 1202.0], [77.9, 1211.0], [78.0, 1214.0], [78.1, 1218.0], [78.2, 1218.0], [78.3, 1221.0], [78.4, 1221.0], [78.5, 1221.0], [78.6, 1227.0], [78.7, 1228.0], [78.8, 1232.0], [78.9, 1232.0], [79.0, 1239.0], [79.1, 1241.0], [79.2, 1244.0], [79.3, 1244.0], [79.4, 1245.0], [79.5, 1246.0], [79.6, 1247.0], [79.7, 1247.0], [79.8, 1249.0], [79.9, 1249.0], [80.0, 1250.0], [80.1, 1250.0], [80.2, 1253.0], [80.3, 1254.0], [80.4, 1254.0], [80.5, 1266.0], [80.6, 1273.0], [80.7, 1275.0], [80.8, 1275.0], [80.9, 1281.0], [81.0, 1285.0], [81.1, 1286.0], [81.2, 1286.0], [81.3, 1289.0], [81.4, 1289.0], [81.5, 1292.0], [81.6, 1292.0], [81.7, 1302.0], [81.8, 1309.0], [81.9, 1309.0], [82.0, 1313.0], [82.1, 1319.0], [82.2, 1322.0], [82.3, 1322.0], [82.4, 1323.0], [82.5, 1324.0], [82.6, 1325.0], [82.7, 1325.0], [82.8, 1334.0], [82.9, 1343.0], [83.0, 1345.0], [83.1, 1345.0], [83.2, 1345.0], [83.3, 1349.0], [83.4, 1349.0], [83.5, 1350.0], [83.6, 1358.0], [83.7, 1360.0], [83.8, 1360.0], [83.9, 1361.0], [84.0, 1383.0], [84.1, 1383.0], [84.2, 1383.0], [84.3, 1384.0], [84.4, 1387.0], [84.5, 1394.0], [84.6, 1394.0], [84.7, 1401.0], [84.8, 1402.0], [84.9, 1406.0], [85.0, 1406.0], [85.1, 1410.0], [85.2, 1417.0], [85.3, 1417.0], [85.4, 1421.0], [85.5, 1422.0], [85.6, 1422.0], [85.7, 1422.0], [85.8, 1437.0], [85.9, 1440.0], [86.0, 1441.0], [86.1, 1441.0], [86.2, 1449.0], [86.3, 1451.0], [86.4, 1452.0], [86.5, 1452.0], [86.6, 1465.0], [86.7, 1471.0], [86.8, 1471.0], [86.9, 1478.0], [87.0, 1482.0], [87.1, 1483.0], [87.2, 1483.0], [87.3, 1486.0], [87.4, 1487.0], [87.5, 1490.0], [87.6, 1490.0], [87.7, 1491.0], [87.8, 1494.0], [87.9, 1494.0], [88.0, 1494.0], [88.1, 1510.0], [88.2, 1514.0], [88.3, 1516.0], [88.4, 1516.0], [88.5, 1517.0], [88.6, 1520.0], [88.7, 1520.0], [88.8, 1522.0], [88.9, 1533.0], [89.0, 1541.0], [89.1, 1541.0], [89.2, 1548.0], [89.3, 1568.0], [89.4, 1574.0], [89.5, 1574.0], [89.6, 1576.0], [89.7, 1579.0], [89.8, 1585.0], [89.9, 1585.0], [90.0, 1586.0], [90.1, 1598.0], [90.2, 1598.0], [90.3, 1601.0], [90.4, 1607.0], [90.5, 1609.0], [90.6, 1609.0], [90.7, 1626.0], [90.8, 1636.0], [90.9, 1637.0], [91.0, 1637.0], [91.1, 1638.0], [91.2, 1639.0], [91.3, 1641.0], [91.4, 1641.0], [91.5, 1644.0], [91.6, 1652.0], [91.7, 1652.0], [91.8, 1656.0], [91.9, 1676.0], [92.0, 1678.0], [92.1, 1678.0], [92.2, 1687.0], [92.3, 1688.0], [92.4, 1691.0], [92.5, 1691.0], [92.6, 1697.0], [92.7, 1713.0], [92.8, 1715.0], [92.9, 1715.0], [93.0, 1730.0], [93.1, 1757.0], [93.2, 1764.0], [93.3, 1764.0], [93.4, 1764.0], [93.5, 1767.0], [93.6, 1767.0], [93.7, 1770.0], [93.8, 1771.0], [93.9, 1771.0], [94.0, 1771.0], [94.1, 1783.0], [94.2, 1792.0], [94.3, 1793.0], [94.4, 1793.0], [94.5, 1840.0], [94.6, 1867.0], [94.7, 1873.0], [94.8, 1873.0], [94.9, 1902.0], [95.0, 1918.0], [95.1, 1918.0], [95.2, 1923.0], [95.3, 1931.0], [95.4, 1936.0], [95.5, 1936.0], [95.6, 1981.0], [95.7, 1984.0], [95.8, 1998.0], [95.9, 1998.0], [96.0, 2019.0], [96.1, 2044.0], [96.2, 2097.0], [96.3, 2097.0], [96.4, 2140.0], [96.5, 2146.0], [96.6, 2175.0], [96.7, 2175.0], [96.8, 2271.0], [96.9, 2273.0], [97.0, 2273.0], [97.1, 2282.0], [97.2, 2285.0], [97.3, 2336.0], [97.4, 2336.0], [97.5, 2365.0], [97.6, 2499.0], [97.7, 2505.0], [97.8, 2505.0], [97.9, 2541.0], [98.0, 2578.0], [98.1, 2599.0], [98.2, 2599.0], [98.3, 2629.0], [98.4, 2654.0], [98.5, 2654.0], [98.6, 2671.0], [98.7, 2906.0], [98.8, 2973.0], [98.9, 2973.0], [99.0, 3047.0], [99.1, 3140.0], [99.2, 3317.0], [99.3, 3317.0], [99.4, 4353.0], [99.5, 5554.0], [99.6, 5603.0], [99.7, 5603.0], [99.8, 8934.0], [99.9, 9173.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 117.0, "series": [{"data": [[8900.0, 1.0], [9100.0, 1.0], [600.0, 91.0], [700.0, 56.0], [800.0, 49.0], [900.0, 38.0], [1000.0, 40.0], [1100.0, 21.0], [1200.0, 30.0], [1300.0, 22.0], [1400.0, 25.0], [1500.0, 16.0], [1600.0, 18.0], [1700.0, 13.0], [1800.0, 3.0], [1900.0, 8.0], [2000.0, 3.0], [2100.0, 3.0], [2200.0, 4.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 4.0], [2600.0, 3.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 24.0], [3300.0, 1.0], [4300.0, 1.0], [300.0, 47.0], [5600.0, 1.0], [5500.0, 1.0], [400.0, 87.0], [500.0, 117.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 88.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 487.0, "series": [{"data": [[0.0, 160.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 487.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 88.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.86994219653179, "minX": 1.60238574E12, "maxY": 10.0, "series": [{"data": [[1.60238574E12, 10.0], [1.6023858E12, 9.86994219653179]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023858E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 435.0, "minX": 1.0, "maxY": 5554.0, "series": [{"data": [[8.0, 479.0], [4.0, 2973.0], [2.0, 5554.0], [1.0, 1343.0], [9.0, 435.0], [10.0, 902.3842975206617], [5.0, 455.0], [6.0, 586.0], [3.0, 1165.0], [7.0, 530.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 909.7292517006808]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2598.8, "minX": 1.60238574E12, "maxY": 1222270.6666666667, "series": [{"data": [[1.60238574E12, 1222270.6666666667], [1.6023858E12, 973029.2166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238574E12, 2924.233333333333], [1.6023858E12, 2598.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023858E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 874.9408740359901, "minX": 1.60238574E12, "maxY": 948.8410404624276, "series": [{"data": [[1.60238574E12, 874.9408740359901], [1.6023858E12, 948.8410404624276]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023858E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 873.2904884318767, "minX": 1.60238574E12, "maxY": 947.3872832369946, "series": [{"data": [[1.60238574E12, 873.2904884318767], [1.6023858E12, 947.3872832369946]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023858E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02890173410404624, "minX": 1.60238574E12, "maxY": 0.20565552699228776, "series": [{"data": [[1.60238574E12, 0.20565552699228776], [1.6023858E12, 0.02890173410404624]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023858E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 220.0, "minX": 1.60238574E12, "maxY": 9173.0, "series": [{"data": [[1.60238574E12, 8934.0], [1.6023858E12, 9173.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238574E12, 247.50999990701675], [1.6023858E12, 239.65799619436265]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238574E12, 247.8610000371933], [1.6023858E12, 254.02380152225493]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238574E12, 247.70499995350838], [1.6023858E12, 247.63899809718131]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238574E12, 243.0], [1.6023858E12, 220.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238574E12, 689.0], [1.6023858E12, 725.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023858E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 416.0, "minX": 1.0, "maxY": 1541.0, "series": [{"data": [[8.0, 1056.5], [9.0, 971.0], [10.0, 786.0], [11.0, 813.0], [12.0, 666.0], [3.0, 1541.0], [13.0, 672.0], [14.0, 516.5], [15.0, 551.0], [16.0, 578.5], [1.0, 1343.0], [18.0, 557.0], [5.0, 1269.0], [21.0, 416.0], [6.0, 706.5], [7.0, 1191.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 416.0, "minX": 1.0, "maxY": 1539.0, "series": [{"data": [[8.0, 1055.5], [9.0, 969.5], [10.0, 785.0], [11.0, 810.0], [12.0, 665.0], [3.0, 1539.0], [13.0, 672.0], [14.0, 516.5], [15.0, 549.5], [16.0, 578.0], [1.0, 1343.0], [18.0, 555.5], [5.0, 1267.0], [21.0, 416.0], [6.0, 706.5], [7.0, 1189.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.6, "minX": 1.60238574E12, "maxY": 6.65, "series": [{"data": [[1.60238574E12, 6.65], [1.6023858E12, 5.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023858E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.60238574E12, "maxY": 6.483333333333333, "series": [{"data": [[1.60238574E12, 6.483333333333333], [1.6023858E12, 5.766666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023858E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.60238574E12, "maxY": 6.483333333333333, "series": [{"data": [[1.60238574E12, 6.483333333333333], [1.6023858E12, 5.766666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023858E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.60238574E12, "maxY": 6.483333333333333, "series": [{"data": [[1.60238574E12, 6.483333333333333], [1.6023858E12, 5.766666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023858E12, "title": "Total Transactions Per Second"}},
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

