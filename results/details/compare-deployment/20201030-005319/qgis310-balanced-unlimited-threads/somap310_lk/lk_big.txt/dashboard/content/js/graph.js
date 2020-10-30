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
        data: {"result": {"minY": 70.0, "minX": 0.0, "maxY": 4941.0, "series": [{"data": [[0.0, 70.0], [0.1, 76.0], [0.2, 106.0], [0.3, 116.0], [0.4, 118.0], [0.5, 121.0], [0.6, 123.0], [0.7, 124.0], [0.8, 126.0], [0.9, 129.0], [1.0, 131.0], [1.1, 132.0], [1.2, 133.0], [1.3, 134.0], [1.4, 135.0], [1.5, 136.0], [1.6, 137.0], [1.7, 137.0], [1.8, 138.0], [1.9, 138.0], [2.0, 139.0], [2.1, 139.0], [2.2, 140.0], [2.3, 140.0], [2.4, 140.0], [2.5, 141.0], [2.6, 141.0], [2.7, 141.0], [2.8, 142.0], [2.9, 142.0], [3.0, 143.0], [3.1, 143.0], [3.2, 143.0], [3.3, 143.0], [3.4, 144.0], [3.5, 144.0], [3.6, 144.0], [3.7, 144.0], [3.8, 144.0], [3.9, 145.0], [4.0, 145.0], [4.1, 145.0], [4.2, 145.0], [4.3, 145.0], [4.4, 145.0], [4.5, 145.0], [4.6, 146.0], [4.7, 146.0], [4.8, 146.0], [4.9, 146.0], [5.0, 146.0], [5.1, 147.0], [5.2, 147.0], [5.3, 147.0], [5.4, 147.0], [5.5, 148.0], [5.6, 148.0], [5.7, 148.0], [5.8, 148.0], [5.9, 149.0], [6.0, 149.0], [6.1, 149.0], [6.2, 149.0], [6.3, 149.0], [6.4, 150.0], [6.5, 150.0], [6.6, 150.0], [6.7, 150.0], [6.8, 150.0], [6.9, 151.0], [7.0, 151.0], [7.1, 151.0], [7.2, 151.0], [7.3, 151.0], [7.4, 152.0], [7.5, 152.0], [7.6, 152.0], [7.7, 152.0], [7.8, 152.0], [7.9, 152.0], [8.0, 152.0], [8.1, 152.0], [8.2, 152.0], [8.3, 152.0], [8.4, 153.0], [8.5, 153.0], [8.6, 153.0], [8.7, 153.0], [8.8, 153.0], [8.9, 153.0], [9.0, 153.0], [9.1, 153.0], [9.2, 154.0], [9.3, 154.0], [9.4, 154.0], [9.5, 154.0], [9.6, 154.0], [9.7, 154.0], [9.8, 154.0], [9.9, 154.0], [10.0, 155.0], [10.1, 155.0], [10.2, 155.0], [10.3, 155.0], [10.4, 155.0], [10.5, 155.0], [10.6, 155.0], [10.7, 155.0], [10.8, 155.0], [10.9, 156.0], [11.0, 156.0], [11.1, 156.0], [11.2, 156.0], [11.3, 156.0], [11.4, 156.0], [11.5, 157.0], [11.6, 157.0], [11.7, 157.0], [11.8, 157.0], [11.9, 157.0], [12.0, 158.0], [12.1, 158.0], [12.2, 158.0], [12.3, 158.0], [12.4, 158.0], [12.5, 158.0], [12.6, 158.0], [12.7, 159.0], [12.8, 159.0], [12.9, 159.0], [13.0, 159.0], [13.1, 159.0], [13.2, 159.0], [13.3, 159.0], [13.4, 159.0], [13.5, 160.0], [13.6, 160.0], [13.7, 160.0], [13.8, 160.0], [13.9, 160.0], [14.0, 160.0], [14.1, 160.0], [14.2, 161.0], [14.3, 161.0], [14.4, 161.0], [14.5, 161.0], [14.6, 161.0], [14.7, 162.0], [14.8, 162.0], [14.9, 162.0], [15.0, 162.0], [15.1, 162.0], [15.2, 162.0], [15.3, 162.0], [15.4, 162.0], [15.5, 163.0], [15.6, 163.0], [15.7, 163.0], [15.8, 163.0], [15.9, 163.0], [16.0, 163.0], [16.1, 164.0], [16.2, 164.0], [16.3, 164.0], [16.4, 164.0], [16.5, 165.0], [16.6, 165.0], [16.7, 165.0], [16.8, 165.0], [16.9, 165.0], [17.0, 165.0], [17.1, 166.0], [17.2, 166.0], [17.3, 166.0], [17.4, 166.0], [17.5, 167.0], [17.6, 167.0], [17.7, 167.0], [17.8, 167.0], [17.9, 167.0], [18.0, 168.0], [18.1, 168.0], [18.2, 169.0], [18.3, 169.0], [18.4, 169.0], [18.5, 169.0], [18.6, 169.0], [18.7, 170.0], [18.8, 170.0], [18.9, 170.0], [19.0, 171.0], [19.1, 171.0], [19.2, 171.0], [19.3, 172.0], [19.4, 172.0], [19.5, 172.0], [19.6, 173.0], [19.7, 173.0], [19.8, 173.0], [19.9, 174.0], [20.0, 174.0], [20.1, 175.0], [20.2, 175.0], [20.3, 175.0], [20.4, 176.0], [20.5, 176.0], [20.6, 177.0], [20.7, 178.0], [20.8, 179.0], [20.9, 179.0], [21.0, 180.0], [21.1, 181.0], [21.2, 181.0], [21.3, 181.0], [21.4, 182.0], [21.5, 183.0], [21.6, 184.0], [21.7, 185.0], [21.8, 185.0], [21.9, 186.0], [22.0, 187.0], [22.1, 189.0], [22.2, 190.0], [22.3, 191.0], [22.4, 194.0], [22.5, 196.0], [22.6, 197.0], [22.7, 199.0], [22.8, 201.0], [22.9, 202.0], [23.0, 203.0], [23.1, 205.0], [23.2, 206.0], [23.3, 208.0], [23.4, 211.0], [23.5, 213.0], [23.6, 215.0], [23.7, 218.0], [23.8, 219.0], [23.9, 221.0], [24.0, 222.0], [24.1, 222.0], [24.2, 223.0], [24.3, 224.0], [24.4, 226.0], [24.5, 226.0], [24.6, 228.0], [24.7, 229.0], [24.8, 230.0], [24.9, 231.0], [25.0, 232.0], [25.1, 232.0], [25.2, 233.0], [25.3, 235.0], [25.4, 236.0], [25.5, 237.0], [25.6, 238.0], [25.7, 238.0], [25.8, 239.0], [25.9, 240.0], [26.0, 240.0], [26.1, 241.0], [26.2, 241.0], [26.3, 242.0], [26.4, 242.0], [26.5, 243.0], [26.6, 244.0], [26.7, 244.0], [26.8, 245.0], [26.9, 245.0], [27.0, 245.0], [27.1, 246.0], [27.2, 246.0], [27.3, 247.0], [27.4, 247.0], [27.5, 247.0], [27.6, 248.0], [27.7, 249.0], [27.8, 250.0], [27.9, 250.0], [28.0, 251.0], [28.1, 251.0], [28.2, 252.0], [28.3, 253.0], [28.4, 253.0], [28.5, 254.0], [28.6, 254.0], [28.7, 254.0], [28.8, 255.0], [28.9, 256.0], [29.0, 256.0], [29.1, 257.0], [29.2, 258.0], [29.3, 258.0], [29.4, 259.0], [29.5, 259.0], [29.6, 260.0], [29.7, 261.0], [29.8, 261.0], [29.9, 262.0], [30.0, 263.0], [30.1, 263.0], [30.2, 264.0], [30.3, 265.0], [30.4, 265.0], [30.5, 266.0], [30.6, 267.0], [30.7, 269.0], [30.8, 270.0], [30.9, 271.0], [31.0, 271.0], [31.1, 272.0], [31.2, 273.0], [31.3, 273.0], [31.4, 274.0], [31.5, 275.0], [31.6, 275.0], [31.7, 276.0], [31.8, 277.0], [31.9, 278.0], [32.0, 279.0], [32.1, 280.0], [32.2, 281.0], [32.3, 282.0], [32.4, 282.0], [32.5, 284.0], [32.6, 285.0], [32.7, 286.0], [32.8, 287.0], [32.9, 288.0], [33.0, 288.0], [33.1, 289.0], [33.2, 290.0], [33.3, 291.0], [33.4, 292.0], [33.5, 293.0], [33.6, 294.0], [33.7, 295.0], [33.8, 296.0], [33.9, 296.0], [34.0, 298.0], [34.1, 299.0], [34.2, 300.0], [34.3, 301.0], [34.4, 304.0], [34.5, 306.0], [34.6, 308.0], [34.7, 309.0], [34.8, 312.0], [34.9, 314.0], [35.0, 315.0], [35.1, 316.0], [35.2, 317.0], [35.3, 318.0], [35.4, 320.0], [35.5, 321.0], [35.6, 321.0], [35.7, 323.0], [35.8, 323.0], [35.9, 324.0], [36.0, 326.0], [36.1, 329.0], [36.2, 330.0], [36.3, 331.0], [36.4, 332.0], [36.5, 332.0], [36.6, 333.0], [36.7, 335.0], [36.8, 336.0], [36.9, 337.0], [37.0, 338.0], [37.1, 340.0], [37.2, 340.0], [37.3, 343.0], [37.4, 344.0], [37.5, 347.0], [37.6, 348.0], [37.7, 349.0], [37.8, 352.0], [37.9, 354.0], [38.0, 354.0], [38.1, 355.0], [38.2, 358.0], [38.3, 360.0], [38.4, 361.0], [38.5, 362.0], [38.6, 364.0], [38.7, 365.0], [38.8, 365.0], [38.9, 366.0], [39.0, 368.0], [39.1, 369.0], [39.2, 370.0], [39.3, 372.0], [39.4, 373.0], [39.5, 374.0], [39.6, 375.0], [39.7, 377.0], [39.8, 379.0], [39.9, 380.0], [40.0, 381.0], [40.1, 384.0], [40.2, 384.0], [40.3, 385.0], [40.4, 386.0], [40.5, 387.0], [40.6, 388.0], [40.7, 391.0], [40.8, 392.0], [40.9, 393.0], [41.0, 394.0], [41.1, 395.0], [41.2, 396.0], [41.3, 398.0], [41.4, 399.0], [41.5, 400.0], [41.6, 401.0], [41.7, 402.0], [41.8, 404.0], [41.9, 405.0], [42.0, 407.0], [42.1, 410.0], [42.2, 411.0], [42.3, 412.0], [42.4, 413.0], [42.5, 415.0], [42.6, 415.0], [42.7, 416.0], [42.8, 419.0], [42.9, 422.0], [43.0, 423.0], [43.1, 424.0], [43.2, 426.0], [43.3, 428.0], [43.4, 429.0], [43.5, 431.0], [43.6, 434.0], [43.7, 436.0], [43.8, 439.0], [43.9, 441.0], [44.0, 442.0], [44.1, 443.0], [44.2, 445.0], [44.3, 446.0], [44.4, 447.0], [44.5, 449.0], [44.6, 449.0], [44.7, 451.0], [44.8, 453.0], [44.9, 458.0], [45.0, 460.0], [45.1, 462.0], [45.2, 462.0], [45.3, 464.0], [45.4, 465.0], [45.5, 466.0], [45.6, 468.0], [45.7, 469.0], [45.8, 471.0], [45.9, 473.0], [46.0, 476.0], [46.1, 477.0], [46.2, 478.0], [46.3, 481.0], [46.4, 483.0], [46.5, 484.0], [46.6, 486.0], [46.7, 487.0], [46.8, 488.0], [46.9, 490.0], [47.0, 492.0], [47.1, 493.0], [47.2, 495.0], [47.3, 497.0], [47.4, 498.0], [47.5, 499.0], [47.6, 501.0], [47.7, 502.0], [47.8, 503.0], [47.9, 504.0], [48.0, 505.0], [48.1, 507.0], [48.2, 509.0], [48.3, 509.0], [48.4, 510.0], [48.5, 512.0], [48.6, 512.0], [48.7, 514.0], [48.8, 516.0], [48.9, 519.0], [49.0, 521.0], [49.1, 523.0], [49.2, 525.0], [49.3, 527.0], [49.4, 528.0], [49.5, 531.0], [49.6, 532.0], [49.7, 534.0], [49.8, 536.0], [49.9, 539.0], [50.0, 542.0], [50.1, 543.0], [50.2, 544.0], [50.3, 545.0], [50.4, 547.0], [50.5, 548.0], [50.6, 548.0], [50.7, 551.0], [50.8, 552.0], [50.9, 553.0], [51.0, 554.0], [51.1, 556.0], [51.2, 557.0], [51.3, 558.0], [51.4, 559.0], [51.5, 560.0], [51.6, 561.0], [51.7, 563.0], [51.8, 564.0], [51.9, 565.0], [52.0, 567.0], [52.1, 569.0], [52.2, 570.0], [52.3, 571.0], [52.4, 572.0], [52.5, 574.0], [52.6, 575.0], [52.7, 578.0], [52.8, 578.0], [52.9, 579.0], [53.0, 580.0], [53.1, 582.0], [53.2, 583.0], [53.3, 583.0], [53.4, 585.0], [53.5, 585.0], [53.6, 586.0], [53.7, 587.0], [53.8, 590.0], [53.9, 592.0], [54.0, 593.0], [54.1, 593.0], [54.2, 595.0], [54.3, 596.0], [54.4, 597.0], [54.5, 600.0], [54.6, 604.0], [54.7, 605.0], [54.8, 607.0], [54.9, 609.0], [55.0, 612.0], [55.1, 613.0], [55.2, 614.0], [55.3, 615.0], [55.4, 618.0], [55.5, 619.0], [55.6, 622.0], [55.7, 624.0], [55.8, 625.0], [55.9, 627.0], [56.0, 629.0], [56.1, 631.0], [56.2, 632.0], [56.3, 634.0], [56.4, 635.0], [56.5, 637.0], [56.6, 638.0], [56.7, 640.0], [56.8, 641.0], [56.9, 642.0], [57.0, 644.0], [57.1, 646.0], [57.2, 648.0], [57.3, 648.0], [57.4, 650.0], [57.5, 651.0], [57.6, 652.0], [57.7, 654.0], [57.8, 655.0], [57.9, 657.0], [58.0, 659.0], [58.1, 660.0], [58.2, 661.0], [58.3, 662.0], [58.4, 663.0], [58.5, 664.0], [58.6, 668.0], [58.7, 669.0], [58.8, 671.0], [58.9, 672.0], [59.0, 673.0], [59.1, 675.0], [59.2, 678.0], [59.3, 679.0], [59.4, 681.0], [59.5, 682.0], [59.6, 686.0], [59.7, 688.0], [59.8, 690.0], [59.9, 690.0], [60.0, 693.0], [60.1, 695.0], [60.2, 697.0], [60.3, 699.0], [60.4, 701.0], [60.5, 701.0], [60.6, 704.0], [60.7, 708.0], [60.8, 709.0], [60.9, 711.0], [61.0, 712.0], [61.1, 714.0], [61.2, 715.0], [61.3, 716.0], [61.4, 719.0], [61.5, 720.0], [61.6, 722.0], [61.7, 722.0], [61.8, 724.0], [61.9, 726.0], [62.0, 729.0], [62.1, 730.0], [62.2, 731.0], [62.3, 734.0], [62.4, 735.0], [62.5, 737.0], [62.6, 740.0], [62.7, 742.0], [62.8, 743.0], [62.9, 744.0], [63.0, 745.0], [63.1, 747.0], [63.2, 750.0], [63.3, 751.0], [63.4, 752.0], [63.5, 753.0], [63.6, 755.0], [63.7, 756.0], [63.8, 756.0], [63.9, 758.0], [64.0, 760.0], [64.1, 761.0], [64.2, 763.0], [64.3, 764.0], [64.4, 766.0], [64.5, 767.0], [64.6, 769.0], [64.7, 770.0], [64.8, 771.0], [64.9, 773.0], [65.0, 774.0], [65.1, 775.0], [65.2, 776.0], [65.3, 777.0], [65.4, 779.0], [65.5, 780.0], [65.6, 781.0], [65.7, 782.0], [65.8, 785.0], [65.9, 786.0], [66.0, 788.0], [66.1, 791.0], [66.2, 792.0], [66.3, 793.0], [66.4, 795.0], [66.5, 796.0], [66.6, 798.0], [66.7, 800.0], [66.8, 801.0], [66.9, 802.0], [67.0, 804.0], [67.1, 807.0], [67.2, 808.0], [67.3, 809.0], [67.4, 811.0], [67.5, 813.0], [67.6, 814.0], [67.7, 815.0], [67.8, 816.0], [67.9, 817.0], [68.0, 820.0], [68.1, 822.0], [68.2, 824.0], [68.3, 827.0], [68.4, 829.0], [68.5, 831.0], [68.6, 833.0], [68.7, 834.0], [68.8, 836.0], [68.9, 838.0], [69.0, 840.0], [69.1, 842.0], [69.2, 843.0], [69.3, 845.0], [69.4, 846.0], [69.5, 848.0], [69.6, 852.0], [69.7, 854.0], [69.8, 855.0], [69.9, 856.0], [70.0, 857.0], [70.1, 860.0], [70.2, 861.0], [70.3, 862.0], [70.4, 865.0], [70.5, 868.0], [70.6, 871.0], [70.7, 873.0], [70.8, 876.0], [70.9, 879.0], [71.0, 884.0], [71.1, 887.0], [71.2, 889.0], [71.3, 892.0], [71.4, 894.0], [71.5, 898.0], [71.6, 900.0], [71.7, 904.0], [71.8, 907.0], [71.9, 911.0], [72.0, 912.0], [72.1, 915.0], [72.2, 918.0], [72.3, 921.0], [72.4, 923.0], [72.5, 927.0], [72.6, 932.0], [72.7, 934.0], [72.8, 937.0], [72.9, 939.0], [73.0, 940.0], [73.1, 941.0], [73.2, 943.0], [73.3, 946.0], [73.4, 949.0], [73.5, 952.0], [73.6, 953.0], [73.7, 955.0], [73.8, 957.0], [73.9, 959.0], [74.0, 961.0], [74.1, 964.0], [74.2, 966.0], [74.3, 968.0], [74.4, 969.0], [74.5, 974.0], [74.6, 977.0], [74.7, 978.0], [74.8, 980.0], [74.9, 981.0], [75.0, 985.0], [75.1, 989.0], [75.2, 991.0], [75.3, 993.0], [75.4, 995.0], [75.5, 998.0], [75.6, 1001.0], [75.7, 1003.0], [75.8, 1006.0], [75.9, 1009.0], [76.0, 1013.0], [76.1, 1016.0], [76.2, 1018.0], [76.3, 1020.0], [76.4, 1022.0], [76.5, 1023.0], [76.6, 1025.0], [76.7, 1026.0], [76.8, 1028.0], [76.9, 1029.0], [77.0, 1031.0], [77.1, 1032.0], [77.2, 1034.0], [77.3, 1038.0], [77.4, 1040.0], [77.5, 1048.0], [77.6, 1049.0], [77.7, 1052.0], [77.8, 1053.0], [77.9, 1056.0], [78.0, 1057.0], [78.1, 1058.0], [78.2, 1059.0], [78.3, 1061.0], [78.4, 1063.0], [78.5, 1064.0], [78.6, 1065.0], [78.7, 1068.0], [78.8, 1070.0], [78.9, 1071.0], [79.0, 1072.0], [79.1, 1073.0], [79.2, 1076.0], [79.3, 1077.0], [79.4, 1080.0], [79.5, 1082.0], [79.6, 1085.0], [79.7, 1087.0], [79.8, 1091.0], [79.9, 1094.0], [80.0, 1097.0], [80.1, 1099.0], [80.2, 1106.0], [80.3, 1107.0], [80.4, 1109.0], [80.5, 1110.0], [80.6, 1112.0], [80.7, 1114.0], [80.8, 1117.0], [80.9, 1119.0], [81.0, 1122.0], [81.1, 1125.0], [81.2, 1130.0], [81.3, 1132.0], [81.4, 1133.0], [81.5, 1136.0], [81.6, 1139.0], [81.7, 1146.0], [81.8, 1148.0], [81.9, 1151.0], [82.0, 1154.0], [82.1, 1160.0], [82.2, 1162.0], [82.3, 1165.0], [82.4, 1167.0], [82.5, 1172.0], [82.6, 1175.0], [82.7, 1179.0], [82.8, 1180.0], [82.9, 1182.0], [83.0, 1185.0], [83.1, 1191.0], [83.2, 1197.0], [83.3, 1199.0], [83.4, 1202.0], [83.5, 1203.0], [83.6, 1207.0], [83.7, 1210.0], [83.8, 1211.0], [83.9, 1217.0], [84.0, 1221.0], [84.1, 1223.0], [84.2, 1225.0], [84.3, 1227.0], [84.4, 1230.0], [84.5, 1235.0], [84.6, 1242.0], [84.7, 1247.0], [84.8, 1250.0], [84.9, 1252.0], [85.0, 1254.0], [85.1, 1256.0], [85.2, 1262.0], [85.3, 1266.0], [85.4, 1270.0], [85.5, 1276.0], [85.6, 1280.0], [85.7, 1284.0], [85.8, 1288.0], [85.9, 1291.0], [86.0, 1294.0], [86.1, 1298.0], [86.2, 1303.0], [86.3, 1304.0], [86.4, 1307.0], [86.5, 1310.0], [86.6, 1315.0], [86.7, 1324.0], [86.8, 1327.0], [86.9, 1329.0], [87.0, 1335.0], [87.1, 1340.0], [87.2, 1344.0], [87.3, 1347.0], [87.4, 1350.0], [87.5, 1357.0], [87.6, 1360.0], [87.7, 1362.0], [87.8, 1365.0], [87.9, 1369.0], [88.0, 1371.0], [88.1, 1376.0], [88.2, 1380.0], [88.3, 1383.0], [88.4, 1387.0], [88.5, 1392.0], [88.6, 1394.0], [88.7, 1396.0], [88.8, 1403.0], [88.9, 1407.0], [89.0, 1413.0], [89.1, 1415.0], [89.2, 1419.0], [89.3, 1421.0], [89.4, 1426.0], [89.5, 1435.0], [89.6, 1438.0], [89.7, 1442.0], [89.8, 1445.0], [89.9, 1448.0], [90.0, 1451.0], [90.1, 1459.0], [90.2, 1470.0], [90.3, 1470.0], [90.4, 1473.0], [90.5, 1478.0], [90.6, 1483.0], [90.7, 1486.0], [90.8, 1488.0], [90.9, 1494.0], [91.0, 1499.0], [91.1, 1502.0], [91.2, 1506.0], [91.3, 1513.0], [91.4, 1515.0], [91.5, 1517.0], [91.6, 1519.0], [91.7, 1530.0], [91.8, 1539.0], [91.9, 1547.0], [92.0, 1552.0], [92.1, 1557.0], [92.2, 1561.0], [92.3, 1563.0], [92.4, 1567.0], [92.5, 1581.0], [92.6, 1587.0], [92.7, 1593.0], [92.8, 1604.0], [92.9, 1610.0], [93.0, 1617.0], [93.1, 1628.0], [93.2, 1639.0], [93.3, 1646.0], [93.4, 1655.0], [93.5, 1658.0], [93.6, 1668.0], [93.7, 1675.0], [93.8, 1686.0], [93.9, 1695.0], [94.0, 1703.0], [94.1, 1710.0], [94.2, 1716.0], [94.3, 1726.0], [94.4, 1732.0], [94.5, 1749.0], [94.6, 1755.0], [94.7, 1776.0], [94.8, 1783.0], [94.9, 1790.0], [95.0, 1799.0], [95.1, 1826.0], [95.2, 1841.0], [95.3, 1854.0], [95.4, 1865.0], [95.5, 1890.0], [95.6, 1911.0], [95.7, 1917.0], [95.8, 1938.0], [95.9, 1957.0], [96.0, 1967.0], [96.1, 1973.0], [96.2, 1979.0], [96.3, 1985.0], [96.4, 2000.0], [96.5, 2015.0], [96.6, 2026.0], [96.7, 2057.0], [96.8, 2071.0], [96.9, 2091.0], [97.0, 2117.0], [97.1, 2150.0], [97.2, 2174.0], [97.3, 2219.0], [97.4, 2238.0], [97.5, 2277.0], [97.6, 2295.0], [97.7, 2318.0], [97.8, 2344.0], [97.9, 2367.0], [98.0, 2382.0], [98.1, 2424.0], [98.2, 2433.0], [98.3, 2461.0], [98.4, 2474.0], [98.5, 2490.0], [98.6, 2539.0], [98.7, 2583.0], [98.8, 2618.0], [98.9, 2686.0], [99.0, 2740.0], [99.1, 2790.0], [99.2, 2937.0], [99.3, 3026.0], [99.4, 3118.0], [99.5, 3298.0], [99.6, 3400.0], [99.7, 3931.0], [99.8, 4011.0], [99.9, 4218.0], [100.0, 4941.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1190.0, "series": [{"data": [[0.0, 7.0], [600.0, 309.0], [700.0, 335.0], [800.0, 256.0], [900.0, 212.0], [1000.0, 238.0], [1100.0, 170.0], [1200.0, 147.0], [1300.0, 137.0], [1400.0, 122.0], [1500.0, 89.0], [100.0, 1190.0], [1600.0, 65.0], [1700.0, 56.0], [1800.0, 26.0], [1900.0, 45.0], [2000.0, 29.0], [2100.0, 16.0], [2300.0, 19.0], [2200.0, 21.0], [2400.0, 28.0], [2500.0, 11.0], [2600.0, 11.0], [2700.0, 9.0], [2800.0, 3.0], [2900.0, 5.0], [3000.0, 5.0], [3100.0, 5.0], [200.0, 600.0], [3200.0, 2.0], [3300.0, 4.0], [3400.0, 2.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [3900.0, 5.0], [4000.0, 4.0], [4200.0, 3.0], [4300.0, 3.0], [300.0, 384.0], [4900.0, 1.0], [400.0, 319.0], [500.0, 365.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 470.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2502.0, "series": [{"data": [[0.0, 2502.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2290.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 470.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.984615384615385, "minX": 1.60402524E12, "maxY": 12.0, "series": [{"data": [[1.6040253E12, 12.0], [1.60402548E12, 12.0], [1.60402554E12, 10.984615384615385], [1.60402536E12, 12.0], [1.60402542E12, 12.0], [1.60402524E12, 11.960288808664274]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402554E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 688.5177413201047, "minX": 1.0, "maxY": 4941.0, "series": [{"data": [[4.0, 1991.5], [8.0, 2246.5], [2.0, 4346.0], [1.0, 4062.0], [9.0, 2247.0], [10.0, 1475.3333333333333], [5.0, 3373.0], [11.0, 1628.0], [6.0, 1546.3333333333333], [12.0, 688.5177413201047], [3.0, 4941.0], [7.0, 4096.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.981185860889392, 694.9728240212838]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 571.3333333333334, "minX": 1.60402524E12, "maxY": 997731.4, "series": [{"data": [[1.6040253E12, 915511.8], [1.60402548E12, 997731.4], [1.60402554E12, 38519.86666666667], [1.60402536E12, 742547.6333333333], [1.60402542E12, 760446.4], [1.60402524E12, 796205.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040253E12, 8079.333333333333], [1.60402548E12, 8834.916666666666], [1.60402554E12, 571.3333333333334], [1.60402536E12, 10265.1], [1.60402542E12, 10557.666666666666], [1.60402524E12, 7182.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402554E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 573.5605453087413, "minX": 1.60402524E12, "maxY": 1816.0769230769233, "series": [{"data": [[1.6040253E12, 777.1420824295011], [1.60402548E12, 724.2872872872883], [1.60402554E12, 1816.0769230769233], [1.60402536E12, 573.5605453087413], [1.60402542E12, 600.7821368948246], [1.60402524E12, 798.8531889290007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402554E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 573.2678428227757, "minX": 1.60402524E12, "maxY": 1815.8153846153843, "series": [{"data": [[1.6040253E12, 776.6540130151852], [1.60402548E12, 723.8108108108108], [1.60402554E12, 1815.8153846153843], [1.60402536E12, 573.2678428227757], [1.60402542E12, 600.4849749582642], [1.60402524E12, 798.3501805054159]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402554E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009181969949916532, "minX": 1.60402524E12, "maxY": 0.1287605294825511, "series": [{"data": [[1.6040253E12, 0.013015184381778754], [1.60402548E12, 0.01401401401401402], [1.60402554E12, 0.1076923076923077], [1.60402536E12, 0.01603849238171614], [1.60402542E12, 0.009181969949916532], [1.60402524E12, 0.1287605294825511]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402554E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 70.0, "minX": 1.60402524E12, "maxY": 4941.0, "series": [{"data": [[1.6040253E12, 2731.0], [1.60402548E12, 3007.0], [1.60402554E12, 4941.0], [1.60402536E12, 4011.0], [1.60402542E12, 2679.0], [1.60402524E12, 3400.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040253E12, 134.0], [1.60402548E12, 138.0], [1.60402554E12, 155.0], [1.60402536E12, 138.2319997024536], [1.60402542E12, 113.79099971413612], [1.60402524E12, 131.48799980163574]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040253E12, 134.13770008802413], [1.60402548E12, 138.90000009536743], [1.60402554E12, 155.0], [1.60402536E12, 139.0], [1.60402542E12, 115.7402002286911], [1.60402524E12, 132.2368000793457]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040253E12, 134.0], [1.60402548E12, 138.4999998807907], [1.60402554E12, 155.0], [1.60402536E12, 138.8559998512268], [1.60402542E12, 114.78099971413613], [1.60402524E12, 131.90399990081787]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040253E12, 123.0], [1.60402548E12, 104.0], [1.60402554E12, 155.0], [1.60402536E12, 70.0], [1.60402542E12, 74.0], [1.60402524E12, 122.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040253E12, 680.5], [1.60402548E12, 634.0], [1.60402554E12, 1120.0], [1.60402536E12, 335.0], [1.60402542E12, 475.5], [1.60402524E12, 642.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402554E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 155.0, "minX": 1.0, "maxY": 3118.0, "series": [{"data": [[3.0, 3118.0], [4.0, 1966.0], [5.0, 2187.0], [6.0, 1653.5], [7.0, 1466.0], [8.0, 1348.0], [9.0, 1223.0], [10.0, 1075.0], [11.0, 1015.0], [12.0, 1001.5], [13.0, 894.0], [14.0, 751.0], [15.0, 771.0], [16.0, 771.5], [17.0, 633.5], [18.0, 720.5], [19.0, 525.0], [20.0, 631.0], [21.0, 521.0], [22.0, 426.0], [23.0, 394.0], [24.0, 506.0], [25.0, 306.0], [26.0, 446.0], [27.0, 545.5], [28.0, 464.5], [29.0, 402.5], [30.0, 370.5], [31.0, 317.0], [33.0, 253.5], [32.0, 318.0], [34.0, 245.0], [35.0, 288.0], [37.0, 286.0], [36.0, 220.5], [39.0, 355.0], [41.0, 247.5], [40.0, 254.0], [43.0, 165.0], [42.0, 218.5], [45.0, 258.0], [44.0, 183.5], [46.0, 266.5], [47.0, 247.5], [49.0, 159.0], [52.0, 183.5], [53.0, 203.0], [64.0, 158.5], [70.0, 155.0], [1.0, 2111.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 155.0, "minX": 1.0, "maxY": 3117.0, "series": [{"data": [[3.0, 3117.0], [4.0, 1965.5], [5.0, 2186.0], [6.0, 1652.0], [7.0, 1465.5], [8.0, 1347.5], [9.0, 1222.0], [10.0, 1075.0], [11.0, 1013.0], [12.0, 1001.0], [13.0, 894.0], [14.0, 751.0], [15.0, 770.5], [16.0, 771.0], [17.0, 632.0], [18.0, 720.5], [19.0, 525.0], [20.0, 631.0], [21.0, 521.0], [22.0, 426.0], [23.0, 394.0], [24.0, 505.5], [25.0, 305.0], [26.0, 446.0], [27.0, 545.5], [28.0, 464.5], [29.0, 402.5], [30.0, 370.0], [31.0, 317.0], [33.0, 253.5], [32.0, 318.0], [34.0, 244.5], [35.0, 288.0], [37.0, 285.5], [36.0, 220.0], [39.0, 355.0], [41.0, 247.5], [40.0, 254.0], [43.0, 165.0], [42.0, 218.5], [45.0, 257.0], [44.0, 183.5], [46.0, 266.5], [47.0, 247.5], [49.0, 159.0], [52.0, 183.5], [53.0, 203.0], [64.0, 158.0], [70.0, 155.0], [1.0, 2109.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.60402524E12, "maxY": 20.783333333333335, "series": [{"data": [[1.6040253E12, 15.366666666666667], [1.60402548E12, 16.65], [1.60402554E12, 0.8833333333333333], [1.60402536E12, 20.783333333333335], [1.60402542E12, 19.966666666666665], [1.60402524E12, 14.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402554E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60402524E12, "maxY": 20.783333333333335, "series": [{"data": [[1.6040253E12, 15.366666666666667], [1.60402548E12, 16.65], [1.60402554E12, 1.0833333333333333], [1.60402536E12, 20.783333333333335], [1.60402542E12, 19.966666666666665], [1.60402524E12, 13.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402554E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60402524E12, "maxY": 20.783333333333335, "series": [{"data": [[1.6040253E12, 15.366666666666667], [1.60402548E12, 16.65], [1.60402554E12, 1.0833333333333333], [1.60402536E12, 20.783333333333335], [1.60402542E12, 19.966666666666665], [1.60402524E12, 13.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402554E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0833333333333333, "minX": 1.60402524E12, "maxY": 20.783333333333335, "series": [{"data": [[1.6040253E12, 15.366666666666667], [1.60402548E12, 16.65], [1.60402554E12, 1.0833333333333333], [1.60402536E12, 20.783333333333335], [1.60402542E12, 19.966666666666665], [1.60402524E12, 13.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402554E12, "title": "Total Transactions Per Second"}},
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

