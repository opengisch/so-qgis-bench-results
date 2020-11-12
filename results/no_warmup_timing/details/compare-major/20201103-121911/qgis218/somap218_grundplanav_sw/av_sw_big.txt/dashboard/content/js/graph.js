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
        data: {"result": {"minY": 215.0, "minX": 0.0, "maxY": 15336.0, "series": [{"data": [[0.0, 215.0], [0.1, 223.0], [0.2, 225.0], [0.3, 225.0], [0.4, 226.0], [0.5, 228.0], [0.6, 229.0], [0.7, 230.0], [0.8, 230.0], [0.9, 231.0], [1.0, 231.0], [1.1, 232.0], [1.2, 232.0], [1.3, 234.0], [1.4, 234.0], [1.5, 235.0], [1.6, 236.0], [1.7, 236.0], [1.8, 237.0], [1.9, 237.0], [2.0, 238.0], [2.1, 238.0], [2.2, 239.0], [2.3, 240.0], [2.4, 240.0], [2.5, 241.0], [2.6, 242.0], [2.7, 243.0], [2.8, 243.0], [2.9, 244.0], [3.0, 245.0], [3.1, 245.0], [3.2, 246.0], [3.3, 247.0], [3.4, 248.0], [3.5, 248.0], [3.6, 249.0], [3.7, 250.0], [3.8, 250.0], [3.9, 251.0], [4.0, 252.0], [4.1, 253.0], [4.2, 254.0], [4.3, 255.0], [4.4, 255.0], [4.5, 256.0], [4.6, 256.0], [4.7, 257.0], [4.8, 257.0], [4.9, 258.0], [5.0, 259.0], [5.1, 259.0], [5.2, 260.0], [5.3, 260.0], [5.4, 261.0], [5.5, 262.0], [5.6, 262.0], [5.7, 263.0], [5.8, 264.0], [5.9, 265.0], [6.0, 266.0], [6.1, 266.0], [6.2, 266.0], [6.3, 267.0], [6.4, 267.0], [6.5, 268.0], [6.6, 269.0], [6.7, 270.0], [6.8, 271.0], [6.9, 271.0], [7.0, 272.0], [7.1, 273.0], [7.2, 274.0], [7.3, 274.0], [7.4, 275.0], [7.5, 276.0], [7.6, 277.0], [7.7, 277.0], [7.8, 277.0], [7.9, 279.0], [8.0, 279.0], [8.1, 279.0], [8.2, 281.0], [8.3, 281.0], [8.4, 282.0], [8.5, 283.0], [8.6, 284.0], [8.7, 285.0], [8.8, 286.0], [8.9, 287.0], [9.0, 288.0], [9.1, 289.0], [9.2, 290.0], [9.3, 291.0], [9.4, 291.0], [9.5, 292.0], [9.6, 293.0], [9.7, 293.0], [9.8, 294.0], [9.9, 295.0], [10.0, 295.0], [10.1, 296.0], [10.2, 297.0], [10.3, 297.0], [10.4, 298.0], [10.5, 298.0], [10.6, 299.0], [10.7, 299.0], [10.8, 300.0], [10.9, 301.0], [11.0, 301.0], [11.1, 301.0], [11.2, 302.0], [11.3, 302.0], [11.4, 303.0], [11.5, 304.0], [11.6, 304.0], [11.7, 305.0], [11.8, 305.0], [11.9, 306.0], [12.0, 306.0], [12.1, 307.0], [12.2, 307.0], [12.3, 308.0], [12.4, 308.0], [12.5, 309.0], [12.6, 309.0], [12.7, 310.0], [12.8, 310.0], [12.9, 311.0], [13.0, 311.0], [13.1, 312.0], [13.2, 313.0], [13.3, 313.0], [13.4, 313.0], [13.5, 314.0], [13.6, 314.0], [13.7, 315.0], [13.8, 315.0], [13.9, 316.0], [14.0, 316.0], [14.1, 317.0], [14.2, 317.0], [14.3, 318.0], [14.4, 318.0], [14.5, 319.0], [14.6, 319.0], [14.7, 320.0], [14.8, 320.0], [14.9, 321.0], [15.0, 321.0], [15.1, 321.0], [15.2, 322.0], [15.3, 323.0], [15.4, 323.0], [15.5, 323.0], [15.6, 324.0], [15.7, 324.0], [15.8, 325.0], [15.9, 325.0], [16.0, 326.0], [16.1, 326.0], [16.2, 327.0], [16.3, 327.0], [16.4, 327.0], [16.5, 328.0], [16.6, 329.0], [16.7, 329.0], [16.8, 330.0], [16.9, 330.0], [17.0, 331.0], [17.1, 331.0], [17.2, 332.0], [17.3, 332.0], [17.4, 333.0], [17.5, 334.0], [17.6, 334.0], [17.7, 335.0], [17.8, 335.0], [17.9, 335.0], [18.0, 336.0], [18.1, 337.0], [18.2, 337.0], [18.3, 338.0], [18.4, 339.0], [18.5, 339.0], [18.6, 340.0], [18.7, 340.0], [18.8, 341.0], [18.9, 341.0], [19.0, 342.0], [19.1, 342.0], [19.2, 342.0], [19.3, 343.0], [19.4, 343.0], [19.5, 344.0], [19.6, 344.0], [19.7, 345.0], [19.8, 345.0], [19.9, 346.0], [20.0, 347.0], [20.1, 348.0], [20.2, 348.0], [20.3, 348.0], [20.4, 349.0], [20.5, 350.0], [20.6, 351.0], [20.7, 352.0], [20.8, 352.0], [20.9, 353.0], [21.0, 353.0], [21.1, 354.0], [21.2, 354.0], [21.3, 355.0], [21.4, 356.0], [21.5, 356.0], [21.6, 357.0], [21.7, 358.0], [21.8, 358.0], [21.9, 359.0], [22.0, 359.0], [22.1, 360.0], [22.2, 360.0], [22.3, 361.0], [22.4, 361.0], [22.5, 362.0], [22.6, 363.0], [22.7, 364.0], [22.8, 365.0], [22.9, 365.0], [23.0, 366.0], [23.1, 367.0], [23.2, 368.0], [23.3, 369.0], [23.4, 370.0], [23.5, 370.0], [23.6, 371.0], [23.7, 371.0], [23.8, 372.0], [23.9, 373.0], [24.0, 373.0], [24.1, 374.0], [24.2, 375.0], [24.3, 376.0], [24.4, 376.0], [24.5, 377.0], [24.6, 378.0], [24.7, 378.0], [24.8, 379.0], [24.9, 379.0], [25.0, 380.0], [25.1, 381.0], [25.2, 381.0], [25.3, 382.0], [25.4, 383.0], [25.5, 383.0], [25.6, 384.0], [25.7, 385.0], [25.8, 385.0], [25.9, 386.0], [26.0, 386.0], [26.1, 387.0], [26.2, 388.0], [26.3, 389.0], [26.4, 391.0], [26.5, 391.0], [26.6, 392.0], [26.7, 393.0], [26.8, 393.0], [26.9, 394.0], [27.0, 395.0], [27.1, 396.0], [27.2, 396.0], [27.3, 397.0], [27.4, 397.0], [27.5, 398.0], [27.6, 399.0], [27.7, 399.0], [27.8, 400.0], [27.9, 401.0], [28.0, 402.0], [28.1, 402.0], [28.2, 403.0], [28.3, 403.0], [28.4, 404.0], [28.5, 405.0], [28.6, 405.0], [28.7, 406.0], [28.8, 406.0], [28.9, 407.0], [29.0, 408.0], [29.1, 409.0], [29.2, 409.0], [29.3, 410.0], [29.4, 410.0], [29.5, 411.0], [29.6, 412.0], [29.7, 412.0], [29.8, 413.0], [29.9, 414.0], [30.0, 414.0], [30.1, 415.0], [30.2, 416.0], [30.3, 416.0], [30.4, 417.0], [30.5, 417.0], [30.6, 418.0], [30.7, 419.0], [30.8, 420.0], [30.9, 420.0], [31.0, 421.0], [31.1, 422.0], [31.2, 423.0], [31.3, 423.0], [31.4, 424.0], [31.5, 424.0], [31.6, 425.0], [31.7, 425.0], [31.8, 426.0], [31.9, 427.0], [32.0, 428.0], [32.1, 429.0], [32.2, 430.0], [32.3, 430.0], [32.4, 431.0], [32.5, 431.0], [32.6, 432.0], [32.7, 432.0], [32.8, 433.0], [32.9, 434.0], [33.0, 434.0], [33.1, 436.0], [33.2, 436.0], [33.3, 436.0], [33.4, 437.0], [33.5, 438.0], [33.6, 439.0], [33.7, 440.0], [33.8, 440.0], [33.9, 441.0], [34.0, 442.0], [34.1, 443.0], [34.2, 444.0], [34.3, 445.0], [34.4, 445.0], [34.5, 446.0], [34.6, 446.0], [34.7, 447.0], [34.8, 448.0], [34.9, 449.0], [35.0, 450.0], [35.1, 451.0], [35.2, 452.0], [35.3, 452.0], [35.4, 453.0], [35.5, 453.0], [35.6, 454.0], [35.7, 455.0], [35.8, 456.0], [35.9, 456.0], [36.0, 457.0], [36.1, 457.0], [36.2, 458.0], [36.3, 459.0], [36.4, 460.0], [36.5, 461.0], [36.6, 462.0], [36.7, 463.0], [36.8, 464.0], [36.9, 465.0], [37.0, 467.0], [37.1, 468.0], [37.2, 468.0], [37.3, 468.0], [37.4, 470.0], [37.5, 471.0], [37.6, 471.0], [37.7, 472.0], [37.8, 473.0], [37.9, 474.0], [38.0, 475.0], [38.1, 476.0], [38.2, 477.0], [38.3, 477.0], [38.4, 478.0], [38.5, 479.0], [38.6, 479.0], [38.7, 480.0], [38.8, 481.0], [38.9, 481.0], [39.0, 482.0], [39.1, 483.0], [39.2, 483.0], [39.3, 484.0], [39.4, 484.0], [39.5, 486.0], [39.6, 487.0], [39.7, 488.0], [39.8, 488.0], [39.9, 489.0], [40.0, 491.0], [40.1, 491.0], [40.2, 493.0], [40.3, 494.0], [40.4, 495.0], [40.5, 497.0], [40.6, 498.0], [40.7, 499.0], [40.8, 499.0], [40.9, 500.0], [41.0, 501.0], [41.1, 503.0], [41.2, 504.0], [41.3, 506.0], [41.4, 506.0], [41.5, 507.0], [41.6, 508.0], [41.7, 509.0], [41.8, 510.0], [41.9, 510.0], [42.0, 511.0], [42.1, 512.0], [42.2, 513.0], [42.3, 514.0], [42.4, 515.0], [42.5, 516.0], [42.6, 517.0], [42.7, 520.0], [42.8, 520.0], [42.9, 521.0], [43.0, 522.0], [43.1, 523.0], [43.2, 523.0], [43.3, 525.0], [43.4, 526.0], [43.5, 527.0], [43.6, 527.0], [43.7, 529.0], [43.8, 530.0], [43.9, 531.0], [44.0, 531.0], [44.1, 533.0], [44.2, 534.0], [44.3, 535.0], [44.4, 535.0], [44.5, 536.0], [44.6, 537.0], [44.7, 539.0], [44.8, 539.0], [44.9, 541.0], [45.0, 543.0], [45.1, 545.0], [45.2, 546.0], [45.3, 547.0], [45.4, 547.0], [45.5, 548.0], [45.6, 549.0], [45.7, 550.0], [45.8, 551.0], [45.9, 553.0], [46.0, 554.0], [46.1, 556.0], [46.2, 556.0], [46.3, 557.0], [46.4, 558.0], [46.5, 560.0], [46.6, 561.0], [46.7, 561.0], [46.8, 564.0], [46.9, 566.0], [47.0, 567.0], [47.1, 568.0], [47.2, 569.0], [47.3, 570.0], [47.4, 571.0], [47.5, 572.0], [47.6, 573.0], [47.7, 574.0], [47.8, 576.0], [47.9, 577.0], [48.0, 579.0], [48.1, 579.0], [48.2, 580.0], [48.3, 581.0], [48.4, 582.0], [48.5, 583.0], [48.6, 584.0], [48.7, 586.0], [48.8, 587.0], [48.9, 588.0], [49.0, 590.0], [49.1, 592.0], [49.2, 593.0], [49.3, 593.0], [49.4, 595.0], [49.5, 596.0], [49.6, 597.0], [49.7, 600.0], [49.8, 601.0], [49.9, 601.0], [50.0, 603.0], [50.1, 604.0], [50.2, 604.0], [50.3, 606.0], [50.4, 607.0], [50.5, 607.0], [50.6, 608.0], [50.7, 610.0], [50.8, 612.0], [50.9, 614.0], [51.0, 614.0], [51.1, 615.0], [51.2, 617.0], [51.3, 617.0], [51.4, 618.0], [51.5, 618.0], [51.6, 620.0], [51.7, 621.0], [51.8, 622.0], [51.9, 623.0], [52.0, 625.0], [52.1, 627.0], [52.2, 628.0], [52.3, 629.0], [52.4, 630.0], [52.5, 632.0], [52.6, 634.0], [52.7, 634.0], [52.8, 635.0], [52.9, 636.0], [53.0, 638.0], [53.1, 639.0], [53.2, 642.0], [53.3, 644.0], [53.4, 645.0], [53.5, 648.0], [53.6, 649.0], [53.7, 651.0], [53.8, 651.0], [53.9, 653.0], [54.0, 654.0], [54.1, 657.0], [54.2, 660.0], [54.3, 660.0], [54.4, 661.0], [54.5, 663.0], [54.6, 664.0], [54.7, 666.0], [54.8, 667.0], [54.9, 668.0], [55.0, 671.0], [55.1, 673.0], [55.2, 675.0], [55.3, 677.0], [55.4, 678.0], [55.5, 680.0], [55.6, 681.0], [55.7, 684.0], [55.8, 686.0], [55.9, 688.0], [56.0, 690.0], [56.1, 691.0], [56.2, 695.0], [56.3, 697.0], [56.4, 699.0], [56.5, 700.0], [56.6, 701.0], [56.7, 702.0], [56.8, 704.0], [56.9, 705.0], [57.0, 707.0], [57.1, 708.0], [57.2, 709.0], [57.3, 712.0], [57.4, 713.0], [57.5, 716.0], [57.6, 718.0], [57.7, 719.0], [57.8, 720.0], [57.9, 722.0], [58.0, 725.0], [58.1, 726.0], [58.2, 728.0], [58.3, 730.0], [58.4, 732.0], [58.5, 735.0], [58.6, 737.0], [58.7, 738.0], [58.8, 741.0], [58.9, 744.0], [59.0, 745.0], [59.1, 747.0], [59.2, 750.0], [59.3, 751.0], [59.4, 753.0], [59.5, 755.0], [59.6, 757.0], [59.7, 759.0], [59.8, 760.0], [59.9, 762.0], [60.0, 763.0], [60.1, 765.0], [60.2, 768.0], [60.3, 769.0], [60.4, 770.0], [60.5, 771.0], [60.6, 775.0], [60.7, 777.0], [60.8, 780.0], [60.9, 781.0], [61.0, 782.0], [61.1, 784.0], [61.2, 785.0], [61.3, 786.0], [61.4, 788.0], [61.5, 789.0], [61.6, 791.0], [61.7, 792.0], [61.8, 796.0], [61.9, 799.0], [62.0, 800.0], [62.1, 802.0], [62.2, 804.0], [62.3, 807.0], [62.4, 808.0], [62.5, 809.0], [62.6, 812.0], [62.7, 815.0], [62.8, 816.0], [62.9, 819.0], [63.0, 821.0], [63.1, 822.0], [63.2, 825.0], [63.3, 828.0], [63.4, 829.0], [63.5, 831.0], [63.6, 834.0], [63.7, 836.0], [63.8, 837.0], [63.9, 838.0], [64.0, 840.0], [64.1, 842.0], [64.2, 845.0], [64.3, 847.0], [64.4, 849.0], [64.5, 850.0], [64.6, 851.0], [64.7, 853.0], [64.8, 855.0], [64.9, 858.0], [65.0, 860.0], [65.1, 864.0], [65.2, 866.0], [65.3, 868.0], [65.4, 870.0], [65.5, 873.0], [65.6, 874.0], [65.7, 875.0], [65.8, 877.0], [65.9, 878.0], [66.0, 880.0], [66.1, 882.0], [66.2, 883.0], [66.3, 885.0], [66.4, 888.0], [66.5, 890.0], [66.6, 892.0], [66.7, 897.0], [66.8, 899.0], [66.9, 900.0], [67.0, 904.0], [67.1, 907.0], [67.2, 908.0], [67.3, 910.0], [67.4, 911.0], [67.5, 913.0], [67.6, 917.0], [67.7, 919.0], [67.8, 922.0], [67.9, 924.0], [68.0, 926.0], [68.1, 929.0], [68.2, 931.0], [68.3, 933.0], [68.4, 935.0], [68.5, 937.0], [68.6, 939.0], [68.7, 941.0], [68.8, 944.0], [68.9, 946.0], [69.0, 949.0], [69.1, 951.0], [69.2, 952.0], [69.3, 954.0], [69.4, 958.0], [69.5, 962.0], [69.6, 963.0], [69.7, 965.0], [69.8, 968.0], [69.9, 971.0], [70.0, 972.0], [70.1, 973.0], [70.2, 980.0], [70.3, 983.0], [70.4, 986.0], [70.5, 988.0], [70.6, 990.0], [70.7, 992.0], [70.8, 995.0], [70.9, 998.0], [71.0, 999.0], [71.1, 1002.0], [71.2, 1008.0], [71.3, 1011.0], [71.4, 1014.0], [71.5, 1017.0], [71.6, 1023.0], [71.7, 1027.0], [71.8, 1028.0], [71.9, 1034.0], [72.0, 1038.0], [72.1, 1039.0], [72.2, 1042.0], [72.3, 1044.0], [72.4, 1047.0], [72.5, 1050.0], [72.6, 1053.0], [72.7, 1054.0], [72.8, 1058.0], [72.9, 1061.0], [73.0, 1064.0], [73.1, 1067.0], [73.2, 1069.0], [73.3, 1073.0], [73.4, 1076.0], [73.5, 1078.0], [73.6, 1079.0], [73.7, 1083.0], [73.8, 1085.0], [73.9, 1088.0], [74.0, 1090.0], [74.1, 1094.0], [74.2, 1098.0], [74.3, 1099.0], [74.4, 1102.0], [74.5, 1108.0], [74.6, 1112.0], [74.7, 1120.0], [74.8, 1122.0], [74.9, 1124.0], [75.0, 1127.0], [75.1, 1131.0], [75.2, 1133.0], [75.3, 1136.0], [75.4, 1139.0], [75.5, 1142.0], [75.6, 1145.0], [75.7, 1147.0], [75.8, 1151.0], [75.9, 1154.0], [76.0, 1158.0], [76.1, 1162.0], [76.2, 1165.0], [76.3, 1171.0], [76.4, 1175.0], [76.5, 1179.0], [76.6, 1186.0], [76.7, 1188.0], [76.8, 1192.0], [76.9, 1195.0], [77.0, 1207.0], [77.1, 1212.0], [77.2, 1214.0], [77.3, 1217.0], [77.4, 1225.0], [77.5, 1235.0], [77.6, 1239.0], [77.7, 1245.0], [77.8, 1249.0], [77.9, 1260.0], [78.0, 1267.0], [78.1, 1271.0], [78.2, 1274.0], [78.3, 1282.0], [78.4, 1290.0], [78.5, 1294.0], [78.6, 1304.0], [78.7, 1311.0], [78.8, 1318.0], [78.9, 1327.0], [79.0, 1332.0], [79.1, 1338.0], [79.2, 1345.0], [79.3, 1352.0], [79.4, 1358.0], [79.5, 1372.0], [79.6, 1380.0], [79.7, 1392.0], [79.8, 1399.0], [79.9, 1403.0], [80.0, 1407.0], [80.1, 1414.0], [80.2, 1423.0], [80.3, 1430.0], [80.4, 1438.0], [80.5, 1444.0], [80.6, 1451.0], [80.7, 1460.0], [80.8, 1466.0], [80.9, 1475.0], [81.0, 1480.0], [81.1, 1495.0], [81.2, 1503.0], [81.3, 1512.0], [81.4, 1519.0], [81.5, 1522.0], [81.6, 1537.0], [81.7, 1544.0], [81.8, 1551.0], [81.9, 1558.0], [82.0, 1578.0], [82.1, 1587.0], [82.2, 1602.0], [82.3, 1607.0], [82.4, 1623.0], [82.5, 1630.0], [82.6, 1643.0], [82.7, 1657.0], [82.8, 1661.0], [82.9, 1668.0], [83.0, 1677.0], [83.1, 1684.0], [83.2, 1696.0], [83.3, 1710.0], [83.4, 1718.0], [83.5, 1724.0], [83.6, 1730.0], [83.7, 1745.0], [83.8, 1748.0], [83.9, 1755.0], [84.0, 1763.0], [84.1, 1771.0], [84.2, 1779.0], [84.3, 1784.0], [84.4, 1789.0], [84.5, 1795.0], [84.6, 1802.0], [84.7, 1807.0], [84.8, 1822.0], [84.9, 1829.0], [85.0, 1836.0], [85.1, 1841.0], [85.2, 1844.0], [85.3, 1854.0], [85.4, 1865.0], [85.5, 1871.0], [85.6, 1877.0], [85.7, 1884.0], [85.8, 1893.0], [85.9, 1895.0], [86.0, 1905.0], [86.1, 1909.0], [86.2, 1913.0], [86.3, 1922.0], [86.4, 1935.0], [86.5, 1947.0], [86.6, 1953.0], [86.7, 1957.0], [86.8, 1969.0], [86.9, 1980.0], [87.0, 1986.0], [87.1, 2004.0], [87.2, 2009.0], [87.3, 2022.0], [87.4, 2034.0], [87.5, 2039.0], [87.6, 2053.0], [87.7, 2061.0], [87.8, 2066.0], [87.9, 2079.0], [88.0, 2085.0], [88.1, 2087.0], [88.2, 2095.0], [88.3, 2103.0], [88.4, 2108.0], [88.5, 2113.0], [88.6, 2124.0], [88.7, 2137.0], [88.8, 2146.0], [88.9, 2154.0], [89.0, 2164.0], [89.1, 2170.0], [89.2, 2181.0], [89.3, 2192.0], [89.4, 2201.0], [89.5, 2214.0], [89.6, 2232.0], [89.7, 2236.0], [89.8, 2248.0], [89.9, 2260.0], [90.0, 2274.0], [90.1, 2284.0], [90.2, 2288.0], [90.3, 2298.0], [90.4, 2306.0], [90.5, 2311.0], [90.6, 2321.0], [90.7, 2339.0], [90.8, 2348.0], [90.9, 2359.0], [91.0, 2372.0], [91.1, 2379.0], [91.2, 2385.0], [91.3, 2390.0], [91.4, 2396.0], [91.5, 2402.0], [91.6, 2412.0], [91.7, 2422.0], [91.8, 2433.0], [91.9, 2440.0], [92.0, 2448.0], [92.1, 2467.0], [92.2, 2482.0], [92.3, 2495.0], [92.4, 2500.0], [92.5, 2505.0], [92.6, 2513.0], [92.7, 2521.0], [92.8, 2530.0], [92.9, 2538.0], [93.0, 2554.0], [93.1, 2561.0], [93.2, 2576.0], [93.3, 2588.0], [93.4, 2593.0], [93.5, 2602.0], [93.6, 2614.0], [93.7, 2628.0], [93.8, 2644.0], [93.9, 2652.0], [94.0, 2671.0], [94.1, 2693.0], [94.2, 2705.0], [94.3, 2727.0], [94.4, 2734.0], [94.5, 2745.0], [94.6, 2773.0], [94.7, 2782.0], [94.8, 2787.0], [94.9, 2802.0], [95.0, 2818.0], [95.1, 2832.0], [95.2, 2876.0], [95.3, 2902.0], [95.4, 2936.0], [95.5, 2967.0], [95.6, 2978.0], [95.7, 3023.0], [95.8, 3067.0], [95.9, 3140.0], [96.0, 3150.0], [96.1, 3199.0], [96.2, 3254.0], [96.3, 3299.0], [96.4, 3331.0], [96.5, 3359.0], [96.6, 3377.0], [96.7, 3403.0], [96.8, 3446.0], [96.9, 3524.0], [97.0, 3557.0], [97.1, 3596.0], [97.2, 3675.0], [97.3, 3731.0], [97.4, 3825.0], [97.5, 3885.0], [97.6, 3951.0], [97.7, 4056.0], [97.8, 4115.0], [97.9, 4209.0], [98.0, 4303.0], [98.1, 4453.0], [98.2, 4486.0], [98.3, 4556.0], [98.4, 4719.0], [98.5, 4877.0], [98.6, 4945.0], [98.7, 5062.0], [98.8, 5185.0], [98.9, 5314.0], [99.0, 5657.0], [99.1, 5854.0], [99.2, 5964.0], [99.3, 6435.0], [99.4, 6776.0], [99.5, 7192.0], [99.6, 7969.0], [99.7, 8927.0], [99.8, 9755.0], [99.9, 13744.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 881.0, "series": [{"data": [[600.0, 353.0], [700.0, 284.0], [800.0, 253.0], [900.0, 216.0], [1000.0, 173.0], [1100.0, 134.0], [1200.0, 84.0], [1300.0, 66.0], [1400.0, 71.0], [1500.0, 53.0], [1600.0, 53.0], [1700.0, 71.0], [1800.0, 70.0], [1900.0, 60.0], [2000.0, 61.0], [2100.0, 56.0], [2200.0, 50.0], [2300.0, 59.0], [2400.0, 49.0], [2500.0, 53.0], [2600.0, 38.0], [2700.0, 38.0], [2800.0, 22.0], [2900.0, 19.0], [3000.0, 9.0], [3100.0, 14.0], [3200.0, 10.0], [3300.0, 18.0], [3400.0, 12.0], [3500.0, 12.0], [3600.0, 7.0], [3700.0, 7.0], [3800.0, 8.0], [3900.0, 5.0], [4000.0, 7.0], [4200.0, 5.0], [4300.0, 4.0], [4100.0, 7.0], [4400.0, 7.0], [4500.0, 6.0], [4600.0, 3.0], [4700.0, 4.0], [4800.0, 3.0], [4900.0, 8.0], [5100.0, 7.0], [5000.0, 2.0], [5300.0, 1.0], [5200.0, 2.0], [5400.0, 4.0], [5600.0, 2.0], [5800.0, 2.0], [5700.0, 3.0], [5900.0, 6.0], [6100.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [6600.0, 2.0], [6400.0, 1.0], [6800.0, 3.0], [6700.0, 3.0], [7100.0, 2.0], [7000.0, 1.0], [7200.0, 1.0], [7600.0, 1.0], [7900.0, 2.0], [8100.0, 2.0], [8700.0, 1.0], [8600.0, 1.0], [8900.0, 1.0], [9200.0, 1.0], [9100.0, 1.0], [9700.0, 1.0], [9600.0, 1.0], [9300.0, 1.0], [10700.0, 1.0], [11500.0, 1.0], [12700.0, 1.0], [13800.0, 1.0], [13400.0, 1.0], [13700.0, 2.0], [14100.0, 1.0], [14000.0, 1.0], [15300.0, 1.0], [200.0, 558.0], [300.0, 881.0], [400.0, 680.0], [500.0, 460.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 977.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2123.0, "series": [{"data": [[0.0, 2123.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2090.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 977.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.540816326530614, "minX": 1.60440618E12, "maxY": 10.0, "series": [{"data": [[1.6044063E12, 10.0], [1.6044066E12, 10.0], [1.60440642E12, 10.0], [1.60440624E12, 10.0], [1.60440672E12, 9.540816326530614], [1.60440654E12, 10.0], [1.60440636E12, 10.0], [1.60440666E12, 10.0], [1.60440618E12, 10.0], [1.60440648E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440672E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 376.0, "minX": 1.0, "maxY": 6231.0, "series": [{"data": [[8.0, 771.0], [4.0, 516.0], [2.0, 3750.0], [1.0, 6231.0], [9.0, 376.0], [10.0, 1004.0384095734419], [5.0, 1842.0], [6.0, 1621.0], [3.0, 5190.0], [7.0, 2967.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1006.7797687861276]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 743.7, "minX": 1.60440618E12, "maxY": 3741366.3, "series": [{"data": [[1.6044063E12, 3608905.5166666666], [1.6044066E12, 3741366.3], [1.60440642E12, 2947401.966666667], [1.60440624E12, 2594823.3666666667], [1.60440672E12, 509433.06666666665], [1.60440654E12, 2521049.6666666665], [1.60440636E12, 3684523.65], [1.60440666E12, 3173237.3666666667], [1.60440618E12, 1680705.4166666667], [1.60440648E12, 3118254.6333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6044063E12, 5211.616666666667], [1.6044066E12, 5032.366666666667], [1.60440642E12, 3950.75], [1.60440624E12, 4226.733333333334], [1.60440672E12, 743.7], [1.60440654E12, 4359.966666666666], [1.60440636E12, 4761.683333333333], [1.60440666E12, 4729.25], [1.60440618E12, 1693.4166666666667], [1.60440648E12, 3867.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440672E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 853.3342898134872, "minX": 1.60440618E12, "maxY": 1520.4591836734692, "series": [{"data": [[1.6044063E12, 853.3342898134872], [1.6044066E12, 902.7048192771083], [1.60440642E12, 1147.87213740458], [1.60440624E12, 1047.340170940172], [1.60440672E12, 1520.4591836734692], [1.60440654E12, 999.5075376884433], [1.60440636E12, 946.1164274322165], [1.60440666E12, 960.8271999999997], [1.60440618E12, 1181.8025751072962], [1.60440648E12, 1114.8796296296293]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440672E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 850.7144906743188, "minX": 1.60440618E12, "maxY": 1518.438775510204, "series": [{"data": [[1.6044063E12, 850.7144906743188], [1.6044066E12, 900.4879518072282], [1.60440642E12, 1145.1812977099232], [1.60440624E12, 1045.082051282051], [1.60440672E12, 1518.438775510204], [1.60440654E12, 997.8860971524286], [1.60440636E12, 942.9218500797447], [1.60440666E12, 958.6000000000003], [1.60440618E12, 1178.5236051502156], [1.60440648E12, 1112.5888888888894]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440672E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60440618E12, "maxY": 0.35622317596566544, "series": [{"data": [[1.6044063E12, 0.01434720229555237], [1.6044066E12, 0.009036144578313253], [1.60440642E12, 0.011450381679389308], [1.60440624E12, 0.017094017094017092], [1.60440672E12, 0.0], [1.60440654E12, 0.011725293132328311], [1.60440636E12, 0.019138755980861226], [1.60440666E12, 0.017599999999999998], [1.60440618E12, 0.35622317596566544], [1.60440648E12, 0.01666666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440672E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 215.0, "minX": 1.60440618E12, "maxY": 15336.0, "series": [{"data": [[1.6044063E12, 10767.0], [1.6044066E12, 6776.0], [1.60440642E12, 13484.0], [1.60440624E12, 15336.0], [1.60440672E12, 9390.0], [1.60440654E12, 8641.0], [1.60440636E12, 8198.0], [1.60440666E12, 9672.0], [1.60440618E12, 11554.0], [1.60440648E12, 14154.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6044063E12, 231.0], [1.6044066E12, 228.98499984145164], [1.60440642E12, 229.0], [1.60440624E12, 231.27399986028672], [1.60440672E12, 302.0], [1.60440654E12, 235.0], [1.60440636E12, 227.30399970054626], [1.60440666E12, 225.0], [1.60440618E12, 233.2119998884201], [1.60440648E12, 238.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6044063E12, 231.0], [1.6044066E12, 229.58350006341934], [1.60440642E12, 229.1975000500679], [1.60440624E12, 231.80140005588532], [1.60440672E12, 302.0], [1.60440654E12, 235.0], [1.60440636E12, 228.0], [1.60440666E12, 225.19740005970002], [1.60440618E12, 233.63320004463196], [1.60440648E12, 238.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6044063E12, 231.0], [1.6044066E12, 229.31749992072582], [1.60440642E12, 229.0], [1.60440624E12, 231.56699993014337], [1.60440672E12, 302.0], [1.60440654E12, 235.0], [1.60440636E12, 227.93199985027314], [1.60440666E12, 225.0], [1.60440618E12, 233.44599994421006], [1.60440648E12, 238.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6044063E12, 224.0], [1.6044066E12, 221.0], [1.60440642E12, 225.0], [1.60440624E12, 225.0], [1.60440672E12, 302.0], [1.60440654E12, 224.0], [1.60440636E12, 222.0], [1.60440666E12, 215.0], [1.60440618E12, 231.0], [1.60440648E12, 230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6044063E12, 478.0], [1.6044066E12, 497.5], [1.60440642E12, 653.0], [1.60440624E12, 676.0], [1.60440672E12, 926.0], [1.60440654E12, 562.0], [1.60440636E12, 534.0], [1.60440666E12, 576.0], [1.60440618E12, 766.0], [1.60440648E12, 764.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440672E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 286.5, "minX": 1.0, "maxY": 4990.5, "series": [{"data": [[2.0, 1218.5], [3.0, 1630.0], [4.0, 1075.5], [5.0, 1190.0], [6.0, 977.0], [7.0, 944.0], [8.0, 794.5], [9.0, 785.5], [10.0, 661.5], [11.0, 669.0], [12.0, 653.0], [13.0, 571.0], [14.0, 555.5], [15.0, 474.0], [16.0, 446.5], [1.0, 4990.5], [17.0, 582.0], [18.0, 365.0], [19.0, 353.0], [20.0, 321.5], [21.0, 326.0], [22.0, 356.5], [23.0, 332.5], [24.0, 365.5], [25.0, 340.0], [26.0, 302.0], [27.0, 340.0], [28.0, 348.5], [30.0, 286.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 286.0, "minX": 1.0, "maxY": 4981.0, "series": [{"data": [[2.0, 1215.5], [3.0, 1619.0], [4.0, 1072.0], [5.0, 1189.0], [6.0, 972.5], [7.0, 934.0], [8.0, 790.5], [9.0, 784.0], [10.0, 661.5], [11.0, 667.0], [12.0, 651.5], [13.0, 570.0], [14.0, 555.0], [15.0, 474.0], [16.0, 446.5], [1.0, 4981.0], [17.0, 582.0], [18.0, 364.5], [19.0, 353.0], [20.0, 321.5], [21.0, 325.0], [22.0, 356.5], [23.0, 331.5], [24.0, 365.5], [25.0, 340.0], [26.0, 302.0], [27.0, 340.0], [28.0, 348.5], [30.0, 286.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60440618E12, "maxY": 11.616666666666667, "series": [{"data": [[1.6044063E12, 11.616666666666667], [1.6044066E12, 11.066666666666666], [1.60440642E12, 8.733333333333333], [1.60440624E12, 9.75], [1.60440672E12, 1.4666666666666666], [1.60440654E12, 9.95], [1.60440636E12, 10.45], [1.60440666E12, 10.416666666666666], [1.60440618E12, 4.05], [1.60440648E12, 9.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440672E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.60440618E12, "maxY": 11.616666666666667, "series": [{"data": [[1.6044063E12, 11.616666666666667], [1.6044066E12, 11.066666666666666], [1.60440642E12, 8.733333333333333], [1.60440624E12, 9.75], [1.60440672E12, 1.6333333333333333], [1.60440654E12, 9.95], [1.60440636E12, 10.45], [1.60440666E12, 10.416666666666666], [1.60440618E12, 3.8833333333333333], [1.60440648E12, 9.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440672E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.60440618E12, "maxY": 11.616666666666667, "series": [{"data": [[1.6044063E12, 11.616666666666667], [1.6044066E12, 11.066666666666666], [1.60440642E12, 8.733333333333333], [1.60440624E12, 9.75], [1.60440672E12, 1.6333333333333333], [1.60440654E12, 9.95], [1.60440636E12, 10.45], [1.60440666E12, 10.416666666666666], [1.60440618E12, 3.8833333333333333], [1.60440648E12, 9.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440672E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.60440618E12, "maxY": 11.616666666666667, "series": [{"data": [[1.6044063E12, 11.616666666666667], [1.6044066E12, 11.066666666666666], [1.60440642E12, 8.733333333333333], [1.60440624E12, 9.75], [1.60440672E12, 1.6333333333333333], [1.60440654E12, 9.95], [1.60440636E12, 10.45], [1.60440666E12, 10.416666666666666], [1.60440618E12, 3.8833333333333333], [1.60440648E12, 9.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440672E12, "title": "Total Transactions Per Second"}},
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

