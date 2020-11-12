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
        data: {"result": {"minY": 65.0, "minX": 0.0, "maxY": 4279.0, "series": [{"data": [[0.0, 65.0], [0.1, 80.0], [0.2, 91.0], [0.3, 96.0], [0.4, 109.0], [0.5, 116.0], [0.6, 122.0], [0.7, 126.0], [0.8, 134.0], [0.9, 136.0], [1.0, 137.0], [1.1, 139.0], [1.2, 141.0], [1.3, 142.0], [1.4, 142.0], [1.5, 143.0], [1.6, 144.0], [1.7, 145.0], [1.8, 146.0], [1.9, 146.0], [2.0, 147.0], [2.1, 147.0], [2.2, 148.0], [2.3, 148.0], [2.4, 148.0], [2.5, 149.0], [2.6, 150.0], [2.7, 150.0], [2.8, 151.0], [2.9, 151.0], [3.0, 151.0], [3.1, 152.0], [3.2, 152.0], [3.3, 152.0], [3.4, 153.0], [3.5, 153.0], [3.6, 153.0], [3.7, 154.0], [3.8, 154.0], [3.9, 154.0], [4.0, 155.0], [4.1, 155.0], [4.2, 155.0], [4.3, 155.0], [4.4, 156.0], [4.5, 156.0], [4.6, 156.0], [4.7, 156.0], [4.8, 157.0], [4.9, 157.0], [5.0, 157.0], [5.1, 157.0], [5.2, 158.0], [5.3, 158.0], [5.4, 158.0], [5.5, 158.0], [5.6, 158.0], [5.7, 159.0], [5.8, 159.0], [5.9, 159.0], [6.0, 159.0], [6.1, 159.0], [6.2, 159.0], [6.3, 159.0], [6.4, 160.0], [6.5, 160.0], [6.6, 160.0], [6.7, 160.0], [6.8, 160.0], [6.9, 160.0], [7.0, 161.0], [7.1, 161.0], [7.2, 161.0], [7.3, 161.0], [7.4, 162.0], [7.5, 162.0], [7.6, 162.0], [7.7, 162.0], [7.8, 163.0], [7.9, 163.0], [8.0, 163.0], [8.1, 163.0], [8.2, 163.0], [8.3, 164.0], [8.4, 164.0], [8.5, 164.0], [8.6, 164.0], [8.7, 164.0], [8.8, 164.0], [8.9, 164.0], [9.0, 165.0], [9.1, 165.0], [9.2, 165.0], [9.3, 166.0], [9.4, 166.0], [9.5, 166.0], [9.6, 166.0], [9.7, 166.0], [9.8, 166.0], [9.9, 166.0], [10.0, 167.0], [10.1, 167.0], [10.2, 167.0], [10.3, 167.0], [10.4, 167.0], [10.5, 167.0], [10.6, 168.0], [10.7, 168.0], [10.8, 168.0], [10.9, 168.0], [11.0, 168.0], [11.1, 168.0], [11.2, 169.0], [11.3, 169.0], [11.4, 169.0], [11.5, 169.0], [11.6, 169.0], [11.7, 170.0], [11.8, 170.0], [11.9, 170.0], [12.0, 170.0], [12.1, 170.0], [12.2, 171.0], [12.3, 171.0], [12.4, 171.0], [12.5, 171.0], [12.6, 171.0], [12.7, 171.0], [12.8, 172.0], [12.9, 172.0], [13.0, 172.0], [13.1, 172.0], [13.2, 172.0], [13.3, 172.0], [13.4, 173.0], [13.5, 173.0], [13.6, 173.0], [13.7, 173.0], [13.8, 173.0], [13.9, 173.0], [14.0, 174.0], [14.1, 174.0], [14.2, 174.0], [14.3, 174.0], [14.4, 175.0], [14.5, 175.0], [14.6, 175.0], [14.7, 175.0], [14.8, 175.0], [14.9, 176.0], [15.0, 176.0], [15.1, 176.0], [15.2, 176.0], [15.3, 176.0], [15.4, 176.0], [15.5, 177.0], [15.6, 177.0], [15.7, 177.0], [15.8, 177.0], [15.9, 177.0], [16.0, 177.0], [16.1, 178.0], [16.2, 178.0], [16.3, 178.0], [16.4, 178.0], [16.5, 178.0], [16.6, 179.0], [16.7, 179.0], [16.8, 179.0], [16.9, 179.0], [17.0, 179.0], [17.1, 180.0], [17.2, 180.0], [17.3, 180.0], [17.4, 181.0], [17.5, 181.0], [17.6, 181.0], [17.7, 181.0], [17.8, 182.0], [17.9, 182.0], [18.0, 182.0], [18.1, 183.0], [18.2, 183.0], [18.3, 183.0], [18.4, 183.0], [18.5, 183.0], [18.6, 184.0], [18.7, 184.0], [18.8, 184.0], [18.9, 184.0], [19.0, 184.0], [19.1, 185.0], [19.2, 185.0], [19.3, 186.0], [19.4, 186.0], [19.5, 186.0], [19.6, 187.0], [19.7, 187.0], [19.8, 187.0], [19.9, 188.0], [20.0, 188.0], [20.1, 189.0], [20.2, 189.0], [20.3, 190.0], [20.4, 190.0], [20.5, 190.0], [20.6, 190.0], [20.7, 191.0], [20.8, 192.0], [20.9, 192.0], [21.0, 193.0], [21.1, 193.0], [21.2, 193.0], [21.3, 194.0], [21.4, 194.0], [21.5, 195.0], [21.6, 196.0], [21.7, 196.0], [21.8, 197.0], [21.9, 197.0], [22.0, 198.0], [22.1, 199.0], [22.2, 199.0], [22.3, 200.0], [22.4, 201.0], [22.5, 202.0], [22.6, 204.0], [22.7, 204.0], [22.8, 205.0], [22.9, 205.0], [23.0, 207.0], [23.1, 208.0], [23.2, 209.0], [23.3, 211.0], [23.4, 212.0], [23.5, 213.0], [23.6, 214.0], [23.7, 215.0], [23.8, 216.0], [23.9, 217.0], [24.0, 219.0], [24.1, 220.0], [24.2, 224.0], [24.3, 225.0], [24.4, 226.0], [24.5, 228.0], [24.6, 229.0], [24.7, 230.0], [24.8, 231.0], [24.9, 233.0], [25.0, 233.0], [25.1, 234.0], [25.2, 237.0], [25.3, 238.0], [25.4, 239.0], [25.5, 240.0], [25.6, 241.0], [25.7, 242.0], [25.8, 243.0], [25.9, 244.0], [26.0, 245.0], [26.1, 246.0], [26.2, 246.0], [26.3, 247.0], [26.4, 248.0], [26.5, 248.0], [26.6, 249.0], [26.7, 249.0], [26.8, 250.0], [26.9, 251.0], [27.0, 252.0], [27.1, 253.0], [27.2, 255.0], [27.3, 255.0], [27.4, 255.0], [27.5, 256.0], [27.6, 257.0], [27.7, 258.0], [27.8, 259.0], [27.9, 260.0], [28.0, 260.0], [28.1, 261.0], [28.2, 262.0], [28.3, 263.0], [28.4, 263.0], [28.5, 263.0], [28.6, 265.0], [28.7, 266.0], [28.8, 266.0], [28.9, 267.0], [29.0, 268.0], [29.1, 269.0], [29.2, 270.0], [29.3, 270.0], [29.4, 271.0], [29.5, 271.0], [29.6, 272.0], [29.7, 272.0], [29.8, 273.0], [29.9, 274.0], [30.0, 275.0], [30.1, 275.0], [30.2, 276.0], [30.3, 277.0], [30.4, 278.0], [30.5, 279.0], [30.6, 281.0], [30.7, 281.0], [30.8, 282.0], [30.9, 283.0], [31.0, 284.0], [31.1, 285.0], [31.2, 286.0], [31.3, 287.0], [31.4, 287.0], [31.5, 288.0], [31.6, 289.0], [31.7, 289.0], [31.8, 290.0], [31.9, 290.0], [32.0, 292.0], [32.1, 293.0], [32.2, 294.0], [32.3, 294.0], [32.4, 295.0], [32.5, 297.0], [32.6, 297.0], [32.7, 298.0], [32.8, 299.0], [32.9, 301.0], [33.0, 302.0], [33.1, 303.0], [33.2, 304.0], [33.3, 305.0], [33.4, 306.0], [33.5, 307.0], [33.6, 308.0], [33.7, 309.0], [33.8, 311.0], [33.9, 311.0], [34.0, 313.0], [34.1, 313.0], [34.2, 314.0], [34.3, 316.0], [34.4, 317.0], [34.5, 318.0], [34.6, 319.0], [34.7, 320.0], [34.8, 322.0], [34.9, 323.0], [35.0, 325.0], [35.1, 325.0], [35.2, 327.0], [35.3, 329.0], [35.4, 330.0], [35.5, 331.0], [35.6, 332.0], [35.7, 333.0], [35.8, 334.0], [35.9, 337.0], [36.0, 338.0], [36.1, 338.0], [36.2, 339.0], [36.3, 341.0], [36.4, 342.0], [36.5, 343.0], [36.6, 345.0], [36.7, 346.0], [36.8, 347.0], [36.9, 347.0], [37.0, 349.0], [37.1, 350.0], [37.2, 351.0], [37.3, 352.0], [37.4, 353.0], [37.5, 354.0], [37.6, 356.0], [37.7, 356.0], [37.8, 356.0], [37.9, 357.0], [38.0, 358.0], [38.1, 359.0], [38.2, 360.0], [38.3, 361.0], [38.4, 361.0], [38.5, 363.0], [38.6, 364.0], [38.7, 365.0], [38.8, 365.0], [38.9, 366.0], [39.0, 368.0], [39.1, 369.0], [39.2, 370.0], [39.3, 371.0], [39.4, 372.0], [39.5, 373.0], [39.6, 375.0], [39.7, 378.0], [39.8, 378.0], [39.9, 380.0], [40.0, 381.0], [40.1, 383.0], [40.2, 384.0], [40.3, 385.0], [40.4, 386.0], [40.5, 388.0], [40.6, 389.0], [40.7, 390.0], [40.8, 392.0], [40.9, 393.0], [41.0, 394.0], [41.1, 397.0], [41.2, 400.0], [41.3, 402.0], [41.4, 404.0], [41.5, 405.0], [41.6, 407.0], [41.7, 411.0], [41.8, 414.0], [41.9, 417.0], [42.0, 418.0], [42.1, 419.0], [42.2, 421.0], [42.3, 422.0], [42.4, 427.0], [42.5, 427.0], [42.6, 429.0], [42.7, 431.0], [42.8, 433.0], [42.9, 435.0], [43.0, 436.0], [43.1, 437.0], [43.2, 439.0], [43.3, 440.0], [43.4, 441.0], [43.5, 443.0], [43.6, 445.0], [43.7, 447.0], [43.8, 450.0], [43.9, 451.0], [44.0, 452.0], [44.1, 455.0], [44.2, 457.0], [44.3, 459.0], [44.4, 460.0], [44.5, 460.0], [44.6, 461.0], [44.7, 463.0], [44.8, 463.0], [44.9, 466.0], [45.0, 467.0], [45.1, 468.0], [45.2, 470.0], [45.3, 471.0], [45.4, 471.0], [45.5, 473.0], [45.6, 476.0], [45.7, 478.0], [45.8, 478.0], [45.9, 481.0], [46.0, 481.0], [46.1, 484.0], [46.2, 485.0], [46.3, 486.0], [46.4, 486.0], [46.5, 488.0], [46.6, 489.0], [46.7, 491.0], [46.8, 491.0], [46.9, 493.0], [47.0, 495.0], [47.1, 495.0], [47.2, 497.0], [47.3, 500.0], [47.4, 501.0], [47.5, 504.0], [47.6, 505.0], [47.7, 507.0], [47.8, 508.0], [47.9, 510.0], [48.0, 511.0], [48.1, 513.0], [48.2, 513.0], [48.3, 516.0], [48.4, 518.0], [48.5, 520.0], [48.6, 523.0], [48.7, 524.0], [48.8, 526.0], [48.9, 527.0], [49.0, 528.0], [49.1, 529.0], [49.2, 531.0], [49.3, 536.0], [49.4, 537.0], [49.5, 539.0], [49.6, 541.0], [49.7, 542.0], [49.8, 544.0], [49.9, 545.0], [50.0, 547.0], [50.1, 548.0], [50.2, 548.0], [50.3, 549.0], [50.4, 552.0], [50.5, 553.0], [50.6, 554.0], [50.7, 555.0], [50.8, 556.0], [50.9, 559.0], [51.0, 560.0], [51.1, 560.0], [51.2, 561.0], [51.3, 562.0], [51.4, 563.0], [51.5, 564.0], [51.6, 564.0], [51.7, 565.0], [51.8, 566.0], [51.9, 566.0], [52.0, 568.0], [52.1, 569.0], [52.2, 570.0], [52.3, 572.0], [52.4, 573.0], [52.5, 575.0], [52.6, 576.0], [52.7, 578.0], [52.8, 579.0], [52.9, 580.0], [53.0, 581.0], [53.1, 582.0], [53.2, 582.0], [53.3, 583.0], [53.4, 584.0], [53.5, 587.0], [53.6, 588.0], [53.7, 589.0], [53.8, 590.0], [53.9, 594.0], [54.0, 596.0], [54.1, 598.0], [54.2, 599.0], [54.3, 601.0], [54.4, 604.0], [54.5, 605.0], [54.6, 608.0], [54.7, 609.0], [54.8, 611.0], [54.9, 613.0], [55.0, 615.0], [55.1, 616.0], [55.2, 617.0], [55.3, 618.0], [55.4, 621.0], [55.5, 624.0], [55.6, 625.0], [55.7, 627.0], [55.8, 628.0], [55.9, 629.0], [56.0, 631.0], [56.1, 633.0], [56.2, 634.0], [56.3, 635.0], [56.4, 636.0], [56.5, 639.0], [56.6, 639.0], [56.7, 640.0], [56.8, 641.0], [56.9, 644.0], [57.0, 646.0], [57.1, 647.0], [57.2, 648.0], [57.3, 650.0], [57.4, 651.0], [57.5, 653.0], [57.6, 655.0], [57.7, 657.0], [57.8, 658.0], [57.9, 659.0], [58.0, 660.0], [58.1, 662.0], [58.2, 663.0], [58.3, 664.0], [58.4, 667.0], [58.5, 667.0], [58.6, 668.0], [58.7, 669.0], [58.8, 671.0], [58.9, 673.0], [59.0, 675.0], [59.1, 677.0], [59.2, 678.0], [59.3, 680.0], [59.4, 681.0], [59.5, 685.0], [59.6, 688.0], [59.7, 691.0], [59.8, 693.0], [59.9, 694.0], [60.0, 696.0], [60.1, 697.0], [60.2, 700.0], [60.3, 704.0], [60.4, 705.0], [60.5, 707.0], [60.6, 709.0], [60.7, 712.0], [60.8, 714.0], [60.9, 716.0], [61.0, 718.0], [61.1, 719.0], [61.2, 725.0], [61.3, 726.0], [61.4, 728.0], [61.5, 730.0], [61.6, 732.0], [61.7, 734.0], [61.8, 736.0], [61.9, 739.0], [62.0, 740.0], [62.1, 741.0], [62.2, 742.0], [62.3, 744.0], [62.4, 746.0], [62.5, 750.0], [62.6, 754.0], [62.7, 757.0], [62.8, 760.0], [62.9, 762.0], [63.0, 763.0], [63.1, 764.0], [63.2, 767.0], [63.3, 767.0], [63.4, 769.0], [63.5, 770.0], [63.6, 771.0], [63.7, 772.0], [63.8, 773.0], [63.9, 776.0], [64.0, 776.0], [64.1, 777.0], [64.2, 779.0], [64.3, 780.0], [64.4, 783.0], [64.5, 784.0], [64.6, 786.0], [64.7, 788.0], [64.8, 790.0], [64.9, 791.0], [65.0, 792.0], [65.1, 794.0], [65.2, 796.0], [65.3, 798.0], [65.4, 799.0], [65.5, 802.0], [65.6, 803.0], [65.7, 805.0], [65.8, 806.0], [65.9, 807.0], [66.0, 809.0], [66.1, 810.0], [66.2, 811.0], [66.3, 812.0], [66.4, 813.0], [66.5, 814.0], [66.6, 816.0], [66.7, 816.0], [66.8, 818.0], [66.9, 819.0], [67.0, 821.0], [67.1, 823.0], [67.2, 825.0], [67.3, 826.0], [67.4, 827.0], [67.5, 829.0], [67.6, 831.0], [67.7, 832.0], [67.8, 833.0], [67.9, 834.0], [68.0, 835.0], [68.1, 838.0], [68.2, 840.0], [68.3, 841.0], [68.4, 842.0], [68.5, 843.0], [68.6, 844.0], [68.7, 845.0], [68.8, 847.0], [68.9, 848.0], [69.0, 850.0], [69.1, 850.0], [69.2, 852.0], [69.3, 856.0], [69.4, 859.0], [69.5, 861.0], [69.6, 862.0], [69.7, 864.0], [69.8, 865.0], [69.9, 867.0], [70.0, 868.0], [70.1, 869.0], [70.2, 871.0], [70.3, 873.0], [70.4, 875.0], [70.5, 876.0], [70.6, 878.0], [70.7, 880.0], [70.8, 881.0], [70.9, 882.0], [71.0, 884.0], [71.1, 888.0], [71.2, 889.0], [71.3, 890.0], [71.4, 892.0], [71.5, 894.0], [71.6, 898.0], [71.7, 901.0], [71.8, 903.0], [71.9, 904.0], [72.0, 905.0], [72.1, 906.0], [72.2, 910.0], [72.3, 911.0], [72.4, 912.0], [72.5, 915.0], [72.6, 916.0], [72.7, 918.0], [72.8, 921.0], [72.9, 922.0], [73.0, 925.0], [73.1, 928.0], [73.2, 929.0], [73.3, 934.0], [73.4, 935.0], [73.5, 937.0], [73.6, 942.0], [73.7, 945.0], [73.8, 947.0], [73.9, 949.0], [74.0, 953.0], [74.1, 958.0], [74.2, 960.0], [74.3, 962.0], [74.4, 964.0], [74.5, 968.0], [74.6, 970.0], [74.7, 973.0], [74.8, 975.0], [74.9, 977.0], [75.0, 980.0], [75.1, 984.0], [75.2, 988.0], [75.3, 990.0], [75.4, 993.0], [75.5, 996.0], [75.6, 998.0], [75.7, 1000.0], [75.8, 1002.0], [75.9, 1005.0], [76.0, 1008.0], [76.1, 1010.0], [76.2, 1012.0], [76.3, 1013.0], [76.4, 1016.0], [76.5, 1018.0], [76.6, 1019.0], [76.7, 1021.0], [76.8, 1023.0], [76.9, 1025.0], [77.0, 1026.0], [77.1, 1029.0], [77.2, 1033.0], [77.3, 1034.0], [77.4, 1038.0], [77.5, 1040.0], [77.6, 1044.0], [77.7, 1047.0], [77.8, 1052.0], [77.9, 1056.0], [78.0, 1059.0], [78.1, 1062.0], [78.2, 1066.0], [78.3, 1067.0], [78.4, 1072.0], [78.5, 1072.0], [78.6, 1073.0], [78.7, 1076.0], [78.8, 1078.0], [78.9, 1080.0], [79.0, 1083.0], [79.1, 1085.0], [79.2, 1086.0], [79.3, 1088.0], [79.4, 1092.0], [79.5, 1093.0], [79.6, 1094.0], [79.7, 1099.0], [79.8, 1105.0], [79.9, 1107.0], [80.0, 1113.0], [80.1, 1115.0], [80.2, 1119.0], [80.3, 1123.0], [80.4, 1126.0], [80.5, 1129.0], [80.6, 1132.0], [80.7, 1134.0], [80.8, 1136.0], [80.9, 1138.0], [81.0, 1141.0], [81.1, 1146.0], [81.2, 1148.0], [81.3, 1150.0], [81.4, 1153.0], [81.5, 1156.0], [81.6, 1159.0], [81.7, 1163.0], [81.8, 1166.0], [81.9, 1169.0], [82.0, 1174.0], [82.1, 1174.0], [82.2, 1180.0], [82.3, 1183.0], [82.4, 1187.0], [82.5, 1189.0], [82.6, 1190.0], [82.7, 1191.0], [82.8, 1193.0], [82.9, 1197.0], [83.0, 1199.0], [83.1, 1201.0], [83.2, 1204.0], [83.3, 1206.0], [83.4, 1209.0], [83.5, 1210.0], [83.6, 1213.0], [83.7, 1215.0], [83.8, 1219.0], [83.9, 1225.0], [84.0, 1228.0], [84.1, 1233.0], [84.2, 1238.0], [84.3, 1241.0], [84.4, 1245.0], [84.5, 1249.0], [84.6, 1253.0], [84.7, 1256.0], [84.8, 1257.0], [84.9, 1261.0], [85.0, 1262.0], [85.1, 1266.0], [85.2, 1270.0], [85.3, 1272.0], [85.4, 1275.0], [85.5, 1281.0], [85.6, 1283.0], [85.7, 1286.0], [85.8, 1291.0], [85.9, 1295.0], [86.0, 1302.0], [86.1, 1304.0], [86.2, 1305.0], [86.3, 1313.0], [86.4, 1319.0], [86.5, 1322.0], [86.6, 1325.0], [86.7, 1336.0], [86.8, 1340.0], [86.9, 1346.0], [87.0, 1352.0], [87.1, 1357.0], [87.2, 1362.0], [87.3, 1364.0], [87.4, 1367.0], [87.5, 1370.0], [87.6, 1372.0], [87.7, 1378.0], [87.8, 1385.0], [87.9, 1388.0], [88.0, 1392.0], [88.1, 1395.0], [88.2, 1400.0], [88.3, 1406.0], [88.4, 1410.0], [88.5, 1417.0], [88.6, 1424.0], [88.7, 1427.0], [88.8, 1432.0], [88.9, 1435.0], [89.0, 1440.0], [89.1, 1446.0], [89.2, 1452.0], [89.3, 1457.0], [89.4, 1463.0], [89.5, 1465.0], [89.6, 1470.0], [89.7, 1475.0], [89.8, 1478.0], [89.9, 1482.0], [90.0, 1488.0], [90.1, 1498.0], [90.2, 1499.0], [90.3, 1504.0], [90.4, 1506.0], [90.5, 1513.0], [90.6, 1518.0], [90.7, 1525.0], [90.8, 1528.0], [90.9, 1534.0], [91.0, 1539.0], [91.1, 1547.0], [91.2, 1550.0], [91.3, 1553.0], [91.4, 1561.0], [91.5, 1564.0], [91.6, 1573.0], [91.7, 1586.0], [91.8, 1592.0], [91.9, 1598.0], [92.0, 1609.0], [92.1, 1612.0], [92.2, 1621.0], [92.3, 1627.0], [92.4, 1639.0], [92.5, 1645.0], [92.6, 1648.0], [92.7, 1652.0], [92.8, 1657.0], [92.9, 1668.0], [93.0, 1674.0], [93.1, 1682.0], [93.2, 1690.0], [93.3, 1700.0], [93.4, 1709.0], [93.5, 1719.0], [93.6, 1731.0], [93.7, 1736.0], [93.8, 1745.0], [93.9, 1763.0], [94.0, 1774.0], [94.1, 1779.0], [94.2, 1785.0], [94.3, 1791.0], [94.4, 1801.0], [94.5, 1810.0], [94.6, 1829.0], [94.7, 1842.0], [94.8, 1850.0], [94.9, 1865.0], [95.0, 1877.0], [95.1, 1890.0], [95.2, 1903.0], [95.3, 1915.0], [95.4, 1931.0], [95.5, 1948.0], [95.6, 1962.0], [95.7, 1975.0], [95.8, 1995.0], [95.9, 2007.0], [96.0, 2033.0], [96.1, 2042.0], [96.2, 2060.0], [96.3, 2086.0], [96.4, 2101.0], [96.5, 2118.0], [96.6, 2132.0], [96.7, 2137.0], [96.8, 2148.0], [96.9, 2171.0], [97.0, 2194.0], [97.1, 2218.0], [97.2, 2237.0], [97.3, 2252.0], [97.4, 2285.0], [97.5, 2328.0], [97.6, 2349.0], [97.7, 2376.0], [97.8, 2417.0], [97.9, 2444.0], [98.0, 2461.0], [98.1, 2491.0], [98.2, 2503.0], [98.3, 2534.0], [98.4, 2564.0], [98.5, 2606.0], [98.6, 2622.0], [98.7, 2646.0], [98.8, 2674.0], [98.9, 2751.0], [99.0, 2773.0], [99.1, 2903.0], [99.2, 3020.0], [99.3, 3116.0], [99.4, 3270.0], [99.5, 3338.0], [99.6, 3565.0], [99.7, 4006.0], [99.8, 4045.0], [99.9, 4127.0], [100.0, 4279.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1152.0, "series": [{"data": [[0.0, 17.0], [600.0, 313.0], [700.0, 275.0], [800.0, 329.0], [900.0, 212.0], [1000.0, 212.0], [1100.0, 174.0], [1200.0, 153.0], [1300.0, 119.0], [1400.0, 107.0], [1500.0, 89.0], [100.0, 1152.0], [1600.0, 72.0], [1700.0, 56.0], [1800.0, 43.0], [1900.0, 35.0], [2000.0, 29.0], [2100.0, 34.0], [2200.0, 20.0], [2300.0, 16.0], [2400.0, 25.0], [2500.0, 16.0], [2600.0, 19.0], [2800.0, 4.0], [2700.0, 8.0], [2900.0, 3.0], [3000.0, 7.0], [3100.0, 4.0], [200.0, 560.0], [3200.0, 6.0], [3300.0, 2.0], [3400.0, 4.0], [3500.0, 1.0], [3700.0, 1.0], [3900.0, 4.0], [4000.0, 8.0], [4100.0, 4.0], [4200.0, 4.0], [300.0, 437.0], [400.0, 322.0], [500.0, 366.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 513.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2492.0, "series": [{"data": [[0.0, 2492.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2257.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 513.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.130434782608695, "minX": 1.60507182E12, "maxY": 12.0, "series": [{"data": [[1.60507182E12, 11.55421686746988], [1.60507194E12, 12.0], [1.60507212E12, 12.0], [1.60507188E12, 12.0], [1.60507218E12, 9.130434782608695], [1.60507206E12, 12.0], [1.605072E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507218E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 702.5800725329265, "minX": 1.0, "maxY": 4253.0, "series": [{"data": [[4.0, 2041.0], [8.0, 2194.0], [2.0, 4221.0], [1.0, 3981.0], [9.0, 2119.5], [10.0, 1324.0], [5.0, 4253.0], [11.0, 1206.2], [6.0, 1426.0], [12.0, 702.5800725329265], [3.0, 4095.0], [7.0, 4127.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980425693652572, 708.8194602812633]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 196.0, "minX": 1.60507182E12, "maxY": 898394.9666666667, "series": [{"data": [[1.60507182E12, 48400.55], [1.60507194E12, 805116.4333333333], [1.60507212E12, 883854.3333333334], [1.60507188E12, 898394.9666666667], [1.60507218E12, 31422.016666666666], [1.60507206E12, 816704.8666666667], [1.605072E12, 767197.6833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507182E12, 697.0333333333333], [1.60507194E12, 7580.733333333334], [1.60507212E12, 8729.25], [1.60507188E12, 7473.65], [1.60507218E12, 196.0], [1.60507206E12, 9343.416666666666], [1.605072E12, 11470.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507218E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 534.1238233164374, "minX": 1.60507182E12, "maxY": 3589.521739130435, "series": [{"data": [[1.60507182E12, 726.2168674698797], [1.60507194E12, 812.1082949308749], [1.60507212E12, 719.3650151668351], [1.60507188E12, 838.4725787631281], [1.60507218E12, 3589.521739130435], [1.60507206E12, 673.3411875589071], [1.605072E12, 534.1238233164374]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507218E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 533.8559015206373, "minX": 1.60507182E12, "maxY": 3588.782608695652, "series": [{"data": [[1.60507182E12, 725.9397590361446], [1.60507194E12, 811.6624423963136], [1.60507212E12, 718.9575328614768], [1.60507188E12, 837.9253208868143], [1.60507218E12, 3588.782608695652], [1.60507206E12, 672.9858623939683], [1.605072E12, 533.8559015206373]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507218E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011122345803842268, "minX": 1.60507182E12, "maxY": 1.3132530120481931, "series": [{"data": [[1.60507182E12, 1.3132530120481931], [1.60507194E12, 0.013824884792626727], [1.60507212E12, 0.011122345803842268], [1.60507188E12, 0.017502917152858823], [1.60507218E12, 0.1304347826086957], [1.60507206E12, 0.012252591894439205], [1.605072E12, 0.01375814627081825]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507218E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 65.0, "minX": 1.60507182E12, "maxY": 4279.0, "series": [{"data": [[1.60507182E12, 2037.0], [1.60507194E12, 4120.0], [1.60507212E12, 2773.0], [1.60507188E12, 3431.0], [1.60507218E12, 4279.0], [1.60507206E12, 3338.0], [1.605072E12, 4045.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507182E12, 113.0], [1.60507194E12, 151.82099979281426], [1.60507212E12, 142.0], [1.60507188E12, 141.0], [1.60507218E12, 1629.0], [1.60507206E12, 86.13799721479415], [1.605072E12, 144.43799967050552]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507182E12, 113.0], [1.60507194E12, 152.0], [1.60507212E12, 142.80100009441375], [1.60507188E12, 141.49420008182526], [1.60507218E12, 1629.0], [1.60507206E12, 92.02760020256042], [1.605072E12, 145.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507182E12, 113.0], [1.60507194E12, 152.0], [1.60507212E12, 142.4049998819828], [1.60507188E12, 141.15099989771844], [1.60507218E12, 1629.0], [1.60507206E12, 91.17799974679947], [1.605072E12, 145.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507182E12, 113.0], [1.60507194E12, 147.0], [1.60507212E12, 135.0], [1.60507188E12, 116.0], [1.60507218E12, 1629.0], [1.60507206E12, 65.0], [1.605072E12, 86.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507182E12, 630.0], [1.60507194E12, 735.5], [1.60507212E12, 625.0], [1.60507188E12, 763.0], [1.60507218E12, 4014.0], [1.60507206E12, 537.0], [1.605072E12, 325.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 166.0, "minX": 2.0, "maxY": 3317.5, "series": [{"data": [[32.0, 283.0], [33.0, 290.0], [2.0, 3317.5], [34.0, 193.0], [35.0, 231.0], [36.0, 172.0], [38.0, 267.5], [40.0, 274.0], [42.0, 269.0], [43.0, 241.0], [45.0, 235.5], [46.0, 261.5], [3.0, 2919.0], [55.0, 172.0], [59.0, 166.0], [62.0, 180.0], [4.0, 1954.0], [5.0, 2252.5], [6.0, 1480.0], [7.0, 1577.0], [8.0, 1288.0], [9.0, 1271.0], [10.0, 1086.5], [11.0, 1025.0], [12.0, 921.5], [13.0, 875.0], [14.0, 872.5], [15.0, 763.0], [16.0, 766.0], [17.0, 773.0], [18.0, 570.0], [19.0, 642.0], [20.0, 604.5], [21.0, 509.0], [22.0, 425.5], [23.0, 484.5], [24.0, 435.0], [25.0, 486.5], [26.0, 299.5], [27.0, 431.5], [28.0, 363.5], [29.0, 402.0], [30.0, 368.0], [31.0, 331.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 166.0, "minX": 2.0, "maxY": 3315.5, "series": [{"data": [[32.0, 283.0], [33.0, 290.0], [2.0, 3315.5], [34.0, 193.0], [35.0, 231.0], [36.0, 172.0], [38.0, 267.5], [40.0, 274.0], [42.0, 268.5], [43.0, 241.0], [45.0, 235.5], [46.0, 260.5], [3.0, 2918.0], [55.0, 172.0], [59.0, 166.0], [62.0, 180.0], [4.0, 1951.5], [5.0, 2251.5], [6.0, 1479.5], [7.0, 1577.0], [8.0, 1287.0], [9.0, 1270.0], [10.0, 1086.0], [11.0, 1025.0], [12.0, 919.5], [13.0, 874.0], [14.0, 872.5], [15.0, 763.0], [16.0, 766.0], [17.0, 772.0], [18.0, 570.0], [19.0, 642.0], [20.0, 604.5], [21.0, 509.0], [22.0, 425.5], [23.0, 484.5], [24.0, 435.0], [25.0, 486.5], [26.0, 299.5], [27.0, 431.5], [28.0, 363.5], [29.0, 402.0], [30.0, 368.0], [31.0, 331.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60507182E12, "maxY": 23.016666666666666, "series": [{"data": [[1.60507182E12, 1.5833333333333333], [1.60507194E12, 14.466666666666667], [1.60507212E12, 16.483333333333334], [1.60507188E12, 14.283333333333333], [1.60507218E12, 0.18333333333333332], [1.60507206E12, 17.683333333333334], [1.605072E12, 23.016666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507218E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60507182E12, "maxY": 23.016666666666666, "series": [{"data": [[1.60507182E12, 1.3833333333333333], [1.60507194E12, 14.466666666666667], [1.60507212E12, 16.483333333333334], [1.60507188E12, 14.283333333333333], [1.60507218E12, 0.38333333333333336], [1.60507206E12, 17.683333333333334], [1.605072E12, 23.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507218E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60507182E12, "maxY": 23.016666666666666, "series": [{"data": [[1.60507182E12, 1.3833333333333333], [1.60507194E12, 14.466666666666667], [1.60507212E12, 16.483333333333334], [1.60507188E12, 14.283333333333333], [1.60507218E12, 0.38333333333333336], [1.60507206E12, 17.683333333333334], [1.605072E12, 23.016666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507218E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60507182E12, "maxY": 23.016666666666666, "series": [{"data": [[1.60507182E12, 1.3833333333333333], [1.60507194E12, 14.466666666666667], [1.60507212E12, 16.483333333333334], [1.60507188E12, 14.283333333333333], [1.60507218E12, 0.38333333333333336], [1.60507206E12, 17.683333333333334], [1.605072E12, 23.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507218E12, "title": "Total Transactions Per Second"}},
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

