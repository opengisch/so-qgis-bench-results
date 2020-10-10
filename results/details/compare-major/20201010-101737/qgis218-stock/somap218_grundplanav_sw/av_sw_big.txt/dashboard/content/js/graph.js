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
        data: {"result": {"minY": 207.0, "minX": 0.0, "maxY": 90095.0, "series": [{"data": [[0.0, 207.0], [0.1, 217.0], [0.2, 220.0], [0.3, 221.0], [0.4, 222.0], [0.5, 222.0], [0.6, 223.0], [0.7, 223.0], [0.8, 224.0], [0.9, 225.0], [1.0, 226.0], [1.1, 226.0], [1.2, 227.0], [1.3, 227.0], [1.4, 228.0], [1.5, 229.0], [1.6, 229.0], [1.7, 230.0], [1.8, 231.0], [1.9, 231.0], [2.0, 231.0], [2.1, 232.0], [2.2, 232.0], [2.3, 233.0], [2.4, 233.0], [2.5, 233.0], [2.6, 234.0], [2.7, 234.0], [2.8, 234.0], [2.9, 235.0], [3.0, 236.0], [3.1, 236.0], [3.2, 237.0], [3.3, 237.0], [3.4, 238.0], [3.5, 238.0], [3.6, 239.0], [3.7, 239.0], [3.8, 240.0], [3.9, 240.0], [4.0, 241.0], [4.1, 241.0], [4.2, 242.0], [4.3, 242.0], [4.4, 243.0], [4.5, 243.0], [4.6, 243.0], [4.7, 244.0], [4.8, 244.0], [4.9, 245.0], [5.0, 245.0], [5.1, 246.0], [5.2, 246.0], [5.3, 246.0], [5.4, 247.0], [5.5, 247.0], [5.6, 248.0], [5.7, 248.0], [5.8, 249.0], [5.9, 249.0], [6.0, 250.0], [6.1, 251.0], [6.2, 251.0], [6.3, 251.0], [6.4, 252.0], [6.5, 252.0], [6.6, 253.0], [6.7, 254.0], [6.8, 254.0], [6.9, 255.0], [7.0, 255.0], [7.1, 256.0], [7.2, 256.0], [7.3, 257.0], [7.4, 258.0], [7.5, 259.0], [7.6, 259.0], [7.7, 260.0], [7.8, 261.0], [7.9, 261.0], [8.0, 262.0], [8.1, 262.0], [8.2, 262.0], [8.3, 263.0], [8.4, 264.0], [8.5, 264.0], [8.6, 265.0], [8.7, 265.0], [8.8, 266.0], [8.9, 267.0], [9.0, 268.0], [9.1, 268.0], [9.2, 269.0], [9.3, 270.0], [9.4, 271.0], [9.5, 272.0], [9.6, 273.0], [9.7, 274.0], [9.8, 275.0], [9.9, 275.0], [10.0, 276.0], [10.1, 278.0], [10.2, 278.0], [10.3, 280.0], [10.4, 281.0], [10.5, 282.0], [10.6, 282.0], [10.7, 284.0], [10.8, 284.0], [10.9, 286.0], [11.0, 287.0], [11.1, 287.0], [11.2, 288.0], [11.3, 288.0], [11.4, 289.0], [11.5, 290.0], [11.6, 290.0], [11.7, 291.0], [11.8, 292.0], [11.9, 293.0], [12.0, 293.0], [12.1, 293.0], [12.2, 294.0], [12.3, 295.0], [12.4, 295.0], [12.5, 296.0], [12.6, 297.0], [12.7, 297.0], [12.8, 298.0], [12.9, 298.0], [13.0, 298.0], [13.1, 298.0], [13.2, 299.0], [13.3, 299.0], [13.4, 299.0], [13.5, 300.0], [13.6, 300.0], [13.7, 301.0], [13.8, 301.0], [13.9, 301.0], [14.0, 302.0], [14.1, 302.0], [14.2, 302.0], [14.3, 302.0], [14.4, 303.0], [14.5, 303.0], [14.6, 303.0], [14.7, 304.0], [14.8, 304.0], [14.9, 304.0], [15.0, 305.0], [15.1, 305.0], [15.2, 305.0], [15.3, 306.0], [15.4, 307.0], [15.5, 307.0], [15.6, 307.0], [15.7, 307.0], [15.8, 308.0], [15.9, 308.0], [16.0, 309.0], [16.1, 309.0], [16.2, 309.0], [16.3, 310.0], [16.4, 310.0], [16.5, 312.0], [16.6, 312.0], [16.7, 313.0], [16.8, 313.0], [16.9, 314.0], [17.0, 314.0], [17.1, 314.0], [17.2, 315.0], [17.3, 315.0], [17.4, 316.0], [17.5, 317.0], [17.6, 317.0], [17.7, 318.0], [17.8, 318.0], [17.9, 319.0], [18.0, 319.0], [18.1, 321.0], [18.2, 321.0], [18.3, 322.0], [18.4, 322.0], [18.5, 322.0], [18.6, 322.0], [18.7, 323.0], [18.8, 324.0], [18.9, 324.0], [19.0, 324.0], [19.1, 325.0], [19.2, 326.0], [19.3, 326.0], [19.4, 326.0], [19.5, 327.0], [19.6, 328.0], [19.7, 328.0], [19.8, 328.0], [19.9, 329.0], [20.0, 329.0], [20.1, 329.0], [20.2, 330.0], [20.3, 330.0], [20.4, 330.0], [20.5, 331.0], [20.6, 331.0], [20.7, 332.0], [20.8, 332.0], [20.9, 333.0], [21.0, 333.0], [21.1, 334.0], [21.2, 334.0], [21.3, 335.0], [21.4, 335.0], [21.5, 336.0], [21.6, 337.0], [21.7, 337.0], [21.8, 338.0], [21.9, 339.0], [22.0, 339.0], [22.1, 339.0], [22.2, 340.0], [22.3, 340.0], [22.4, 341.0], [22.5, 341.0], [22.6, 342.0], [22.7, 342.0], [22.8, 343.0], [22.9, 343.0], [23.0, 344.0], [23.1, 345.0], [23.2, 346.0], [23.3, 346.0], [23.4, 346.0], [23.5, 348.0], [23.6, 349.0], [23.7, 349.0], [23.8, 349.0], [23.9, 349.0], [24.0, 350.0], [24.1, 350.0], [24.2, 351.0], [24.3, 351.0], [24.4, 351.0], [24.5, 352.0], [24.6, 353.0], [24.7, 353.0], [24.8, 353.0], [24.9, 354.0], [25.0, 355.0], [25.1, 355.0], [25.2, 356.0], [25.3, 356.0], [25.4, 357.0], [25.5, 357.0], [25.6, 358.0], [25.7, 358.0], [25.8, 359.0], [25.9, 359.0], [26.0, 360.0], [26.1, 360.0], [26.2, 361.0], [26.3, 361.0], [26.4, 362.0], [26.5, 363.0], [26.6, 363.0], [26.7, 364.0], [26.8, 365.0], [26.9, 366.0], [27.0, 367.0], [27.1, 368.0], [27.2, 368.0], [27.3, 369.0], [27.4, 369.0], [27.5, 370.0], [27.6, 371.0], [27.7, 371.0], [27.8, 371.0], [27.9, 372.0], [28.0, 372.0], [28.1, 373.0], [28.2, 373.0], [28.3, 374.0], [28.4, 375.0], [28.5, 375.0], [28.6, 376.0], [28.7, 376.0], [28.8, 378.0], [28.9, 378.0], [29.0, 379.0], [29.1, 380.0], [29.2, 380.0], [29.3, 381.0], [29.4, 382.0], [29.5, 383.0], [29.6, 383.0], [29.7, 384.0], [29.8, 384.0], [29.9, 386.0], [30.0, 387.0], [30.1, 388.0], [30.2, 389.0], [30.3, 389.0], [30.4, 390.0], [30.5, 390.0], [30.6, 391.0], [30.7, 392.0], [30.8, 393.0], [30.9, 394.0], [31.0, 395.0], [31.1, 396.0], [31.2, 396.0], [31.3, 397.0], [31.4, 398.0], [31.5, 399.0], [31.6, 400.0], [31.7, 400.0], [31.8, 400.0], [31.9, 401.0], [32.0, 402.0], [32.1, 403.0], [32.2, 403.0], [32.3, 405.0], [32.4, 405.0], [32.5, 406.0], [32.6, 407.0], [32.7, 408.0], [32.8, 409.0], [32.9, 409.0], [33.0, 410.0], [33.1, 411.0], [33.2, 411.0], [33.3, 412.0], [33.4, 412.0], [33.5, 412.0], [33.6, 413.0], [33.7, 415.0], [33.8, 416.0], [33.9, 416.0], [34.0, 417.0], [34.1, 418.0], [34.2, 419.0], [34.3, 420.0], [34.4, 421.0], [34.5, 421.0], [34.6, 422.0], [34.7, 424.0], [34.8, 424.0], [34.9, 426.0], [35.0, 426.0], [35.1, 427.0], [35.2, 427.0], [35.3, 428.0], [35.4, 429.0], [35.5, 430.0], [35.6, 430.0], [35.7, 432.0], [35.8, 433.0], [35.9, 434.0], [36.0, 435.0], [36.1, 435.0], [36.2, 436.0], [36.3, 437.0], [36.4, 438.0], [36.5, 438.0], [36.6, 439.0], [36.7, 440.0], [36.8, 441.0], [36.9, 442.0], [37.0, 442.0], [37.1, 443.0], [37.2, 444.0], [37.3, 445.0], [37.4, 446.0], [37.5, 446.0], [37.6, 447.0], [37.7, 447.0], [37.8, 449.0], [37.9, 449.0], [38.0, 450.0], [38.1, 450.0], [38.2, 451.0], [38.3, 451.0], [38.4, 452.0], [38.5, 453.0], [38.6, 455.0], [38.7, 456.0], [38.8, 457.0], [38.9, 457.0], [39.0, 458.0], [39.1, 459.0], [39.2, 460.0], [39.3, 462.0], [39.4, 462.0], [39.5, 464.0], [39.6, 464.0], [39.7, 464.0], [39.8, 465.0], [39.9, 467.0], [40.0, 468.0], [40.1, 468.0], [40.2, 470.0], [40.3, 470.0], [40.4, 471.0], [40.5, 471.0], [40.6, 472.0], [40.7, 473.0], [40.8, 473.0], [40.9, 475.0], [41.0, 476.0], [41.1, 477.0], [41.2, 477.0], [41.3, 478.0], [41.4, 480.0], [41.5, 481.0], [41.6, 482.0], [41.7, 482.0], [41.8, 483.0], [41.9, 484.0], [42.0, 485.0], [42.1, 486.0], [42.2, 487.0], [42.3, 488.0], [42.4, 489.0], [42.5, 490.0], [42.6, 491.0], [42.7, 492.0], [42.8, 492.0], [42.9, 493.0], [43.0, 494.0], [43.1, 495.0], [43.2, 496.0], [43.3, 497.0], [43.4, 498.0], [43.5, 499.0], [43.6, 500.0], [43.7, 501.0], [43.8, 503.0], [43.9, 504.0], [44.0, 504.0], [44.1, 506.0], [44.2, 507.0], [44.3, 507.0], [44.4, 508.0], [44.5, 509.0], [44.6, 510.0], [44.7, 511.0], [44.8, 512.0], [44.9, 513.0], [45.0, 514.0], [45.1, 515.0], [45.2, 516.0], [45.3, 516.0], [45.4, 517.0], [45.5, 518.0], [45.6, 519.0], [45.7, 520.0], [45.8, 521.0], [45.9, 522.0], [46.0, 522.0], [46.1, 526.0], [46.2, 527.0], [46.3, 528.0], [46.4, 529.0], [46.5, 529.0], [46.6, 530.0], [46.7, 532.0], [46.8, 532.0], [46.9, 535.0], [47.0, 536.0], [47.1, 537.0], [47.2, 538.0], [47.3, 539.0], [47.4, 541.0], [47.5, 542.0], [47.6, 543.0], [47.7, 543.0], [47.8, 544.0], [47.9, 544.0], [48.0, 546.0], [48.1, 547.0], [48.2, 548.0], [48.3, 549.0], [48.4, 550.0], [48.5, 551.0], [48.6, 553.0], [48.7, 555.0], [48.8, 556.0], [48.9, 557.0], [49.0, 558.0], [49.1, 558.0], [49.2, 560.0], [49.3, 561.0], [49.4, 562.0], [49.5, 563.0], [49.6, 564.0], [49.7, 565.0], [49.8, 566.0], [49.9, 566.0], [50.0, 567.0], [50.1, 567.0], [50.2, 568.0], [50.3, 569.0], [50.4, 569.0], [50.5, 571.0], [50.6, 571.0], [50.7, 572.0], [50.8, 573.0], [50.9, 575.0], [51.0, 576.0], [51.1, 577.0], [51.2, 577.0], [51.3, 579.0], [51.4, 580.0], [51.5, 581.0], [51.6, 583.0], [51.7, 585.0], [51.8, 587.0], [51.9, 588.0], [52.0, 589.0], [52.1, 590.0], [52.2, 592.0], [52.3, 593.0], [52.4, 595.0], [52.5, 597.0], [52.6, 598.0], [52.7, 599.0], [52.8, 600.0], [52.9, 601.0], [53.0, 602.0], [53.1, 603.0], [53.2, 604.0], [53.3, 606.0], [53.4, 607.0], [53.5, 609.0], [53.6, 610.0], [53.7, 611.0], [53.8, 611.0], [53.9, 612.0], [54.0, 613.0], [54.1, 615.0], [54.2, 616.0], [54.3, 617.0], [54.4, 619.0], [54.5, 621.0], [54.6, 622.0], [54.7, 624.0], [54.8, 624.0], [54.9, 627.0], [55.0, 629.0], [55.1, 630.0], [55.2, 631.0], [55.3, 633.0], [55.4, 634.0], [55.5, 636.0], [55.6, 638.0], [55.7, 640.0], [55.8, 641.0], [55.9, 642.0], [56.0, 643.0], [56.1, 645.0], [56.2, 648.0], [56.3, 650.0], [56.4, 652.0], [56.5, 654.0], [56.6, 655.0], [56.7, 657.0], [56.8, 657.0], [56.9, 659.0], [57.0, 660.0], [57.1, 662.0], [57.2, 664.0], [57.3, 665.0], [57.4, 667.0], [57.5, 669.0], [57.6, 671.0], [57.7, 672.0], [57.8, 673.0], [57.9, 677.0], [58.0, 679.0], [58.1, 680.0], [58.2, 682.0], [58.3, 684.0], [58.4, 686.0], [58.5, 687.0], [58.6, 689.0], [58.7, 693.0], [58.8, 694.0], [58.9, 694.0], [59.0, 695.0], [59.1, 696.0], [59.2, 698.0], [59.3, 700.0], [59.4, 701.0], [59.5, 703.0], [59.6, 707.0], [59.7, 708.0], [59.8, 709.0], [59.9, 711.0], [60.0, 714.0], [60.1, 716.0], [60.2, 718.0], [60.3, 720.0], [60.4, 721.0], [60.5, 725.0], [60.6, 726.0], [60.7, 727.0], [60.8, 730.0], [60.9, 732.0], [61.0, 733.0], [61.1, 736.0], [61.2, 739.0], [61.3, 741.0], [61.4, 742.0], [61.5, 743.0], [61.6, 745.0], [61.7, 746.0], [61.8, 747.0], [61.9, 750.0], [62.0, 751.0], [62.1, 753.0], [62.2, 754.0], [62.3, 755.0], [62.4, 756.0], [62.5, 757.0], [62.6, 758.0], [62.7, 760.0], [62.8, 761.0], [62.9, 762.0], [63.0, 765.0], [63.1, 767.0], [63.2, 769.0], [63.3, 771.0], [63.4, 773.0], [63.5, 775.0], [63.6, 776.0], [63.7, 778.0], [63.8, 781.0], [63.9, 783.0], [64.0, 786.0], [64.1, 788.0], [64.2, 790.0], [64.3, 791.0], [64.4, 794.0], [64.5, 795.0], [64.6, 798.0], [64.7, 800.0], [64.8, 802.0], [64.9, 805.0], [65.0, 808.0], [65.1, 809.0], [65.2, 810.0], [65.3, 813.0], [65.4, 815.0], [65.5, 817.0], [65.6, 820.0], [65.7, 820.0], [65.8, 823.0], [65.9, 825.0], [66.0, 828.0], [66.1, 829.0], [66.2, 830.0], [66.3, 833.0], [66.4, 835.0], [66.5, 839.0], [66.6, 841.0], [66.7, 842.0], [66.8, 844.0], [66.9, 846.0], [67.0, 848.0], [67.1, 849.0], [67.2, 852.0], [67.3, 854.0], [67.4, 857.0], [67.5, 858.0], [67.6, 859.0], [67.7, 861.0], [67.8, 864.0], [67.9, 866.0], [68.0, 867.0], [68.1, 872.0], [68.2, 874.0], [68.3, 875.0], [68.4, 877.0], [68.5, 879.0], [68.6, 882.0], [68.7, 884.0], [68.8, 886.0], [68.9, 887.0], [69.0, 889.0], [69.1, 893.0], [69.2, 896.0], [69.3, 899.0], [69.4, 900.0], [69.5, 904.0], [69.6, 908.0], [69.7, 911.0], [69.8, 913.0], [69.9, 917.0], [70.0, 918.0], [70.1, 921.0], [70.2, 927.0], [70.3, 930.0], [70.4, 933.0], [70.5, 934.0], [70.6, 938.0], [70.7, 940.0], [70.8, 944.0], [70.9, 946.0], [71.0, 949.0], [71.1, 954.0], [71.2, 956.0], [71.3, 961.0], [71.4, 964.0], [71.5, 967.0], [71.6, 969.0], [71.7, 971.0], [71.8, 975.0], [71.9, 977.0], [72.0, 981.0], [72.1, 985.0], [72.2, 989.0], [72.3, 990.0], [72.4, 994.0], [72.5, 997.0], [72.6, 999.0], [72.7, 1001.0], [72.8, 1007.0], [72.9, 1010.0], [73.0, 1014.0], [73.1, 1017.0], [73.2, 1019.0], [73.3, 1023.0], [73.4, 1025.0], [73.5, 1031.0], [73.6, 1036.0], [73.7, 1039.0], [73.8, 1043.0], [73.9, 1046.0], [74.0, 1054.0], [74.1, 1057.0], [74.2, 1061.0], [74.3, 1066.0], [74.4, 1074.0], [74.5, 1079.0], [74.6, 1081.0], [74.7, 1082.0], [74.8, 1085.0], [74.9, 1089.0], [75.0, 1092.0], [75.1, 1095.0], [75.2, 1098.0], [75.3, 1099.0], [75.4, 1104.0], [75.5, 1111.0], [75.6, 1115.0], [75.7, 1117.0], [75.8, 1123.0], [75.9, 1125.0], [76.0, 1130.0], [76.1, 1134.0], [76.2, 1138.0], [76.3, 1142.0], [76.4, 1144.0], [76.5, 1148.0], [76.6, 1153.0], [76.7, 1159.0], [76.8, 1162.0], [76.9, 1166.0], [77.0, 1172.0], [77.1, 1178.0], [77.2, 1181.0], [77.3, 1189.0], [77.4, 1192.0], [77.5, 1198.0], [77.6, 1201.0], [77.7, 1209.0], [77.8, 1212.0], [77.9, 1217.0], [78.0, 1225.0], [78.1, 1235.0], [78.2, 1240.0], [78.3, 1244.0], [78.4, 1253.0], [78.5, 1261.0], [78.6, 1265.0], [78.7, 1269.0], [78.8, 1275.0], [78.9, 1278.0], [79.0, 1282.0], [79.1, 1284.0], [79.2, 1288.0], [79.3, 1299.0], [79.4, 1307.0], [79.5, 1318.0], [79.6, 1325.0], [79.7, 1332.0], [79.8, 1335.0], [79.9, 1340.0], [80.0, 1349.0], [80.1, 1354.0], [80.2, 1361.0], [80.3, 1364.0], [80.4, 1376.0], [80.5, 1386.0], [80.6, 1393.0], [80.7, 1405.0], [80.8, 1410.0], [80.9, 1415.0], [81.0, 1423.0], [81.1, 1432.0], [81.2, 1443.0], [81.3, 1453.0], [81.4, 1464.0], [81.5, 1470.0], [81.6, 1478.0], [81.7, 1490.0], [81.8, 1500.0], [81.9, 1508.0], [82.0, 1511.0], [82.1, 1527.0], [82.2, 1531.0], [82.3, 1540.0], [82.4, 1544.0], [82.5, 1550.0], [82.6, 1559.0], [82.7, 1568.0], [82.8, 1581.0], [82.9, 1586.0], [83.0, 1591.0], [83.1, 1595.0], [83.2, 1607.0], [83.3, 1619.0], [83.4, 1625.0], [83.5, 1629.0], [83.6, 1638.0], [83.7, 1647.0], [83.8, 1655.0], [83.9, 1666.0], [84.0, 1676.0], [84.1, 1678.0], [84.2, 1692.0], [84.3, 1695.0], [84.4, 1703.0], [84.5, 1712.0], [84.6, 1715.0], [84.7, 1718.0], [84.8, 1722.0], [84.9, 1738.0], [85.0, 1744.0], [85.1, 1758.0], [85.2, 1763.0], [85.3, 1770.0], [85.4, 1779.0], [85.5, 1791.0], [85.6, 1794.0], [85.7, 1797.0], [85.8, 1805.0], [85.9, 1815.0], [86.0, 1836.0], [86.1, 1842.0], [86.2, 1857.0], [86.3, 1863.0], [86.4, 1873.0], [86.5, 1878.0], [86.6, 1886.0], [86.7, 1900.0], [86.8, 1908.0], [86.9, 1930.0], [87.0, 1942.0], [87.1, 1954.0], [87.2, 1957.0], [87.3, 1966.0], [87.4, 1975.0], [87.5, 1985.0], [87.6, 2000.0], [87.7, 2006.0], [87.8, 2016.0], [87.9, 2024.0], [88.0, 2029.0], [88.1, 2038.0], [88.2, 2055.0], [88.3, 2060.0], [88.4, 2067.0], [88.5, 2072.0], [88.6, 2076.0], [88.7, 2088.0], [88.8, 2098.0], [88.9, 2105.0], [89.0, 2113.0], [89.1, 2119.0], [89.2, 2129.0], [89.3, 2136.0], [89.4, 2144.0], [89.5, 2147.0], [89.6, 2155.0], [89.7, 2167.0], [89.8, 2173.0], [89.9, 2181.0], [90.0, 2191.0], [90.1, 2197.0], [90.2, 2209.0], [90.3, 2213.0], [90.4, 2221.0], [90.5, 2231.0], [90.6, 2240.0], [90.7, 2248.0], [90.8, 2253.0], [90.9, 2258.0], [91.0, 2264.0], [91.1, 2279.0], [91.2, 2289.0], [91.3, 2296.0], [91.4, 2304.0], [91.5, 2307.0], [91.6, 2312.0], [91.7, 2319.0], [91.8, 2326.0], [91.9, 2338.0], [92.0, 2345.0], [92.1, 2350.0], [92.2, 2358.0], [92.3, 2370.0], [92.4, 2376.0], [92.5, 2381.0], [92.6, 2389.0], [92.7, 2397.0], [92.8, 2407.0], [92.9, 2417.0], [93.0, 2432.0], [93.1, 2438.0], [93.2, 2446.0], [93.3, 2449.0], [93.4, 2463.0], [93.5, 2483.0], [93.6, 2494.0], [93.7, 2506.0], [93.8, 2510.0], [93.9, 2519.0], [94.0, 2533.0], [94.1, 2543.0], [94.2, 2565.0], [94.3, 2589.0], [94.4, 2603.0], [94.5, 2628.0], [94.6, 2647.0], [94.7, 2673.0], [94.8, 2690.0], [94.9, 2711.0], [95.0, 2723.0], [95.1, 2754.0], [95.2, 2791.0], [95.3, 2814.0], [95.4, 2842.0], [95.5, 2853.0], [95.6, 2895.0], [95.7, 2898.0], [95.8, 2948.0], [95.9, 2979.0], [96.0, 3001.0], [96.1, 3026.0], [96.2, 3051.0], [96.3, 3077.0], [96.4, 3123.0], [96.5, 3205.0], [96.6, 3266.0], [96.7, 3313.0], [96.8, 3381.0], [96.9, 3468.0], [97.0, 3509.0], [97.1, 3557.0], [97.2, 3616.0], [97.3, 3647.0], [97.4, 3690.0], [97.5, 3753.0], [97.6, 3821.0], [97.7, 3899.0], [97.8, 4004.0], [97.9, 4018.0], [98.0, 4170.0], [98.1, 4330.0], [98.2, 4406.0], [98.3, 4525.0], [98.4, 4663.0], [98.5, 4755.0], [98.6, 4850.0], [98.7, 4945.0], [98.8, 5069.0], [98.9, 5099.0], [99.0, 5294.0], [99.1, 5433.0], [99.2, 5729.0], [99.3, 6050.0], [99.4, 6269.0], [99.5, 6830.0], [99.6, 7611.0], [99.7, 8139.0], [99.8, 10115.0], [99.9, 13052.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 941.0, "series": [{"data": [[600.0, 338.0], [700.0, 279.0], [800.0, 243.0], [900.0, 170.0], [1000.0, 139.0], [1100.0, 118.0], [1200.0, 90.0], [1300.0, 68.0], [1400.0, 61.0], [1500.0, 71.0], [1600.0, 61.0], [1700.0, 71.0], [1800.0, 51.0], [1900.0, 47.0], [2000.0, 64.0], [2100.0, 68.0], [2200.0, 62.0], [2300.0, 72.0], [2400.0, 48.0], [2500.0, 37.0], [2600.0, 26.0], [2800.0, 24.0], [2700.0, 20.0], [2900.0, 15.0], [3000.0, 21.0], [3100.0, 5.0], [3300.0, 7.0], [3200.0, 10.0], [3400.0, 7.0], [3500.0, 10.0], [3600.0, 14.0], [3700.0, 8.0], [3800.0, 7.0], [3900.0, 4.0], [4000.0, 8.0], [4100.0, 4.0], [4300.0, 5.0], [4200.0, 4.0], [4500.0, 2.0], [4600.0, 8.0], [4400.0, 4.0], [4700.0, 4.0], [4800.0, 4.0], [5100.0, 3.0], [4900.0, 9.0], [5000.0, 6.0], [5200.0, 4.0], [5300.0, 1.0], [5500.0, 2.0], [5400.0, 3.0], [5600.0, 1.0], [5700.0, 2.0], [5800.0, 3.0], [5900.0, 1.0], [6100.0, 1.0], [6000.0, 2.0], [6200.0, 3.0], [6300.0, 1.0], [6600.0, 1.0], [6500.0, 1.0], [6400.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7600.0, 4.0], [7500.0, 2.0], [8000.0, 1.0], [8100.0, 1.0], [8200.0, 1.0], [8600.0, 1.0], [9100.0, 1.0], [9200.0, 1.0], [10100.0, 1.0], [10300.0, 1.0], [10400.0, 1.0], [11500.0, 1.0], [11900.0, 1.0], [13000.0, 2.0], [13600.0, 1.0], [15200.0, 1.0], [18900.0, 1.0], [200.0, 696.0], [300.0, 941.0], [90000.0, 1.0], [400.0, 622.0], [500.0, 481.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2266.0, "series": [{"data": [[0.0, 2266.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1981.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 943.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.883116883116884, "minX": 1.60232544E12, "maxY": 10.0, "series": [{"data": [[1.6023255E12, 10.0], [1.6023258E12, 10.0], [1.60232562E12, 10.0], [1.60232592E12, 9.883116883116884], [1.60232544E12, 10.0], [1.60232574E12, 10.0], [1.60232556E12, 10.0], [1.60232586E12, 10.0], [1.60232568E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232592E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 306.0, "minX": 1.0, "maxY": 5660.0, "series": [{"data": [[8.0, 406.0], [4.0, 1734.0], [2.0, 3281.0], [1.0, 5660.0], [9.0, 599.0], [10.0, 975.3020069471258], [5.0, 306.0], [6.0, 508.0], [3.0, 338.0], [7.0, 1282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 976.329994220768]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2898.5833333333335, "minX": 1.60232544E12, "maxY": 4412065.95, "series": [{"data": [[1.6023255E12, 2486666.5], [1.6023258E12, 3795261.066666667], [1.60232562E12, 3391436.0833333335], [1.60232592E12, 2024384.0166666666], [1.60232544E12, 2542902.466666667], [1.60232574E12, 2525423.25], [1.60232556E12, 4412065.95], [1.60232586E12, 3476934.8333333335], [1.60232568E12, 2921741.183333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6023255E12, 4766.716666666666], [1.6023258E12, 5448.55], [1.60232562E12, 4781.25], [1.60232592E12, 2898.5833333333335], [1.60232544E12, 2965.5666666666666], [1.60232574E12, 3933.6], [1.60232556E12, 5198.0], [1.60232586E12, 5374.966666666666], [1.60232568E12, 3216.8166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232592E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 816.5478142076498, "minX": 1.60232544E12, "maxY": 1505.6444954128433, "series": [{"data": [[1.6023255E12, 915.7641653905051], [1.6023258E12, 816.5478142076498], [1.60232562E12, 866.4627575277335], [1.60232592E12, 1150.6987012987013], [1.60232544E12, 1044.2125603864745], [1.60232574E12, 1094.5137111517365], [1.60232556E12, 873.3182481751818], [1.60232586E12, 843.1892655367228], [1.60232568E12, 1505.6444954128433]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232592E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 814.7882513661203, "minX": 1.60232544E12, "maxY": 1502.5504587155958, "series": [{"data": [[1.6023255E12, 913.7212863705967], [1.6023258E12, 814.7882513661203], [1.60232562E12, 863.4453248811404], [1.60232592E12, 1148.4233766233765], [1.60232544E12, 1041.0048309178744], [1.60232574E12, 1092.6617915904937], [1.60232556E12, 870.4817518248182], [1.60232586E12, 841.5522598870053], [1.60232568E12, 1502.5504587155958]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232592E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009562841530054647, "minX": 1.60232544E12, "maxY": 0.20772946859903377, "series": [{"data": [[1.6023255E12, 0.013782542113323127], [1.6023258E12, 0.009562841530054647], [1.60232562E12, 0.0110935023771791], [1.60232592E12, 0.025974025974025955], [1.60232544E12, 0.20772946859903377], [1.60232574E12, 0.014625228519195631], [1.60232556E12, 0.039416058394160555], [1.60232586E12, 0.012711864406779662], [1.60232568E12, 0.013761467889908242]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232592E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 207.0, "minX": 1.60232544E12, "maxY": 18904.0, "series": [{"data": [[1.6023255E12, 15226.0], [1.6023258E12, 7611.0], [1.60232562E12, 10451.0], [1.60232592E12, 8627.0], [1.60232544E12, 13616.0], [1.60232574E12, 18904.0], [1.60232556E12, 11598.0], [1.60232586E12, 7672.0], [1.60232568E12, 13073.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6023255E12, 227.0], [1.6023258E12, 220.59699982523918], [1.60232562E12, 222.0], [1.60232592E12, 232.0], [1.60232544E12, 229.0], [1.60232574E12, 235.86399973869322], [1.60232556E12, 228.17399983644486], [1.60232586E12, 229.38099983096123], [1.60232568E12, 225.847999792099]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6023255E12, 227.9492001247406], [1.6023258E12, 221.0], [1.60232562E12, 222.0], [1.60232592E12, 232.0], [1.60232544E12, 229.0], [1.60232574E12, 239.82680047035217], [1.60232556E12, 228.79140006542207], [1.60232586E12, 230.0], [1.60232568E12, 228.2148002910614]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6023255E12, 227.42599984407425], [1.6023258E12, 220.9634999126196], [1.60232562E12, 222.0], [1.60232592E12, 232.0], [1.60232544E12, 229.0], [1.60232574E12, 237.85399941205978], [1.60232556E12, 228.51699991822244], [1.60232586E12, 229.7354999154806], [1.60232568E12, 226.99399963617324]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6023255E12, 220.0], [1.6023258E12, 207.0], [1.60232562E12, 219.0], [1.60232592E12, 230.0], [1.60232544E12, 226.0], [1.60232574E12, 216.0], [1.60232556E12, 222.0], [1.60232586E12, 215.0], [1.60232568E12, 223.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6023255E12, 550.0], [1.6023258E12, 456.5], [1.60232562E12, 487.0], [1.60232592E12, 694.0], [1.60232544E12, 709.5], [1.60232574E12, 669.0], [1.60232556E12, 451.0], [1.60232586E12, 506.5], [1.60232568E12, 825.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232592E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 266.0, "minX": 1.0, "maxY": 90095.0, "series": [{"data": [[2.0, 1705.0], [3.0, 1340.0], [4.0, 1541.0], [5.0, 1098.0], [6.0, 1040.5], [7.0, 736.5], [8.0, 863.0], [9.0, 693.0], [10.0, 622.0], [11.0, 590.0], [12.0, 589.5], [13.0, 534.0], [14.0, 567.0], [15.0, 494.5], [16.0, 466.5], [1.0, 2271.5], [17.0, 391.5], [18.0, 374.5], [19.0, 363.0], [20.0, 336.0], [21.0, 310.0], [22.0, 323.0], [23.0, 272.0], [24.0, 291.0], [25.0, 304.0], [26.0, 276.5], [27.0, 316.0], [28.0, 328.0], [29.0, 266.0], [31.0, 290.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 90095.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 266.0, "minX": 1.0, "maxY": 90094.0, "series": [{"data": [[2.0, 1702.5], [3.0, 1339.0], [4.0, 1539.0], [5.0, 1096.0], [6.0, 1039.0], [7.0, 734.0], [8.0, 860.0], [9.0, 692.0], [10.0, 620.0], [11.0, 589.0], [12.0, 586.5], [13.0, 532.0], [14.0, 566.5], [15.0, 494.0], [16.0, 466.5], [1.0, 2267.5], [17.0, 390.5], [18.0, 374.5], [19.0, 363.0], [20.0, 336.0], [21.0, 310.0], [22.0, 323.0], [23.0, 272.0], [24.0, 291.0], [25.0, 304.0], [26.0, 276.5], [27.0, 316.0], [28.0, 328.0], [29.0, 266.0], [31.0, 290.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 90094.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.25, "minX": 1.60232544E12, "maxY": 12.2, "series": [{"data": [[1.6023255E12, 10.883333333333333], [1.6023258E12, 12.2], [1.60232562E12, 10.516666666666667], [1.60232592E12, 6.25], [1.60232544E12, 7.066666666666666], [1.60232574E12, 9.116666666666667], [1.60232556E12, 11.416666666666666], [1.60232586E12, 11.8], [1.60232568E12, 7.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232592E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232544E12, "maxY": 12.2, "series": [{"data": [[1.6023255E12, 10.883333333333333], [1.6023258E12, 12.2], [1.60232562E12, 10.516666666666667], [1.60232592E12, 6.416666666666667], [1.60232544E12, 6.9], [1.60232574E12, 9.116666666666667], [1.60232556E12, 11.416666666666666], [1.60232586E12, 11.8], [1.60232568E12, 7.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60232568E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232592E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232544E12, "maxY": 12.2, "series": [{"data": [[1.6023255E12, 10.883333333333333], [1.6023258E12, 12.2], [1.60232562E12, 10.516666666666667], [1.60232592E12, 6.416666666666667], [1.60232544E12, 6.9], [1.60232574E12, 9.116666666666667], [1.60232556E12, 11.416666666666666], [1.60232586E12, 11.8], [1.60232568E12, 7.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60232568E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232592E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232544E12, "maxY": 12.2, "series": [{"data": [[1.6023255E12, 10.883333333333333], [1.6023258E12, 12.2], [1.60232562E12, 10.516666666666667], [1.60232592E12, 6.416666666666667], [1.60232544E12, 6.9], [1.60232574E12, 9.116666666666667], [1.60232556E12, 11.416666666666666], [1.60232586E12, 11.8], [1.60232568E12, 7.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60232568E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232592E12, "title": "Total Transactions Per Second"}},
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

