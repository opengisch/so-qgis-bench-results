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
        data: {"result": {"minY": 213.0, "minX": 0.0, "maxY": 17796.0, "series": [{"data": [[0.0, 213.0], [0.1, 222.0], [0.2, 224.0], [0.3, 225.0], [0.4, 226.0], [0.5, 226.0], [0.6, 226.0], [0.7, 227.0], [0.8, 227.0], [0.9, 228.0], [1.0, 228.0], [1.1, 229.0], [1.2, 230.0], [1.3, 231.0], [1.4, 231.0], [1.5, 231.0], [1.6, 232.0], [1.7, 232.0], [1.8, 233.0], [1.9, 233.0], [2.0, 234.0], [2.1, 234.0], [2.2, 235.0], [2.3, 235.0], [2.4, 235.0], [2.5, 235.0], [2.6, 236.0], [2.7, 236.0], [2.8, 237.0], [2.9, 237.0], [3.0, 237.0], [3.1, 238.0], [3.2, 238.0], [3.3, 238.0], [3.4, 239.0], [3.5, 239.0], [3.6, 240.0], [3.7, 240.0], [3.8, 241.0], [3.9, 241.0], [4.0, 242.0], [4.1, 242.0], [4.2, 243.0], [4.3, 243.0], [4.4, 244.0], [4.5, 244.0], [4.6, 244.0], [4.7, 245.0], [4.8, 246.0], [4.9, 246.0], [5.0, 246.0], [5.1, 247.0], [5.2, 248.0], [5.3, 249.0], [5.4, 249.0], [5.5, 249.0], [5.6, 250.0], [5.7, 250.0], [5.8, 251.0], [5.9, 251.0], [6.0, 252.0], [6.1, 252.0], [6.2, 253.0], [6.3, 253.0], [6.4, 254.0], [6.5, 254.0], [6.6, 255.0], [6.7, 256.0], [6.8, 257.0], [6.9, 257.0], [7.0, 258.0], [7.1, 258.0], [7.2, 259.0], [7.3, 260.0], [7.4, 262.0], [7.5, 262.0], [7.6, 263.0], [7.7, 263.0], [7.8, 264.0], [7.9, 265.0], [8.0, 266.0], [8.1, 266.0], [8.2, 268.0], [8.3, 268.0], [8.4, 269.0], [8.5, 270.0], [8.6, 271.0], [8.7, 271.0], [8.8, 272.0], [8.9, 273.0], [9.0, 274.0], [9.1, 275.0], [9.2, 276.0], [9.3, 276.0], [9.4, 277.0], [9.5, 279.0], [9.6, 280.0], [9.7, 281.0], [9.8, 281.0], [9.9, 282.0], [10.0, 283.0], [10.1, 284.0], [10.2, 284.0], [10.3, 286.0], [10.4, 287.0], [10.5, 288.0], [10.6, 288.0], [10.7, 290.0], [10.8, 290.0], [10.9, 291.0], [11.0, 292.0], [11.1, 292.0], [11.2, 293.0], [11.3, 294.0], [11.4, 294.0], [11.5, 295.0], [11.6, 296.0], [11.7, 296.0], [11.8, 296.0], [11.9, 297.0], [12.0, 298.0], [12.1, 298.0], [12.2, 299.0], [12.3, 299.0], [12.4, 299.0], [12.5, 300.0], [12.6, 300.0], [12.7, 301.0], [12.8, 301.0], [12.9, 302.0], [13.0, 302.0], [13.1, 302.0], [13.2, 303.0], [13.3, 303.0], [13.4, 304.0], [13.5, 304.0], [13.6, 304.0], [13.7, 305.0], [13.8, 305.0], [13.9, 305.0], [14.0, 306.0], [14.1, 307.0], [14.2, 307.0], [14.3, 308.0], [14.4, 308.0], [14.5, 309.0], [14.6, 309.0], [14.7, 310.0], [14.8, 310.0], [14.9, 310.0], [15.0, 311.0], [15.1, 311.0], [15.2, 312.0], [15.3, 312.0], [15.4, 313.0], [15.5, 313.0], [15.6, 313.0], [15.7, 314.0], [15.8, 314.0], [15.9, 315.0], [16.0, 316.0], [16.1, 316.0], [16.2, 316.0], [16.3, 317.0], [16.4, 317.0], [16.5, 317.0], [16.6, 318.0], [16.7, 318.0], [16.8, 318.0], [16.9, 319.0], [17.0, 319.0], [17.1, 320.0], [17.2, 321.0], [17.3, 321.0], [17.4, 321.0], [17.5, 322.0], [17.6, 322.0], [17.7, 323.0], [17.8, 323.0], [17.9, 324.0], [18.0, 324.0], [18.1, 325.0], [18.2, 325.0], [18.3, 326.0], [18.4, 326.0], [18.5, 327.0], [18.6, 327.0], [18.7, 327.0], [18.8, 328.0], [18.9, 329.0], [19.0, 329.0], [19.1, 330.0], [19.2, 331.0], [19.3, 331.0], [19.4, 332.0], [19.5, 333.0], [19.6, 333.0], [19.7, 334.0], [19.8, 334.0], [19.9, 334.0], [20.0, 335.0], [20.1, 336.0], [20.2, 337.0], [20.3, 337.0], [20.4, 338.0], [20.5, 339.0], [20.6, 340.0], [20.7, 340.0], [20.8, 340.0], [20.9, 341.0], [21.0, 341.0], [21.1, 342.0], [21.2, 342.0], [21.3, 343.0], [21.4, 343.0], [21.5, 344.0], [21.6, 345.0], [21.7, 345.0], [21.8, 346.0], [21.9, 347.0], [22.0, 347.0], [22.1, 347.0], [22.2, 348.0], [22.3, 349.0], [22.4, 349.0], [22.5, 350.0], [22.6, 350.0], [22.7, 351.0], [22.8, 351.0], [22.9, 351.0], [23.0, 352.0], [23.1, 352.0], [23.2, 353.0], [23.3, 355.0], [23.4, 355.0], [23.5, 356.0], [23.6, 356.0], [23.7, 356.0], [23.8, 356.0], [23.9, 357.0], [24.0, 357.0], [24.1, 358.0], [24.2, 359.0], [24.3, 359.0], [24.4, 360.0], [24.5, 360.0], [24.6, 361.0], [24.7, 361.0], [24.8, 362.0], [24.9, 362.0], [25.0, 362.0], [25.1, 363.0], [25.2, 363.0], [25.3, 364.0], [25.4, 365.0], [25.5, 365.0], [25.6, 367.0], [25.7, 368.0], [25.8, 368.0], [25.9, 369.0], [26.0, 369.0], [26.1, 370.0], [26.2, 370.0], [26.3, 371.0], [26.4, 372.0], [26.5, 372.0], [26.6, 373.0], [26.7, 374.0], [26.8, 374.0], [26.9, 375.0], [27.0, 376.0], [27.1, 376.0], [27.2, 377.0], [27.3, 377.0], [27.4, 379.0], [27.5, 379.0], [27.6, 380.0], [27.7, 380.0], [27.8, 381.0], [27.9, 383.0], [28.0, 383.0], [28.1, 384.0], [28.2, 385.0], [28.3, 385.0], [28.4, 385.0], [28.5, 386.0], [28.6, 386.0], [28.7, 387.0], [28.8, 388.0], [28.9, 389.0], [29.0, 390.0], [29.1, 391.0], [29.2, 392.0], [29.3, 392.0], [29.4, 393.0], [29.5, 394.0], [29.6, 395.0], [29.7, 395.0], [29.8, 396.0], [29.9, 397.0], [30.0, 397.0], [30.1, 398.0], [30.2, 399.0], [30.3, 400.0], [30.4, 400.0], [30.5, 401.0], [30.6, 402.0], [30.7, 403.0], [30.8, 403.0], [30.9, 404.0], [31.0, 404.0], [31.1, 405.0], [31.2, 405.0], [31.3, 406.0], [31.4, 407.0], [31.5, 407.0], [31.6, 408.0], [31.7, 408.0], [31.8, 409.0], [31.9, 409.0], [32.0, 410.0], [32.1, 410.0], [32.2, 411.0], [32.3, 412.0], [32.4, 413.0], [32.5, 413.0], [32.6, 414.0], [32.7, 415.0], [32.8, 417.0], [32.9, 418.0], [33.0, 418.0], [33.1, 419.0], [33.2, 420.0], [33.3, 421.0], [33.4, 421.0], [33.5, 422.0], [33.6, 423.0], [33.7, 424.0], [33.8, 424.0], [33.9, 425.0], [34.0, 426.0], [34.1, 427.0], [34.2, 428.0], [34.3, 428.0], [34.4, 429.0], [34.5, 430.0], [34.6, 431.0], [34.7, 432.0], [34.8, 433.0], [34.9, 434.0], [35.0, 434.0], [35.1, 435.0], [35.2, 436.0], [35.3, 436.0], [35.4, 437.0], [35.5, 438.0], [35.6, 438.0], [35.7, 439.0], [35.8, 440.0], [35.9, 441.0], [36.0, 442.0], [36.1, 443.0], [36.2, 444.0], [36.3, 445.0], [36.4, 446.0], [36.5, 447.0], [36.6, 448.0], [36.7, 448.0], [36.8, 450.0], [36.9, 451.0], [37.0, 451.0], [37.1, 452.0], [37.2, 453.0], [37.3, 453.0], [37.4, 454.0], [37.5, 455.0], [37.6, 456.0], [37.7, 457.0], [37.8, 458.0], [37.9, 459.0], [38.0, 460.0], [38.1, 461.0], [38.2, 462.0], [38.3, 462.0], [38.4, 463.0], [38.5, 464.0], [38.6, 465.0], [38.7, 465.0], [38.8, 465.0], [38.9, 467.0], [39.0, 468.0], [39.1, 469.0], [39.2, 470.0], [39.3, 470.0], [39.4, 472.0], [39.5, 472.0], [39.6, 473.0], [39.7, 474.0], [39.8, 475.0], [39.9, 475.0], [40.0, 476.0], [40.1, 478.0], [40.2, 478.0], [40.3, 479.0], [40.4, 480.0], [40.5, 481.0], [40.6, 482.0], [40.7, 484.0], [40.8, 484.0], [40.9, 486.0], [41.0, 486.0], [41.1, 487.0], [41.2, 487.0], [41.3, 488.0], [41.4, 489.0], [41.5, 490.0], [41.6, 492.0], [41.7, 492.0], [41.8, 493.0], [41.9, 494.0], [42.0, 495.0], [42.1, 495.0], [42.2, 497.0], [42.3, 498.0], [42.4, 499.0], [42.5, 499.0], [42.6, 500.0], [42.7, 501.0], [42.8, 502.0], [42.9, 503.0], [43.0, 503.0], [43.1, 503.0], [43.2, 506.0], [43.3, 506.0], [43.4, 508.0], [43.5, 509.0], [43.6, 510.0], [43.7, 511.0], [43.8, 512.0], [43.9, 514.0], [44.0, 516.0], [44.1, 516.0], [44.2, 517.0], [44.3, 519.0], [44.4, 520.0], [44.5, 521.0], [44.6, 522.0], [44.7, 523.0], [44.8, 524.0], [44.9, 525.0], [45.0, 526.0], [45.1, 527.0], [45.2, 529.0], [45.3, 530.0], [45.4, 531.0], [45.5, 533.0], [45.6, 533.0], [45.7, 535.0], [45.8, 536.0], [45.9, 537.0], [46.0, 538.0], [46.1, 539.0], [46.2, 540.0], [46.3, 540.0], [46.4, 541.0], [46.5, 543.0], [46.6, 544.0], [46.7, 544.0], [46.8, 545.0], [46.9, 545.0], [47.0, 546.0], [47.1, 547.0], [47.2, 548.0], [47.3, 549.0], [47.4, 550.0], [47.5, 551.0], [47.6, 552.0], [47.7, 554.0], [47.8, 554.0], [47.9, 555.0], [48.0, 556.0], [48.1, 557.0], [48.2, 558.0], [48.3, 560.0], [48.4, 562.0], [48.5, 562.0], [48.6, 563.0], [48.7, 564.0], [48.8, 566.0], [48.9, 568.0], [49.0, 569.0], [49.1, 571.0], [49.2, 572.0], [49.3, 573.0], [49.4, 575.0], [49.5, 576.0], [49.6, 577.0], [49.7, 578.0], [49.8, 580.0], [49.9, 583.0], [50.0, 583.0], [50.1, 584.0], [50.2, 585.0], [50.3, 587.0], [50.4, 589.0], [50.5, 590.0], [50.6, 591.0], [50.7, 593.0], [50.8, 594.0], [50.9, 596.0], [51.0, 597.0], [51.1, 600.0], [51.2, 601.0], [51.3, 604.0], [51.4, 604.0], [51.5, 606.0], [51.6, 608.0], [51.7, 609.0], [51.8, 610.0], [51.9, 611.0], [52.0, 612.0], [52.1, 614.0], [52.2, 617.0], [52.3, 617.0], [52.4, 619.0], [52.5, 621.0], [52.6, 622.0], [52.7, 624.0], [52.8, 626.0], [52.9, 627.0], [53.0, 628.0], [53.1, 629.0], [53.2, 632.0], [53.3, 633.0], [53.4, 634.0], [53.5, 636.0], [53.6, 637.0], [53.7, 638.0], [53.8, 639.0], [53.9, 639.0], [54.0, 641.0], [54.1, 642.0], [54.2, 643.0], [54.3, 644.0], [54.4, 646.0], [54.5, 647.0], [54.6, 648.0], [54.7, 649.0], [54.8, 650.0], [54.9, 652.0], [55.0, 653.0], [55.1, 654.0], [55.2, 655.0], [55.3, 657.0], [55.4, 658.0], [55.5, 659.0], [55.6, 661.0], [55.7, 662.0], [55.8, 664.0], [55.9, 665.0], [56.0, 667.0], [56.1, 669.0], [56.2, 670.0], [56.3, 672.0], [56.4, 673.0], [56.5, 674.0], [56.6, 675.0], [56.7, 675.0], [56.8, 677.0], [56.9, 679.0], [57.0, 680.0], [57.1, 681.0], [57.2, 683.0], [57.3, 685.0], [57.4, 686.0], [57.5, 688.0], [57.6, 688.0], [57.7, 690.0], [57.8, 692.0], [57.9, 694.0], [58.0, 696.0], [58.1, 697.0], [58.2, 698.0], [58.3, 701.0], [58.4, 704.0], [58.5, 706.0], [58.6, 708.0], [58.7, 709.0], [58.8, 711.0], [58.9, 713.0], [59.0, 714.0], [59.1, 716.0], [59.2, 717.0], [59.3, 718.0], [59.4, 719.0], [59.5, 721.0], [59.6, 722.0], [59.7, 724.0], [59.8, 726.0], [59.9, 727.0], [60.0, 729.0], [60.1, 730.0], [60.2, 731.0], [60.3, 732.0], [60.4, 733.0], [60.5, 735.0], [60.6, 737.0], [60.7, 739.0], [60.8, 740.0], [60.9, 741.0], [61.0, 742.0], [61.1, 745.0], [61.2, 748.0], [61.3, 750.0], [61.4, 751.0], [61.5, 754.0], [61.6, 755.0], [61.7, 757.0], [61.8, 759.0], [61.9, 761.0], [62.0, 762.0], [62.1, 765.0], [62.2, 767.0], [62.3, 768.0], [62.4, 770.0], [62.5, 772.0], [62.6, 773.0], [62.7, 774.0], [62.8, 776.0], [62.9, 778.0], [63.0, 780.0], [63.1, 781.0], [63.2, 784.0], [63.3, 785.0], [63.4, 788.0], [63.5, 790.0], [63.6, 792.0], [63.7, 794.0], [63.8, 796.0], [63.9, 800.0], [64.0, 801.0], [64.1, 803.0], [64.2, 804.0], [64.3, 805.0], [64.4, 807.0], [64.5, 809.0], [64.6, 810.0], [64.7, 811.0], [64.8, 813.0], [64.9, 815.0], [65.0, 820.0], [65.1, 822.0], [65.2, 824.0], [65.3, 827.0], [65.4, 828.0], [65.5, 829.0], [65.6, 830.0], [65.7, 831.0], [65.8, 834.0], [65.9, 835.0], [66.0, 838.0], [66.1, 841.0], [66.2, 847.0], [66.3, 849.0], [66.4, 851.0], [66.5, 853.0], [66.6, 854.0], [66.7, 856.0], [66.8, 858.0], [66.9, 862.0], [67.0, 863.0], [67.1, 865.0], [67.2, 867.0], [67.3, 868.0], [67.4, 869.0], [67.5, 873.0], [67.6, 875.0], [67.7, 876.0], [67.8, 879.0], [67.9, 880.0], [68.0, 881.0], [68.1, 882.0], [68.2, 883.0], [68.3, 884.0], [68.4, 888.0], [68.5, 891.0], [68.6, 893.0], [68.7, 897.0], [68.8, 898.0], [68.9, 901.0], [69.0, 902.0], [69.1, 907.0], [69.2, 910.0], [69.3, 914.0], [69.4, 920.0], [69.5, 924.0], [69.6, 926.0], [69.7, 930.0], [69.8, 933.0], [69.9, 937.0], [70.0, 938.0], [70.1, 943.0], [70.2, 943.0], [70.3, 948.0], [70.4, 951.0], [70.5, 953.0], [70.6, 954.0], [70.7, 955.0], [70.8, 956.0], [70.9, 962.0], [71.0, 963.0], [71.1, 966.0], [71.2, 970.0], [71.3, 972.0], [71.4, 974.0], [71.5, 977.0], [71.6, 979.0], [71.7, 983.0], [71.8, 984.0], [71.9, 988.0], [72.0, 990.0], [72.1, 993.0], [72.2, 997.0], [72.3, 999.0], [72.4, 1001.0], [72.5, 1004.0], [72.6, 1005.0], [72.7, 1014.0], [72.8, 1016.0], [72.9, 1019.0], [73.0, 1026.0], [73.1, 1029.0], [73.2, 1031.0], [73.3, 1036.0], [73.4, 1039.0], [73.5, 1042.0], [73.6, 1044.0], [73.7, 1049.0], [73.8, 1054.0], [73.9, 1058.0], [74.0, 1060.0], [74.1, 1063.0], [74.2, 1067.0], [74.3, 1071.0], [74.4, 1074.0], [74.5, 1079.0], [74.6, 1080.0], [74.7, 1086.0], [74.8, 1088.0], [74.9, 1091.0], [75.0, 1096.0], [75.1, 1100.0], [75.2, 1103.0], [75.3, 1105.0], [75.4, 1108.0], [75.5, 1111.0], [75.6, 1113.0], [75.7, 1118.0], [75.8, 1123.0], [75.9, 1125.0], [76.0, 1127.0], [76.1, 1132.0], [76.2, 1137.0], [76.3, 1141.0], [76.4, 1146.0], [76.5, 1147.0], [76.6, 1151.0], [76.7, 1157.0], [76.8, 1161.0], [76.9, 1164.0], [77.0, 1167.0], [77.1, 1169.0], [77.2, 1169.0], [77.3, 1175.0], [77.4, 1180.0], [77.5, 1185.0], [77.6, 1189.0], [77.7, 1192.0], [77.8, 1196.0], [77.9, 1207.0], [78.0, 1210.0], [78.1, 1216.0], [78.2, 1220.0], [78.3, 1225.0], [78.4, 1232.0], [78.5, 1241.0], [78.6, 1248.0], [78.7, 1251.0], [78.8, 1258.0], [78.9, 1264.0], [79.0, 1271.0], [79.1, 1278.0], [79.2, 1283.0], [79.3, 1295.0], [79.4, 1298.0], [79.5, 1310.0], [79.6, 1318.0], [79.7, 1328.0], [79.8, 1337.0], [79.9, 1341.0], [80.0, 1350.0], [80.1, 1356.0], [80.2, 1364.0], [80.3, 1370.0], [80.4, 1384.0], [80.5, 1388.0], [80.6, 1402.0], [80.7, 1410.0], [80.8, 1413.0], [80.9, 1421.0], [81.0, 1424.0], [81.1, 1432.0], [81.2, 1440.0], [81.3, 1450.0], [81.4, 1461.0], [81.5, 1475.0], [81.6, 1489.0], [81.7, 1498.0], [81.8, 1508.0], [81.9, 1514.0], [82.0, 1520.0], [82.1, 1530.0], [82.2, 1535.0], [82.3, 1545.0], [82.4, 1552.0], [82.5, 1567.0], [82.6, 1571.0], [82.7, 1579.0], [82.8, 1596.0], [82.9, 1604.0], [83.0, 1610.0], [83.1, 1624.0], [83.2, 1632.0], [83.3, 1642.0], [83.4, 1651.0], [83.5, 1665.0], [83.6, 1670.0], [83.7, 1679.0], [83.8, 1691.0], [83.9, 1695.0], [84.0, 1704.0], [84.1, 1708.0], [84.2, 1715.0], [84.3, 1720.0], [84.4, 1728.0], [84.5, 1739.0], [84.6, 1752.0], [84.7, 1768.0], [84.8, 1775.0], [84.9, 1789.0], [85.0, 1802.0], [85.1, 1807.0], [85.2, 1813.0], [85.3, 1824.0], [85.4, 1835.0], [85.5, 1842.0], [85.6, 1849.0], [85.7, 1857.0], [85.8, 1863.0], [85.9, 1866.0], [86.0, 1872.0], [86.1, 1878.0], [86.2, 1886.0], [86.3, 1892.0], [86.4, 1897.0], [86.5, 1903.0], [86.6, 1908.0], [86.7, 1912.0], [86.8, 1924.0], [86.9, 1929.0], [87.0, 1936.0], [87.1, 1938.0], [87.2, 1948.0], [87.3, 1951.0], [87.4, 1967.0], [87.5, 1975.0], [87.6, 1982.0], [87.7, 1989.0], [87.8, 2003.0], [87.9, 2018.0], [88.0, 2036.0], [88.1, 2046.0], [88.2, 2058.0], [88.3, 2066.0], [88.4, 2069.0], [88.5, 2087.0], [88.6, 2097.0], [88.7, 2102.0], [88.8, 2107.0], [88.9, 2113.0], [89.0, 2118.0], [89.1, 2122.0], [89.2, 2131.0], [89.3, 2136.0], [89.4, 2144.0], [89.5, 2149.0], [89.6, 2157.0], [89.7, 2165.0], [89.8, 2176.0], [89.9, 2182.0], [90.0, 2191.0], [90.1, 2208.0], [90.2, 2210.0], [90.3, 2220.0], [90.4, 2235.0], [90.5, 2245.0], [90.6, 2252.0], [90.7, 2260.0], [90.8, 2271.0], [90.9, 2274.0], [91.0, 2283.0], [91.1, 2287.0], [91.2, 2289.0], [91.3, 2309.0], [91.4, 2313.0], [91.5, 2319.0], [91.6, 2331.0], [91.7, 2337.0], [91.8, 2348.0], [91.9, 2352.0], [92.0, 2360.0], [92.1, 2369.0], [92.2, 2391.0], [92.3, 2394.0], [92.4, 2401.0], [92.5, 2408.0], [92.6, 2418.0], [92.7, 2420.0], [92.8, 2425.0], [92.9, 2431.0], [93.0, 2444.0], [93.1, 2455.0], [93.2, 2469.0], [93.3, 2487.0], [93.4, 2492.0], [93.5, 2501.0], [93.6, 2512.0], [93.7, 2529.0], [93.8, 2537.0], [93.9, 2548.0], [94.0, 2559.0], [94.1, 2569.0], [94.2, 2579.0], [94.3, 2595.0], [94.4, 2606.0], [94.5, 2609.0], [94.6, 2637.0], [94.7, 2652.0], [94.8, 2669.0], [94.9, 2694.0], [95.0, 2713.0], [95.1, 2728.0], [95.2, 2741.0], [95.3, 2786.0], [95.4, 2798.0], [95.5, 2815.0], [95.6, 2843.0], [95.7, 2861.0], [95.8, 2895.0], [95.9, 2927.0], [96.0, 2965.0], [96.1, 2993.0], [96.2, 3034.0], [96.3, 3089.0], [96.4, 3125.0], [96.5, 3157.0], [96.6, 3186.0], [96.7, 3243.0], [96.8, 3251.0], [96.9, 3328.0], [97.0, 3394.0], [97.1, 3516.0], [97.2, 3552.0], [97.3, 3658.0], [97.4, 3776.0], [97.5, 3908.0], [97.6, 3997.0], [97.7, 4069.0], [97.8, 4141.0], [97.9, 4230.0], [98.0, 4285.0], [98.1, 4407.0], [98.2, 4484.0], [98.3, 4519.0], [98.4, 4560.0], [98.5, 4660.0], [98.6, 4771.0], [98.7, 4874.0], [98.8, 4986.0], [98.9, 5101.0], [99.0, 5199.0], [99.1, 5494.0], [99.2, 5654.0], [99.3, 6008.0], [99.4, 6537.0], [99.5, 7135.0], [99.6, 7773.0], [99.7, 8353.0], [99.8, 9031.0], [99.9, 13034.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 925.0, "series": [{"data": [[600.0, 371.0], [700.0, 293.0], [800.0, 256.0], [900.0, 182.0], [1000.0, 143.0], [1100.0, 143.0], [1200.0, 82.0], [1300.0, 58.0], [1400.0, 61.0], [1500.0, 59.0], [1600.0, 58.0], [1700.0, 53.0], [1800.0, 77.0], [1900.0, 66.0], [2000.0, 48.0], [2100.0, 72.0], [2300.0, 58.0], [2200.0, 63.0], [2400.0, 57.0], [2500.0, 45.0], [2600.0, 31.0], [2800.0, 21.0], [2700.0, 25.0], [2900.0, 17.0], [3000.0, 7.0], [3100.0, 17.0], [3200.0, 13.0], [3300.0, 7.0], [3400.0, 3.0], [3500.0, 7.0], [3700.0, 4.0], [3600.0, 8.0], [3800.0, 3.0], [3900.0, 6.0], [4000.0, 6.0], [4100.0, 6.0], [4200.0, 10.0], [4300.0, 3.0], [4400.0, 8.0], [4500.0, 12.0], [4600.0, 3.0], [4800.0, 5.0], [4700.0, 5.0], [5100.0, 7.0], [4900.0, 5.0], [5000.0, 3.0], [5200.0, 1.0], [5300.0, 1.0], [5400.0, 3.0], [5600.0, 3.0], [5500.0, 2.0], [5700.0, 2.0], [5900.0, 2.0], [6000.0, 2.0], [6100.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6600.0, 2.0], [6500.0, 2.0], [6900.0, 2.0], [7100.0, 1.0], [7400.0, 1.0], [7200.0, 1.0], [7500.0, 2.0], [7700.0, 2.0], [8000.0, 1.0], [8200.0, 2.0], [8300.0, 2.0], [8700.0, 2.0], [8800.0, 1.0], [9000.0, 2.0], [9600.0, 1.0], [9700.0, 1.0], [9800.0, 1.0], [13100.0, 1.0], [13000.0, 1.0], [13200.0, 1.0], [13600.0, 2.0], [17700.0, 1.0], [200.0, 647.0], [300.0, 925.0], [400.0, 634.0], [500.0, 446.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 948.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2212.0, "series": [{"data": [[0.0, 2212.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2030.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 948.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.548387096774194, "minX": 1.6023858E12, "maxY": 10.0, "series": [{"data": [[1.60238604E12, 10.0], [1.60238622E12, 10.0], [1.60238616E12, 10.0], [1.60238586E12, 10.0], [1.60238634E12, 8.548387096774194], [1.6023858E12, 10.0], [1.60238628E12, 10.0], [1.60238598E12, 10.0], [1.60238592E12, 10.0], [1.6023861E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238634E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 322.0, "minX": 1.0, "maxY": 5798.0, "series": [{"data": [[8.0, 322.0], [4.0, 2635.0], [2.0, 383.0], [1.0, 5798.0], [9.0, 829.0], [10.0, 967.4765489287781], [5.0, 2563.0], [6.0, 544.0], [3.0, 4989.0], [7.0, 359.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 969.3483622350675]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 241.25, "minX": 1.6023858E12, "maxY": 3783432.933333333, "series": [{"data": [[1.60238604E12, 3168598.716666667], [1.60238622E12, 3780155.3], [1.60238616E12, 2805438.8833333333], [1.60238586E12, 2727985.4833333334], [1.60238634E12, 203288.8], [1.6023858E12, 1239401.8333333333], [1.60238628E12, 3048320.7333333334], [1.60238598E12, 3783432.933333333], [1.60238592E12, 3597218.9166666665], [1.6023861E12, 3225392.533333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60238604E12, 4142.733333333334], [1.60238622E12, 5294.15], [1.60238616E12, 4582.2], [1.60238586E12, 4066.883333333333], [1.60238634E12, 241.25], [1.6023858E12, 1060.5333333333333], [1.60238628E12, 4543.3], [1.60238598E12, 5182.283333333334], [1.60238592E12, 5391.766666666666], [1.6023861E12, 4072.233333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238634E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 823.4283746556467, "minX": 1.6023858E12, "maxY": 1349.8064516129032, "series": [{"data": [[1.60238604E12, 1088.9635701275054], [1.60238622E12, 869.7349570200582], [1.60238616E12, 954.0623003194895], [1.60238586E12, 1077.2938053097341], [1.60238634E12, 1349.8064516129032], [1.6023858E12, 1331.678321678321], [1.60238628E12, 985.7873754152827], [1.60238598E12, 879.982430453879], [1.60238592E12, 823.4283746556467], [1.6023861E12, 1050.3227513227503]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238634E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 820.9641873278239, "minX": 1.6023858E12, "maxY": 1347.774193548387, "series": [{"data": [[1.60238604E12, 1085.9453551912563], [1.60238622E12, 867.7363896848142], [1.60238616E12, 952.2635782747598], [1.60238586E12, 1074.9044247787606], [1.60238634E12, 1347.774193548387], [1.6023858E12, 1327.314685314686], [1.60238628E12, 983.9634551495018], [1.60238598E12, 877.0497803806735], [1.60238592E12, 820.9641873278239], [1.6023861E12, 1047.4303350970015]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238634E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6023858E12, "maxY": 0.6713286713286715, "series": [{"data": [[1.60238604E12, 0.00910746812386157], [1.60238622E12, 0.007163323782234956], [1.60238616E12, 0.01916932907348244], [1.60238586E12, 0.012389380530973451], [1.60238634E12, 0.0], [1.6023858E12, 0.6713286713286715], [1.60238628E12, 0.006644518272425247], [1.60238598E12, 0.01171303074670571], [1.60238592E12, 0.011019283746556478], [1.6023861E12, 0.01763668430335097]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238634E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 213.0, "minX": 1.6023858E12, "maxY": 17796.0, "series": [{"data": [[1.60238604E12, 13686.0], [1.60238622E12, 6113.0], [1.60238616E12, 8353.0], [1.60238586E12, 13662.0], [1.60238634E12, 5798.0], [1.6023858E12, 4484.0], [1.60238628E12, 9067.0], [1.60238598E12, 7790.0], [1.60238592E12, 8801.0], [1.6023861E12, 17796.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60238604E12, 228.0], [1.60238622E12, 228.0], [1.60238616E12, 224.0], [1.60238586E12, 233.0], [1.60238634E12, 272.0], [1.6023858E12, 266.3999991416931], [1.60238628E12, 231.4269998562336], [1.60238598E12, 226.0], [1.60238592E12, 226.0], [1.6023861E12, 235.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60238604E12, 228.0], [1.60238622E12, 228.0], [1.60238616E12, 224.2073000597954], [1.60238586E12, 233.0], [1.60238634E12, 272.0], [1.6023858E12, 269.64000034332275], [1.60238628E12, 231.96970005750657], [1.60238598E12, 226.0], [1.60238592E12, 226.0], [1.6023861E12, 235.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60238604E12, 228.0], [1.60238622E12, 228.0], [1.60238616E12, 224.0], [1.60238586E12, 233.0], [1.60238634E12, 272.0], [1.6023858E12, 268.19999957084656], [1.60238628E12, 231.7284999281168], [1.60238598E12, 226.0], [1.60238592E12, 226.0], [1.6023861E12, 235.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60238604E12, 225.0], [1.60238622E12, 222.0], [1.60238616E12, 213.0], [1.60238586E12, 223.0], [1.60238634E12, 272.0], [1.6023858E12, 259.0], [1.60238628E12, 224.0], [1.60238598E12, 224.0], [1.60238592E12, 216.0], [1.6023861E12, 230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60238604E12, 629.0], [1.60238622E12, 490.0], [1.60238616E12, 539.5], [1.60238586E12, 687.0], [1.60238634E12, 608.0], [1.6023858E12, 937.0], [1.60238628E12, 590.5], [1.60238598E12, 470.0], [1.60238592E12, 453.0], [1.6023861E12, 719.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238634E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 283.0, "minX": 1.0, "maxY": 3669.0, "series": [{"data": [[2.0, 1295.0], [3.0, 1156.0], [4.0, 1396.0], [5.0, 1195.0], [6.0, 1061.5], [7.0, 836.0], [8.0, 867.0], [9.0, 679.5], [10.0, 656.0], [11.0, 648.5], [12.0, 619.0], [13.0, 579.0], [14.0, 500.5], [15.0, 537.0], [16.0, 408.5], [1.0, 3669.0], [17.0, 390.0], [18.0, 431.0], [19.0, 315.0], [20.0, 352.0], [21.0, 310.0], [22.0, 349.5], [23.0, 298.0], [24.0, 308.0], [25.0, 316.0], [26.0, 283.0], [27.0, 286.0], [29.0, 306.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 283.0, "minX": 1.0, "maxY": 3664.0, "series": [{"data": [[2.0, 1286.0], [3.0, 1148.5], [4.0, 1387.5], [5.0, 1190.0], [6.0, 1060.0], [7.0, 834.0], [8.0, 864.5], [9.0, 677.5], [10.0, 655.5], [11.0, 648.0], [12.0, 618.0], [13.0, 579.0], [14.0, 500.0], [15.0, 536.0], [16.0, 408.5], [1.0, 3664.0], [17.0, 390.0], [18.0, 431.0], [19.0, 315.0], [20.0, 351.5], [21.0, 310.0], [22.0, 349.5], [23.0, 298.0], [24.0, 308.0], [25.0, 316.0], [26.0, 283.0], [27.0, 286.0], [29.0, 306.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.6023858E12, "maxY": 12.116666666666667, "series": [{"data": [[1.60238604E12, 9.15], [1.60238622E12, 11.633333333333333], [1.60238616E12, 10.433333333333334], [1.60238586E12, 9.4], [1.60238634E12, 0.35], [1.6023858E12, 2.55], [1.60238628E12, 10.033333333333333], [1.60238598E12, 11.383333333333333], [1.60238592E12, 12.116666666666667], [1.6023861E12, 9.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238634E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6023858E12, "maxY": 12.1, "series": [{"data": [[1.60238604E12, 9.15], [1.60238622E12, 11.633333333333333], [1.60238616E12, 10.433333333333334], [1.60238586E12, 9.416666666666666], [1.60238634E12, 0.5166666666666667], [1.6023858E12, 2.3833333333333333], [1.60238628E12, 10.033333333333333], [1.60238598E12, 11.383333333333333], [1.60238592E12, 12.1], [1.6023861E12, 9.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60238634E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6023858E12, "maxY": 12.1, "series": [{"data": [[1.60238604E12, 9.15], [1.60238622E12, 11.633333333333333], [1.60238616E12, 10.433333333333334], [1.60238586E12, 9.416666666666666], [1.60238634E12, 0.5166666666666667], [1.6023858E12, 2.3833333333333333], [1.60238628E12, 10.033333333333333], [1.60238598E12, 11.383333333333333], [1.60238592E12, 12.1], [1.6023861E12, 9.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238634E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6023858E12, "maxY": 12.1, "series": [{"data": [[1.60238604E12, 9.15], [1.60238622E12, 11.633333333333333], [1.60238616E12, 10.433333333333334], [1.60238586E12, 9.416666666666666], [1.60238634E12, 0.5166666666666667], [1.6023858E12, 2.3833333333333333], [1.60238628E12, 10.033333333333333], [1.60238598E12, 11.383333333333333], [1.60238592E12, 12.1], [1.6023861E12, 9.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60238634E12, "title": "Total Transactions Per Second"}},
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

