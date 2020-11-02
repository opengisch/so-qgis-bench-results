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
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 17156.0, "series": [{"data": [[0.0, 216.0], [0.1, 222.0], [0.2, 224.0], [0.3, 225.0], [0.4, 226.0], [0.5, 226.0], [0.6, 227.0], [0.7, 227.0], [0.8, 228.0], [0.9, 229.0], [1.0, 229.0], [1.1, 230.0], [1.2, 231.0], [1.3, 231.0], [1.4, 232.0], [1.5, 232.0], [1.6, 233.0], [1.7, 233.0], [1.8, 233.0], [1.9, 234.0], [2.0, 234.0], [2.1, 234.0], [2.2, 235.0], [2.3, 235.0], [2.4, 235.0], [2.5, 236.0], [2.6, 236.0], [2.7, 237.0], [2.8, 237.0], [2.9, 238.0], [3.0, 238.0], [3.1, 238.0], [3.2, 238.0], [3.3, 239.0], [3.4, 239.0], [3.5, 240.0], [3.6, 240.0], [3.7, 241.0], [3.8, 241.0], [3.9, 241.0], [4.0, 242.0], [4.1, 242.0], [4.2, 243.0], [4.3, 243.0], [4.4, 244.0], [4.5, 244.0], [4.6, 245.0], [4.7, 245.0], [4.8, 246.0], [4.9, 246.0], [5.0, 247.0], [5.1, 248.0], [5.2, 248.0], [5.3, 249.0], [5.4, 249.0], [5.5, 250.0], [5.6, 251.0], [5.7, 251.0], [5.8, 252.0], [5.9, 253.0], [6.0, 253.0], [6.1, 253.0], [6.2, 253.0], [6.3, 254.0], [6.4, 256.0], [6.5, 257.0], [6.6, 258.0], [6.7, 260.0], [6.8, 260.0], [6.9, 261.0], [7.0, 261.0], [7.1, 262.0], [7.2, 262.0], [7.3, 263.0], [7.4, 264.0], [7.5, 265.0], [7.6, 266.0], [7.7, 266.0], [7.8, 267.0], [7.9, 269.0], [8.0, 269.0], [8.1, 270.0], [8.2, 271.0], [8.3, 272.0], [8.4, 272.0], [8.5, 273.0], [8.6, 274.0], [8.7, 275.0], [8.8, 276.0], [8.9, 277.0], [9.0, 279.0], [9.1, 280.0], [9.2, 281.0], [9.3, 283.0], [9.4, 284.0], [9.5, 285.0], [9.6, 286.0], [9.7, 288.0], [9.8, 289.0], [9.9, 290.0], [10.0, 291.0], [10.1, 292.0], [10.2, 293.0], [10.3, 293.0], [10.4, 294.0], [10.5, 294.0], [10.6, 295.0], [10.7, 295.0], [10.8, 296.0], [10.9, 296.0], [11.0, 297.0], [11.1, 298.0], [11.2, 299.0], [11.3, 299.0], [11.4, 300.0], [11.5, 300.0], [11.6, 301.0], [11.7, 301.0], [11.8, 302.0], [11.9, 303.0], [12.0, 303.0], [12.1, 303.0], [12.2, 304.0], [12.3, 304.0], [12.4, 305.0], [12.5, 305.0], [12.6, 306.0], [12.7, 306.0], [12.8, 306.0], [12.9, 307.0], [13.0, 307.0], [13.1, 307.0], [13.2, 308.0], [13.3, 308.0], [13.4, 309.0], [13.5, 309.0], [13.6, 310.0], [13.7, 310.0], [13.8, 310.0], [13.9, 310.0], [14.0, 311.0], [14.1, 311.0], [14.2, 312.0], [14.3, 312.0], [14.4, 313.0], [14.5, 313.0], [14.6, 314.0], [14.7, 314.0], [14.8, 315.0], [14.9, 315.0], [15.0, 316.0], [15.1, 316.0], [15.2, 317.0], [15.3, 317.0], [15.4, 317.0], [15.5, 318.0], [15.6, 318.0], [15.7, 319.0], [15.8, 319.0], [15.9, 320.0], [16.0, 320.0], [16.1, 321.0], [16.2, 321.0], [16.3, 322.0], [16.4, 322.0], [16.5, 323.0], [16.6, 323.0], [16.7, 324.0], [16.8, 324.0], [16.9, 324.0], [17.0, 325.0], [17.1, 325.0], [17.2, 326.0], [17.3, 327.0], [17.4, 327.0], [17.5, 328.0], [17.6, 328.0], [17.7, 329.0], [17.8, 329.0], [17.9, 330.0], [18.0, 331.0], [18.1, 331.0], [18.2, 332.0], [18.3, 332.0], [18.4, 333.0], [18.5, 333.0], [18.6, 334.0], [18.7, 335.0], [18.8, 335.0], [18.9, 336.0], [19.0, 336.0], [19.1, 337.0], [19.2, 337.0], [19.3, 338.0], [19.4, 338.0], [19.5, 339.0], [19.6, 339.0], [19.7, 339.0], [19.8, 340.0], [19.9, 341.0], [20.0, 341.0], [20.1, 342.0], [20.2, 342.0], [20.3, 343.0], [20.4, 343.0], [20.5, 343.0], [20.6, 344.0], [20.7, 344.0], [20.8, 345.0], [20.9, 346.0], [21.0, 347.0], [21.1, 348.0], [21.2, 348.0], [21.3, 349.0], [21.4, 349.0], [21.5, 349.0], [21.6, 350.0], [21.7, 351.0], [21.8, 352.0], [21.9, 352.0], [22.0, 352.0], [22.1, 353.0], [22.2, 353.0], [22.3, 354.0], [22.4, 354.0], [22.5, 355.0], [22.6, 356.0], [22.7, 356.0], [22.8, 357.0], [22.9, 357.0], [23.0, 358.0], [23.1, 359.0], [23.2, 360.0], [23.3, 360.0], [23.4, 361.0], [23.5, 361.0], [23.6, 362.0], [23.7, 363.0], [23.8, 364.0], [23.9, 364.0], [24.0, 365.0], [24.1, 365.0], [24.2, 366.0], [24.3, 367.0], [24.4, 367.0], [24.5, 368.0], [24.6, 368.0], [24.7, 368.0], [24.8, 369.0], [24.9, 370.0], [25.0, 370.0], [25.1, 371.0], [25.2, 372.0], [25.3, 372.0], [25.4, 373.0], [25.5, 374.0], [25.6, 374.0], [25.7, 375.0], [25.8, 375.0], [25.9, 376.0], [26.0, 376.0], [26.1, 377.0], [26.2, 378.0], [26.3, 378.0], [26.4, 379.0], [26.5, 379.0], [26.6, 380.0], [26.7, 381.0], [26.8, 382.0], [26.9, 382.0], [27.0, 382.0], [27.1, 383.0], [27.2, 384.0], [27.3, 384.0], [27.4, 385.0], [27.5, 386.0], [27.6, 387.0], [27.7, 387.0], [27.8, 388.0], [27.9, 389.0], [28.0, 389.0], [28.1, 390.0], [28.2, 390.0], [28.3, 390.0], [28.4, 391.0], [28.5, 392.0], [28.6, 392.0], [28.7, 393.0], [28.8, 393.0], [28.9, 394.0], [29.0, 395.0], [29.1, 396.0], [29.2, 397.0], [29.3, 397.0], [29.4, 398.0], [29.5, 399.0], [29.6, 399.0], [29.7, 400.0], [29.8, 401.0], [29.9, 402.0], [30.0, 402.0], [30.1, 402.0], [30.2, 403.0], [30.3, 403.0], [30.4, 404.0], [30.5, 405.0], [30.6, 406.0], [30.7, 407.0], [30.8, 407.0], [30.9, 408.0], [31.0, 408.0], [31.1, 409.0], [31.2, 409.0], [31.3, 410.0], [31.4, 410.0], [31.5, 411.0], [31.6, 412.0], [31.7, 414.0], [31.8, 414.0], [31.9, 415.0], [32.0, 416.0], [32.1, 416.0], [32.2, 417.0], [32.3, 418.0], [32.4, 419.0], [32.5, 420.0], [32.6, 421.0], [32.7, 422.0], [32.8, 422.0], [32.9, 422.0], [33.0, 423.0], [33.1, 425.0], [33.2, 425.0], [33.3, 426.0], [33.4, 427.0], [33.5, 428.0], [33.6, 428.0], [33.7, 429.0], [33.8, 430.0], [33.9, 431.0], [34.0, 432.0], [34.1, 433.0], [34.2, 433.0], [34.3, 434.0], [34.4, 434.0], [34.5, 436.0], [34.6, 436.0], [34.7, 437.0], [34.8, 438.0], [34.9, 439.0], [35.0, 440.0], [35.1, 442.0], [35.2, 442.0], [35.3, 443.0], [35.4, 444.0], [35.5, 445.0], [35.6, 445.0], [35.7, 446.0], [35.8, 447.0], [35.9, 448.0], [36.0, 449.0], [36.1, 449.0], [36.2, 450.0], [36.3, 451.0], [36.4, 452.0], [36.5, 453.0], [36.6, 453.0], [36.7, 455.0], [36.8, 455.0], [36.9, 457.0], [37.0, 457.0], [37.1, 458.0], [37.2, 459.0], [37.3, 460.0], [37.4, 461.0], [37.5, 462.0], [37.6, 462.0], [37.7, 463.0], [37.8, 464.0], [37.9, 465.0], [38.0, 465.0], [38.1, 466.0], [38.2, 467.0], [38.3, 468.0], [38.4, 470.0], [38.5, 471.0], [38.6, 472.0], [38.7, 473.0], [38.8, 474.0], [38.9, 475.0], [39.0, 476.0], [39.1, 477.0], [39.2, 479.0], [39.3, 479.0], [39.4, 480.0], [39.5, 482.0], [39.6, 483.0], [39.7, 484.0], [39.8, 485.0], [39.9, 485.0], [40.0, 486.0], [40.1, 487.0], [40.2, 487.0], [40.3, 487.0], [40.4, 488.0], [40.5, 489.0], [40.6, 490.0], [40.7, 490.0], [40.8, 492.0], [40.9, 492.0], [41.0, 493.0], [41.1, 495.0], [41.2, 495.0], [41.3, 496.0], [41.4, 498.0], [41.5, 499.0], [41.6, 499.0], [41.7, 499.0], [41.8, 501.0], [41.9, 501.0], [42.0, 502.0], [42.1, 502.0], [42.2, 503.0], [42.3, 504.0], [42.4, 505.0], [42.5, 506.0], [42.6, 507.0], [42.7, 508.0], [42.8, 509.0], [42.9, 510.0], [43.0, 510.0], [43.1, 511.0], [43.2, 512.0], [43.3, 513.0], [43.4, 514.0], [43.5, 514.0], [43.6, 515.0], [43.7, 516.0], [43.8, 517.0], [43.9, 517.0], [44.0, 518.0], [44.1, 518.0], [44.2, 519.0], [44.3, 520.0], [44.4, 521.0], [44.5, 522.0], [44.6, 523.0], [44.7, 524.0], [44.8, 526.0], [44.9, 527.0], [45.0, 528.0], [45.1, 528.0], [45.2, 529.0], [45.3, 529.0], [45.4, 531.0], [45.5, 532.0], [45.6, 532.0], [45.7, 534.0], [45.8, 536.0], [45.9, 538.0], [46.0, 539.0], [46.1, 540.0], [46.2, 540.0], [46.3, 542.0], [46.4, 542.0], [46.5, 544.0], [46.6, 545.0], [46.7, 546.0], [46.8, 547.0], [46.9, 548.0], [47.0, 549.0], [47.1, 551.0], [47.2, 552.0], [47.3, 553.0], [47.4, 554.0], [47.5, 555.0], [47.6, 557.0], [47.7, 559.0], [47.8, 560.0], [47.9, 561.0], [48.0, 562.0], [48.1, 562.0], [48.2, 563.0], [48.3, 564.0], [48.4, 565.0], [48.5, 566.0], [48.6, 567.0], [48.7, 569.0], [48.8, 571.0], [48.9, 572.0], [49.0, 573.0], [49.1, 573.0], [49.2, 574.0], [49.3, 575.0], [49.4, 577.0], [49.5, 579.0], [49.6, 580.0], [49.7, 580.0], [49.8, 582.0], [49.9, 583.0], [50.0, 584.0], [50.1, 585.0], [50.2, 586.0], [50.3, 588.0], [50.4, 589.0], [50.5, 591.0], [50.6, 592.0], [50.7, 593.0], [50.8, 594.0], [50.9, 594.0], [51.0, 595.0], [51.1, 596.0], [51.2, 599.0], [51.3, 601.0], [51.4, 602.0], [51.5, 602.0], [51.6, 604.0], [51.7, 606.0], [51.8, 607.0], [51.9, 608.0], [52.0, 609.0], [52.1, 611.0], [52.2, 612.0], [52.3, 615.0], [52.4, 615.0], [52.5, 617.0], [52.6, 618.0], [52.7, 621.0], [52.8, 623.0], [52.9, 624.0], [53.0, 625.0], [53.1, 627.0], [53.2, 629.0], [53.3, 630.0], [53.4, 632.0], [53.5, 633.0], [53.6, 634.0], [53.7, 636.0], [53.8, 636.0], [53.9, 637.0], [54.0, 639.0], [54.1, 640.0], [54.2, 643.0], [54.3, 644.0], [54.4, 645.0], [54.5, 646.0], [54.6, 648.0], [54.7, 649.0], [54.8, 650.0], [54.9, 651.0], [55.0, 652.0], [55.1, 653.0], [55.2, 655.0], [55.3, 656.0], [55.4, 657.0], [55.5, 659.0], [55.6, 662.0], [55.7, 663.0], [55.8, 665.0], [55.9, 666.0], [56.0, 667.0], [56.1, 669.0], [56.2, 670.0], [56.3, 670.0], [56.4, 672.0], [56.5, 674.0], [56.6, 675.0], [56.7, 677.0], [56.8, 679.0], [56.9, 682.0], [57.0, 683.0], [57.1, 685.0], [57.2, 687.0], [57.3, 689.0], [57.4, 691.0], [57.5, 693.0], [57.6, 695.0], [57.7, 696.0], [57.8, 698.0], [57.9, 700.0], [58.0, 701.0], [58.1, 702.0], [58.2, 703.0], [58.3, 704.0], [58.4, 705.0], [58.5, 707.0], [58.6, 708.0], [58.7, 709.0], [58.8, 712.0], [58.9, 713.0], [59.0, 715.0], [59.1, 716.0], [59.2, 717.0], [59.3, 718.0], [59.4, 719.0], [59.5, 720.0], [59.6, 722.0], [59.7, 723.0], [59.8, 725.0], [59.9, 726.0], [60.0, 727.0], [60.1, 729.0], [60.2, 730.0], [60.3, 731.0], [60.4, 733.0], [60.5, 735.0], [60.6, 737.0], [60.7, 740.0], [60.8, 741.0], [60.9, 743.0], [61.0, 744.0], [61.1, 746.0], [61.2, 748.0], [61.3, 749.0], [61.4, 750.0], [61.5, 753.0], [61.6, 757.0], [61.7, 758.0], [61.8, 759.0], [61.9, 761.0], [62.0, 763.0], [62.1, 764.0], [62.2, 767.0], [62.3, 769.0], [62.4, 771.0], [62.5, 772.0], [62.6, 772.0], [62.7, 774.0], [62.8, 777.0], [62.9, 778.0], [63.0, 780.0], [63.1, 782.0], [63.2, 783.0], [63.3, 784.0], [63.4, 785.0], [63.5, 788.0], [63.6, 790.0], [63.7, 793.0], [63.8, 794.0], [63.9, 797.0], [64.0, 799.0], [64.1, 801.0], [64.2, 803.0], [64.3, 806.0], [64.4, 809.0], [64.5, 812.0], [64.6, 815.0], [64.7, 817.0], [64.8, 819.0], [64.9, 821.0], [65.0, 823.0], [65.1, 828.0], [65.2, 831.0], [65.3, 833.0], [65.4, 834.0], [65.5, 838.0], [65.6, 840.0], [65.7, 842.0], [65.8, 844.0], [65.9, 845.0], [66.0, 846.0], [66.1, 847.0], [66.2, 849.0], [66.3, 851.0], [66.4, 857.0], [66.5, 858.0], [66.6, 860.0], [66.7, 863.0], [66.8, 865.0], [66.9, 867.0], [67.0, 870.0], [67.1, 872.0], [67.2, 873.0], [67.3, 875.0], [67.4, 877.0], [67.5, 879.0], [67.6, 880.0], [67.7, 883.0], [67.8, 886.0], [67.9, 889.0], [68.0, 891.0], [68.1, 894.0], [68.2, 897.0], [68.3, 899.0], [68.4, 901.0], [68.5, 903.0], [68.6, 906.0], [68.7, 908.0], [68.8, 910.0], [68.9, 914.0], [69.0, 918.0], [69.1, 920.0], [69.2, 922.0], [69.3, 924.0], [69.4, 927.0], [69.5, 930.0], [69.6, 932.0], [69.7, 934.0], [69.8, 936.0], [69.9, 938.0], [70.0, 940.0], [70.1, 944.0], [70.2, 947.0], [70.3, 949.0], [70.4, 952.0], [70.5, 953.0], [70.6, 956.0], [70.7, 958.0], [70.8, 961.0], [70.9, 964.0], [71.0, 966.0], [71.1, 970.0], [71.2, 974.0], [71.3, 978.0], [71.4, 980.0], [71.5, 984.0], [71.6, 987.0], [71.7, 989.0], [71.8, 992.0], [71.9, 994.0], [72.0, 996.0], [72.1, 999.0], [72.2, 1000.0], [72.3, 1001.0], [72.4, 1004.0], [72.5, 1006.0], [72.6, 1011.0], [72.7, 1016.0], [72.8, 1021.0], [72.9, 1022.0], [73.0, 1025.0], [73.1, 1028.0], [73.2, 1034.0], [73.3, 1036.0], [73.4, 1041.0], [73.5, 1044.0], [73.6, 1049.0], [73.7, 1056.0], [73.8, 1059.0], [73.9, 1062.0], [74.0, 1066.0], [74.1, 1070.0], [74.2, 1073.0], [74.3, 1080.0], [74.4, 1083.0], [74.5, 1088.0], [74.6, 1091.0], [74.7, 1094.0], [74.8, 1098.0], [74.9, 1101.0], [75.0, 1106.0], [75.1, 1110.0], [75.2, 1114.0], [75.3, 1118.0], [75.4, 1121.0], [75.5, 1122.0], [75.6, 1125.0], [75.7, 1132.0], [75.8, 1144.0], [75.9, 1151.0], [76.0, 1153.0], [76.1, 1155.0], [76.2, 1159.0], [76.3, 1163.0], [76.4, 1167.0], [76.5, 1172.0], [76.6, 1175.0], [76.7, 1179.0], [76.8, 1183.0], [76.9, 1186.0], [77.0, 1191.0], [77.1, 1198.0], [77.2, 1200.0], [77.3, 1205.0], [77.4, 1209.0], [77.5, 1211.0], [77.6, 1215.0], [77.7, 1223.0], [77.8, 1233.0], [77.9, 1238.0], [78.0, 1243.0], [78.1, 1247.0], [78.2, 1254.0], [78.3, 1259.0], [78.4, 1265.0], [78.5, 1274.0], [78.6, 1288.0], [78.7, 1293.0], [78.8, 1299.0], [78.9, 1303.0], [79.0, 1311.0], [79.1, 1317.0], [79.2, 1320.0], [79.3, 1326.0], [79.4, 1335.0], [79.5, 1343.0], [79.6, 1354.0], [79.7, 1361.0], [79.8, 1370.0], [79.9, 1375.0], [80.0, 1382.0], [80.1, 1393.0], [80.2, 1401.0], [80.3, 1407.0], [80.4, 1414.0], [80.5, 1426.0], [80.6, 1432.0], [80.7, 1435.0], [80.8, 1444.0], [80.9, 1452.0], [81.0, 1458.0], [81.1, 1469.0], [81.2, 1476.0], [81.3, 1484.0], [81.4, 1491.0], [81.5, 1500.0], [81.6, 1504.0], [81.7, 1513.0], [81.8, 1521.0], [81.9, 1533.0], [82.0, 1544.0], [82.1, 1556.0], [82.2, 1560.0], [82.3, 1571.0], [82.4, 1583.0], [82.5, 1592.0], [82.6, 1595.0], [82.7, 1610.0], [82.8, 1632.0], [82.9, 1639.0], [83.0, 1643.0], [83.1, 1655.0], [83.2, 1670.0], [83.3, 1683.0], [83.4, 1687.0], [83.5, 1694.0], [83.6, 1699.0], [83.7, 1714.0], [83.8, 1717.0], [83.9, 1726.0], [84.0, 1731.0], [84.1, 1737.0], [84.2, 1748.0], [84.3, 1755.0], [84.4, 1764.0], [84.5, 1770.0], [84.6, 1777.0], [84.7, 1778.0], [84.8, 1790.0], [84.9, 1796.0], [85.0, 1804.0], [85.1, 1810.0], [85.2, 1819.0], [85.3, 1826.0], [85.4, 1840.0], [85.5, 1847.0], [85.6, 1858.0], [85.7, 1867.0], [85.8, 1880.0], [85.9, 1885.0], [86.0, 1897.0], [86.1, 1907.0], [86.2, 1913.0], [86.3, 1923.0], [86.4, 1927.0], [86.5, 1937.0], [86.6, 1945.0], [86.7, 1951.0], [86.8, 1962.0], [86.9, 1971.0], [87.0, 1987.0], [87.1, 2004.0], [87.2, 2010.0], [87.3, 2018.0], [87.4, 2036.0], [87.5, 2044.0], [87.6, 2054.0], [87.7, 2064.0], [87.8, 2067.0], [87.9, 2070.0], [88.0, 2081.0], [88.1, 2085.0], [88.2, 2095.0], [88.3, 2100.0], [88.4, 2108.0], [88.5, 2117.0], [88.6, 2131.0], [88.7, 2137.0], [88.8, 2141.0], [88.9, 2142.0], [89.0, 2148.0], [89.1, 2162.0], [89.2, 2177.0], [89.3, 2194.0], [89.4, 2200.0], [89.5, 2209.0], [89.6, 2215.0], [89.7, 2219.0], [89.8, 2224.0], [89.9, 2231.0], [90.0, 2238.0], [90.1, 2244.0], [90.2, 2250.0], [90.3, 2256.0], [90.4, 2260.0], [90.5, 2265.0], [90.6, 2270.0], [90.7, 2277.0], [90.8, 2285.0], [90.9, 2289.0], [91.0, 2295.0], [91.1, 2303.0], [91.2, 2313.0], [91.3, 2319.0], [91.4, 2326.0], [91.5, 2339.0], [91.6, 2342.0], [91.7, 2348.0], [91.8, 2359.0], [91.9, 2367.0], [92.0, 2371.0], [92.1, 2386.0], [92.2, 2402.0], [92.3, 2406.0], [92.4, 2411.0], [92.5, 2414.0], [92.6, 2420.0], [92.7, 2426.0], [92.8, 2432.0], [92.9, 2439.0], [93.0, 2448.0], [93.1, 2459.0], [93.2, 2468.0], [93.3, 2487.0], [93.4, 2493.0], [93.5, 2501.0], [93.6, 2512.0], [93.7, 2525.0], [93.8, 2531.0], [93.9, 2544.0], [94.0, 2550.0], [94.1, 2563.0], [94.2, 2572.0], [94.3, 2593.0], [94.4, 2607.0], [94.5, 2616.0], [94.6, 2622.0], [94.7, 2638.0], [94.8, 2653.0], [94.9, 2688.0], [95.0, 2705.0], [95.1, 2730.0], [95.2, 2753.0], [95.3, 2785.0], [95.4, 2808.0], [95.5, 2823.0], [95.6, 2851.0], [95.7, 2876.0], [95.8, 2928.0], [95.9, 2948.0], [96.0, 2982.0], [96.1, 3047.0], [96.2, 3079.0], [96.3, 3113.0], [96.4, 3155.0], [96.5, 3191.0], [96.6, 3225.0], [96.7, 3274.0], [96.8, 3309.0], [96.9, 3349.0], [97.0, 3396.0], [97.1, 3469.0], [97.2, 3546.0], [97.3, 3599.0], [97.4, 3740.0], [97.5, 3796.0], [97.6, 3888.0], [97.7, 3953.0], [97.8, 4044.0], [97.9, 4098.0], [98.0, 4267.0], [98.1, 4331.0], [98.2, 4427.0], [98.3, 4496.0], [98.4, 4581.0], [98.5, 4749.0], [98.6, 4900.0], [98.7, 4979.0], [98.8, 5047.0], [98.9, 5266.0], [99.0, 5381.0], [99.1, 5598.0], [99.2, 5847.0], [99.3, 6071.0], [99.4, 6682.0], [99.5, 7115.0], [99.6, 7401.0], [99.7, 8138.0], [99.8, 8860.0], [99.9, 13171.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 951.0, "series": [{"data": [[600.0, 346.0], [700.0, 317.0], [800.0, 223.0], [900.0, 202.0], [1000.0, 137.0], [1100.0, 121.0], [1200.0, 85.0], [1300.0, 72.0], [1400.0, 67.0], [1500.0, 60.0], [1600.0, 50.0], [1700.0, 69.0], [1800.0, 58.0], [1900.0, 53.0], [2000.0, 63.0], [2100.0, 56.0], [2200.0, 90.0], [2300.0, 57.0], [2400.0, 64.0], [2500.0, 48.0], [2600.0, 31.0], [2700.0, 22.0], [2800.0, 18.0], [2900.0, 16.0], [3000.0, 13.0], [3100.0, 13.0], [3200.0, 13.0], [3300.0, 13.0], [3400.0, 6.0], [3500.0, 8.0], [3700.0, 8.0], [3600.0, 4.0], [3800.0, 4.0], [3900.0, 8.0], [4000.0, 9.0], [4200.0, 4.0], [4100.0, 2.0], [4300.0, 5.0], [4400.0, 8.0], [4500.0, 6.0], [4600.0, 3.0], [4700.0, 4.0], [4800.0, 2.0], [5000.0, 4.0], [4900.0, 7.0], [5100.0, 3.0], [5200.0, 4.0], [5300.0, 4.0], [5500.0, 2.0], [5400.0, 3.0], [5800.0, 3.0], [5700.0, 2.0], [5900.0, 4.0], [6000.0, 1.0], [6300.0, 2.0], [6600.0, 2.0], [6400.0, 1.0], [6700.0, 4.0], [6900.0, 1.0], [7100.0, 3.0], [7200.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7700.0, 1.0], [7800.0, 2.0], [8100.0, 2.0], [8400.0, 1.0], [8200.0, 1.0], [8700.0, 1.0], [9200.0, 1.0], [8800.0, 1.0], [10000.0, 1.0], [9900.0, 1.0], [12100.0, 1.0], [13100.0, 1.0], [13700.0, 1.0], [13600.0, 1.0], [13900.0, 1.0], [14100.0, 1.0], [17100.0, 1.0], [200.0, 588.0], [300.0, 951.0], [400.0, 627.0], [500.0, 493.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 959.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2169.0, "series": [{"data": [[0.0, 2169.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2062.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 959.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6042377E12, "maxY": 10.0, "series": [{"data": [[1.60423782E12, 10.0], [1.60423812E12, 10.0], [1.60423794E12, 10.0], [1.60423776E12, 10.0], [1.60423824E12, 1.0], [1.60423806E12, 10.0], [1.60423788E12, 10.0], [1.6042377E12, 10.0], [1.60423818E12, 9.938879456706282], [1.604238E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423824E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 311.0, "minX": 1.0, "maxY": 5569.0, "series": [{"data": [[8.0, 1257.0], [4.0, 860.0], [2.0, 3182.0], [1.0, 5569.0], [9.0, 474.0], [10.0, 977.3896931094386], [5.0, 311.0], [6.0, 711.0], [3.0, 1892.0], [7.0, 349.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 978.5088631984588]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.75, "minX": 1.6042377E12, "maxY": 3805600.2333333334, "series": [{"data": [[1.60423782E12, 3766641.216666667], [1.60423812E12, 3625696.1], [1.60423794E12, 3147193.5166666666], [1.60423776E12, 2620404.533333333], [1.60423824E12, 46686.15], [1.60423806E12, 3131779.4166666665], [1.60423788E12, 3805600.2333333334], [1.6042377E12, 1679430.6166666667], [1.60423818E12, 2891221.4833333334], [1.604238E12, 2863987.816666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423782E12, 5106.65], [1.60423812E12, 5290.983333333334], [1.60423794E12, 4062.733333333333], [1.60423776E12, 4606.866666666667], [1.60423824E12, 7.75], [1.60423806E12, 4744.55], [1.60423788E12, 4717.35], [1.6042377E12, 1693.4166666666667], [1.60423818E12, 4446.65], [1.604238E12, 3900.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423824E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 862.8823529411766, "minX": 1.6042377E12, "maxY": 5569.0, "series": [{"data": [[1.60423782E12, 869.0395894428154], [1.60423812E12, 862.8823529411766], [1.60423794E12, 1116.9667896678993], [1.60423776E12, 962.7688679245285], [1.60423824E12, 5569.0], [1.60423806E12, 930.9164086687306], [1.60423788E12, 944.3929146537835], [1.6042377E12, 1171.0557939914163], [1.60423818E12, 1022.3242784380307], [1.604238E12, 1101.6869244935547]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423824E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 860.9383070301301, "minX": 1.6042377E12, "maxY": 5557.0, "series": [{"data": [[1.60423782E12, 866.0733137829917], [1.60423812E12, 860.9383070301301], [1.60423794E12, 1114.4298892988922], [1.60423776E12, 960.7767295597483], [1.60423824E12, 5557.0], [1.60423806E12, 929.2476780185762], [1.60423788E12, 941.106280193237], [1.6042377E12, 1168.1287553648071], [1.60423818E12, 1020.592529711375], [1.604238E12, 1099.6187845303875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423824E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6042377E12, "maxY": 0.33476394849785435, "series": [{"data": [[1.60423782E12, 0.013196480938416418], [1.60423812E12, 0.010043041606886662], [1.60423794E12, 0.016605166051660507], [1.60423776E12, 0.011006289308176116], [1.60423824E12, 0.0], [1.60423806E12, 0.013931888544891642], [1.60423788E12, 0.012882447665056375], [1.6042377E12, 0.33476394849785435], [1.60423818E12, 0.011884550084889653], [1.604238E12, 0.01841620626151014]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423824E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 216.0, "minX": 1.6042377E12, "maxY": 17156.0, "series": [{"data": [[1.60423782E12, 9292.0], [1.60423812E12, 7804.0], [1.60423794E12, 14179.0], [1.60423776E12, 13923.0], [1.60423824E12, 5569.0], [1.60423806E12, 6965.0], [1.60423788E12, 6071.0], [1.6042377E12, 12121.0], [1.60423818E12, 8173.0], [1.604238E12, 17156.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423782E12, 226.0], [1.60423812E12, 233.28199983358382], [1.60423794E12, 226.0], [1.60423776E12, 231.0], [1.60423824E12, 5569.0], [1.60423806E12, 229.0], [1.60423788E12, 226.1959997034073], [1.6042377E12, 224.2119998884201], [1.60423818E12, 226.61999971866607], [1.604238E12, 241.47999935150148]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423782E12, 226.0], [1.60423812E12, 233.91020006656646], [1.60423794E12, 227.12710015535356], [1.60423776E12, 231.30630006074907], [1.60423824E12, 5569.0], [1.60423806E12, 229.81060012340546], [1.60423788E12, 227.0], [1.6042377E12, 224.63320004463196], [1.60423818E12, 227.68200011253356], [1.604238E12, 242.77120010375975]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423782E12, 226.0], [1.60423812E12, 233.63099991679192], [1.60423794E12, 226.47549980580806], [1.60423776E12, 231.05149992406368], [1.60423824E12, 5569.0], [1.60423806E12, 229.29299984574317], [1.60423788E12, 226.81799985170363], [1.6042377E12, 224.44599994421006], [1.60423818E12, 227.20999985933304], [1.604238E12, 242.3359998703003]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423782E12, 218.0], [1.60423812E12, 227.0], [1.60423794E12, 216.0], [1.60423776E12, 224.0], [1.60423824E12, 5569.0], [1.60423806E12, 219.0], [1.60423788E12, 222.0], [1.6042377E12, 224.0], [1.60423818E12, 224.0], [1.604238E12, 230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423782E12, 486.0], [1.60423812E12, 509.0], [1.60423794E12, 654.5], [1.60423776E12, 630.5], [1.60423824E12, 5569.0], [1.60423806E12, 515.5], [1.60423788E12, 567.0], [1.6042377E12, 725.0], [1.60423818E12, 624.0], [1.604238E12, 716.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423824E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 275.5, "minX": 1.0, "maxY": 3003.5, "series": [{"data": [[2.0, 3003.5], [3.0, 1522.0], [4.0, 1322.0], [5.0, 1165.0], [6.0, 905.5], [7.0, 902.5], [8.0, 876.5], [9.0, 736.5], [10.0, 672.0], [11.0, 644.0], [12.0, 584.5], [13.0, 545.0], [14.0, 530.5], [15.0, 535.5], [1.0, 1705.0], [16.0, 467.5], [17.0, 403.5], [18.0, 323.5], [19.0, 335.0], [20.0, 333.5], [21.0, 372.0], [22.0, 342.5], [23.0, 352.0], [24.0, 275.5], [25.0, 319.0], [26.0, 296.0], [28.0, 313.5], [29.0, 288.0], [31.0, 321.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 275.0, "minX": 1.0, "maxY": 2998.5, "series": [{"data": [[2.0, 2998.5], [3.0, 1519.0], [4.0, 1316.5], [5.0, 1150.0], [6.0, 904.0], [7.0, 901.0], [8.0, 872.5], [9.0, 734.5], [10.0, 671.0], [11.0, 643.0], [12.0, 583.5], [13.0, 543.5], [14.0, 529.5], [15.0, 535.0], [1.0, 1703.0], [16.0, 467.5], [17.0, 403.5], [18.0, 323.5], [19.0, 335.0], [20.0, 333.5], [21.0, 372.0], [22.0, 342.5], [23.0, 352.0], [24.0, 275.0], [25.0, 319.0], [26.0, 296.0], [28.0, 313.5], [29.0, 287.0], [31.0, 321.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.05, "minX": 1.6042377E12, "maxY": 11.616666666666667, "series": [{"data": [[1.60423782E12, 11.366666666666667], [1.60423812E12, 11.616666666666667], [1.60423794E12, 9.033333333333333], [1.60423776E12, 10.6], [1.60423806E12, 10.766666666666667], [1.60423788E12, 10.35], [1.6042377E12, 4.05], [1.60423818E12, 9.666666666666666], [1.604238E12, 9.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423818E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6042377E12, "maxY": 11.616666666666667, "series": [{"data": [[1.60423782E12, 11.366666666666667], [1.60423812E12, 11.616666666666667], [1.60423794E12, 9.033333333333333], [1.60423776E12, 10.6], [1.60423824E12, 0.016666666666666666], [1.60423806E12, 10.766666666666667], [1.60423788E12, 10.35], [1.6042377E12, 3.8833333333333333], [1.60423818E12, 9.816666666666666], [1.604238E12, 9.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423824E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6042377E12, "maxY": 11.616666666666667, "series": [{"data": [[1.60423782E12, 11.366666666666667], [1.60423812E12, 11.616666666666667], [1.60423794E12, 9.033333333333333], [1.60423776E12, 10.6], [1.60423824E12, 0.016666666666666666], [1.60423806E12, 10.766666666666667], [1.60423788E12, 10.35], [1.6042377E12, 3.8833333333333333], [1.60423818E12, 9.816666666666666], [1.604238E12, 9.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423824E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6042377E12, "maxY": 11.616666666666667, "series": [{"data": [[1.60423782E12, 11.366666666666667], [1.60423812E12, 11.616666666666667], [1.60423794E12, 9.033333333333333], [1.60423776E12, 10.6], [1.60423824E12, 0.016666666666666666], [1.60423806E12, 10.766666666666667], [1.60423788E12, 10.35], [1.6042377E12, 3.8833333333333333], [1.60423818E12, 9.816666666666666], [1.604238E12, 9.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423824E12, "title": "Total Transactions Per Second"}},
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

