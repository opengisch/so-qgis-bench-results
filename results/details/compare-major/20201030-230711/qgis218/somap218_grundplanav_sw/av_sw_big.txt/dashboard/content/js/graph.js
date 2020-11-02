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
        data: {"result": {"minY": 214.0, "minX": 0.0, "maxY": 17086.0, "series": [{"data": [[0.0, 214.0], [0.1, 221.0], [0.2, 222.0], [0.3, 223.0], [0.4, 223.0], [0.5, 224.0], [0.6, 225.0], [0.7, 225.0], [0.8, 226.0], [0.9, 227.0], [1.0, 227.0], [1.1, 228.0], [1.2, 228.0], [1.3, 229.0], [1.4, 229.0], [1.5, 229.0], [1.6, 229.0], [1.7, 230.0], [1.8, 231.0], [1.9, 232.0], [2.0, 232.0], [2.1, 232.0], [2.2, 233.0], [2.3, 233.0], [2.4, 234.0], [2.5, 235.0], [2.6, 235.0], [2.7, 235.0], [2.8, 236.0], [2.9, 236.0], [3.0, 236.0], [3.1, 237.0], [3.2, 237.0], [3.3, 237.0], [3.4, 238.0], [3.5, 238.0], [3.6, 238.0], [3.7, 239.0], [3.8, 240.0], [3.9, 240.0], [4.0, 241.0], [4.1, 241.0], [4.2, 242.0], [4.3, 242.0], [4.4, 243.0], [4.5, 243.0], [4.6, 244.0], [4.7, 244.0], [4.8, 245.0], [4.9, 245.0], [5.0, 246.0], [5.1, 246.0], [5.2, 247.0], [5.3, 247.0], [5.4, 248.0], [5.5, 248.0], [5.6, 248.0], [5.7, 249.0], [5.8, 250.0], [5.9, 251.0], [6.0, 251.0], [6.1, 252.0], [6.2, 252.0], [6.3, 253.0], [6.4, 253.0], [6.5, 253.0], [6.6, 254.0], [6.7, 255.0], [6.8, 256.0], [6.9, 256.0], [7.0, 257.0], [7.1, 258.0], [7.2, 258.0], [7.3, 259.0], [7.4, 259.0], [7.5, 260.0], [7.6, 261.0], [7.7, 261.0], [7.8, 263.0], [7.9, 264.0], [8.0, 264.0], [8.1, 265.0], [8.2, 266.0], [8.3, 266.0], [8.4, 268.0], [8.5, 269.0], [8.6, 269.0], [8.7, 270.0], [8.8, 270.0], [8.9, 271.0], [9.0, 272.0], [9.1, 272.0], [9.2, 274.0], [9.3, 275.0], [9.4, 275.0], [9.5, 276.0], [9.6, 278.0], [9.7, 280.0], [9.8, 281.0], [9.9, 282.0], [10.0, 282.0], [10.1, 283.0], [10.2, 284.0], [10.3, 284.0], [10.4, 285.0], [10.5, 286.0], [10.6, 286.0], [10.7, 288.0], [10.8, 289.0], [10.9, 290.0], [11.0, 291.0], [11.1, 292.0], [11.2, 292.0], [11.3, 293.0], [11.4, 294.0], [11.5, 294.0], [11.6, 295.0], [11.7, 296.0], [11.8, 296.0], [11.9, 296.0], [12.0, 296.0], [12.1, 296.0], [12.2, 297.0], [12.3, 298.0], [12.4, 298.0], [12.5, 299.0], [12.6, 299.0], [12.7, 300.0], [12.8, 300.0], [12.9, 300.0], [13.0, 301.0], [13.1, 301.0], [13.2, 301.0], [13.3, 302.0], [13.4, 302.0], [13.5, 302.0], [13.6, 302.0], [13.7, 303.0], [13.8, 303.0], [13.9, 304.0], [14.0, 304.0], [14.1, 304.0], [14.2, 305.0], [14.3, 305.0], [14.4, 306.0], [14.5, 306.0], [14.6, 306.0], [14.7, 307.0], [14.8, 307.0], [14.9, 307.0], [15.0, 308.0], [15.1, 308.0], [15.2, 308.0], [15.3, 309.0], [15.4, 309.0], [15.5, 310.0], [15.6, 310.0], [15.7, 310.0], [15.8, 311.0], [15.9, 311.0], [16.0, 312.0], [16.1, 312.0], [16.2, 313.0], [16.3, 313.0], [16.4, 314.0], [16.5, 314.0], [16.6, 315.0], [16.7, 315.0], [16.8, 315.0], [16.9, 316.0], [17.0, 316.0], [17.1, 317.0], [17.2, 318.0], [17.3, 318.0], [17.4, 319.0], [17.5, 320.0], [17.6, 320.0], [17.7, 321.0], [17.8, 321.0], [17.9, 322.0], [18.0, 323.0], [18.1, 323.0], [18.2, 324.0], [18.3, 324.0], [18.4, 324.0], [18.5, 325.0], [18.6, 325.0], [18.7, 326.0], [18.8, 326.0], [18.9, 327.0], [19.0, 327.0], [19.1, 327.0], [19.2, 328.0], [19.3, 328.0], [19.4, 329.0], [19.5, 329.0], [19.6, 330.0], [19.7, 330.0], [19.8, 331.0], [19.9, 331.0], [20.0, 331.0], [20.1, 332.0], [20.2, 332.0], [20.3, 333.0], [20.4, 334.0], [20.5, 334.0], [20.6, 335.0], [20.7, 335.0], [20.8, 335.0], [20.9, 336.0], [21.0, 337.0], [21.1, 337.0], [21.2, 338.0], [21.3, 338.0], [21.4, 338.0], [21.5, 338.0], [21.6, 339.0], [21.7, 340.0], [21.8, 340.0], [21.9, 340.0], [22.0, 341.0], [22.1, 342.0], [22.2, 342.0], [22.3, 342.0], [22.4, 343.0], [22.5, 344.0], [22.6, 344.0], [22.7, 344.0], [22.8, 345.0], [22.9, 345.0], [23.0, 345.0], [23.1, 346.0], [23.2, 346.0], [23.3, 347.0], [23.4, 348.0], [23.5, 348.0], [23.6, 349.0], [23.7, 349.0], [23.8, 350.0], [23.9, 350.0], [24.0, 351.0], [24.1, 351.0], [24.2, 352.0], [24.3, 353.0], [24.4, 353.0], [24.5, 355.0], [24.6, 355.0], [24.7, 356.0], [24.8, 357.0], [24.9, 357.0], [25.0, 357.0], [25.1, 358.0], [25.2, 358.0], [25.3, 359.0], [25.4, 359.0], [25.5, 360.0], [25.6, 361.0], [25.7, 362.0], [25.8, 362.0], [25.9, 363.0], [26.0, 364.0], [26.1, 364.0], [26.2, 365.0], [26.3, 365.0], [26.4, 365.0], [26.5, 366.0], [26.6, 366.0], [26.7, 366.0], [26.8, 367.0], [26.9, 368.0], [27.0, 368.0], [27.1, 369.0], [27.2, 370.0], [27.3, 371.0], [27.4, 371.0], [27.5, 371.0], [27.6, 372.0], [27.7, 372.0], [27.8, 374.0], [27.9, 374.0], [28.0, 375.0], [28.1, 375.0], [28.2, 376.0], [28.3, 376.0], [28.4, 378.0], [28.5, 379.0], [28.6, 380.0], [28.7, 380.0], [28.8, 381.0], [28.9, 382.0], [29.0, 382.0], [29.1, 383.0], [29.2, 383.0], [29.3, 384.0], [29.4, 384.0], [29.5, 385.0], [29.6, 385.0], [29.7, 385.0], [29.8, 386.0], [29.9, 387.0], [30.0, 387.0], [30.1, 389.0], [30.2, 389.0], [30.3, 390.0], [30.4, 390.0], [30.5, 391.0], [30.6, 391.0], [30.7, 392.0], [30.8, 393.0], [30.9, 393.0], [31.0, 394.0], [31.1, 395.0], [31.2, 396.0], [31.3, 397.0], [31.4, 398.0], [31.5, 398.0], [31.6, 398.0], [31.7, 399.0], [31.8, 399.0], [31.9, 400.0], [32.0, 400.0], [32.1, 401.0], [32.2, 402.0], [32.3, 403.0], [32.4, 404.0], [32.5, 405.0], [32.6, 405.0], [32.7, 406.0], [32.8, 407.0], [32.9, 408.0], [33.0, 408.0], [33.1, 409.0], [33.2, 409.0], [33.3, 410.0], [33.4, 411.0], [33.5, 412.0], [33.6, 413.0], [33.7, 414.0], [33.8, 414.0], [33.9, 416.0], [34.0, 416.0], [34.1, 417.0], [34.2, 418.0], [34.3, 419.0], [34.4, 419.0], [34.5, 420.0], [34.6, 421.0], [34.7, 422.0], [34.8, 425.0], [34.9, 425.0], [35.0, 426.0], [35.1, 426.0], [35.2, 427.0], [35.3, 428.0], [35.4, 429.0], [35.5, 429.0], [35.6, 430.0], [35.7, 431.0], [35.8, 432.0], [35.9, 433.0], [36.0, 433.0], [36.1, 434.0], [36.2, 435.0], [36.3, 436.0], [36.4, 437.0], [36.5, 438.0], [36.6, 439.0], [36.7, 439.0], [36.8, 440.0], [36.9, 441.0], [37.0, 442.0], [37.1, 443.0], [37.2, 444.0], [37.3, 445.0], [37.4, 445.0], [37.5, 446.0], [37.6, 447.0], [37.7, 447.0], [37.8, 448.0], [37.9, 449.0], [38.0, 450.0], [38.1, 451.0], [38.2, 451.0], [38.3, 452.0], [38.4, 452.0], [38.5, 453.0], [38.6, 454.0], [38.7, 455.0], [38.8, 455.0], [38.9, 456.0], [39.0, 457.0], [39.1, 457.0], [39.2, 458.0], [39.3, 459.0], [39.4, 459.0], [39.5, 460.0], [39.6, 461.0], [39.7, 462.0], [39.8, 462.0], [39.9, 463.0], [40.0, 464.0], [40.1, 465.0], [40.2, 466.0], [40.3, 466.0], [40.4, 467.0], [40.5, 468.0], [40.6, 468.0], [40.7, 470.0], [40.8, 471.0], [40.9, 472.0], [41.0, 473.0], [41.1, 474.0], [41.2, 475.0], [41.3, 476.0], [41.4, 477.0], [41.5, 478.0], [41.6, 478.0], [41.7, 479.0], [41.8, 480.0], [41.9, 481.0], [42.0, 482.0], [42.1, 482.0], [42.2, 484.0], [42.3, 485.0], [42.4, 486.0], [42.5, 487.0], [42.6, 488.0], [42.7, 489.0], [42.8, 490.0], [42.9, 493.0], [43.0, 495.0], [43.1, 495.0], [43.2, 497.0], [43.3, 497.0], [43.4, 498.0], [43.5, 499.0], [43.6, 500.0], [43.7, 503.0], [43.8, 503.0], [43.9, 504.0], [44.0, 505.0], [44.1, 506.0], [44.2, 507.0], [44.3, 508.0], [44.4, 509.0], [44.5, 509.0], [44.6, 510.0], [44.7, 511.0], [44.8, 512.0], [44.9, 514.0], [45.0, 515.0], [45.1, 516.0], [45.2, 517.0], [45.3, 518.0], [45.4, 518.0], [45.5, 519.0], [45.6, 520.0], [45.7, 521.0], [45.8, 522.0], [45.9, 523.0], [46.0, 524.0], [46.1, 525.0], [46.2, 526.0], [46.3, 527.0], [46.4, 528.0], [46.5, 529.0], [46.6, 530.0], [46.7, 532.0], [46.8, 533.0], [46.9, 534.0], [47.0, 535.0], [47.1, 536.0], [47.2, 537.0], [47.3, 539.0], [47.4, 540.0], [47.5, 541.0], [47.6, 543.0], [47.7, 544.0], [47.8, 545.0], [47.9, 546.0], [48.0, 547.0], [48.1, 548.0], [48.2, 548.0], [48.3, 549.0], [48.4, 550.0], [48.5, 551.0], [48.6, 552.0], [48.7, 553.0], [48.8, 555.0], [48.9, 555.0], [49.0, 556.0], [49.1, 558.0], [49.2, 559.0], [49.3, 562.0], [49.4, 562.0], [49.5, 564.0], [49.6, 565.0], [49.7, 565.0], [49.8, 567.0], [49.9, 568.0], [50.0, 569.0], [50.1, 571.0], [50.2, 573.0], [50.3, 574.0], [50.4, 577.0], [50.5, 578.0], [50.6, 579.0], [50.7, 579.0], [50.8, 580.0], [50.9, 581.0], [51.0, 582.0], [51.1, 583.0], [51.2, 585.0], [51.3, 586.0], [51.4, 588.0], [51.5, 589.0], [51.6, 591.0], [51.7, 592.0], [51.8, 593.0], [51.9, 596.0], [52.0, 597.0], [52.1, 598.0], [52.2, 600.0], [52.3, 601.0], [52.4, 603.0], [52.5, 604.0], [52.6, 605.0], [52.7, 607.0], [52.8, 608.0], [52.9, 608.0], [53.0, 610.0], [53.1, 611.0], [53.2, 612.0], [53.3, 613.0], [53.4, 615.0], [53.5, 616.0], [53.6, 617.0], [53.7, 618.0], [53.8, 620.0], [53.9, 620.0], [54.0, 621.0], [54.1, 623.0], [54.2, 624.0], [54.3, 627.0], [54.4, 628.0], [54.5, 630.0], [54.6, 631.0], [54.7, 633.0], [54.8, 634.0], [54.9, 635.0], [55.0, 636.0], [55.1, 637.0], [55.2, 639.0], [55.3, 640.0], [55.4, 641.0], [55.5, 642.0], [55.6, 643.0], [55.7, 644.0], [55.8, 645.0], [55.9, 646.0], [56.0, 648.0], [56.1, 651.0], [56.2, 652.0], [56.3, 653.0], [56.4, 655.0], [56.5, 656.0], [56.6, 658.0], [56.7, 659.0], [56.8, 662.0], [56.9, 663.0], [57.0, 664.0], [57.1, 666.0], [57.2, 667.0], [57.3, 669.0], [57.4, 671.0], [57.5, 672.0], [57.6, 673.0], [57.7, 674.0], [57.8, 675.0], [57.9, 676.0], [58.0, 677.0], [58.1, 678.0], [58.2, 680.0], [58.3, 683.0], [58.4, 685.0], [58.5, 688.0], [58.6, 688.0], [58.7, 689.0], [58.8, 690.0], [58.9, 692.0], [59.0, 694.0], [59.1, 695.0], [59.2, 696.0], [59.3, 698.0], [59.4, 699.0], [59.5, 701.0], [59.6, 702.0], [59.7, 704.0], [59.8, 706.0], [59.9, 707.0], [60.0, 709.0], [60.1, 713.0], [60.2, 714.0], [60.3, 716.0], [60.4, 717.0], [60.5, 718.0], [60.6, 721.0], [60.7, 723.0], [60.8, 725.0], [60.9, 726.0], [61.0, 727.0], [61.1, 729.0], [61.2, 731.0], [61.3, 732.0], [61.4, 734.0], [61.5, 735.0], [61.6, 738.0], [61.7, 740.0], [61.8, 743.0], [61.9, 745.0], [62.0, 748.0], [62.1, 749.0], [62.2, 752.0], [62.3, 753.0], [62.4, 755.0], [62.5, 757.0], [62.6, 758.0], [62.7, 760.0], [62.8, 763.0], [62.9, 764.0], [63.0, 767.0], [63.1, 768.0], [63.2, 769.0], [63.3, 772.0], [63.4, 775.0], [63.5, 778.0], [63.6, 780.0], [63.7, 782.0], [63.8, 787.0], [63.9, 790.0], [64.0, 791.0], [64.1, 795.0], [64.2, 797.0], [64.3, 799.0], [64.4, 800.0], [64.5, 803.0], [64.6, 804.0], [64.7, 806.0], [64.8, 810.0], [64.9, 814.0], [65.0, 817.0], [65.1, 819.0], [65.2, 821.0], [65.3, 823.0], [65.4, 825.0], [65.5, 828.0], [65.6, 829.0], [65.7, 831.0], [65.8, 832.0], [65.9, 837.0], [66.0, 839.0], [66.1, 842.0], [66.2, 844.0], [66.3, 845.0], [66.4, 847.0], [66.5, 849.0], [66.6, 850.0], [66.7, 853.0], [66.8, 854.0], [66.9, 857.0], [67.0, 859.0], [67.1, 862.0], [67.2, 864.0], [67.3, 866.0], [67.4, 869.0], [67.5, 870.0], [67.6, 873.0], [67.7, 875.0], [67.8, 876.0], [67.9, 878.0], [68.0, 880.0], [68.1, 882.0], [68.2, 883.0], [68.3, 886.0], [68.4, 888.0], [68.5, 891.0], [68.6, 894.0], [68.7, 896.0], [68.8, 897.0], [68.9, 898.0], [69.0, 900.0], [69.1, 902.0], [69.2, 904.0], [69.3, 905.0], [69.4, 908.0], [69.5, 909.0], [69.6, 911.0], [69.7, 913.0], [69.8, 917.0], [69.9, 921.0], [70.0, 922.0], [70.1, 925.0], [70.2, 930.0], [70.3, 934.0], [70.4, 936.0], [70.5, 939.0], [70.6, 943.0], [70.7, 946.0], [70.8, 949.0], [70.9, 952.0], [71.0, 954.0], [71.1, 956.0], [71.2, 960.0], [71.3, 963.0], [71.4, 967.0], [71.5, 970.0], [71.6, 973.0], [71.7, 974.0], [71.8, 977.0], [71.9, 979.0], [72.0, 980.0], [72.1, 981.0], [72.2, 982.0], [72.3, 985.0], [72.4, 986.0], [72.5, 991.0], [72.6, 994.0], [72.7, 996.0], [72.8, 998.0], [72.9, 999.0], [73.0, 1003.0], [73.1, 1005.0], [73.2, 1010.0], [73.3, 1011.0], [73.4, 1014.0], [73.5, 1018.0], [73.6, 1021.0], [73.7, 1026.0], [73.8, 1027.0], [73.9, 1029.0], [74.0, 1037.0], [74.1, 1038.0], [74.2, 1045.0], [74.3, 1050.0], [74.4, 1055.0], [74.5, 1057.0], [74.6, 1061.0], [74.7, 1066.0], [74.8, 1070.0], [74.9, 1071.0], [75.0, 1076.0], [75.1, 1077.0], [75.2, 1083.0], [75.3, 1086.0], [75.4, 1088.0], [75.5, 1094.0], [75.6, 1096.0], [75.7, 1098.0], [75.8, 1102.0], [75.9, 1110.0], [76.0, 1120.0], [76.1, 1123.0], [76.2, 1126.0], [76.3, 1131.0], [76.4, 1138.0], [76.5, 1142.0], [76.6, 1146.0], [76.7, 1150.0], [76.8, 1158.0], [76.9, 1165.0], [77.0, 1166.0], [77.1, 1168.0], [77.2, 1172.0], [77.3, 1174.0], [77.4, 1178.0], [77.5, 1183.0], [77.6, 1187.0], [77.7, 1196.0], [77.8, 1205.0], [77.9, 1212.0], [78.0, 1214.0], [78.1, 1224.0], [78.2, 1239.0], [78.3, 1243.0], [78.4, 1254.0], [78.5, 1262.0], [78.6, 1270.0], [78.7, 1273.0], [78.8, 1275.0], [78.9, 1279.0], [79.0, 1285.0], [79.1, 1288.0], [79.2, 1295.0], [79.3, 1298.0], [79.4, 1304.0], [79.5, 1310.0], [79.6, 1318.0], [79.7, 1323.0], [79.8, 1328.0], [79.9, 1334.0], [80.0, 1341.0], [80.1, 1348.0], [80.2, 1355.0], [80.3, 1361.0], [80.4, 1370.0], [80.5, 1375.0], [80.6, 1383.0], [80.7, 1395.0], [80.8, 1405.0], [80.9, 1409.0], [81.0, 1415.0], [81.1, 1421.0], [81.2, 1428.0], [81.3, 1431.0], [81.4, 1442.0], [81.5, 1448.0], [81.6, 1454.0], [81.7, 1469.0], [81.8, 1473.0], [81.9, 1484.0], [82.0, 1499.0], [82.1, 1510.0], [82.2, 1521.0], [82.3, 1536.0], [82.4, 1544.0], [82.5, 1554.0], [82.6, 1561.0], [82.7, 1570.0], [82.8, 1585.0], [82.9, 1590.0], [83.0, 1600.0], [83.1, 1606.0], [83.2, 1617.0], [83.3, 1620.0], [83.4, 1623.0], [83.5, 1631.0], [83.6, 1640.0], [83.7, 1645.0], [83.8, 1650.0], [83.9, 1657.0], [84.0, 1662.0], [84.1, 1670.0], [84.2, 1680.0], [84.3, 1688.0], [84.4, 1693.0], [84.5, 1701.0], [84.6, 1705.0], [84.7, 1716.0], [84.8, 1728.0], [84.9, 1737.0], [85.0, 1745.0], [85.1, 1753.0], [85.2, 1763.0], [85.3, 1773.0], [85.4, 1776.0], [85.5, 1789.0], [85.6, 1795.0], [85.7, 1802.0], [85.8, 1819.0], [85.9, 1823.0], [86.0, 1831.0], [86.1, 1837.0], [86.2, 1845.0], [86.3, 1859.0], [86.4, 1868.0], [86.5, 1874.0], [86.6, 1880.0], [86.7, 1884.0], [86.8, 1896.0], [86.9, 1917.0], [87.0, 1923.0], [87.1, 1933.0], [87.2, 1938.0], [87.3, 1942.0], [87.4, 1959.0], [87.5, 1967.0], [87.6, 1974.0], [87.7, 1979.0], [87.8, 1989.0], [87.9, 1995.0], [88.0, 2007.0], [88.1, 2020.0], [88.2, 2027.0], [88.3, 2036.0], [88.4, 2042.0], [88.5, 2051.0], [88.6, 2062.0], [88.7, 2070.0], [88.8, 2076.0], [88.9, 2083.0], [89.0, 2092.0], [89.1, 2100.0], [89.2, 2108.0], [89.3, 2114.0], [89.4, 2119.0], [89.5, 2125.0], [89.6, 2131.0], [89.7, 2141.0], [89.8, 2148.0], [89.9, 2165.0], [90.0, 2171.0], [90.1, 2175.0], [90.2, 2178.0], [90.3, 2184.0], [90.4, 2190.0], [90.5, 2197.0], [90.6, 2203.0], [90.7, 2206.0], [90.8, 2211.0], [90.9, 2222.0], [91.0, 2233.0], [91.1, 2239.0], [91.2, 2249.0], [91.3, 2255.0], [91.4, 2266.0], [91.5, 2272.0], [91.6, 2283.0], [91.7, 2293.0], [91.8, 2303.0], [91.9, 2313.0], [92.0, 2321.0], [92.1, 2327.0], [92.2, 2338.0], [92.3, 2343.0], [92.4, 2347.0], [92.5, 2360.0], [92.6, 2363.0], [92.7, 2376.0], [92.8, 2383.0], [92.9, 2391.0], [93.0, 2402.0], [93.1, 2406.0], [93.2, 2414.0], [93.3, 2419.0], [93.4, 2429.0], [93.5, 2436.0], [93.6, 2451.0], [93.7, 2466.0], [93.8, 2475.0], [93.9, 2484.0], [94.0, 2492.0], [94.1, 2514.0], [94.2, 2528.0], [94.3, 2543.0], [94.4, 2560.0], [94.5, 2580.0], [94.6, 2610.0], [94.7, 2623.0], [94.8, 2642.0], [94.9, 2668.0], [95.0, 2679.0], [95.1, 2693.0], [95.2, 2709.0], [95.3, 2727.0], [95.4, 2737.0], [95.5, 2772.0], [95.6, 2790.0], [95.7, 2814.0], [95.8, 2851.0], [95.9, 2880.0], [96.0, 2898.0], [96.1, 2950.0], [96.2, 2988.0], [96.3, 3012.0], [96.4, 3059.0], [96.5, 3112.0], [96.6, 3133.0], [96.7, 3206.0], [96.8, 3247.0], [96.9, 3326.0], [97.0, 3375.0], [97.1, 3394.0], [97.2, 3444.0], [97.3, 3482.0], [97.4, 3593.0], [97.5, 3690.0], [97.6, 3738.0], [97.7, 3797.0], [97.8, 3858.0], [97.9, 3979.0], [98.0, 4181.0], [98.1, 4324.0], [98.2, 4367.0], [98.3, 4473.0], [98.4, 4599.0], [98.5, 4715.0], [98.6, 4792.0], [98.7, 4868.0], [98.8, 4995.0], [98.9, 5055.0], [99.0, 5210.0], [99.1, 5342.0], [99.2, 5707.0], [99.3, 5970.0], [99.4, 6277.0], [99.5, 7299.0], [99.6, 7493.0], [99.7, 8314.0], [99.8, 9667.0], [99.9, 12478.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 996.0, "series": [{"data": [[600.0, 378.0], [700.0, 257.0], [800.0, 239.0], [900.0, 204.0], [1000.0, 146.0], [1100.0, 105.0], [1200.0, 82.0], [1300.0, 72.0], [1400.0, 67.0], [1500.0, 51.0], [1600.0, 78.0], [1700.0, 61.0], [1800.0, 59.0], [1900.0, 60.0], [2000.0, 59.0], [2100.0, 76.0], [2200.0, 63.0], [2300.0, 62.0], [2400.0, 55.0], [2500.0, 28.0], [2600.0, 28.0], [2800.0, 21.0], [2700.0, 26.0], [2900.0, 11.0], [3000.0, 13.0], [3100.0, 10.0], [3200.0, 10.0], [3300.0, 14.0], [3400.0, 9.0], [3500.0, 6.0], [3700.0, 11.0], [3600.0, 5.0], [3800.0, 6.0], [3900.0, 5.0], [4000.0, 2.0], [4300.0, 9.0], [4100.0, 4.0], [4200.0, 1.0], [4500.0, 5.0], [4400.0, 3.0], [4600.0, 4.0], [4700.0, 8.0], [4800.0, 5.0], [5000.0, 6.0], [5100.0, 2.0], [4900.0, 5.0], [5200.0, 5.0], [5300.0, 3.0], [5400.0, 1.0], [5600.0, 2.0], [5700.0, 2.0], [5800.0, 1.0], [6100.0, 1.0], [5900.0, 3.0], [6000.0, 1.0], [6300.0, 2.0], [6200.0, 3.0], [6600.0, 1.0], [6400.0, 1.0], [7000.0, 1.0], [7400.0, 1.0], [7300.0, 4.0], [7200.0, 1.0], [7700.0, 2.0], [7800.0, 1.0], [8100.0, 1.0], [8300.0, 2.0], [8400.0, 1.0], [9000.0, 1.0], [9600.0, 1.0], [9500.0, 1.0], [9900.0, 1.0], [11600.0, 2.0], [11500.0, 1.0], [12400.0, 1.0], [12500.0, 1.0], [13100.0, 1.0], [12800.0, 1.0], [14000.0, 1.0], [17000.0, 1.0], [200.0, 657.0], [300.0, 996.0], [400.0, 607.0], [500.0, 446.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 934.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2264.0, "series": [{"data": [[0.0, 2264.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1992.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 934.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.800884955752212, "minX": 1.60409946E12, "maxY": 10.0, "series": [{"data": [[1.60409946E12, 10.0], [1.60409994E12, 9.800884955752212], [1.60409976E12, 10.0], [1.60409982E12, 10.0], [1.60409964E12, 10.0], [1.6040997E12, 10.0], [1.60409952E12, 10.0], [1.60409958E12, 10.0], [1.60409988E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409994E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 299.0, "minX": 1.0, "maxY": 5860.0, "series": [{"data": [[8.0, 1428.0], [4.0, 453.0], [2.0, 5229.0], [1.0, 5860.0], [9.0, 2414.0], [10.0, 953.137425207489], [5.0, 300.0], [6.0, 299.0], [3.0, 3012.0], [7.0, 510.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 955.2427745664738]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1698.1166666666666, "minX": 1.60409946E12, "maxY": 4349181.616666666, "series": [{"data": [[1.60409946E12, 2684237.066666667], [1.60409994E12, 1338132.7166666666], [1.60409976E12, 2467442.45], [1.60409982E12, 3976491.55], [1.60409964E12, 3486807.1333333333], [1.6040997E12, 3322049.183333333], [1.60409952E12, 2556734.4166666665], [1.60409958E12, 4349181.616666666], [1.60409988E12, 3398283.9833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60409946E12, 3172.6], [1.60409994E12, 1698.1166666666666], [1.60409976E12, 4356.266666666666], [1.60409982E12, 5180.316666666667], [1.60409964E12, 4963.6], [1.6040997E12, 4004.3333333333335], [1.60409952E12, 4812.833333333333], [1.60409958E12, 5112.266666666666], [1.60409988E12, 5277.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409994E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 847.594244604316, "minX": 1.60409946E12, "maxY": 1380.1814159292037, "series": [{"data": [[1.60409946E12, 1022.2466063348409], [1.60409994E12, 1380.1814159292037], [1.60409976E12, 1005.0151260504211], [1.60409982E12, 867.14409221902], [1.60409964E12, 898.5594512195113], [1.6040997E12, 1112.507272727274], [1.60409952E12, 924.8647416413384], [1.60409958E12, 883.087537091988], [1.60409988E12, 847.594244604316]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409994E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 846.005755395683, "minX": 1.60409946E12, "maxY": 1377.5973451327436, "series": [{"data": [[1.60409946E12, 1019.5656108597275], [1.60409994E12, 1377.5973451327436], [1.60409976E12, 1003.6252100840334], [1.60409982E12, 865.3933717579253], [1.60409964E12, 895.8932926829261], [1.6040997E12, 1110.2036363636373], [1.60409952E12, 922.8221884498478], [1.60409958E12, 879.7136498516325], [1.60409988E12, 846.005755395683]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409994E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005934718100890207, "minX": 1.60409946E12, "maxY": 0.1855203619909501, "series": [{"data": [[1.60409946E12, 0.1855203619909501], [1.60409994E12, 0.035398230088495596], [1.60409976E12, 0.011764705882352962], [1.60409982E12, 0.011527377521613836], [1.60409964E12, 0.013719512195121962], [1.6040997E12, 0.012727272727272747], [1.60409952E12, 0.027355623100303955], [1.60409958E12, 0.005934718100890207], [1.60409988E12, 0.01151079136690648]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409994E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 214.0, "minX": 1.60409946E12, "maxY": 17086.0, "series": [{"data": [[1.60409946E12, 14071.0], [1.60409994E12, 9064.0], [1.60409976E12, 17086.0], [1.60409982E12, 7330.0], [1.60409964E12, 12478.0], [1.6040997E12, 12864.0], [1.60409952E12, 13112.0], [1.60409958E12, 11517.0], [1.60409988E12, 7868.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60409946E12, 225.97399978876115], [1.60409994E12, 235.42999945878984], [1.60409976E12, 226.0], [1.60409982E12, 229.0], [1.60409964E12, 224.0], [1.6040997E12, 228.83599947452547], [1.60409952E12, 227.93099984288216], [1.60409958E12, 225.07499983906746], [1.60409988E12, 227.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60409946E12, 226.77140008449555], [1.60409994E12, 237.47300021648408], [1.60409976E12, 226.0], [1.60409982E12, 229.0], [1.60409964E12, 224.5043000626564], [1.6040997E12, 229.45490005254746], [1.60409952E12, 228.0], [1.60409958E12, 225.68250006437302], [1.60409988E12, 227.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60409946E12, 226.41699989438058], [1.60409994E12, 236.5649997293949], [1.60409976E12, 226.0], [1.60409982E12, 229.0], [1.60409964E12, 224.2414999216795], [1.6040997E12, 229.2344999343157], [1.60409952E12, 228.0], [1.60409958E12, 225.41249991953373], [1.60409988E12, 227.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60409946E12, 221.0], [1.60409994E12, 224.0], [1.60409976E12, 223.0], [1.60409982E12, 220.0], [1.60409964E12, 222.0], [1.6040997E12, 214.0], [1.60409952E12, 221.0], [1.60409958E12, 222.0], [1.60409988E12, 221.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60409946E12, 692.5], [1.60409994E12, 937.0], [1.60409976E12, 606.0], [1.60409982E12, 488.5], [1.60409964E12, 507.0], [1.6040997E12, 709.0], [1.60409952E12, 529.5], [1.60409958E12, 466.5], [1.60409988E12, 480.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409994E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 271.0, "minX": 1.0, "maxY": 4055.0, "series": [{"data": [[2.0, 996.0], [3.0, 1554.0], [4.0, 1434.0], [5.0, 987.0], [6.0, 1010.0], [7.0, 874.0], [8.0, 783.5], [9.0, 648.0], [10.0, 641.5], [11.0, 618.0], [12.0, 619.5], [13.0, 576.0], [14.0, 538.0], [15.0, 535.5], [16.0, 519.5], [1.0, 4055.0], [17.0, 426.5], [18.0, 389.0], [19.0, 369.0], [20.0, 329.0], [21.0, 332.0], [22.0, 367.5], [23.0, 328.5], [24.0, 302.0], [25.0, 300.0], [27.0, 282.0], [28.0, 294.5], [29.0, 315.0], [31.0, 271.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 271.0, "minX": 1.0, "maxY": 4051.0, "series": [{"data": [[2.0, 994.5], [3.0, 1553.0], [4.0, 1431.5], [5.0, 985.0], [6.0, 1008.5], [7.0, 871.0], [8.0, 782.0], [9.0, 647.0], [10.0, 640.5], [11.0, 614.0], [12.0, 618.0], [13.0, 574.5], [14.0, 538.0], [15.0, 534.0], [16.0, 519.5], [1.0, 4051.0], [17.0, 426.0], [18.0, 389.0], [19.0, 369.0], [20.0, 329.0], [21.0, 332.0], [22.0, 367.5], [23.0, 328.5], [24.0, 302.0], [25.0, 300.0], [27.0, 282.0], [28.0, 294.5], [29.0, 315.0], [31.0, 271.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6, "minX": 1.60409946E12, "maxY": 11.583333333333334, "series": [{"data": [[1.60409946E12, 7.533333333333333], [1.60409994E12, 3.6], [1.60409976E12, 9.916666666666666], [1.60409982E12, 11.566666666666666], [1.60409964E12, 10.933333333333334], [1.6040997E12, 9.166666666666666], [1.60409952E12, 10.966666666666667], [1.60409958E12, 11.233333333333333], [1.60409988E12, 11.583333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409994E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.7666666666666666, "minX": 1.60409946E12, "maxY": 11.583333333333334, "series": [{"data": [[1.60409946E12, 7.366666666666666], [1.60409994E12, 3.7666666666666666], [1.60409976E12, 9.916666666666666], [1.60409982E12, 11.566666666666666], [1.60409964E12, 10.933333333333334], [1.6040997E12, 9.166666666666666], [1.60409952E12, 10.966666666666667], [1.60409958E12, 11.233333333333333], [1.60409988E12, 11.583333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60409994E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.7666666666666666, "minX": 1.60409946E12, "maxY": 11.583333333333334, "series": [{"data": [[1.60409946E12, 7.366666666666666], [1.60409994E12, 3.7666666666666666], [1.60409976E12, 9.916666666666666], [1.60409982E12, 11.566666666666666], [1.60409964E12, 10.933333333333334], [1.6040997E12, 9.166666666666666], [1.60409952E12, 10.966666666666667], [1.60409958E12, 11.233333333333333], [1.60409988E12, 11.583333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409994E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.7666666666666666, "minX": 1.60409946E12, "maxY": 11.583333333333334, "series": [{"data": [[1.60409946E12, 7.366666666666666], [1.60409994E12, 3.7666666666666666], [1.60409976E12, 9.916666666666666], [1.60409982E12, 11.566666666666666], [1.60409964E12, 10.933333333333334], [1.6040997E12, 9.166666666666666], [1.60409952E12, 10.966666666666667], [1.60409958E12, 11.233333333333333], [1.60409988E12, 11.583333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60409994E12, "title": "Total Transactions Per Second"}},
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

