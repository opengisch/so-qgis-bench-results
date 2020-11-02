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
        data: {"result": {"minY": 218.0, "minX": 0.0, "maxY": 8921.0, "series": [{"data": [[0.0, 218.0], [0.1, 218.0], [0.2, 222.0], [0.3, 223.0], [0.4, 223.0], [0.5, 229.0], [0.6, 230.0], [0.7, 231.0], [0.8, 231.0], [0.9, 233.0], [1.0, 234.0], [1.1, 234.0], [1.2, 234.0], [1.3, 235.0], [1.4, 236.0], [1.5, 237.0], [1.6, 237.0], [1.7, 239.0], [1.8, 243.0], [1.9, 243.0], [2.0, 247.0], [2.1, 253.0], [2.2, 256.0], [2.3, 256.0], [2.4, 259.0], [2.5, 259.0], [2.6, 266.0], [2.7, 266.0], [2.8, 267.0], [2.9, 268.0], [3.0, 270.0], [3.1, 270.0], [3.2, 271.0], [3.3, 280.0], [3.4, 280.0], [3.5, 286.0], [3.6, 288.0], [3.7, 294.0], [3.8, 294.0], [3.9, 299.0], [4.0, 300.0], [4.1, 305.0], [4.2, 305.0], [4.3, 305.0], [4.4, 312.0], [4.5, 319.0], [4.6, 319.0], [4.7, 322.0], [4.8, 324.0], [4.9, 326.0], [5.0, 326.0], [5.1, 331.0], [5.2, 332.0], [5.3, 332.0], [5.4, 332.0], [5.5, 333.0], [5.6, 335.0], [5.7, 335.0], [5.8, 336.0], [5.9, 337.0], [6.0, 343.0], [6.1, 343.0], [6.2, 344.0], [6.3, 344.0], [6.4, 345.0], [6.5, 345.0], [6.6, 345.0], [6.7, 351.0], [6.8, 351.0], [6.9, 353.0], [7.0, 358.0], [7.1, 360.0], [7.2, 360.0], [7.3, 362.0], [7.4, 362.0], [7.5, 366.0], [7.6, 366.0], [7.7, 366.0], [7.8, 367.0], [7.9, 368.0], [8.0, 368.0], [8.1, 368.0], [8.2, 369.0], [8.3, 370.0], [8.4, 370.0], [8.5, 371.0], [8.6, 372.0], [8.7, 372.0], [8.8, 372.0], [8.9, 372.0], [9.0, 373.0], [9.1, 373.0], [9.2, 373.0], [9.3, 375.0], [9.4, 375.0], [9.5, 375.0], [9.6, 376.0], [9.7, 379.0], [9.8, 379.0], [9.9, 379.0], [10.0, 382.0], [10.1, 382.0], [10.2, 382.0], [10.3, 382.0], [10.4, 386.0], [10.5, 386.0], [10.6, 386.0], [10.7, 389.0], [10.8, 389.0], [10.9, 390.0], [11.0, 390.0], [11.1, 393.0], [11.2, 395.0], [11.3, 396.0], [11.4, 396.0], [11.5, 398.0], [11.6, 400.0], [11.7, 400.0], [11.8, 405.0], [11.9, 406.0], [12.0, 407.0], [12.1, 407.0], [12.2, 407.0], [12.3, 409.0], [12.4, 409.0], [12.5, 409.0], [12.6, 411.0], [12.7, 411.0], [12.8, 412.0], [12.9, 412.0], [13.0, 412.0], [13.1, 413.0], [13.2, 413.0], [13.3, 413.0], [13.4, 414.0], [13.5, 415.0], [13.6, 415.0], [13.7, 415.0], [13.8, 415.0], [13.9, 416.0], [14.0, 416.0], [14.1, 416.0], [14.2, 417.0], [14.3, 417.0], [14.4, 417.0], [14.5, 417.0], [14.6, 418.0], [14.7, 418.0], [14.8, 418.0], [14.9, 418.0], [15.0, 421.0], [15.1, 421.0], [15.2, 422.0], [15.3, 422.0], [15.4, 422.0], [15.5, 422.0], [15.6, 424.0], [15.7, 426.0], [15.8, 427.0], [15.9, 427.0], [16.0, 428.0], [16.1, 428.0], [16.2, 433.0], [16.3, 433.0], [16.4, 433.0], [16.5, 435.0], [16.6, 435.0], [16.7, 435.0], [16.8, 437.0], [16.9, 438.0], [17.0, 438.0], [17.1, 439.0], [17.2, 439.0], [17.3, 439.0], [17.4, 439.0], [17.5, 443.0], [17.6, 443.0], [17.7, 444.0], [17.8, 444.0], [17.9, 445.0], [18.0, 446.0], [18.1, 447.0], [18.2, 447.0], [18.3, 448.0], [18.4, 448.0], [18.5, 448.0], [18.6, 448.0], [18.7, 449.0], [18.8, 452.0], [18.9, 452.0], [19.0, 453.0], [19.1, 453.0], [19.2, 456.0], [19.3, 456.0], [19.4, 457.0], [19.5, 458.0], [19.6, 462.0], [19.7, 462.0], [19.8, 462.0], [19.9, 462.0], [20.0, 463.0], [20.1, 463.0], [20.2, 463.0], [20.3, 464.0], [20.4, 464.0], [20.5, 465.0], [20.6, 465.0], [20.7, 466.0], [20.8, 466.0], [20.9, 467.0], [21.0, 467.0], [21.1, 468.0], [21.2, 468.0], [21.3, 470.0], [21.4, 470.0], [21.5, 470.0], [21.6, 470.0], [21.7, 471.0], [21.8, 471.0], [21.9, 471.0], [22.0, 472.0], [22.1, 472.0], [22.2, 472.0], [22.3, 472.0], [22.4, 473.0], [22.5, 473.0], [22.6, 474.0], [22.7, 474.0], [22.8, 474.0], [22.9, 475.0], [23.0, 475.0], [23.1, 475.0], [23.2, 477.0], [23.3, 478.0], [23.4, 478.0], [23.5, 478.0], [23.6, 479.0], [23.7, 481.0], [23.8, 481.0], [23.9, 482.0], [24.0, 482.0], [24.1, 482.0], [24.2, 482.0], [24.3, 482.0], [24.4, 483.0], [24.5, 484.0], [24.6, 484.0], [24.7, 485.0], [24.8, 485.0], [24.9, 487.0], [25.0, 487.0], [25.1, 487.0], [25.2, 487.0], [25.3, 487.0], [25.4, 487.0], [25.5, 487.0], [25.6, 488.0], [25.7, 488.0], [25.8, 488.0], [25.9, 488.0], [26.0, 490.0], [26.1, 490.0], [26.2, 490.0], [26.3, 491.0], [26.4, 491.0], [26.5, 491.0], [26.6, 491.0], [26.7, 493.0], [26.8, 493.0], [26.9, 493.0], [27.0, 493.0], [27.1, 493.0], [27.2, 493.0], [27.3, 496.0], [27.4, 501.0], [27.5, 502.0], [27.6, 502.0], [27.7, 502.0], [27.8, 504.0], [27.9, 505.0], [28.0, 505.0], [28.1, 506.0], [28.2, 507.0], [28.3, 507.0], [28.4, 507.0], [28.5, 507.0], [28.6, 508.0], [28.7, 508.0], [28.8, 508.0], [28.9, 508.0], [29.0, 509.0], [29.1, 509.0], [29.2, 510.0], [29.3, 511.0], [29.4, 513.0], [29.5, 513.0], [29.6, 514.0], [29.7, 515.0], [29.8, 516.0], [29.9, 516.0], [30.0, 520.0], [30.1, 520.0], [30.2, 520.0], [30.3, 521.0], [30.4, 522.0], [30.5, 522.0], [30.6, 522.0], [30.7, 522.0], [30.8, 523.0], [30.9, 525.0], [31.0, 525.0], [31.1, 525.0], [31.2, 526.0], [31.3, 527.0], [31.4, 527.0], [31.5, 527.0], [31.6, 527.0], [31.7, 527.0], [31.8, 527.0], [31.9, 528.0], [32.0, 530.0], [32.1, 530.0], [32.2, 531.0], [32.3, 533.0], [32.4, 534.0], [32.5, 534.0], [32.6, 535.0], [32.7, 536.0], [32.8, 536.0], [32.9, 536.0], [33.0, 538.0], [33.1, 539.0], [33.2, 539.0], [33.3, 539.0], [33.4, 539.0], [33.5, 539.0], [33.6, 539.0], [33.7, 540.0], [33.8, 540.0], [33.9, 541.0], [34.0, 541.0], [34.1, 541.0], [34.2, 541.0], [34.3, 542.0], [34.4, 542.0], [34.5, 542.0], [34.6, 544.0], [34.7, 545.0], [34.8, 545.0], [34.9, 545.0], [35.0, 546.0], [35.1, 546.0], [35.2, 546.0], [35.3, 547.0], [35.4, 548.0], [35.5, 548.0], [35.6, 548.0], [35.7, 550.0], [35.8, 551.0], [35.9, 551.0], [36.0, 552.0], [36.1, 553.0], [36.2, 554.0], [36.3, 554.0], [36.4, 554.0], [36.5, 556.0], [36.6, 556.0], [36.7, 556.0], [36.8, 556.0], [36.9, 556.0], [37.0, 556.0], [37.1, 557.0], [37.2, 557.0], [37.3, 559.0], [37.4, 559.0], [37.5, 559.0], [37.6, 559.0], [37.7, 560.0], [37.8, 560.0], [37.9, 561.0], [38.0, 564.0], [38.1, 565.0], [38.2, 565.0], [38.3, 566.0], [38.4, 566.0], [38.5, 566.0], [38.6, 567.0], [38.7, 568.0], [38.8, 569.0], [38.9, 569.0], [39.0, 569.0], [39.1, 570.0], [39.2, 573.0], [39.3, 573.0], [39.4, 574.0], [39.5, 574.0], [39.6, 575.0], [39.7, 575.0], [39.8, 575.0], [39.9, 576.0], [40.0, 577.0], [40.1, 577.0], [40.2, 578.0], [40.3, 579.0], [40.4, 579.0], [40.5, 581.0], [40.6, 582.0], [40.7, 582.0], [40.8, 582.0], [40.9, 585.0], [41.0, 585.0], [41.1, 587.0], [41.2, 587.0], [41.3, 587.0], [41.4, 590.0], [41.5, 590.0], [41.6, 590.0], [41.7, 591.0], [41.8, 591.0], [41.9, 591.0], [42.0, 592.0], [42.1, 593.0], [42.2, 595.0], [42.3, 595.0], [42.4, 597.0], [42.5, 597.0], [42.6, 598.0], [42.7, 598.0], [42.8, 598.0], [42.9, 599.0], [43.0, 599.0], [43.1, 599.0], [43.2, 600.0], [43.3, 601.0], [43.4, 601.0], [43.5, 602.0], [43.6, 603.0], [43.7, 604.0], [43.8, 604.0], [43.9, 605.0], [44.0, 606.0], [44.1, 607.0], [44.2, 607.0], [44.3, 607.0], [44.4, 608.0], [44.5, 609.0], [44.6, 609.0], [44.7, 610.0], [44.8, 611.0], [44.9, 612.0], [45.0, 612.0], [45.1, 615.0], [45.2, 618.0], [45.3, 618.0], [45.4, 618.0], [45.5, 618.0], [45.6, 620.0], [45.7, 620.0], [45.8, 620.0], [45.9, 620.0], [46.0, 623.0], [46.1, 623.0], [46.2, 626.0], [46.3, 629.0], [46.4, 630.0], [46.5, 630.0], [46.6, 631.0], [46.7, 631.0], [46.8, 631.0], [46.9, 637.0], [47.0, 637.0], [47.1, 638.0], [47.2, 638.0], [47.3, 639.0], [47.4, 640.0], [47.5, 641.0], [47.6, 641.0], [47.7, 643.0], [47.8, 643.0], [47.9, 646.0], [48.0, 646.0], [48.1, 647.0], [48.2, 647.0], [48.3, 648.0], [48.4, 648.0], [48.5, 648.0], [48.6, 652.0], [48.7, 652.0], [48.8, 653.0], [48.9, 655.0], [49.0, 656.0], [49.1, 656.0], [49.2, 657.0], [49.3, 657.0], [49.4, 658.0], [49.5, 658.0], [49.6, 658.0], [49.7, 662.0], [49.8, 663.0], [49.9, 663.0], [50.0, 663.0], [50.1, 663.0], [50.2, 663.0], [50.3, 664.0], [50.4, 666.0], [50.5, 666.0], [50.6, 666.0], [50.7, 666.0], [50.8, 667.0], [50.9, 669.0], [51.0, 669.0], [51.1, 671.0], [51.2, 674.0], [51.3, 675.0], [51.4, 675.0], [51.5, 677.0], [51.6, 679.0], [51.7, 679.0], [51.8, 679.0], [51.9, 680.0], [52.0, 681.0], [52.1, 681.0], [52.2, 682.0], [52.3, 682.0], [52.4, 684.0], [52.5, 684.0], [52.6, 688.0], [52.7, 690.0], [52.8, 692.0], [52.9, 692.0], [53.0, 692.0], [53.1, 700.0], [53.2, 700.0], [53.3, 700.0], [53.4, 701.0], [53.5, 702.0], [53.6, 702.0], [53.7, 706.0], [53.8, 709.0], [53.9, 709.0], [54.0, 709.0], [54.1, 709.0], [54.2, 710.0], [54.3, 718.0], [54.4, 718.0], [54.5, 727.0], [54.6, 727.0], [54.7, 728.0], [54.8, 728.0], [54.9, 730.0], [55.0, 731.0], [55.1, 731.0], [55.2, 731.0], [55.3, 731.0], [55.4, 732.0], [55.5, 732.0], [55.6, 733.0], [55.7, 734.0], [55.8, 735.0], [55.9, 735.0], [56.0, 738.0], [56.1, 739.0], [56.2, 740.0], [56.3, 740.0], [56.4, 743.0], [56.5, 752.0], [56.6, 754.0], [56.7, 754.0], [56.8, 754.0], [56.9, 756.0], [57.0, 756.0], [57.1, 756.0], [57.2, 757.0], [57.3, 758.0], [57.4, 758.0], [57.5, 763.0], [57.6, 764.0], [57.7, 765.0], [57.8, 765.0], [57.9, 765.0], [58.0, 765.0], [58.1, 767.0], [58.2, 767.0], [58.3, 767.0], [58.4, 768.0], [58.5, 768.0], [58.6, 769.0], [58.7, 772.0], [58.8, 772.0], [58.9, 772.0], [59.0, 775.0], [59.1, 777.0], [59.2, 777.0], [59.3, 777.0], [59.4, 778.0], [59.5, 779.0], [59.6, 785.0], [59.7, 785.0], [59.8, 787.0], [59.9, 788.0], [60.0, 792.0], [60.1, 792.0], [60.2, 793.0], [60.3, 795.0], [60.4, 795.0], [60.5, 798.0], [60.6, 801.0], [60.7, 802.0], [60.8, 802.0], [60.9, 802.0], [61.0, 812.0], [61.1, 813.0], [61.2, 813.0], [61.3, 816.0], [61.4, 818.0], [61.5, 822.0], [61.6, 822.0], [61.7, 823.0], [61.8, 833.0], [61.9, 833.0], [62.0, 834.0], [62.1, 834.0], [62.2, 834.0], [62.3, 834.0], [62.4, 837.0], [62.5, 838.0], [62.6, 839.0], [62.7, 839.0], [62.8, 839.0], [62.9, 840.0], [63.0, 842.0], [63.1, 842.0], [63.2, 849.0], [63.3, 853.0], [63.4, 853.0], [63.5, 854.0], [63.6, 856.0], [63.7, 860.0], [63.8, 860.0], [63.9, 863.0], [64.0, 864.0], [64.1, 866.0], [64.2, 866.0], [64.3, 866.0], [64.4, 867.0], [64.5, 868.0], [64.6, 868.0], [64.7, 873.0], [64.8, 876.0], [64.9, 878.0], [65.0, 878.0], [65.1, 879.0], [65.2, 883.0], [65.3, 883.0], [65.4, 884.0], [65.5, 884.0], [65.6, 886.0], [65.7, 886.0], [65.8, 887.0], [65.9, 894.0], [66.0, 896.0], [66.1, 896.0], [66.2, 896.0], [66.3, 899.0], [66.4, 899.0], [66.5, 899.0], [66.6, 902.0], [66.7, 904.0], [66.8, 904.0], [66.9, 904.0], [67.0, 906.0], [67.1, 908.0], [67.2, 908.0], [67.3, 908.0], [67.4, 911.0], [67.5, 916.0], [67.6, 916.0], [67.7, 918.0], [67.8, 918.0], [67.9, 918.0], [68.0, 918.0], [68.1, 918.0], [68.2, 928.0], [68.3, 928.0], [68.4, 928.0], [68.5, 929.0], [68.6, 930.0], [68.7, 930.0], [68.8, 933.0], [68.9, 936.0], [69.0, 937.0], [69.1, 937.0], [69.2, 938.0], [69.3, 939.0], [69.4, 943.0], [69.5, 943.0], [69.6, 945.0], [69.7, 947.0], [69.8, 949.0], [69.9, 949.0], [70.0, 951.0], [70.1, 952.0], [70.2, 952.0], [70.3, 953.0], [70.4, 954.0], [70.5, 959.0], [70.6, 959.0], [70.7, 971.0], [70.8, 973.0], [70.9, 973.0], [71.0, 973.0], [71.1, 980.0], [71.2, 981.0], [71.3, 984.0], [71.4, 984.0], [71.5, 985.0], [71.6, 986.0], [71.7, 986.0], [71.8, 986.0], [71.9, 988.0], [72.0, 988.0], [72.1, 988.0], [72.2, 989.0], [72.3, 990.0], [72.4, 991.0], [72.5, 991.0], [72.6, 992.0], [72.7, 993.0], [72.8, 995.0], [72.9, 995.0], [73.0, 1002.0], [73.1, 1007.0], [73.2, 1019.0], [73.3, 1019.0], [73.4, 1020.0], [73.5, 1024.0], [73.6, 1024.0], [73.7, 1033.0], [73.8, 1035.0], [73.9, 1037.0], [74.0, 1037.0], [74.1, 1040.0], [74.2, 1050.0], [74.3, 1051.0], [74.4, 1051.0], [74.5, 1058.0], [74.6, 1059.0], [74.7, 1060.0], [74.8, 1060.0], [74.9, 1063.0], [75.0, 1064.0], [75.1, 1064.0], [75.2, 1067.0], [75.3, 1076.0], [75.4, 1077.0], [75.5, 1077.0], [75.6, 1079.0], [75.7, 1079.0], [75.8, 1082.0], [75.9, 1082.0], [76.0, 1088.0], [76.1, 1089.0], [76.2, 1093.0], [76.3, 1093.0], [76.4, 1097.0], [76.5, 1099.0], [76.6, 1104.0], [76.7, 1104.0], [76.8, 1105.0], [76.9, 1106.0], [77.0, 1106.0], [77.1, 1109.0], [77.2, 1110.0], [77.3, 1111.0], [77.4, 1111.0], [77.5, 1112.0], [77.6, 1112.0], [77.7, 1118.0], [77.8, 1118.0], [77.9, 1120.0], [78.0, 1122.0], [78.1, 1125.0], [78.2, 1125.0], [78.3, 1130.0], [78.4, 1132.0], [78.5, 1132.0], [78.6, 1134.0], [78.7, 1137.0], [78.8, 1140.0], [78.9, 1140.0], [79.0, 1143.0], [79.1, 1154.0], [79.2, 1155.0], [79.3, 1155.0], [79.4, 1158.0], [79.5, 1158.0], [79.6, 1169.0], [79.7, 1169.0], [79.8, 1175.0], [79.9, 1177.0], [80.0, 1180.0], [80.1, 1180.0], [80.2, 1183.0], [80.3, 1187.0], [80.4, 1187.0], [80.5, 1198.0], [80.6, 1199.0], [80.7, 1206.0], [80.8, 1206.0], [80.9, 1209.0], [81.0, 1215.0], [81.1, 1220.0], [81.2, 1220.0], [81.3, 1223.0], [81.4, 1229.0], [81.5, 1230.0], [81.6, 1230.0], [81.7, 1230.0], [81.8, 1241.0], [81.9, 1241.0], [82.0, 1245.0], [82.1, 1255.0], [82.2, 1262.0], [82.3, 1262.0], [82.4, 1268.0], [82.5, 1269.0], [82.6, 1269.0], [82.7, 1269.0], [82.8, 1274.0], [82.9, 1281.0], [83.0, 1286.0], [83.1, 1286.0], [83.2, 1286.0], [83.3, 1289.0], [83.4, 1289.0], [83.5, 1290.0], [83.6, 1291.0], [83.7, 1295.0], [83.8, 1295.0], [83.9, 1296.0], [84.0, 1299.0], [84.1, 1301.0], [84.2, 1301.0], [84.3, 1303.0], [84.4, 1308.0], [84.5, 1309.0], [84.6, 1309.0], [84.7, 1310.0], [84.8, 1311.0], [84.9, 1317.0], [85.0, 1317.0], [85.1, 1318.0], [85.2, 1321.0], [85.3, 1321.0], [85.4, 1334.0], [85.5, 1334.0], [85.6, 1334.0], [85.7, 1334.0], [85.8, 1336.0], [85.9, 1340.0], [86.0, 1344.0], [86.1, 1344.0], [86.2, 1350.0], [86.3, 1355.0], [86.4, 1371.0], [86.5, 1371.0], [86.6, 1372.0], [86.7, 1373.0], [86.8, 1373.0], [86.9, 1377.0], [87.0, 1378.0], [87.1, 1383.0], [87.2, 1383.0], [87.3, 1390.0], [87.4, 1402.0], [87.5, 1410.0], [87.6, 1410.0], [87.7, 1419.0], [87.8, 1440.0], [87.9, 1443.0], [88.0, 1443.0], [88.1, 1451.0], [88.2, 1453.0], [88.3, 1465.0], [88.4, 1465.0], [88.5, 1469.0], [88.6, 1475.0], [88.7, 1475.0], [88.8, 1480.0], [88.9, 1482.0], [89.0, 1489.0], [89.1, 1489.0], [89.2, 1490.0], [89.3, 1492.0], [89.4, 1496.0], [89.5, 1496.0], [89.6, 1498.0], [89.7, 1499.0], [89.8, 1511.0], [89.9, 1511.0], [90.0, 1514.0], [90.1, 1517.0], [90.2, 1517.0], [90.3, 1525.0], [90.4, 1533.0], [90.5, 1541.0], [90.6, 1541.0], [90.7, 1546.0], [90.8, 1548.0], [90.9, 1549.0], [91.0, 1549.0], [91.1, 1582.0], [91.2, 1582.0], [91.3, 1588.0], [91.4, 1588.0], [91.5, 1598.0], [91.6, 1610.0], [91.7, 1610.0], [91.8, 1620.0], [91.9, 1621.0], [92.0, 1628.0], [92.1, 1628.0], [92.2, 1636.0], [92.3, 1639.0], [92.4, 1643.0], [92.5, 1643.0], [92.6, 1653.0], [92.7, 1666.0], [92.8, 1667.0], [92.9, 1667.0], [93.0, 1668.0], [93.1, 1679.0], [93.2, 1689.0], [93.3, 1689.0], [93.4, 1692.0], [93.5, 1695.0], [93.6, 1695.0], [93.7, 1719.0], [93.8, 1730.0], [93.9, 1748.0], [94.0, 1748.0], [94.1, 1748.0], [94.2, 1753.0], [94.3, 1770.0], [94.4, 1770.0], [94.5, 1772.0], [94.6, 1793.0], [94.7, 1803.0], [94.8, 1803.0], [94.9, 1810.0], [95.0, 1820.0], [95.1, 1820.0], [95.2, 1825.0], [95.3, 1826.0], [95.4, 1830.0], [95.5, 1830.0], [95.6, 1833.0], [95.7, 1839.0], [95.8, 1871.0], [95.9, 1871.0], [96.0, 1948.0], [96.1, 2039.0], [96.2, 2054.0], [96.3, 2054.0], [96.4, 2062.0], [96.5, 2067.0], [96.6, 2068.0], [96.7, 2068.0], [96.8, 2069.0], [96.9, 2082.0], [97.0, 2082.0], [97.1, 2131.0], [97.2, 2176.0], [97.3, 2210.0], [97.4, 2210.0], [97.5, 2238.0], [97.6, 2257.0], [97.7, 2312.0], [97.8, 2312.0], [97.9, 2348.0], [98.0, 2377.0], [98.1, 2388.0], [98.2, 2388.0], [98.3, 2413.0], [98.4, 2431.0], [98.5, 2431.0], [98.6, 2444.0], [98.7, 2525.0], [98.8, 2565.0], [98.9, 2565.0], [99.0, 2581.0], [99.1, 2907.0], [99.2, 3946.0], [99.3, 3946.0], [99.4, 4712.0], [99.5, 4814.0], [99.6, 5354.0], [99.7, 5354.0], [99.8, 8544.0], [99.9, 8921.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 116.0, "series": [{"data": [[8500.0, 1.0], [8900.0, 1.0], [600.0, 73.0], [700.0, 55.0], [800.0, 44.0], [900.0, 47.0], [1000.0, 27.0], [1100.0, 30.0], [1200.0, 25.0], [1300.0, 24.0], [1400.0, 18.0], [1500.0, 13.0], [1600.0, 15.0], [1700.0, 8.0], [1800.0, 9.0], [1900.0, 1.0], [2000.0, 7.0], [2100.0, 2.0], [2300.0, 4.0], [2200.0, 3.0], [2400.0, 3.0], [2500.0, 3.0], [2900.0, 1.0], [200.0, 29.0], [3900.0, 1.0], [300.0, 56.0], [4700.0, 1.0], [4800.0, 1.0], [5300.0, 1.0], [400.0, 116.0], [500.0, 116.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 459.0, "series": [{"data": [[0.0, 201.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 459.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.846416382252558, "minX": 1.60423764E12, "maxY": 10.0, "series": [{"data": [[1.60423764E12, 10.0], [1.6042377E12, 9.846416382252558]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042377E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 409.0, "minX": 1.0, "maxY": 1383.0, "series": [{"data": [[8.0, 467.0], [4.0, 416.0], [2.0, 916.0], [1.0, 1383.0], [9.0, 666.0], [10.0, 864.1060606060599], [5.0, 462.0], [6.0, 478.0], [3.0, 671.0], [7.0, 409.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 861.5088435374142]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2201.0666666666666, "minX": 1.60423764E12, "maxY": 1383075.3666666667, "series": [{"data": [[1.60423764E12, 1383075.3666666667], [1.6042377E12, 812452.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423764E12, 3321.9666666666667], [1.6042377E12, 2201.0666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042377E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 855.0837104072394, "minX": 1.60423764E12, "maxY": 871.2013651877132, "series": [{"data": [[1.60423764E12, 855.0837104072394], [1.6042377E12, 871.2013651877132]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042377E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 853.6334841628961, "minX": 1.60423764E12, "maxY": 870.2320819112624, "series": [{"data": [[1.60423764E12, 853.6334841628961], [1.6042377E12, 870.2320819112624]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042377E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.027303754266211608, "minX": 1.60423764E12, "maxY": 0.17873303167420818, "series": [{"data": [[1.60423764E12, 0.17873303167420818], [1.6042377E12, 0.027303754266211608]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042377E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 218.0, "minX": 1.60423764E12, "maxY": 8921.0, "series": [{"data": [[1.60423764E12, 8921.0], [1.6042377E12, 8544.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423764E12, 228.92199936628342], [1.6042377E12, 340.8139993691444]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423764E12, 229.38570004224778], [1.6042377E12, 343.1954002523422]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423764E12, 229.2084999471903], [1.6042377E12, 342.13699968457223]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423764E12, 218.0], [1.6042377E12, 332.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423764E12, 665.0], [1.6042377E12, 655.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042377E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 435.0, "minX": 1.0, "maxY": 1301.0, "series": [{"data": [[8.0, 771.0], [9.0, 643.0], [10.0, 809.0], [11.0, 856.0], [12.0, 715.5], [13.0, 765.0], [14.0, 524.5], [15.0, 550.5], [1.0, 1244.5], [16.0, 1109.5], [17.0, 501.5], [19.0, 506.0], [5.0, 926.5], [20.0, 522.5], [22.0, 435.0], [6.0, 1057.0], [7.0, 1301.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 434.5, "minX": 1.0, "maxY": 1300.0, "series": [{"data": [[8.0, 770.5], [9.0, 643.0], [10.0, 808.0], [11.0, 855.0], [12.0, 715.5], [13.0, 764.0], [14.0, 524.0], [15.0, 550.5], [1.0, 1242.5], [16.0, 1109.5], [17.0, 501.0], [19.0, 506.0], [5.0, 925.0], [20.0, 522.0], [22.0, 434.5], [6.0, 1055.5], [7.0, 1300.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.716666666666667, "minX": 1.60423764E12, "maxY": 7.533333333333333, "series": [{"data": [[1.60423764E12, 7.533333333333333], [1.6042377E12, 4.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042377E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.883333333333334, "minX": 1.60423764E12, "maxY": 7.366666666666666, "series": [{"data": [[1.60423764E12, 7.366666666666666], [1.6042377E12, 4.883333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042377E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.883333333333334, "minX": 1.60423764E12, "maxY": 7.366666666666666, "series": [{"data": [[1.60423764E12, 7.366666666666666], [1.6042377E12, 4.883333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042377E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.883333333333334, "minX": 1.60423764E12, "maxY": 7.366666666666666, "series": [{"data": [[1.60423764E12, 7.366666666666666], [1.6042377E12, 4.883333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042377E12, "title": "Total Transactions Per Second"}},
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

