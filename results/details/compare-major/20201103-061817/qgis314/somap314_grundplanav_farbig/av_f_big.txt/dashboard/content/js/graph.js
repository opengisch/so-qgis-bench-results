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
        data: {"result": {"minY": 215.0, "minX": 0.0, "maxY": 3735.0, "series": [{"data": [[0.0, 215.0], [0.1, 215.0], [0.2, 216.0], [0.3, 219.0], [0.4, 219.0], [0.5, 224.0], [0.6, 225.0], [0.7, 225.0], [0.8, 225.0], [0.9, 234.0], [1.0, 238.0], [1.1, 244.0], [1.2, 244.0], [1.3, 252.0], [1.4, 253.0], [1.5, 254.0], [1.6, 254.0], [1.7, 254.0], [1.8, 254.0], [1.9, 254.0], [2.0, 256.0], [2.1, 258.0], [2.2, 260.0], [2.3, 260.0], [2.4, 261.0], [2.5, 263.0], [2.6, 264.0], [2.7, 264.0], [2.8, 264.0], [2.9, 269.0], [3.0, 269.0], [3.1, 269.0], [3.2, 270.0], [3.3, 271.0], [3.4, 271.0], [3.5, 275.0], [3.6, 277.0], [3.7, 277.0], [3.8, 277.0], [3.9, 282.0], [4.0, 284.0], [4.1, 287.0], [4.2, 287.0], [4.3, 287.0], [4.4, 289.0], [4.5, 293.0], [4.6, 293.0], [4.7, 293.0], [4.8, 299.0], [4.9, 301.0], [5.0, 301.0], [5.1, 304.0], [5.2, 304.0], [5.3, 304.0], [5.4, 306.0], [5.5, 308.0], [5.6, 309.0], [5.7, 309.0], [5.8, 311.0], [5.9, 312.0], [6.0, 313.0], [6.1, 313.0], [6.2, 313.0], [6.3, 313.0], [6.4, 314.0], [6.5, 314.0], [6.6, 314.0], [6.7, 315.0], [6.8, 315.0], [6.9, 316.0], [7.0, 316.0], [7.1, 317.0], [7.2, 317.0], [7.3, 320.0], [7.4, 320.0], [7.5, 321.0], [7.6, 321.0], [7.7, 323.0], [7.8, 325.0], [7.9, 325.0], [8.0, 325.0], [8.1, 326.0], [8.2, 331.0], [8.3, 332.0], [8.4, 332.0], [8.5, 333.0], [8.6, 334.0], [8.7, 334.0], [8.8, 336.0], [8.9, 338.0], [9.0, 340.0], [9.1, 340.0], [9.2, 345.0], [9.3, 348.0], [9.4, 349.0], [9.5, 349.0], [9.6, 349.0], [9.7, 351.0], [9.8, 351.0], [9.9, 351.0], [10.0, 351.0], [10.1, 353.0], [10.2, 353.0], [10.3, 354.0], [10.4, 356.0], [10.5, 358.0], [10.6, 358.0], [10.7, 358.0], [10.8, 358.0], [10.9, 359.0], [11.0, 359.0], [11.1, 361.0], [11.2, 363.0], [11.3, 364.0], [11.4, 364.0], [11.5, 366.0], [11.6, 367.0], [11.7, 367.0], [11.8, 368.0], [11.9, 369.0], [12.0, 370.0], [12.1, 370.0], [12.2, 370.0], [12.3, 372.0], [12.4, 373.0], [12.5, 373.0], [12.6, 373.0], [12.7, 374.0], [12.8, 375.0], [12.9, 375.0], [13.0, 375.0], [13.1, 375.0], [13.2, 376.0], [13.3, 376.0], [13.4, 377.0], [13.5, 378.0], [13.6, 378.0], [13.7, 378.0], [13.8, 378.0], [13.9, 388.0], [14.0, 388.0], [14.1, 390.0], [14.2, 391.0], [14.3, 392.0], [14.4, 392.0], [14.5, 393.0], [14.6, 395.0], [14.7, 397.0], [14.8, 397.0], [14.9, 398.0], [15.0, 399.0], [15.1, 399.0], [15.2, 399.0], [15.3, 401.0], [15.4, 402.0], [15.5, 402.0], [15.6, 402.0], [15.7, 403.0], [15.8, 403.0], [15.9, 403.0], [16.0, 403.0], [16.1, 405.0], [16.2, 405.0], [16.3, 405.0], [16.4, 407.0], [16.5, 407.0], [16.6, 409.0], [16.7, 409.0], [16.8, 410.0], [16.9, 410.0], [17.0, 410.0], [17.1, 411.0], [17.2, 413.0], [17.3, 414.0], [17.4, 414.0], [17.5, 414.0], [17.6, 414.0], [17.7, 415.0], [17.8, 415.0], [17.9, 416.0], [18.0, 416.0], [18.1, 416.0], [18.2, 416.0], [18.3, 417.0], [18.4, 419.0], [18.5, 419.0], [18.6, 421.0], [18.7, 421.0], [18.8, 422.0], [18.9, 422.0], [19.0, 425.0], [19.1, 426.0], [19.2, 427.0], [19.3, 427.0], [19.4, 428.0], [19.5, 428.0], [19.6, 428.0], [19.7, 428.0], [19.8, 428.0], [19.9, 429.0], [20.0, 432.0], [20.1, 432.0], [20.2, 432.0], [20.3, 433.0], [20.4, 433.0], [20.5, 434.0], [20.6, 435.0], [20.7, 435.0], [20.8, 435.0], [20.9, 435.0], [21.0, 437.0], [21.1, 437.0], [21.2, 437.0], [21.3, 438.0], [21.4, 439.0], [21.5, 442.0], [21.6, 442.0], [21.7, 445.0], [21.8, 446.0], [21.9, 446.0], [22.0, 446.0], [22.1, 448.0], [22.2, 448.0], [22.3, 448.0], [22.4, 449.0], [22.5, 450.0], [22.6, 451.0], [22.7, 451.0], [22.8, 453.0], [22.9, 453.0], [23.0, 455.0], [23.1, 455.0], [23.2, 456.0], [23.3, 456.0], [23.4, 456.0], [23.5, 456.0], [23.6, 456.0], [23.7, 457.0], [23.8, 457.0], [23.9, 457.0], [24.0, 458.0], [24.1, 460.0], [24.2, 460.0], [24.3, 463.0], [24.4, 467.0], [24.5, 470.0], [24.6, 470.0], [24.7, 470.0], [24.8, 470.0], [24.9, 474.0], [25.0, 474.0], [25.1, 476.0], [25.2, 476.0], [25.3, 476.0], [25.4, 478.0], [25.5, 485.0], [25.6, 491.0], [25.7, 491.0], [25.8, 491.0], [25.9, 495.0], [26.0, 495.0], [26.1, 495.0], [26.2, 496.0], [26.3, 496.0], [26.4, 496.0], [26.5, 496.0], [26.6, 500.0], [26.7, 501.0], [26.8, 501.0], [26.9, 502.0], [27.0, 502.0], [27.1, 503.0], [27.2, 503.0], [27.3, 503.0], [27.4, 504.0], [27.5, 505.0], [27.6, 505.0], [27.7, 505.0], [27.8, 505.0], [27.9, 505.0], [28.0, 505.0], [28.1, 507.0], [28.2, 507.0], [28.3, 508.0], [28.4, 508.0], [28.5, 510.0], [28.6, 511.0], [28.7, 511.0], [28.8, 512.0], [28.9, 513.0], [29.0, 516.0], [29.1, 516.0], [29.2, 517.0], [29.3, 519.0], [29.4, 520.0], [29.5, 520.0], [29.6, 522.0], [29.7, 525.0], [29.8, 526.0], [29.9, 526.0], [30.0, 526.0], [30.1, 527.0], [30.2, 527.0], [30.3, 527.0], [30.4, 527.0], [30.5, 530.0], [30.6, 530.0], [30.7, 531.0], [30.8, 533.0], [30.9, 534.0], [31.0, 534.0], [31.1, 536.0], [31.2, 537.0], [31.3, 539.0], [31.4, 539.0], [31.5, 539.0], [31.6, 540.0], [31.7, 540.0], [31.8, 541.0], [31.9, 541.0], [32.0, 542.0], [32.1, 542.0], [32.2, 542.0], [32.3, 544.0], [32.4, 546.0], [32.5, 546.0], [32.6, 551.0], [32.7, 551.0], [32.8, 552.0], [32.9, 552.0], [33.0, 553.0], [33.1, 554.0], [33.2, 555.0], [33.3, 555.0], [33.4, 556.0], [33.5, 560.0], [33.6, 560.0], [33.7, 561.0], [33.8, 561.0], [33.9, 561.0], [34.0, 561.0], [34.1, 562.0], [34.2, 562.0], [34.3, 565.0], [34.4, 565.0], [34.5, 565.0], [34.6, 569.0], [34.7, 569.0], [34.8, 569.0], [34.9, 572.0], [35.0, 573.0], [35.1, 573.0], [35.2, 573.0], [35.3, 574.0], [35.4, 577.0], [35.5, 577.0], [35.6, 584.0], [35.7, 585.0], [35.8, 585.0], [35.9, 585.0], [36.0, 585.0], [36.1, 586.0], [36.2, 589.0], [36.3, 589.0], [36.4, 590.0], [36.5, 592.0], [36.6, 593.0], [36.7, 593.0], [36.8, 593.0], [36.9, 595.0], [37.0, 595.0], [37.1, 597.0], [37.2, 598.0], [37.3, 598.0], [37.4, 598.0], [37.5, 599.0], [37.6, 600.0], [37.7, 600.0], [37.8, 600.0], [37.9, 605.0], [38.0, 605.0], [38.1, 606.0], [38.2, 606.0], [38.3, 606.0], [38.4, 608.0], [38.5, 608.0], [38.6, 609.0], [38.7, 610.0], [38.8, 610.0], [38.9, 610.0], [39.0, 611.0], [39.1, 612.0], [39.2, 612.0], [39.3, 612.0], [39.4, 613.0], [39.5, 614.0], [39.6, 614.0], [39.7, 614.0], [39.8, 619.0], [39.9, 620.0], [40.0, 620.0], [40.1, 620.0], [40.2, 620.0], [40.3, 622.0], [40.4, 622.0], [40.5, 623.0], [40.6, 625.0], [40.7, 626.0], [40.8, 626.0], [40.9, 628.0], [41.0, 630.0], [41.1, 631.0], [41.2, 631.0], [41.3, 631.0], [41.4, 631.0], [41.5, 632.0], [41.6, 632.0], [41.7, 633.0], [41.8, 634.0], [41.9, 634.0], [42.0, 636.0], [42.1, 636.0], [42.2, 638.0], [42.3, 638.0], [42.4, 639.0], [42.5, 640.0], [42.6, 643.0], [42.7, 643.0], [42.8, 647.0], [42.9, 648.0], [43.0, 650.0], [43.1, 650.0], [43.2, 650.0], [43.3, 650.0], [43.4, 650.0], [43.5, 652.0], [43.6, 653.0], [43.7, 653.0], [43.8, 653.0], [43.9, 653.0], [44.0, 653.0], [44.1, 654.0], [44.2, 654.0], [44.3, 654.0], [44.4, 654.0], [44.5, 655.0], [44.6, 655.0], [44.7, 658.0], [44.8, 659.0], [44.9, 668.0], [45.0, 668.0], [45.1, 671.0], [45.2, 671.0], [45.3, 671.0], [45.4, 672.0], [45.5, 673.0], [45.6, 676.0], [45.7, 676.0], [45.8, 679.0], [45.9, 680.0], [46.0, 680.0], [46.1, 680.0], [46.2, 680.0], [46.3, 683.0], [46.4, 683.0], [46.5, 683.0], [46.6, 683.0], [46.7, 684.0], [46.8, 684.0], [46.9, 687.0], [47.0, 687.0], [47.1, 689.0], [47.2, 689.0], [47.3, 690.0], [47.4, 691.0], [47.5, 692.0], [47.6, 692.0], [47.7, 692.0], [47.8, 693.0], [47.9, 693.0], [48.0, 693.0], [48.1, 700.0], [48.2, 703.0], [48.3, 705.0], [48.4, 705.0], [48.5, 705.0], [48.6, 706.0], [48.7, 706.0], [48.8, 707.0], [48.9, 707.0], [49.0, 709.0], [49.1, 709.0], [49.2, 713.0], [49.3, 715.0], [49.4, 715.0], [49.5, 715.0], [49.6, 717.0], [49.7, 717.0], [49.8, 718.0], [49.9, 718.0], [50.0, 719.0], [50.1, 722.0], [50.2, 722.0], [50.3, 722.0], [50.4, 724.0], [50.5, 724.0], [50.6, 724.0], [50.7, 725.0], [50.8, 726.0], [50.9, 726.0], [51.0, 726.0], [51.1, 728.0], [51.2, 729.0], [51.3, 729.0], [51.4, 729.0], [51.5, 730.0], [51.6, 731.0], [51.7, 731.0], [51.8, 733.0], [51.9, 733.0], [52.0, 735.0], [52.1, 735.0], [52.2, 739.0], [52.3, 743.0], [52.4, 745.0], [52.5, 745.0], [52.6, 745.0], [52.7, 746.0], [52.8, 747.0], [52.9, 747.0], [53.0, 748.0], [53.1, 749.0], [53.2, 749.0], [53.3, 749.0], [53.4, 751.0], [53.5, 752.0], [53.6, 752.0], [53.7, 753.0], [53.8, 754.0], [53.9, 754.0], [54.0, 754.0], [54.1, 754.0], [54.2, 755.0], [54.3, 755.0], [54.4, 755.0], [54.5, 755.0], [54.6, 756.0], [54.7, 756.0], [54.8, 756.0], [54.9, 757.0], [55.0, 757.0], [55.1, 757.0], [55.2, 760.0], [55.3, 765.0], [55.4, 765.0], [55.5, 765.0], [55.6, 765.0], [55.7, 765.0], [55.8, 766.0], [55.9, 766.0], [56.0, 766.0], [56.1, 767.0], [56.2, 767.0], [56.3, 767.0], [56.4, 769.0], [56.5, 769.0], [56.6, 770.0], [56.7, 770.0], [56.8, 771.0], [56.9, 773.0], [57.0, 773.0], [57.1, 774.0], [57.2, 774.0], [57.3, 775.0], [57.4, 775.0], [57.5, 776.0], [57.6, 777.0], [57.7, 778.0], [57.8, 778.0], [57.9, 779.0], [58.0, 779.0], [58.1, 780.0], [58.2, 780.0], [58.3, 781.0], [58.4, 784.0], [58.5, 784.0], [58.6, 787.0], [58.7, 790.0], [58.8, 792.0], [58.9, 792.0], [59.0, 792.0], [59.1, 793.0], [59.2, 793.0], [59.3, 793.0], [59.4, 794.0], [59.5, 794.0], [59.6, 795.0], [59.7, 795.0], [59.8, 795.0], [59.9, 795.0], [60.0, 796.0], [60.1, 796.0], [60.2, 797.0], [60.3, 798.0], [60.4, 798.0], [60.5, 799.0], [60.6, 799.0], [60.7, 802.0], [60.8, 802.0], [60.9, 804.0], [61.0, 807.0], [61.1, 808.0], [61.2, 808.0], [61.3, 810.0], [61.4, 812.0], [61.5, 814.0], [61.6, 814.0], [61.7, 815.0], [61.8, 816.0], [61.9, 816.0], [62.0, 817.0], [62.1, 818.0], [62.2, 821.0], [62.3, 821.0], [62.4, 822.0], [62.5, 823.0], [62.6, 824.0], [62.7, 824.0], [62.8, 826.0], [62.9, 826.0], [63.0, 828.0], [63.1, 828.0], [63.2, 829.0], [63.3, 830.0], [63.4, 830.0], [63.5, 831.0], [63.6, 833.0], [63.7, 833.0], [63.8, 833.0], [63.9, 833.0], [64.0, 835.0], [64.1, 836.0], [64.2, 836.0], [64.3, 837.0], [64.4, 837.0], [64.5, 838.0], [64.6, 838.0], [64.7, 840.0], [64.8, 841.0], [64.9, 841.0], [65.0, 841.0], [65.1, 841.0], [65.2, 841.0], [65.3, 841.0], [65.4, 842.0], [65.5, 844.0], [65.6, 845.0], [65.7, 845.0], [65.8, 845.0], [65.9, 846.0], [66.0, 848.0], [66.1, 848.0], [66.2, 850.0], [66.3, 850.0], [66.4, 851.0], [66.5, 851.0], [66.6, 852.0], [66.7, 855.0], [66.8, 855.0], [66.9, 855.0], [67.0, 855.0], [67.1, 857.0], [67.2, 857.0], [67.3, 857.0], [67.4, 858.0], [67.5, 858.0], [67.6, 858.0], [67.7, 859.0], [67.8, 859.0], [67.9, 860.0], [68.0, 860.0], [68.1, 860.0], [68.2, 860.0], [68.3, 861.0], [68.4, 861.0], [68.5, 861.0], [68.6, 862.0], [68.7, 862.0], [68.8, 865.0], [68.9, 865.0], [69.0, 866.0], [69.1, 866.0], [69.2, 869.0], [69.3, 870.0], [69.4, 873.0], [69.5, 873.0], [69.6, 874.0], [69.7, 874.0], [69.8, 874.0], [69.9, 874.0], [70.0, 878.0], [70.1, 878.0], [70.2, 878.0], [70.3, 885.0], [70.4, 886.0], [70.5, 887.0], [70.6, 887.0], [70.7, 887.0], [70.8, 889.0], [70.9, 899.0], [71.0, 899.0], [71.1, 899.0], [71.2, 900.0], [71.3, 902.0], [71.4, 902.0], [71.5, 903.0], [71.6, 904.0], [71.7, 904.0], [71.8, 905.0], [71.9, 906.0], [72.0, 906.0], [72.1, 906.0], [72.2, 907.0], [72.3, 908.0], [72.4, 909.0], [72.5, 909.0], [72.6, 909.0], [72.7, 912.0], [72.8, 913.0], [72.9, 913.0], [73.0, 913.0], [73.1, 914.0], [73.2, 915.0], [73.3, 915.0], [73.4, 917.0], [73.5, 917.0], [73.6, 917.0], [73.7, 917.0], [73.8, 918.0], [73.9, 920.0], [74.0, 920.0], [74.1, 920.0], [74.2, 923.0], [74.3, 923.0], [74.4, 923.0], [74.5, 924.0], [74.6, 925.0], [74.7, 926.0], [74.8, 926.0], [74.9, 927.0], [75.0, 928.0], [75.1, 928.0], [75.2, 928.0], [75.3, 928.0], [75.4, 929.0], [75.5, 929.0], [75.6, 929.0], [75.7, 930.0], [75.8, 930.0], [75.9, 930.0], [76.0, 931.0], [76.1, 932.0], [76.2, 932.0], [76.3, 932.0], [76.4, 933.0], [76.5, 933.0], [76.6, 934.0], [76.7, 934.0], [76.8, 936.0], [76.9, 939.0], [77.0, 939.0], [77.1, 939.0], [77.2, 941.0], [77.3, 944.0], [77.4, 944.0], [77.5, 947.0], [77.6, 947.0], [77.7, 950.0], [77.8, 950.0], [77.9, 952.0], [78.0, 954.0], [78.1, 956.0], [78.2, 956.0], [78.3, 962.0], [78.4, 962.0], [78.5, 962.0], [78.6, 962.0], [78.7, 965.0], [78.8, 966.0], [78.9, 966.0], [79.0, 967.0], [79.1, 968.0], [79.2, 968.0], [79.3, 968.0], [79.4, 968.0], [79.5, 970.0], [79.6, 972.0], [79.7, 972.0], [79.8, 973.0], [79.9, 974.0], [80.0, 974.0], [80.1, 974.0], [80.2, 975.0], [80.3, 976.0], [80.4, 976.0], [80.5, 979.0], [80.6, 982.0], [80.7, 984.0], [80.8, 984.0], [80.9, 987.0], [81.0, 988.0], [81.1, 989.0], [81.2, 989.0], [81.3, 989.0], [81.4, 989.0], [81.5, 990.0], [81.6, 990.0], [81.7, 990.0], [81.8, 992.0], [81.9, 992.0], [82.0, 995.0], [82.1, 997.0], [82.2, 997.0], [82.3, 997.0], [82.4, 1003.0], [82.5, 1003.0], [82.6, 1005.0], [82.7, 1005.0], [82.8, 1007.0], [82.9, 1014.0], [83.0, 1014.0], [83.1, 1014.0], [83.2, 1015.0], [83.3, 1017.0], [83.4, 1017.0], [83.5, 1018.0], [83.6, 1021.0], [83.7, 1029.0], [83.8, 1029.0], [83.9, 1030.0], [84.0, 1032.0], [84.1, 1033.0], [84.2, 1033.0], [84.3, 1033.0], [84.4, 1034.0], [84.5, 1034.0], [84.6, 1034.0], [84.7, 1036.0], [84.8, 1038.0], [84.9, 1039.0], [85.0, 1039.0], [85.1, 1042.0], [85.2, 1043.0], [85.3, 1043.0], [85.4, 1043.0], [85.5, 1044.0], [85.6, 1047.0], [85.7, 1047.0], [85.8, 1051.0], [85.9, 1051.0], [86.0, 1053.0], [86.1, 1053.0], [86.2, 1054.0], [86.3, 1057.0], [86.4, 1058.0], [86.5, 1058.0], [86.6, 1058.0], [86.7, 1061.0], [86.8, 1061.0], [86.9, 1065.0], [87.0, 1066.0], [87.1, 1067.0], [87.2, 1067.0], [87.3, 1067.0], [87.4, 1075.0], [87.5, 1081.0], [87.6, 1081.0], [87.7, 1093.0], [87.8, 1094.0], [87.9, 1097.0], [88.0, 1097.0], [88.1, 1098.0], [88.2, 1099.0], [88.3, 1108.0], [88.4, 1108.0], [88.5, 1108.0], [88.6, 1114.0], [88.7, 1114.0], [88.8, 1116.0], [88.9, 1117.0], [89.0, 1135.0], [89.1, 1135.0], [89.2, 1137.0], [89.3, 1140.0], [89.4, 1145.0], [89.5, 1145.0], [89.6, 1148.0], [89.7, 1149.0], [89.8, 1150.0], [89.9, 1150.0], [90.0, 1151.0], [90.1, 1154.0], [90.2, 1154.0], [90.3, 1155.0], [90.4, 1155.0], [90.5, 1158.0], [90.6, 1158.0], [90.7, 1159.0], [90.8, 1166.0], [90.9, 1168.0], [91.0, 1168.0], [91.1, 1169.0], [91.2, 1181.0], [91.3, 1183.0], [91.4, 1183.0], [91.5, 1189.0], [91.6, 1191.0], [91.7, 1191.0], [91.8, 1191.0], [91.9, 1194.0], [92.0, 1195.0], [92.1, 1195.0], [92.2, 1202.0], [92.3, 1202.0], [92.4, 1202.0], [92.5, 1202.0], [92.6, 1202.0], [92.7, 1208.0], [92.8, 1219.0], [92.9, 1219.0], [93.0, 1220.0], [93.1, 1228.0], [93.2, 1241.0], [93.3, 1241.0], [93.4, 1242.0], [93.5, 1242.0], [93.6, 1242.0], [93.7, 1246.0], [93.8, 1252.0], [93.9, 1261.0], [94.0, 1261.0], [94.1, 1264.0], [94.2, 1271.0], [94.3, 1278.0], [94.4, 1278.0], [94.5, 1279.0], [94.6, 1279.0], [94.7, 1290.0], [94.8, 1290.0], [94.9, 1294.0], [95.0, 1300.0], [95.1, 1300.0], [95.2, 1300.0], [95.3, 1305.0], [95.4, 1305.0], [95.5, 1305.0], [95.6, 1324.0], [95.7, 1326.0], [95.8, 1329.0], [95.9, 1329.0], [96.0, 1342.0], [96.1, 1346.0], [96.2, 1352.0], [96.3, 1352.0], [96.4, 1383.0], [96.5, 1384.0], [96.6, 1417.0], [96.7, 1417.0], [96.8, 1452.0], [96.9, 1456.0], [97.0, 1456.0], [97.1, 1465.0], [97.2, 1469.0], [97.3, 1498.0], [97.4, 1498.0], [97.5, 1502.0], [97.6, 1527.0], [97.7, 1575.0], [97.8, 1575.0], [97.9, 1618.0], [98.0, 1618.0], [98.1, 1644.0], [98.2, 1644.0], [98.3, 1696.0], [98.4, 1731.0], [98.5, 1731.0], [98.6, 1735.0], [98.7, 1743.0], [98.8, 1769.0], [98.9, 1769.0], [99.0, 1795.0], [99.1, 2011.0], [99.2, 2044.0], [99.3, 2044.0], [99.4, 2092.0], [99.5, 2203.0], [99.6, 2652.0], [99.7, 2652.0], [99.8, 3691.0], [99.9, 3735.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 93.0, "series": [{"data": [[2200.0, 1.0], [600.0, 77.0], [2600.0, 1.0], [700.0, 93.0], [200.0, 36.0], [800.0, 77.0], [900.0, 82.0], [3700.0, 1.0], [3600.0, 1.0], [1000.0, 44.0], [1100.0, 28.0], [300.0, 76.0], [1200.0, 21.0], [1300.0, 12.0], [1400.0, 6.0], [1500.0, 3.0], [400.0, 83.0], [1600.0, 4.0], [1700.0, 5.0], [500.0, 81.0], [2000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 520.0, "series": [{"data": [[0.0, 196.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 520.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 19.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.749999999999998, "minX": 1.60438596E12, "maxY": 9.99141630901286, "series": [{"data": [[1.60438602E12, 8.749999999999998], [1.60438596E12, 9.99141630901286]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438602E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.0, "minX": 1.0, "maxY": 1696.0, "series": [{"data": [[8.0, 320.0], [4.0, 334.0], [2.0, 778.0], [1.0, 1148.0], [9.0, 1696.0], [10.0, 746.3273480662984], [5.0, 313.0], [6.0, 357.5], [3.0, 358.0], [7.0, 416.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.930612244897949, 743.8625850340137]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 261.81666666666666, "minX": 1.60438596E12, "maxY": 1688691.2166666666, "series": [{"data": [[1.60438602E12, 147010.45], [1.60438596E12, 1688691.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438602E12, 261.81666666666666], [1.60438596E12, 5261.216666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438602E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 741.9722222222223, "minX": 1.60438596E12, "maxY": 743.959942775394, "series": [{"data": [[1.60438602E12, 741.9722222222223], [1.60438596E12, 743.959942775394]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438602E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 738.7500000000001, "minX": 1.60438596E12, "maxY": 742.236051502147, "series": [{"data": [[1.60438602E12, 738.7500000000001], [1.60438596E12, 742.236051502147]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438602E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60438596E12, "maxY": 0.13733905579399128, "series": [{"data": [[1.60438602E12, 0.0], [1.60438596E12, 0.13733905579399128]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438602E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 215.0, "minX": 1.60438596E12, "maxY": 3735.0, "series": [{"data": [[1.60438602E12, 2652.0], [1.60438596E12, 3735.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438602E12, 306.0], [1.60438596E12, 227.69999849796295]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438602E12, 306.0], [1.60438596E12, 233.37000060081482]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438602E12, 306.0], [1.60438596E12, 230.84999924898148]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438602E12, 306.0], [1.60438596E12, 215.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438602E12, 416.0], [1.60438596E12, 726.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438602E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 333.0, "minX": 2.0, "maxY": 963.0, "series": [{"data": [[2.0, 963.0], [9.0, 867.0], [10.0, 840.5], [11.0, 857.0], [12.0, 826.0], [13.0, 777.5], [14.0, 748.0], [15.0, 547.5], [16.0, 626.5], [17.0, 448.0], [18.0, 505.5], [19.0, 393.0], [20.0, 490.5], [21.0, 333.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 332.0, "minX": 2.0, "maxY": 961.0, "series": [{"data": [[2.0, 961.0], [9.0, 865.5], [10.0, 840.0], [11.0, 856.0], [12.0, 824.0], [13.0, 774.0], [14.0, 748.0], [15.0, 547.5], [16.0, 626.0], [17.0, 447.0], [18.0, 504.5], [19.0, 392.0], [20.0, 489.5], [21.0, 332.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.60438596E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60438602E12, 0.43333333333333335], [1.60438596E12, 11.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438602E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60438596E12, "maxY": 11.65, "series": [{"data": [[1.60438602E12, 0.6], [1.60438596E12, 11.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438602E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60438596E12, "maxY": 11.65, "series": [{"data": [[1.60438602E12, 0.6], [1.60438596E12, 11.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438602E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.60438596E12, "maxY": 11.65, "series": [{"data": [[1.60438602E12, 0.6], [1.60438596E12, 11.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438602E12, "title": "Total Transactions Per Second"}},
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

