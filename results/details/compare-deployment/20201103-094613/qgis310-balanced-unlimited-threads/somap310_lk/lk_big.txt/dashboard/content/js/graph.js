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
        data: {"result": {"minY": 77.0, "minX": 0.0, "maxY": 4354.0, "series": [{"data": [[0.0, 77.0], [0.1, 80.0], [0.2, 83.0], [0.3, 87.0], [0.4, 97.0], [0.5, 101.0], [0.6, 119.0], [0.7, 123.0], [0.8, 129.0], [0.9, 137.0], [1.0, 139.0], [1.1, 142.0], [1.2, 144.0], [1.3, 145.0], [1.4, 146.0], [1.5, 147.0], [1.6, 149.0], [1.7, 149.0], [1.8, 149.0], [1.9, 150.0], [2.0, 150.0], [2.1, 151.0], [2.2, 152.0], [2.3, 153.0], [2.4, 153.0], [2.5, 155.0], [2.6, 155.0], [2.7, 155.0], [2.8, 156.0], [2.9, 156.0], [3.0, 156.0], [3.1, 157.0], [3.2, 157.0], [3.3, 157.0], [3.4, 158.0], [3.5, 158.0], [3.6, 158.0], [3.7, 159.0], [3.8, 159.0], [3.9, 159.0], [4.0, 159.0], [4.1, 160.0], [4.2, 160.0], [4.3, 160.0], [4.4, 161.0], [4.5, 161.0], [4.6, 162.0], [4.7, 162.0], [4.8, 162.0], [4.9, 162.0], [5.0, 163.0], [5.1, 163.0], [5.2, 164.0], [5.3, 164.0], [5.4, 164.0], [5.5, 164.0], [5.6, 165.0], [5.7, 165.0], [5.8, 165.0], [5.9, 165.0], [6.0, 166.0], [6.1, 166.0], [6.2, 166.0], [6.3, 166.0], [6.4, 167.0], [6.5, 167.0], [6.6, 167.0], [6.7, 167.0], [6.8, 168.0], [6.9, 168.0], [7.0, 168.0], [7.1, 169.0], [7.2, 169.0], [7.3, 169.0], [7.4, 169.0], [7.5, 170.0], [7.6, 170.0], [7.7, 170.0], [7.8, 170.0], [7.9, 171.0], [8.0, 171.0], [8.1, 171.0], [8.2, 171.0], [8.3, 171.0], [8.4, 172.0], [8.5, 172.0], [8.6, 172.0], [8.7, 172.0], [8.8, 173.0], [8.9, 173.0], [9.0, 173.0], [9.1, 173.0], [9.2, 174.0], [9.3, 174.0], [9.4, 174.0], [9.5, 174.0], [9.6, 175.0], [9.7, 175.0], [9.8, 175.0], [9.9, 175.0], [10.0, 175.0], [10.1, 176.0], [10.2, 176.0], [10.3, 176.0], [10.4, 176.0], [10.5, 176.0], [10.6, 176.0], [10.7, 177.0], [10.8, 177.0], [10.9, 177.0], [11.0, 177.0], [11.1, 177.0], [11.2, 178.0], [11.3, 178.0], [11.4, 178.0], [11.5, 178.0], [11.6, 179.0], [11.7, 179.0], [11.8, 179.0], [11.9, 179.0], [12.0, 179.0], [12.1, 179.0], [12.2, 180.0], [12.3, 180.0], [12.4, 180.0], [12.5, 180.0], [12.6, 180.0], [12.7, 181.0], [12.8, 181.0], [12.9, 181.0], [13.0, 181.0], [13.1, 181.0], [13.2, 182.0], [13.3, 182.0], [13.4, 182.0], [13.5, 182.0], [13.6, 182.0], [13.7, 183.0], [13.8, 183.0], [13.9, 183.0], [14.0, 183.0], [14.1, 183.0], [14.2, 184.0], [14.3, 184.0], [14.4, 184.0], [14.5, 184.0], [14.6, 185.0], [14.7, 185.0], [14.8, 186.0], [14.9, 186.0], [15.0, 186.0], [15.1, 187.0], [15.2, 187.0], [15.3, 187.0], [15.4, 187.0], [15.5, 188.0], [15.6, 188.0], [15.7, 188.0], [15.8, 188.0], [15.9, 189.0], [16.0, 189.0], [16.1, 189.0], [16.2, 190.0], [16.3, 190.0], [16.4, 190.0], [16.5, 190.0], [16.6, 190.0], [16.7, 191.0], [16.8, 192.0], [16.9, 192.0], [17.0, 192.0], [17.1, 193.0], [17.2, 193.0], [17.3, 193.0], [17.4, 194.0], [17.5, 194.0], [17.6, 194.0], [17.7, 195.0], [17.8, 195.0], [17.9, 196.0], [18.0, 196.0], [18.1, 196.0], [18.2, 197.0], [18.3, 197.0], [18.4, 198.0], [18.5, 198.0], [18.6, 198.0], [18.7, 199.0], [18.8, 200.0], [18.9, 200.0], [19.0, 200.0], [19.1, 201.0], [19.2, 201.0], [19.3, 202.0], [19.4, 203.0], [19.5, 203.0], [19.6, 204.0], [19.7, 204.0], [19.8, 205.0], [19.9, 205.0], [20.0, 206.0], [20.1, 207.0], [20.2, 208.0], [20.3, 209.0], [20.4, 210.0], [20.5, 210.0], [20.6, 211.0], [20.7, 212.0], [20.8, 213.0], [20.9, 214.0], [21.0, 215.0], [21.1, 216.0], [21.2, 217.0], [21.3, 217.0], [21.4, 218.0], [21.5, 219.0], [21.6, 220.0], [21.7, 221.0], [21.8, 222.0], [21.9, 223.0], [22.0, 223.0], [22.1, 224.0], [22.2, 224.0], [22.3, 225.0], [22.4, 225.0], [22.5, 226.0], [22.6, 226.0], [22.7, 227.0], [22.8, 228.0], [22.9, 229.0], [23.0, 229.0], [23.1, 230.0], [23.2, 231.0], [23.3, 232.0], [23.4, 233.0], [23.5, 233.0], [23.6, 235.0], [23.7, 235.0], [23.8, 236.0], [23.9, 237.0], [24.0, 238.0], [24.1, 239.0], [24.2, 240.0], [24.3, 240.0], [24.4, 241.0], [24.5, 242.0], [24.6, 243.0], [24.7, 244.0], [24.8, 245.0], [24.9, 245.0], [25.0, 246.0], [25.1, 247.0], [25.2, 247.0], [25.3, 249.0], [25.4, 250.0], [25.5, 250.0], [25.6, 252.0], [25.7, 253.0], [25.8, 253.0], [25.9, 254.0], [26.0, 255.0], [26.1, 256.0], [26.2, 257.0], [26.3, 257.0], [26.4, 259.0], [26.5, 259.0], [26.6, 260.0], [26.7, 260.0], [26.8, 262.0], [26.9, 262.0], [27.0, 263.0], [27.1, 264.0], [27.2, 264.0], [27.3, 265.0], [27.4, 265.0], [27.5, 266.0], [27.6, 267.0], [27.7, 268.0], [27.8, 268.0], [27.9, 270.0], [28.0, 271.0], [28.1, 272.0], [28.2, 273.0], [28.3, 274.0], [28.4, 274.0], [28.5, 275.0], [28.6, 276.0], [28.7, 277.0], [28.8, 278.0], [28.9, 279.0], [29.0, 280.0], [29.1, 281.0], [29.2, 281.0], [29.3, 282.0], [29.4, 283.0], [29.5, 283.0], [29.6, 284.0], [29.7, 285.0], [29.8, 285.0], [29.9, 286.0], [30.0, 288.0], [30.1, 289.0], [30.2, 289.0], [30.3, 290.0], [30.4, 291.0], [30.5, 291.0], [30.6, 292.0], [30.7, 294.0], [30.8, 294.0], [30.9, 295.0], [31.0, 297.0], [31.1, 298.0], [31.2, 299.0], [31.3, 299.0], [31.4, 300.0], [31.5, 301.0], [31.6, 302.0], [31.7, 302.0], [31.8, 303.0], [31.9, 303.0], [32.0, 304.0], [32.1, 306.0], [32.2, 306.0], [32.3, 308.0], [32.4, 308.0], [32.5, 309.0], [32.6, 310.0], [32.7, 311.0], [32.8, 312.0], [32.9, 313.0], [33.0, 315.0], [33.1, 316.0], [33.2, 317.0], [33.3, 317.0], [33.4, 318.0], [33.5, 319.0], [33.6, 321.0], [33.7, 322.0], [33.8, 324.0], [33.9, 325.0], [34.0, 327.0], [34.1, 327.0], [34.2, 328.0], [34.3, 328.0], [34.4, 329.0], [34.5, 331.0], [34.6, 332.0], [34.7, 334.0], [34.8, 334.0], [34.9, 335.0], [35.0, 336.0], [35.1, 337.0], [35.2, 339.0], [35.3, 342.0], [35.4, 344.0], [35.5, 345.0], [35.6, 346.0], [35.7, 348.0], [35.8, 348.0], [35.9, 350.0], [36.0, 351.0], [36.1, 352.0], [36.2, 353.0], [36.3, 356.0], [36.4, 357.0], [36.5, 357.0], [36.6, 358.0], [36.7, 360.0], [36.8, 361.0], [36.9, 363.0], [37.0, 364.0], [37.1, 365.0], [37.2, 366.0], [37.3, 367.0], [37.4, 370.0], [37.5, 371.0], [37.6, 373.0], [37.7, 375.0], [37.8, 376.0], [37.9, 377.0], [38.0, 379.0], [38.1, 379.0], [38.2, 380.0], [38.3, 382.0], [38.4, 383.0], [38.5, 384.0], [38.6, 386.0], [38.7, 388.0], [38.8, 389.0], [38.9, 390.0], [39.0, 391.0], [39.1, 392.0], [39.2, 393.0], [39.3, 395.0], [39.4, 396.0], [39.5, 396.0], [39.6, 397.0], [39.7, 399.0], [39.8, 400.0], [39.9, 402.0], [40.0, 403.0], [40.1, 404.0], [40.2, 405.0], [40.3, 406.0], [40.4, 407.0], [40.5, 409.0], [40.6, 410.0], [40.7, 411.0], [40.8, 414.0], [40.9, 417.0], [41.0, 420.0], [41.1, 421.0], [41.2, 423.0], [41.3, 425.0], [41.4, 427.0], [41.5, 429.0], [41.6, 432.0], [41.7, 433.0], [41.8, 434.0], [41.9, 436.0], [42.0, 438.0], [42.1, 440.0], [42.2, 441.0], [42.3, 442.0], [42.4, 443.0], [42.5, 444.0], [42.6, 445.0], [42.7, 446.0], [42.8, 448.0], [42.9, 450.0], [43.0, 451.0], [43.1, 452.0], [43.2, 454.0], [43.3, 455.0], [43.4, 456.0], [43.5, 458.0], [43.6, 459.0], [43.7, 461.0], [43.8, 462.0], [43.9, 464.0], [44.0, 465.0], [44.1, 466.0], [44.2, 468.0], [44.3, 470.0], [44.4, 471.0], [44.5, 472.0], [44.6, 474.0], [44.7, 475.0], [44.8, 477.0], [44.9, 478.0], [45.0, 479.0], [45.1, 480.0], [45.2, 481.0], [45.3, 482.0], [45.4, 482.0], [45.5, 484.0], [45.6, 485.0], [45.7, 486.0], [45.8, 486.0], [45.9, 489.0], [46.0, 491.0], [46.1, 492.0], [46.2, 493.0], [46.3, 494.0], [46.4, 496.0], [46.5, 498.0], [46.6, 500.0], [46.7, 503.0], [46.8, 504.0], [46.9, 505.0], [47.0, 509.0], [47.1, 511.0], [47.2, 513.0], [47.3, 514.0], [47.4, 516.0], [47.5, 517.0], [47.6, 518.0], [47.7, 520.0], [47.8, 522.0], [47.9, 523.0], [48.0, 524.0], [48.1, 525.0], [48.2, 527.0], [48.3, 529.0], [48.4, 531.0], [48.5, 532.0], [48.6, 533.0], [48.7, 536.0], [48.8, 537.0], [48.9, 539.0], [49.0, 540.0], [49.1, 545.0], [49.2, 546.0], [49.3, 547.0], [49.4, 548.0], [49.5, 550.0], [49.6, 552.0], [49.7, 554.0], [49.8, 555.0], [49.9, 556.0], [50.0, 558.0], [50.1, 561.0], [50.2, 561.0], [50.3, 565.0], [50.4, 568.0], [50.5, 570.0], [50.6, 571.0], [50.7, 573.0], [50.8, 573.0], [50.9, 575.0], [51.0, 575.0], [51.1, 577.0], [51.2, 578.0], [51.3, 579.0], [51.4, 581.0], [51.5, 582.0], [51.6, 583.0], [51.7, 584.0], [51.8, 584.0], [51.9, 587.0], [52.0, 588.0], [52.1, 590.0], [52.2, 591.0], [52.3, 594.0], [52.4, 595.0], [52.5, 596.0], [52.6, 599.0], [52.7, 600.0], [52.8, 601.0], [52.9, 601.0], [53.0, 603.0], [53.1, 605.0], [53.2, 606.0], [53.3, 609.0], [53.4, 609.0], [53.5, 610.0], [53.6, 611.0], [53.7, 612.0], [53.8, 612.0], [53.9, 613.0], [54.0, 616.0], [54.1, 616.0], [54.2, 617.0], [54.3, 619.0], [54.4, 622.0], [54.5, 623.0], [54.6, 626.0], [54.7, 628.0], [54.8, 629.0], [54.9, 629.0], [55.0, 631.0], [55.1, 632.0], [55.2, 633.0], [55.3, 635.0], [55.4, 637.0], [55.5, 639.0], [55.6, 642.0], [55.7, 644.0], [55.8, 645.0], [55.9, 647.0], [56.0, 649.0], [56.1, 651.0], [56.2, 654.0], [56.3, 655.0], [56.4, 657.0], [56.5, 660.0], [56.6, 662.0], [56.7, 663.0], [56.8, 665.0], [56.9, 666.0], [57.0, 668.0], [57.1, 669.0], [57.2, 671.0], [57.3, 675.0], [57.4, 677.0], [57.5, 679.0], [57.6, 680.0], [57.7, 682.0], [57.8, 682.0], [57.9, 685.0], [58.0, 688.0], [58.1, 689.0], [58.2, 690.0], [58.3, 691.0], [58.4, 694.0], [58.5, 694.0], [58.6, 696.0], [58.7, 697.0], [58.8, 700.0], [58.9, 701.0], [59.0, 702.0], [59.1, 704.0], [59.2, 705.0], [59.3, 706.0], [59.4, 708.0], [59.5, 710.0], [59.6, 711.0], [59.7, 711.0], [59.8, 712.0], [59.9, 713.0], [60.0, 716.0], [60.1, 717.0], [60.2, 719.0], [60.3, 721.0], [60.4, 723.0], [60.5, 725.0], [60.6, 728.0], [60.7, 730.0], [60.8, 730.0], [60.9, 732.0], [61.0, 734.0], [61.1, 737.0], [61.2, 738.0], [61.3, 741.0], [61.4, 741.0], [61.5, 742.0], [61.6, 743.0], [61.7, 744.0], [61.8, 745.0], [61.9, 746.0], [62.0, 748.0], [62.1, 749.0], [62.2, 752.0], [62.3, 755.0], [62.4, 756.0], [62.5, 758.0], [62.6, 759.0], [62.7, 761.0], [62.8, 762.0], [62.9, 765.0], [63.0, 767.0], [63.1, 768.0], [63.2, 769.0], [63.3, 771.0], [63.4, 773.0], [63.5, 774.0], [63.6, 777.0], [63.7, 779.0], [63.8, 783.0], [63.9, 784.0], [64.0, 785.0], [64.1, 787.0], [64.2, 789.0], [64.3, 791.0], [64.4, 794.0], [64.5, 796.0], [64.6, 798.0], [64.7, 801.0], [64.8, 802.0], [64.9, 803.0], [65.0, 805.0], [65.1, 807.0], [65.2, 809.0], [65.3, 811.0], [65.4, 813.0], [65.5, 814.0], [65.6, 816.0], [65.7, 817.0], [65.8, 819.0], [65.9, 820.0], [66.0, 822.0], [66.1, 823.0], [66.2, 826.0], [66.3, 828.0], [66.4, 830.0], [66.5, 832.0], [66.6, 834.0], [66.7, 836.0], [66.8, 837.0], [66.9, 839.0], [67.0, 841.0], [67.1, 842.0], [67.2, 844.0], [67.3, 845.0], [67.4, 847.0], [67.5, 849.0], [67.6, 851.0], [67.7, 853.0], [67.8, 854.0], [67.9, 855.0], [68.0, 859.0], [68.1, 861.0], [68.2, 863.0], [68.3, 865.0], [68.4, 868.0], [68.5, 870.0], [68.6, 871.0], [68.7, 873.0], [68.8, 875.0], [68.9, 877.0], [69.0, 878.0], [69.1, 880.0], [69.2, 882.0], [69.3, 883.0], [69.4, 884.0], [69.5, 887.0], [69.6, 887.0], [69.7, 889.0], [69.8, 892.0], [69.9, 894.0], [70.0, 896.0], [70.1, 899.0], [70.2, 901.0], [70.3, 902.0], [70.4, 904.0], [70.5, 905.0], [70.6, 909.0], [70.7, 910.0], [70.8, 912.0], [70.9, 913.0], [71.0, 915.0], [71.1, 915.0], [71.2, 918.0], [71.3, 920.0], [71.4, 922.0], [71.5, 924.0], [71.6, 926.0], [71.7, 929.0], [71.8, 930.0], [71.9, 932.0], [72.0, 932.0], [72.1, 935.0], [72.2, 938.0], [72.3, 942.0], [72.4, 945.0], [72.5, 946.0], [72.6, 950.0], [72.7, 954.0], [72.8, 955.0], [72.9, 958.0], [73.0, 960.0], [73.1, 962.0], [73.2, 962.0], [73.3, 967.0], [73.4, 969.0], [73.5, 971.0], [73.6, 973.0], [73.7, 975.0], [73.8, 977.0], [73.9, 979.0], [74.0, 982.0], [74.1, 984.0], [74.2, 988.0], [74.3, 995.0], [74.4, 997.0], [74.5, 1000.0], [74.6, 1005.0], [74.7, 1007.0], [74.8, 1008.0], [74.9, 1010.0], [75.0, 1011.0], [75.1, 1013.0], [75.2, 1018.0], [75.3, 1019.0], [75.4, 1022.0], [75.5, 1025.0], [75.6, 1029.0], [75.7, 1033.0], [75.8, 1035.0], [75.9, 1037.0], [76.0, 1040.0], [76.1, 1042.0], [76.2, 1043.0], [76.3, 1045.0], [76.4, 1047.0], [76.5, 1049.0], [76.6, 1051.0], [76.7, 1055.0], [76.8, 1058.0], [76.9, 1061.0], [77.0, 1065.0], [77.1, 1067.0], [77.2, 1069.0], [77.3, 1071.0], [77.4, 1073.0], [77.5, 1079.0], [77.6, 1082.0], [77.7, 1082.0], [77.8, 1086.0], [77.9, 1088.0], [78.0, 1093.0], [78.1, 1098.0], [78.2, 1099.0], [78.3, 1102.0], [78.4, 1106.0], [78.5, 1108.0], [78.6, 1111.0], [78.7, 1113.0], [78.8, 1119.0], [78.9, 1121.0], [79.0, 1123.0], [79.1, 1129.0], [79.2, 1134.0], [79.3, 1139.0], [79.4, 1143.0], [79.5, 1146.0], [79.6, 1150.0], [79.7, 1153.0], [79.8, 1158.0], [79.9, 1162.0], [80.0, 1164.0], [80.1, 1168.0], [80.2, 1171.0], [80.3, 1174.0], [80.4, 1177.0], [80.5, 1178.0], [80.6, 1182.0], [80.7, 1185.0], [80.8, 1186.0], [80.9, 1188.0], [81.0, 1190.0], [81.1, 1193.0], [81.2, 1198.0], [81.3, 1199.0], [81.4, 1202.0], [81.5, 1204.0], [81.6, 1208.0], [81.7, 1211.0], [81.8, 1215.0], [81.9, 1217.0], [82.0, 1220.0], [82.1, 1222.0], [82.2, 1225.0], [82.3, 1229.0], [82.4, 1230.0], [82.5, 1234.0], [82.6, 1238.0], [82.7, 1243.0], [82.8, 1248.0], [82.9, 1251.0], [83.0, 1253.0], [83.1, 1255.0], [83.2, 1256.0], [83.3, 1258.0], [83.4, 1260.0], [83.5, 1267.0], [83.6, 1270.0], [83.7, 1274.0], [83.8, 1275.0], [83.9, 1283.0], [84.0, 1286.0], [84.1, 1290.0], [84.2, 1294.0], [84.3, 1296.0], [84.4, 1301.0], [84.5, 1306.0], [84.6, 1310.0], [84.7, 1313.0], [84.8, 1317.0], [84.9, 1320.0], [85.0, 1323.0], [85.1, 1326.0], [85.2, 1330.0], [85.3, 1335.0], [85.4, 1337.0], [85.5, 1341.0], [85.6, 1345.0], [85.7, 1350.0], [85.8, 1353.0], [85.9, 1357.0], [86.0, 1360.0], [86.1, 1364.0], [86.2, 1366.0], [86.3, 1370.0], [86.4, 1371.0], [86.5, 1374.0], [86.6, 1376.0], [86.7, 1381.0], [86.8, 1386.0], [86.9, 1392.0], [87.0, 1399.0], [87.1, 1408.0], [87.2, 1417.0], [87.3, 1419.0], [87.4, 1424.0], [87.5, 1426.0], [87.6, 1430.0], [87.7, 1432.0], [87.8, 1433.0], [87.9, 1437.0], [88.0, 1439.0], [88.1, 1448.0], [88.2, 1454.0], [88.3, 1459.0], [88.4, 1463.0], [88.5, 1467.0], [88.6, 1474.0], [88.7, 1481.0], [88.8, 1488.0], [88.9, 1492.0], [89.0, 1496.0], [89.1, 1507.0], [89.2, 1512.0], [89.3, 1519.0], [89.4, 1529.0], [89.5, 1535.0], [89.6, 1543.0], [89.7, 1545.0], [89.8, 1551.0], [89.9, 1552.0], [90.0, 1560.0], [90.1, 1566.0], [90.2, 1570.0], [90.3, 1576.0], [90.4, 1580.0], [90.5, 1585.0], [90.6, 1594.0], [90.7, 1606.0], [90.8, 1610.0], [90.9, 1614.0], [91.0, 1618.0], [91.1, 1622.0], [91.2, 1625.0], [91.3, 1633.0], [91.4, 1638.0], [91.5, 1642.0], [91.6, 1648.0], [91.7, 1655.0], [91.8, 1666.0], [91.9, 1674.0], [92.0, 1683.0], [92.1, 1690.0], [92.2, 1694.0], [92.3, 1706.0], [92.4, 1715.0], [92.5, 1724.0], [92.6, 1728.0], [92.7, 1731.0], [92.8, 1739.0], [92.9, 1745.0], [93.0, 1750.0], [93.1, 1757.0], [93.2, 1762.0], [93.3, 1771.0], [93.4, 1779.0], [93.5, 1789.0], [93.6, 1796.0], [93.7, 1806.0], [93.8, 1810.0], [93.9, 1815.0], [94.0, 1821.0], [94.1, 1832.0], [94.2, 1839.0], [94.3, 1846.0], [94.4, 1850.0], [94.5, 1857.0], [94.6, 1867.0], [94.7, 1870.0], [94.8, 1876.0], [94.9, 1890.0], [95.0, 1902.0], [95.1, 1914.0], [95.2, 1925.0], [95.3, 1934.0], [95.4, 1951.0], [95.5, 1977.0], [95.6, 1992.0], [95.7, 2004.0], [95.8, 2011.0], [95.9, 2035.0], [96.0, 2053.0], [96.1, 2066.0], [96.2, 2083.0], [96.3, 2095.0], [96.4, 2101.0], [96.5, 2121.0], [96.6, 2149.0], [96.7, 2169.0], [96.8, 2192.0], [96.9, 2219.0], [97.0, 2240.0], [97.1, 2253.0], [97.2, 2266.0], [97.3, 2293.0], [97.4, 2318.0], [97.5, 2334.0], [97.6, 2362.0], [97.7, 2393.0], [97.8, 2424.0], [97.9, 2442.0], [98.0, 2457.0], [98.1, 2512.0], [98.2, 2584.0], [98.3, 2596.0], [98.4, 2616.0], [98.5, 2692.0], [98.6, 2714.0], [98.7, 2739.0], [98.8, 2783.0], [98.9, 2830.0], [99.0, 2878.0], [99.1, 2954.0], [99.2, 3048.0], [99.3, 3179.0], [99.4, 3450.0], [99.5, 3544.0], [99.6, 3658.0], [99.7, 4073.0], [99.8, 4152.0], [99.9, 4224.0], [100.0, 4354.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 963.0, "series": [{"data": [[0.0, 26.0], [600.0, 323.0], [700.0, 309.0], [800.0, 289.0], [900.0, 227.0], [1000.0, 197.0], [1100.0, 164.0], [1200.0, 158.0], [1300.0, 141.0], [1400.0, 107.0], [1500.0, 84.0], [100.0, 963.0], [1600.0, 85.0], [1700.0, 73.0], [1800.0, 70.0], [1900.0, 36.0], [2000.0, 38.0], [2100.0, 23.0], [2200.0, 27.0], [2300.0, 21.0], [2400.0, 19.0], [2500.0, 12.0], [2600.0, 13.0], [2800.0, 12.0], [2700.0, 13.0], [2900.0, 7.0], [3000.0, 4.0], [3100.0, 4.0], [200.0, 659.0], [3200.0, 2.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 7.0], [3600.0, 2.0], [3900.0, 2.0], [4000.0, 6.0], [4100.0, 7.0], [4300.0, 3.0], [4200.0, 3.0], [300.0, 442.0], [400.0, 360.0], [500.0, 320.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 577.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2453.0, "series": [{"data": [[0.0, 2453.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2232.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 577.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.853982300884956, "minX": 1.60440306E12, "maxY": 12.0, "series": [{"data": [[1.60440312E12, 12.0], [1.6044033E12, 12.0], [1.60440318E12, 12.0], [1.60440306E12, 11.950666666666654], [1.60440336E12, 11.853982300884956], [1.60440324E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440336E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 726.9801564586921, "minX": 1.0, "maxY": 4289.0, "series": [{"data": [[4.0, 2107.5], [8.0, 2182.5], [2.0, 4152.0], [1.0, 3985.0], [9.0, 4231.0], [5.0, 2161.0], [10.0, 2221.0], [11.0, 1240.4], [6.0, 1436.3333333333333], [12.0, 726.9801564586921], [3.0, 4069.0], [7.0, 4289.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980425693652572, 733.3112884834665]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3982.7166666666667, "minX": 1.60440306E12, "maxY": 1043025.8, "series": [{"data": [[1.60440312E12, 958844.6833333333], [1.6044033E12, 1043025.8], [1.60440318E12, 671646.9], [1.60440306E12, 614534.1], [1.60440336E12, 424094.7166666667], [1.60440324E12, 538918.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440312E12, 6149.316666666667], [1.6044033E12, 8090.716666666666], [1.60440318E12, 11182.783333333333], [1.60440306E12, 6437.3], [1.60440336E12, 3982.7166666666667], [1.60440324E12, 9648.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440336E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 537.7860882572921, "minX": 1.60440306E12, "maxY": 1014.2059238363892, "series": [{"data": [[1.60440312E12, 1014.2059238363892], [1.6044033E12, 762.4082073434134], [1.60440318E12, 537.7860882572921], [1.60440306E12, 775.8906666666668], [1.60440336E12, 899.4137168141585], [1.60440324E12, 667.4163602941176]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440336E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 537.5302916978313, "minX": 1.60440306E12, "maxY": 1013.5712270803942, "series": [{"data": [[1.60440312E12, 1013.5712270803942], [1.6044033E12, 761.8952483801288], [1.60440318E12, 537.5302916978313], [1.60440306E12, 775.434666666668], [1.60440336E12, 898.969026548673], [1.60440324E12, 667.1709558823536]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440336E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.010799136069114475, "minX": 1.60440306E12, "maxY": 0.1746666666666666, "series": [{"data": [[1.60440312E12, 0.0225669957686883], [1.6044033E12, 0.010799136069114475], [1.60440318E12, 0.016454749439042585], [1.60440306E12, 0.1746666666666666], [1.60440336E12, 0.017699115044247787], [1.60440324E12, 0.014705882352941183]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440336E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 77.0, "minX": 1.60440306E12, "maxY": 4354.0, "series": [{"data": [[1.60440312E12, 3658.0], [1.6044033E12, 3368.0], [1.60440318E12, 4354.0], [1.60440306E12, 2981.0], [1.60440336E12, 4300.0], [1.60440324E12, 2449.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440312E12, 145.0], [1.6044033E12, 87.34299977898598], [1.60440318E12, 154.04199968099593], [1.60440306E12, 152.0359992837906], [1.60440336E12, 147.0769998919964], [1.60440324E12, 89.4029992210865]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440312E12, 145.0], [1.6044033E12, 90.30490114927292], [1.60440318E12, 155.0], [1.60440306E12, 153.43490007162094], [1.60440336E12, 147.48470004320146], [1.60440324E12, 90.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440312E12, 145.0], [1.6044033E12, 87.80649988949298], [1.60440318E12, 154.71099984049798], [1.60440306E12, 153.13449991047383], [1.60440336E12, 147.3034999459982], [1.60440324E12, 90.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440312E12, 136.0], [1.6044033E12, 79.0], [1.60440318E12, 137.0], [1.60440306E12, 99.0], [1.60440336E12, 128.0], [1.60440324E12, 77.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440312E12, 872.0], [1.6044033E12, 647.5], [1.60440318E12, 305.0], [1.60440306E12, 682.0], [1.60440336E12, 660.5], [1.60440324E12, 537.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 179.0, "minX": 1.0, "maxY": 3985.0, "series": [{"data": [[2.0, 3502.5], [32.0, 347.0], [33.0, 244.0], [35.0, 264.5], [34.0, 353.0], [37.0, 223.5], [36.0, 194.0], [39.0, 285.0], [40.0, 290.5], [41.0, 266.5], [43.0, 240.0], [42.0, 257.5], [44.0, 264.0], [46.0, 224.5], [3.0, 3015.0], [51.0, 188.0], [61.0, 179.0], [63.0, 189.0], [4.0, 2328.5], [5.0, 2053.0], [6.0, 1380.0], [7.0, 1353.0], [8.0, 1430.5], [9.0, 1231.0], [10.0, 1214.5], [11.0, 1143.0], [12.0, 909.5], [13.0, 886.0], [14.0, 845.5], [15.0, 882.0], [16.0, 711.0], [1.0, 3985.0], [17.0, 727.5], [18.0, 599.5], [19.0, 602.0], [20.0, 492.0], [21.0, 516.0], [22.0, 518.0], [23.0, 400.0], [24.0, 524.0], [25.0, 556.5], [26.0, 467.5], [27.0, 391.0], [28.0, 374.0], [29.0, 410.0], [30.0, 249.5], [31.0, 192.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 179.0, "minX": 1.0, "maxY": 3984.0, "series": [{"data": [[2.0, 3502.0], [32.0, 347.0], [33.0, 244.0], [35.0, 264.5], [34.0, 353.0], [37.0, 223.5], [36.0, 194.0], [39.0, 285.0], [40.0, 290.0], [41.0, 266.5], [43.0, 240.0], [42.0, 257.0], [44.0, 264.0], [46.0, 224.5], [3.0, 3015.0], [51.0, 188.0], [61.0, 179.0], [63.0, 189.0], [4.0, 2326.0], [5.0, 2053.0], [6.0, 1379.0], [7.0, 1351.0], [8.0, 1430.5], [9.0, 1231.0], [10.0, 1214.5], [11.0, 1141.0], [12.0, 909.0], [13.0, 886.0], [14.0, 845.5], [15.0, 881.0], [16.0, 710.0], [1.0, 3984.0], [17.0, 727.5], [18.0, 599.0], [19.0, 602.0], [20.0, 492.0], [21.0, 515.0], [22.0, 518.0], [23.0, 400.0], [24.0, 524.0], [25.0, 556.0], [26.0, 467.0], [27.0, 391.0], [28.0, 374.0], [29.0, 410.0], [30.0, 249.5], [31.0, 192.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.333333333333333, "minX": 1.60440306E12, "maxY": 22.283333333333335, "series": [{"data": [[1.60440312E12, 11.816666666666666], [1.6044033E12, 15.433333333333334], [1.60440318E12, 22.283333333333335], [1.60440306E12, 12.7], [1.60440336E12, 7.333333333333333], [1.60440324E12, 18.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440336E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.533333333333333, "minX": 1.60440306E12, "maxY": 22.283333333333335, "series": [{"data": [[1.60440312E12, 11.816666666666666], [1.6044033E12, 15.433333333333334], [1.60440318E12, 22.283333333333335], [1.60440306E12, 12.5], [1.60440336E12, 7.533333333333333], [1.60440324E12, 18.133333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440336E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.533333333333333, "minX": 1.60440306E12, "maxY": 22.283333333333335, "series": [{"data": [[1.60440312E12, 11.816666666666666], [1.6044033E12, 15.433333333333334], [1.60440318E12, 22.283333333333335], [1.60440306E12, 12.5], [1.60440336E12, 7.533333333333333], [1.60440324E12, 18.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440336E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.533333333333333, "minX": 1.60440306E12, "maxY": 22.283333333333335, "series": [{"data": [[1.60440312E12, 11.816666666666666], [1.6044033E12, 15.433333333333334], [1.60440318E12, 22.283333333333335], [1.60440306E12, 12.5], [1.60440336E12, 7.533333333333333], [1.60440324E12, 18.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440336E12, "title": "Total Transactions Per Second"}},
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

