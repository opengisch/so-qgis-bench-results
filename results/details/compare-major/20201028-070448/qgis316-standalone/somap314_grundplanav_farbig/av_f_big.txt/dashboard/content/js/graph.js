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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 261972.0, "series": [{"data": [[0.0, 8.0], [0.1, 8.0], [0.2, 8.0], [0.3, 9.0], [0.4, 9.0], [0.5, 9.0], [0.6, 12.0], [0.7, 13.0], [0.8, 13.0], [0.9, 20.0], [1.0, 22.0], [1.1, 23.0], [1.2, 23.0], [1.3, 25.0], [1.4, 26.0], [1.5, 30.0], [1.6, 30.0], [1.7, 31.0], [1.8, 42.0], [1.9, 42.0], [2.0, 46.0], [2.1, 48.0], [2.2, 49.0], [2.3, 49.0], [2.4, 110.0], [2.5, 112.0], [2.6, 125.0], [2.7, 125.0], [2.8, 134.0], [2.9, 138.0], [3.0, 142.0], [3.1, 142.0], [3.2, 144.0], [3.3, 145.0], [3.4, 145.0], [3.5, 149.0], [3.6, 153.0], [3.7, 156.0], [3.8, 156.0], [3.9, 157.0], [4.0, 158.0], [4.1, 159.0], [4.2, 159.0], [4.3, 161.0], [4.4, 163.0], [4.5, 168.0], [4.6, 168.0], [4.7, 168.0], [4.8, 168.0], [4.9, 173.0], [5.0, 173.0], [5.1, 177.0], [5.2, 178.0], [5.3, 178.0], [5.4, 179.0], [5.5, 184.0], [5.6, 184.0], [5.7, 184.0], [5.8, 185.0], [5.9, 185.0], [6.0, 185.0], [6.1, 185.0], [6.2, 186.0], [6.3, 186.0], [6.4, 188.0], [6.5, 188.0], [6.6, 192.0], [6.7, 194.0], [6.8, 194.0], [6.9, 199.0], [7.0, 207.0], [7.1, 211.0], [7.2, 211.0], [7.3, 221.0], [7.4, 235.0], [7.5, 237.0], [7.6, 237.0], [7.7, 237.0], [7.8, 237.0], [7.9, 241.0], [8.0, 241.0], [8.1, 243.0], [8.2, 251.0], [8.3, 254.0], [8.4, 254.0], [8.5, 255.0], [8.6, 259.0], [8.7, 259.0], [8.8, 264.0], [8.9, 264.0], [9.0, 268.0], [9.1, 268.0], [9.2, 270.0], [9.3, 272.0], [9.4, 274.0], [9.5, 274.0], [9.6, 278.0], [9.7, 278.0], [9.8, 278.0], [9.9, 278.0], [10.0, 278.0], [10.1, 278.0], [10.2, 278.0], [10.3, 279.0], [10.4, 279.0], [10.5, 281.0], [10.6, 281.0], [10.7, 282.0], [10.8, 284.0], [10.9, 285.0], [11.0, 285.0], [11.1, 286.0], [11.2, 286.0], [11.3, 292.0], [11.4, 292.0], [11.5, 294.0], [11.6, 300.0], [11.7, 300.0], [11.8, 300.0], [11.9, 301.0], [12.0, 305.0], [12.1, 305.0], [12.2, 309.0], [12.3, 309.0], [12.4, 311.0], [12.5, 311.0], [12.6, 311.0], [12.7, 314.0], [12.8, 316.0], [12.9, 316.0], [13.0, 327.0], [13.1, 335.0], [13.2, 338.0], [13.3, 338.0], [13.4, 344.0], [13.5, 349.0], [13.6, 349.0], [13.7, 350.0], [13.8, 353.0], [13.9, 354.0], [14.0, 354.0], [14.1, 355.0], [14.2, 358.0], [14.3, 358.0], [14.4, 358.0], [14.5, 359.0], [14.6, 361.0], [14.7, 361.0], [14.8, 361.0], [14.9, 372.0], [15.0, 376.0], [15.1, 376.0], [15.2, 387.0], [15.3, 396.0], [15.4, 413.0], [15.5, 413.0], [15.6, 418.0], [15.7, 420.0], [15.8, 430.0], [15.9, 430.0], [16.0, 439.0], [16.1, 453.0], [16.2, 460.0], [16.3, 460.0], [16.4, 462.0], [16.5, 471.0], [16.6, 485.0], [16.7, 485.0], [16.8, 486.0], [16.9, 490.0], [17.0, 490.0], [17.1, 492.0], [17.2, 499.0], [17.3, 507.0], [17.4, 507.0], [17.5, 509.0], [17.6, 512.0], [17.7, 514.0], [17.8, 514.0], [17.9, 518.0], [18.0, 518.0], [18.1, 522.0], [18.2, 522.0], [18.3, 522.0], [18.4, 522.0], [18.5, 522.0], [18.6, 523.0], [18.7, 525.0], [18.8, 525.0], [18.9, 525.0], [19.0, 525.0], [19.1, 526.0], [19.2, 527.0], [19.3, 527.0], [19.4, 530.0], [19.5, 531.0], [19.6, 531.0], [19.7, 531.0], [19.8, 535.0], [19.9, 535.0], [20.0, 536.0], [20.1, 536.0], [20.2, 536.0], [20.3, 537.0], [20.4, 537.0], [20.5, 537.0], [20.6, 539.0], [20.7, 539.0], [20.8, 539.0], [20.9, 539.0], [21.0, 539.0], [21.1, 539.0], [21.2, 539.0], [21.3, 540.0], [21.4, 541.0], [21.5, 541.0], [21.6, 541.0], [21.7, 545.0], [21.8, 546.0], [21.9, 546.0], [22.0, 547.0], [22.1, 547.0], [22.2, 547.0], [22.3, 547.0], [22.4, 547.0], [22.5, 547.0], [22.6, 548.0], [22.7, 548.0], [22.8, 548.0], [22.9, 549.0], [23.0, 550.0], [23.1, 550.0], [23.2, 550.0], [23.3, 551.0], [23.4, 551.0], [23.5, 552.0], [23.6, 554.0], [23.7, 557.0], [23.8, 557.0], [23.9, 557.0], [24.0, 558.0], [24.1, 559.0], [24.2, 559.0], [24.3, 559.0], [24.4, 559.0], [24.5, 560.0], [24.6, 560.0], [24.7, 561.0], [24.8, 562.0], [24.9, 564.0], [25.0, 564.0], [25.1, 564.0], [25.2, 564.0], [25.3, 564.0], [25.4, 566.0], [25.5, 567.0], [25.6, 567.0], [25.7, 567.0], [25.8, 568.0], [25.9, 568.0], [26.0, 570.0], [26.1, 570.0], [26.2, 570.0], [26.3, 570.0], [26.4, 573.0], [26.5, 573.0], [26.6, 574.0], [26.7, 574.0], [26.8, 574.0], [26.9, 574.0], [27.0, 575.0], [27.1, 576.0], [27.2, 576.0], [27.3, 576.0], [27.4, 577.0], [27.5, 580.0], [27.6, 580.0], [27.7, 580.0], [27.8, 581.0], [27.9, 582.0], [28.0, 582.0], [28.1, 585.0], [28.2, 586.0], [28.3, 587.0], [28.4, 587.0], [28.5, 587.0], [28.6, 587.0], [28.7, 587.0], [28.8, 588.0], [28.9, 589.0], [29.0, 590.0], [29.1, 590.0], [29.2, 592.0], [29.3, 596.0], [29.4, 601.0], [29.5, 601.0], [29.6, 602.0], [29.7, 604.0], [29.8, 605.0], [29.9, 605.0], [30.0, 605.0], [30.1, 606.0], [30.2, 606.0], [30.3, 606.0], [30.4, 609.0], [30.5, 610.0], [30.6, 610.0], [30.7, 611.0], [30.8, 612.0], [30.9, 614.0], [31.0, 614.0], [31.1, 617.0], [31.2, 618.0], [31.3, 618.0], [31.4, 618.0], [31.5, 622.0], [31.6, 623.0], [31.7, 623.0], [31.8, 625.0], [31.9, 625.0], [32.0, 625.0], [32.1, 625.0], [32.2, 633.0], [32.3, 635.0], [32.4, 637.0], [32.5, 637.0], [32.6, 638.0], [32.7, 641.0], [32.8, 642.0], [32.9, 642.0], [33.0, 642.0], [33.1, 645.0], [33.2, 646.0], [33.3, 646.0], [33.4, 648.0], [33.5, 653.0], [33.6, 653.0], [33.7, 654.0], [33.8, 655.0], [33.9, 659.0], [34.0, 659.0], [34.1, 659.0], [34.2, 660.0], [34.3, 662.0], [34.4, 662.0], [34.5, 662.0], [34.6, 663.0], [34.7, 666.0], [34.8, 666.0], [34.9, 667.0], [35.0, 669.0], [35.1, 669.0], [35.2, 670.0], [35.3, 670.0], [35.4, 670.0], [35.5, 670.0], [35.6, 671.0], [35.7, 674.0], [35.8, 674.0], [35.9, 674.0], [36.0, 675.0], [36.1, 677.0], [36.2, 679.0], [36.3, 679.0], [36.4, 683.0], [36.5, 683.0], [36.6, 683.0], [36.7, 683.0], [36.8, 685.0], [36.9, 687.0], [37.0, 687.0], [37.1, 689.0], [37.2, 691.0], [37.3, 695.0], [37.4, 695.0], [37.5, 695.0], [37.6, 696.0], [37.7, 697.0], [37.8, 697.0], [37.9, 699.0], [38.0, 702.0], [38.1, 703.0], [38.2, 703.0], [38.3, 703.0], [38.4, 706.0], [38.5, 706.0], [38.6, 707.0], [38.7, 707.0], [38.8, 708.0], [38.9, 708.0], [39.0, 710.0], [39.1, 711.0], [39.2, 711.0], [39.3, 711.0], [39.4, 714.0], [39.5, 715.0], [39.6, 715.0], [39.7, 715.0], [39.8, 716.0], [39.9, 716.0], [40.0, 718.0], [40.1, 718.0], [40.2, 718.0], [40.3, 719.0], [40.4, 719.0], [40.5, 720.0], [40.6, 723.0], [40.7, 723.0], [40.8, 723.0], [40.9, 723.0], [41.0, 723.0], [41.1, 725.0], [41.2, 725.0], [41.3, 727.0], [41.4, 727.0], [41.5, 727.0], [41.6, 727.0], [41.7, 727.0], [41.8, 728.0], [41.9, 728.0], [42.0, 728.0], [42.1, 731.0], [42.2, 731.0], [42.3, 731.0], [42.4, 731.0], [42.5, 732.0], [42.6, 733.0], [42.7, 733.0], [42.8, 734.0], [42.9, 734.0], [43.0, 735.0], [43.1, 735.0], [43.2, 736.0], [43.3, 737.0], [43.4, 737.0], [43.5, 737.0], [43.6, 738.0], [43.7, 740.0], [43.8, 740.0], [43.9, 740.0], [44.0, 741.0], [44.1, 741.0], [44.2, 741.0], [44.3, 742.0], [44.4, 742.0], [44.5, 743.0], [44.6, 743.0], [44.7, 747.0], [44.8, 748.0], [44.9, 749.0], [45.0, 749.0], [45.1, 751.0], [45.2, 751.0], [45.3, 751.0], [45.4, 753.0], [45.5, 758.0], [45.6, 759.0], [45.7, 759.0], [45.8, 760.0], [45.9, 761.0], [46.0, 761.0], [46.1, 761.0], [46.2, 761.0], [46.3, 763.0], [46.4, 767.0], [46.5, 767.0], [46.6, 771.0], [46.7, 772.0], [46.8, 772.0], [46.9, 773.0], [47.0, 774.0], [47.1, 781.0], [47.2, 781.0], [47.3, 783.0], [47.4, 783.0], [47.5, 784.0], [47.6, 784.0], [47.7, 785.0], [47.8, 785.0], [47.9, 785.0], [48.0, 785.0], [48.1, 787.0], [48.2, 793.0], [48.3, 795.0], [48.4, 795.0], [48.5, 796.0], [48.6, 796.0], [48.7, 796.0], [48.8, 798.0], [48.9, 799.0], [49.0, 801.0], [49.1, 801.0], [49.2, 802.0], [49.3, 806.0], [49.4, 807.0], [49.5, 807.0], [49.6, 808.0], [49.7, 809.0], [49.8, 809.0], [49.9, 809.0], [50.0, 809.0], [50.1, 809.0], [50.2, 809.0], [50.3, 809.0], [50.4, 810.0], [50.5, 812.0], [50.6, 812.0], [50.7, 816.0], [50.8, 816.0], [50.9, 816.0], [51.0, 816.0], [51.1, 816.0], [51.2, 820.0], [51.3, 825.0], [51.4, 825.0], [51.5, 826.0], [51.6, 829.0], [51.7, 829.0], [51.8, 832.0], [51.9, 832.0], [52.0, 834.0], [52.1, 834.0], [52.2, 836.0], [52.3, 837.0], [52.4, 841.0], [52.5, 841.0], [52.6, 844.0], [52.7, 845.0], [52.8, 846.0], [52.9, 846.0], [53.0, 846.0], [53.1, 846.0], [53.2, 847.0], [53.3, 847.0], [53.4, 849.0], [53.5, 849.0], [53.6, 849.0], [53.7, 851.0], [53.8, 855.0], [53.9, 858.0], [54.0, 858.0], [54.1, 859.0], [54.2, 864.0], [54.3, 867.0], [54.4, 867.0], [54.5, 868.0], [54.6, 869.0], [54.7, 870.0], [54.8, 870.0], [54.9, 872.0], [55.0, 874.0], [55.1, 874.0], [55.2, 875.0], [55.3, 878.0], [55.4, 880.0], [55.5, 880.0], [55.6, 882.0], [55.7, 885.0], [55.8, 885.0], [55.9, 885.0], [56.0, 885.0], [56.1, 885.0], [56.2, 886.0], [56.3, 886.0], [56.4, 890.0], [56.5, 891.0], [56.6, 892.0], [56.7, 892.0], [56.8, 892.0], [56.9, 893.0], [57.0, 893.0], [57.1, 894.0], [57.2, 896.0], [57.3, 896.0], [57.4, 896.0], [57.5, 898.0], [57.6, 899.0], [57.7, 901.0], [57.8, 901.0], [57.9, 905.0], [58.0, 905.0], [58.1, 908.0], [58.2, 908.0], [58.3, 908.0], [58.4, 908.0], [58.5, 908.0], [58.6, 910.0], [58.7, 910.0], [58.8, 912.0], [58.9, 912.0], [59.0, 912.0], [59.1, 914.0], [59.2, 915.0], [59.3, 915.0], [59.4, 920.0], [59.5, 922.0], [59.6, 922.0], [59.7, 922.0], [59.8, 923.0], [59.9, 926.0], [60.0, 927.0], [60.1, 927.0], [60.2, 931.0], [60.3, 932.0], [60.4, 932.0], [60.5, 935.0], [60.6, 937.0], [60.7, 937.0], [60.8, 937.0], [60.9, 939.0], [61.0, 939.0], [61.1, 942.0], [61.2, 942.0], [61.3, 943.0], [61.4, 947.0], [61.5, 947.0], [61.6, 947.0], [61.7, 953.0], [61.8, 955.0], [61.9, 955.0], [62.0, 957.0], [62.1, 959.0], [62.2, 960.0], [62.3, 960.0], [62.4, 961.0], [62.5, 966.0], [62.6, 966.0], [62.7, 966.0], [62.8, 971.0], [62.9, 976.0], [63.0, 993.0], [63.1, 993.0], [63.2, 995.0], [63.3, 999.0], [63.4, 999.0], [63.5, 1002.0], [63.6, 1002.0], [63.7, 1006.0], [63.8, 1006.0], [63.9, 1017.0], [64.0, 1017.0], [64.1, 1018.0], [64.2, 1018.0], [64.3, 1022.0], [64.4, 1023.0], [64.5, 1026.0], [64.6, 1026.0], [64.7, 1027.0], [64.8, 1031.0], [64.9, 1035.0], [65.0, 1035.0], [65.1, 1038.0], [65.2, 1049.0], [65.3, 1049.0], [65.4, 1051.0], [65.5, 1063.0], [65.6, 1065.0], [65.7, 1065.0], [65.8, 1068.0], [65.9, 1068.0], [66.0, 1071.0], [66.1, 1071.0], [66.2, 1076.0], [66.3, 1077.0], [66.4, 1084.0], [66.5, 1084.0], [66.6, 1089.0], [66.7, 1093.0], [66.8, 1093.0], [66.9, 1095.0], [67.0, 1098.0], [67.1, 1099.0], [67.2, 1099.0], [67.3, 1103.0], [67.4, 1103.0], [67.5, 1125.0], [67.6, 1125.0], [67.7, 1129.0], [67.8, 1130.0], [67.9, 1131.0], [68.0, 1131.0], [68.1, 1132.0], [68.2, 1133.0], [68.3, 1139.0], [68.4, 1139.0], [68.5, 1149.0], [68.6, 1150.0], [68.7, 1150.0], [68.8, 1152.0], [68.9, 1155.0], [69.0, 1160.0], [69.1, 1160.0], [69.2, 1163.0], [69.3, 1163.0], [69.4, 1166.0], [69.5, 1166.0], [69.6, 1170.0], [69.7, 1177.0], [69.8, 1178.0], [69.9, 1178.0], [70.0, 1182.0], [70.1, 1186.0], [70.2, 1186.0], [70.3, 1187.0], [70.4, 1191.0], [70.5, 1192.0], [70.6, 1192.0], [70.7, 1193.0], [70.8, 1195.0], [70.9, 1202.0], [71.0, 1202.0], [71.1, 1205.0], [71.2, 1210.0], [71.3, 1222.0], [71.4, 1222.0], [71.5, 1238.0], [71.6, 1244.0], [71.7, 1244.0], [71.8, 1249.0], [71.9, 1249.0], [72.0, 1251.0], [72.1, 1251.0], [72.2, 1255.0], [72.3, 1277.0], [72.4, 1280.0], [72.5, 1280.0], [72.6, 1312.0], [72.7, 1323.0], [72.8, 1360.0], [72.9, 1360.0], [73.0, 1364.0], [73.1, 1374.0], [73.2, 1385.0], [73.3, 1385.0], [73.4, 1412.0], [73.5, 1416.0], [73.6, 1416.0], [73.7, 1429.0], [73.8, 1432.0], [73.9, 1433.0], [74.0, 1433.0], [74.1, 1440.0], [74.2, 1450.0], [74.3, 1452.0], [74.4, 1452.0], [74.5, 1460.0], [74.6, 1478.0], [74.7, 1490.0], [74.8, 1490.0], [74.9, 1533.0], [75.0, 1533.0], [75.1, 1533.0], [75.2, 1557.0], [75.3, 1573.0], [75.4, 1582.0], [75.5, 1582.0], [75.6, 1598.0], [75.7, 1627.0], [75.8, 1655.0], [75.9, 1655.0], [76.0, 1661.0], [76.1, 1678.0], [76.2, 1720.0], [76.3, 1720.0], [76.4, 1725.0], [76.5, 1727.0], [76.6, 1743.0], [76.7, 1743.0], [76.8, 1753.0], [76.9, 1771.0], [77.0, 1771.0], [77.1, 1776.0], [77.2, 1776.0], [77.3, 1779.0], [77.4, 1779.0], [77.5, 1812.0], [77.6, 1862.0], [77.7, 1924.0], [77.8, 1924.0], [77.9, 1935.0], [78.0, 1954.0], [78.1, 1977.0], [78.2, 1977.0], [78.3, 1980.0], [78.4, 1983.0], [78.5, 1983.0], [78.6, 1996.0], [78.7, 2041.0], [78.8, 2045.0], [78.9, 2045.0], [79.0, 2110.0], [79.1, 2150.0], [79.2, 2152.0], [79.3, 2152.0], [79.4, 2153.0], [79.5, 2165.0], [79.6, 2192.0], [79.7, 2192.0], [79.8, 2205.0], [79.9, 2208.0], [80.0, 2298.0], [80.1, 2298.0], [80.2, 2316.0], [80.3, 2327.0], [80.4, 2327.0], [80.5, 2341.0], [80.6, 2359.0], [80.7, 2366.0], [80.8, 2366.0], [80.9, 2392.0], [81.0, 2395.0], [81.1, 2510.0], [81.2, 2510.0], [81.3, 2556.0], [81.4, 2627.0], [81.5, 2659.0], [81.6, 2659.0], [81.7, 2662.0], [81.8, 2668.0], [81.9, 2668.0], [82.0, 2669.0], [82.1, 2783.0], [82.2, 2799.0], [82.3, 2799.0], [82.4, 2833.0], [82.5, 2847.0], [82.6, 2884.0], [82.7, 2884.0], [82.8, 2985.0], [82.9, 2985.0], [83.0, 2998.0], [83.1, 2998.0], [83.2, 3070.0], [83.3, 3092.0], [83.4, 3092.0], [83.5, 3113.0], [83.6, 3133.0], [83.7, 3200.0], [83.8, 3200.0], [83.9, 3244.0], [84.0, 3253.0], [84.1, 3267.0], [84.2, 3267.0], [84.3, 3269.0], [84.4, 3314.0], [84.5, 3338.0], [84.6, 3338.0], [84.7, 3390.0], [84.8, 3396.0], [84.9, 3472.0], [85.0, 3472.0], [85.1, 3554.0], [85.2, 3591.0], [85.3, 3591.0], [85.4, 3594.0], [85.5, 3644.0], [85.6, 3646.0], [85.7, 3646.0], [85.8, 3650.0], [85.9, 3706.0], [86.0, 3716.0], [86.1, 3716.0], [86.2, 3788.0], [86.3, 3875.0], [86.4, 3900.0], [86.5, 3900.0], [86.6, 4010.0], [86.7, 4207.0], [86.8, 4207.0], [86.9, 4386.0], [87.0, 4486.0], [87.1, 4628.0], [87.2, 4628.0], [87.3, 4641.0], [87.4, 4928.0], [87.5, 5144.0], [87.6, 5144.0], [87.7, 5252.0], [87.8, 5570.0], [87.9, 5589.0], [88.0, 5589.0], [88.1, 6043.0], [88.2, 7216.0], [88.3, 8633.0], [88.4, 8633.0], [88.5, 10517.0], [88.6, 12601.0], [88.7, 12601.0], [88.8, 43935.0], [88.9, 44343.0], [89.0, 44896.0], [89.1, 44896.0], [89.2, 45109.0], [89.3, 46798.0], [89.4, 46811.0], [89.5, 46811.0], [89.6, 48060.0], [89.7, 49116.0], [89.8, 49505.0], [89.9, 49505.0], [90.0, 49841.0], [90.1, 85173.0], [90.2, 85173.0], [90.3, 86961.0], [90.4, 87536.0], [90.5, 88350.0], [90.6, 88350.0], [90.7, 88600.0], [90.8, 88914.0], [90.9, 89273.0], [91.0, 89273.0], [91.1, 89517.0], [91.2, 89601.0], [91.3, 89667.0], [91.4, 89667.0], [91.5, 89789.0], [91.6, 90263.0], [91.7, 90263.0], [91.8, 90267.0], [91.9, 90555.0], [92.0, 90653.0], [92.1, 90653.0], [92.2, 90681.0], [92.3, 90872.0], [92.4, 91125.0], [92.5, 91125.0], [92.6, 91532.0], [92.7, 91537.0], [92.8, 91552.0], [92.9, 91552.0], [93.0, 91757.0], [93.1, 92405.0], [93.2, 92412.0], [93.3, 92412.0], [93.4, 92544.0], [93.5, 93000.0], [93.6, 93000.0], [93.7, 94172.0], [93.8, 94671.0], [93.9, 94821.0], [94.0, 94821.0], [94.1, 97929.0], [94.2, 97997.0], [94.3, 100716.0], [94.4, 100716.0], [94.5, 100922.0], [94.6, 101410.0], [94.7, 101477.0], [94.8, 101477.0], [94.9, 101683.0], [95.0, 102528.0], [95.1, 102528.0], [95.2, 104057.0], [95.3, 104780.0], [95.4, 124692.0], [95.5, 124692.0], [95.6, 125836.0], [95.7, 132271.0], [95.8, 135802.0], [95.9, 135802.0], [96.0, 137574.0], [96.1, 137697.0], [96.2, 138322.0], [96.3, 138322.0], [96.4, 140473.0], [96.5, 148283.0], [96.6, 170345.0], [96.7, 170345.0], [96.8, 172301.0], [96.9, 176838.0], [97.0, 176838.0], [97.1, 178713.0], [97.2, 178827.0], [97.3, 179689.0], [97.4, 179689.0], [97.5, 179746.0], [97.6, 181000.0], [97.7, 181157.0], [97.8, 181157.0], [97.9, 181281.0], [98.0, 181282.0], [98.1, 181492.0], [98.2, 181492.0], [98.3, 182607.0], [98.4, 183469.0], [98.5, 183469.0], [98.6, 184331.0], [98.7, 185161.0], [98.8, 185632.0], [98.9, 185632.0], [99.0, 185633.0], [99.1, 186674.0], [99.2, 187130.0], [99.3, 187130.0], [99.4, 190487.0], [99.5, 225361.0], [99.6, 226650.0], [99.7, 226650.0], [99.8, 227237.0], [99.9, 261972.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 89.0, "series": [{"data": [[0.0, 17.0], [137600.0, 1.0], [176800.0, 1.0], [185600.0, 2.0], [190400.0, 1.0], [227200.0, 1.0], [85100.0, 1.0], [88300.0, 1.0], [89500.0, 1.0], [87500.0, 1.0], [91100.0, 1.0], [91500.0, 3.0], [97900.0, 2.0], [100700.0, 1.0], [104700.0, 1.0], [132200.0, 1.0], [148200.0, 1.0], [186600.0, 1.0], [181000.0, 1.0], [183400.0, 1.0], [182600.0, 1.0], [226600.0, 1.0], [100.0, 34.0], [178700.0, 1.0], [172300.0, 1.0], [43900.0, 1.0], [44300.0, 1.0], [181100.0, 1.0], [46700.0, 1.0], [45100.0, 1.0], [185100.0, 1.0], [184300.0, 1.0], [49100.0, 1.0], [49500.0, 1.0], [200.0, 34.0], [261900.0, 1.0], [300.0, 28.0], [88600.0, 1.0], [90600.0, 2.0], [90200.0, 2.0], [93000.0, 1.0], [94600.0, 1.0], [101400.0, 2.0], [400.0, 14.0], [125800.0, 1.0], [124600.0, 1.0], [500.0, 89.0], [140400.0, 1.0], [600.0, 63.0], [700.0, 81.0], [178800.0, 1.0], [179600.0, 1.0], [181200.0, 2.0], [800.0, 64.0], [900.0, 42.0], [1000.0, 28.0], [1100.0, 27.0], [1200.0, 12.0], [1300.0, 6.0], [1400.0, 11.0], [1500.0, 6.0], [1600.0, 4.0], [1700.0, 9.0], [1800.0, 2.0], [1900.0, 7.0], [2000.0, 2.0], [2100.0, 6.0], [2300.0, 7.0], [2200.0, 3.0], [2500.0, 2.0], [2600.0, 5.0], [2800.0, 3.0], [2700.0, 2.0], [179700.0, 1.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 2.0], [3200.0, 5.0], [3300.0, 4.0], [3400.0, 1.0], [225300.0, 1.0], [3500.0, 3.0], [3700.0, 3.0], [3600.0, 3.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 1.0], [4600.0, 2.0], [4900.0, 1.0], [5100.0, 1.0], [5200.0, 1.0], [5500.0, 2.0], [88900.0, 1.0], [86900.0, 1.0], [89700.0, 1.0], [91700.0, 1.0], [92500.0, 1.0], [90500.0, 1.0], [94100.0, 1.0], [6000.0, 1.0], [100900.0, 1.0], [102500.0, 1.0], [7200.0, 1.0], [8600.0, 1.0], [135800.0, 1.0], [10500.0, 1.0], [181400.0, 1.0], [12600.0, 1.0], [137500.0, 1.0], [138300.0, 1.0], [170300.0, 1.0], [44800.0, 1.0], [46800.0, 1.0], [187100.0, 1.0], [48000.0, 1.0], [49800.0, 1.0], [89600.0, 2.0], [89200.0, 1.0], [92400.0, 2.0], [90800.0, 1.0], [94800.0, 1.0], [101600.0, 1.0], [104000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 261900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 127.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 423.0, "series": [{"data": [[0.0, 127.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 423.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 185.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.296875, "minX": 1.60387632E12, "maxY": 10.0, "series": [{"data": [[1.60387632E12, 10.0], [1.6038771E12, 10.0], [1.6038774E12, 9.296875], [1.60387668E12, 10.0], [1.60387674E12, 10.0], [1.60387638E12, 10.0], [1.60387704E12, 10.0], [1.60387734E12, 10.0], [1.60387644E12, 10.0], [1.60387698E12, 10.0], [1.60387728E12, 10.0], [1.6038765E12, 10.0], [1.60387692E12, 10.0], [1.60387722E12, 10.0], [1.60387656E12, 10.0], [1.60387686E12, 10.0], [1.60387716E12, 10.0], [1.60387662E12, 10.0], [1.6038768E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038774E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 358.0, "minX": 1.0, "maxY": 14821.757575757558, "series": [{"data": [[8.0, 609.0], [4.0, 2668.0], [2.0, 1983.0], [1.0, 1935.0], [9.0, 358.0], [10.0, 14821.757575757558], [5.0, 3390.0], [6.0, 915.0], [3.0, 2152.0], [7.0, 1022.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 14660.71836734692]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.8, "minX": 1.60387632E12, "maxY": 605325.6666666666, "series": [{"data": [[1.60387632E12, 110167.15], [1.6038771E12, 1100.65], [1.6038774E12, 180948.05], [1.60387668E12, 19435.65], [1.60387674E12, 168602.93333333332], [1.60387638E12, 2418.383333333333], [1.60387704E12, 1201.8], [1.60387734E12, 443655.05], [1.60387644E12, 345.48333333333335], [1.60387698E12, 1606.8166666666666], [1.60387728E12, 14560.1], [1.6038765E12, 1555.9], [1.60387692E12, 707.0166666666667], [1.60387722E12, 82932.88333333333], [1.60387656E12, 1742.4833333333333], [1.60387686E12, 2072.9], [1.60387716E12, 49147.933333333334], [1.60387662E12, 68038.6], [1.6038768E12, 605325.6666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60387632E12, 156.96666666666667], [1.6038771E12, 50.766666666666666], [1.6038774E12, 483.6], [1.60387668E12, 23.716666666666665], [1.60387674E12, 423.5], [1.60387638E12, 54.55], [1.60387704E12, 58.6], [1.60387734E12, 1715.3333333333333], [1.60387644E12, 7.8], [1.60387698E12, 38.88333333333333], [1.60387728E12, 47.666666666666664], [1.6038765E12, 80.01666666666667], [1.60387692E12, 22.4], [1.60387722E12, 187.91666666666666], [1.60387656E12, 47.05], [1.60387686E12, 46.78333333333333], [1.60387716E12, 179.83333333333334], [1.60387662E12, 104.15], [1.6038768E12, 1965.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038774E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 940.0937499999998, "minX": 1.60387632E12, "maxY": 148283.0, "series": [{"data": [[1.60387632E12, 1761.1000000000001], [1.6038771E12, 91725.0], [1.6038774E12, 940.0937499999998], [1.60387668E12, 61723.33333333333], [1.60387674E12, 32447.70370370371], [1.60387638E12, 102308.99999999999], [1.60387704E12, 95446.37499999999], [1.60387734E12, 8219.531818181818], [1.60387644E12, 148283.0], [1.60387698E12, 146231.6], [1.60387728E12, 31473.833333333336], [1.6038765E12, 77914.54545454546], [1.60387692E12, 32807.0], [1.60387722E12, 10230.16666666667], [1.60387656E12, 83325.83333333333], [1.60387686E12, 91776.0], [1.60387716E12, 30811.1304347826], [1.60387662E12, 29567.769230769227], [1.6038768E12, 1574.216535433071]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038774E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 936.1406250000001, "minX": 1.60387632E12, "maxY": 148282.0, "series": [{"data": [[1.60387632E12, 1752.9], [1.6038771E12, 91724.42857142858], [1.6038774E12, 936.1406250000001], [1.60387668E12, 61719.0], [1.60387674E12, 32445.722222222215], [1.60387638E12, 102308.99999999999], [1.60387704E12, 95446.125], [1.60387734E12, 8218.349999999997], [1.60387644E12, 148282.0], [1.60387698E12, 146231.4], [1.60387728E12, 31471.666666666664], [1.6038765E12, 77914.18181818182], [1.60387692E12, 32806.0], [1.60387722E12, 10227.750000000002], [1.60387656E12, 83325.83333333333], [1.60387686E12, 91775.66666666667], [1.60387716E12, 30809.782608695656], [1.60387662E12, 29564.846153846163], [1.6038768E12, 1572.1377952755902]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038774E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.60387632E12, "maxY": 6.65, "series": [{"data": [[1.60387632E12, 6.65], [1.6038771E12, 0.8571428571428572], [1.6038774E12, 0.8124999999999999], [1.60387668E12, 1.3333333333333333], [1.60387674E12, 1.0740740740740742], [1.60387638E12, 1.0], [1.60387704E12, 0.875], [1.60387734E12, 0.877272727272727], [1.60387644E12, 2.0], [1.60387698E12, 1.6], [1.60387728E12, 1.1666666666666665], [1.6038765E12, 1.3636363636363635], [1.60387692E12, 1.3333333333333333], [1.60387722E12, 0.9583333333333333], [1.60387656E12, 1.1666666666666665], [1.60387686E12, 0.6666666666666666], [1.60387716E12, 1.0869565217391304], [1.60387662E12, 1.5384615384615385], [1.6038768E12, 0.9606299212598429]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038774E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.60387632E12, "maxY": 261972.0, "series": [{"data": [[1.60387632E12, 3396.0], [1.6038771E12, 226650.0], [1.6038774E12, 3390.0], [1.60387668E12, 183469.0], [1.60387674E12, 261972.0], [1.60387638E12, 104780.0], [1.60387704E12, 178827.0], [1.60387734E12, 227237.0], [1.60387644E12, 148283.0], [1.60387698E12, 185632.0], [1.60387728E12, 185161.0], [1.6038765E12, 190487.0], [1.60387692E12, 94821.0], [1.60387722E12, 89789.0], [1.60387656E12, 181000.0], [1.60387686E12, 94671.0], [1.60387716E12, 187130.0], [1.60387662E12, 179746.0], [1.6038768E12, 48060.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60387632E12, 26.0], [1.6038771E12, 8.0], [1.6038774E12, 25.0], [1.60387668E12, 268.0], [1.60387674E12, 278.0], [1.60387638E12, 100716.0], [1.60387704E12, 9.0], [1.60387734E12, 253.96699984192847], [1.60387644E12, 148283.0], [1.60387698E12, 90555.0], [1.60387728E12, 420.0], [1.6038765E12, 8.0], [1.60387692E12, 9.0], [1.60387722E12, 358.0], [1.60387656E12, 235.0], [1.60387686E12, 88600.0], [1.60387716E12, 49.0], [1.60387662E12, 31.0], [1.6038768E12, 22.29499993920326]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60387632E12, 26.0], [1.6038771E12, 8.0], [1.6038774E12, 25.0], [1.60387668E12, 268.0], [1.60387674E12, 278.0], [1.60387638E12, 100716.0], [1.60387704E12, 9.0], [1.60387734E12, 255.87900021076203], [1.60387644E12, 148283.0], [1.60387698E12, 90555.0], [1.60387728E12, 420.0], [1.6038765E12, 8.0], [1.60387692E12, 9.0], [1.60387722E12, 358.0], [1.60387656E12, 235.0], [1.60387686E12, 88600.0], [1.60387716E12, 49.0], [1.60387662E12, 31.0], [1.6038768E12, 22.524500024318694]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60387632E12, 26.0], [1.6038771E12, 8.0], [1.6038774E12, 25.0], [1.60387668E12, 268.0], [1.60387674E12, 278.0], [1.60387638E12, 100716.0], [1.60387704E12, 9.0], [1.60387734E12, 254.99499973654747], [1.60387644E12, 148283.0], [1.60387698E12, 90555.0], [1.60387728E12, 420.0], [1.6038765E12, 8.0], [1.60387692E12, 9.0], [1.60387722E12, 358.0], [1.60387656E12, 235.0], [1.60387686E12, 88600.0], [1.60387716E12, 49.0], [1.60387662E12, 31.0], [1.6038768E12, 22.42249996960163]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60387632E12, 26.0], [1.6038771E12, 8.0], [1.6038774E12, 25.0], [1.60387668E12, 268.0], [1.60387674E12, 278.0], [1.60387638E12, 100716.0], [1.60387704E12, 9.0], [1.60387734E12, 251.0], [1.60387644E12, 148283.0], [1.60387698E12, 90555.0], [1.60387728E12, 420.0], [1.6038765E12, 8.0], [1.60387692E12, 9.0], [1.60387722E12, 358.0], [1.60387656E12, 235.0], [1.60387686E12, 88600.0], [1.60387716E12, 49.0], [1.60387662E12, 31.0], [1.6038768E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60387632E12, 2180.5], [1.6038771E12, 89667.0], [1.6038774E12, 784.0], [1.60387668E12, 1433.0], [1.60387674E12, 829.0], [1.60387638E12, 101683.0], [1.60387704E12, 90225.5], [1.60387734E12, 790.0], [1.60387644E12, 148283.0], [1.60387698E12, 181492.0], [1.60387728E12, 826.0], [1.6038765E12, 88350.0], [1.60387692E12, 3591.0], [1.60387722E12, 855.0], [1.60387656E12, 90141.0], [1.60387686E12, 91654.5], [1.60387716E12, 809.0], [1.60387662E12, 926.0], [1.6038768E12, 727.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038774E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 309.0, "minX": 1.0, "maxY": 8633.0, "series": [{"data": [[2.0, 897.5], [8.0, 893.5], [9.0, 865.0], [10.0, 742.5], [11.0, 551.0], [12.0, 913.5], [3.0, 1186.0], [13.0, 751.0], [14.0, 666.0], [15.0, 574.0], [1.0, 8633.0], [4.0, 968.5], [17.0, 742.0], [18.0, 586.5], [19.0, 309.0], [5.0, 674.0], [6.0, 789.5], [7.0, 718.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 309.0, "minX": 1.0, "maxY": 8631.0, "series": [{"data": [[2.0, 893.0], [8.0, 885.5], [9.0, 864.0], [10.0, 741.5], [11.0, 537.0], [12.0, 912.5], [3.0, 1181.0], [13.0, 750.0], [14.0, 666.0], [15.0, 573.0], [1.0, 8631.0], [4.0, 966.5], [17.0, 742.0], [18.0, 586.5], [19.0, 309.0], [5.0, 673.0], [6.0, 787.5], [7.0, 716.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60387632E12, "maxY": 4.233333333333333, "series": [{"data": [[1.60387632E12, 0.5], [1.6038771E12, 0.11666666666666667], [1.6038774E12, 0.9], [1.60387668E12, 0.05], [1.60387674E12, 0.9], [1.60387638E12, 0.11666666666666667], [1.60387704E12, 0.13333333333333333], [1.60387734E12, 3.6666666666666665], [1.60387644E12, 0.016666666666666666], [1.60387698E12, 0.08333333333333333], [1.60387728E12, 0.1], [1.6038765E12, 0.18333333333333332], [1.60387692E12, 0.05], [1.60387722E12, 0.4], [1.60387656E12, 0.1], [1.60387686E12, 0.1], [1.60387716E12, 0.38333333333333336], [1.60387662E12, 0.21666666666666667], [1.6038768E12, 4.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038774E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60387632E12, "maxY": 4.233333333333333, "series": [{"data": [[1.60387632E12, 0.3333333333333333], [1.6038771E12, 0.11666666666666667], [1.6038774E12, 1.0666666666666667], [1.60387668E12, 0.05], [1.60387674E12, 0.9], [1.60387638E12, 0.11666666666666667], [1.60387704E12, 0.13333333333333333], [1.60387734E12, 3.6666666666666665], [1.60387644E12, 0.016666666666666666], [1.60387698E12, 0.08333333333333333], [1.60387728E12, 0.1], [1.6038765E12, 0.18333333333333332], [1.60387692E12, 0.05], [1.60387722E12, 0.4], [1.60387656E12, 0.1], [1.60387686E12, 0.1], [1.60387716E12, 0.38333333333333336], [1.60387662E12, 0.21666666666666667], [1.6038768E12, 4.233333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038774E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60387632E12, "maxY": 4.233333333333333, "series": [{"data": [[1.60387632E12, 0.3333333333333333], [1.6038771E12, 0.11666666666666667], [1.6038774E12, 1.0666666666666667], [1.60387668E12, 0.05], [1.60387674E12, 0.9], [1.60387638E12, 0.11666666666666667], [1.60387704E12, 0.13333333333333333], [1.60387734E12, 3.6666666666666665], [1.60387644E12, 0.016666666666666666], [1.60387698E12, 0.08333333333333333], [1.60387728E12, 0.1], [1.6038765E12, 0.18333333333333332], [1.60387692E12, 0.05], [1.60387722E12, 0.4], [1.60387656E12, 0.1], [1.60387686E12, 0.1], [1.60387716E12, 0.38333333333333336], [1.60387662E12, 0.21666666666666667], [1.6038768E12, 4.233333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038774E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60387632E12, "maxY": 4.233333333333333, "series": [{"data": [[1.60387632E12, 0.3333333333333333], [1.6038771E12, 0.11666666666666667], [1.6038774E12, 1.0666666666666667], [1.60387668E12, 0.05], [1.60387674E12, 0.9], [1.60387638E12, 0.11666666666666667], [1.60387704E12, 0.13333333333333333], [1.60387734E12, 3.6666666666666665], [1.60387644E12, 0.016666666666666666], [1.60387698E12, 0.08333333333333333], [1.60387728E12, 0.1], [1.6038765E12, 0.18333333333333332], [1.60387692E12, 0.05], [1.60387722E12, 0.4], [1.60387656E12, 0.1], [1.60387686E12, 0.1], [1.60387716E12, 0.38333333333333336], [1.60387662E12, 0.21666666666666667], [1.6038768E12, 4.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038774E12, "title": "Total Transactions Per Second"}},
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

