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
        data: {"result": {"minY": 209.0, "minX": 0.0, "maxY": 14293.0, "series": [{"data": [[0.0, 209.0], [0.1, 218.0], [0.2, 223.0], [0.3, 224.0], [0.4, 225.0], [0.5, 225.0], [0.6, 226.0], [0.7, 228.0], [0.8, 228.0], [0.9, 229.0], [1.0, 229.0], [1.1, 230.0], [1.2, 230.0], [1.3, 231.0], [1.4, 232.0], [1.5, 232.0], [1.6, 233.0], [1.7, 233.0], [1.8, 233.0], [1.9, 234.0], [2.0, 234.0], [2.1, 234.0], [2.2, 235.0], [2.3, 236.0], [2.4, 236.0], [2.5, 237.0], [2.6, 237.0], [2.7, 238.0], [2.8, 238.0], [2.9, 238.0], [3.0, 239.0], [3.1, 240.0], [3.2, 241.0], [3.3, 241.0], [3.4, 242.0], [3.5, 243.0], [3.6, 243.0], [3.7, 244.0], [3.8, 244.0], [3.9, 245.0], [4.0, 245.0], [4.1, 245.0], [4.2, 246.0], [4.3, 246.0], [4.4, 247.0], [4.5, 247.0], [4.6, 248.0], [4.7, 249.0], [4.8, 249.0], [4.9, 249.0], [5.0, 250.0], [5.1, 251.0], [5.2, 252.0], [5.3, 252.0], [5.4, 253.0], [5.5, 253.0], [5.6, 254.0], [5.7, 254.0], [5.8, 255.0], [5.9, 256.0], [6.0, 256.0], [6.1, 258.0], [6.2, 258.0], [6.3, 259.0], [6.4, 261.0], [6.5, 261.0], [6.6, 262.0], [6.7, 262.0], [6.8, 263.0], [6.9, 264.0], [7.0, 264.0], [7.1, 265.0], [7.2, 265.0], [7.3, 266.0], [7.4, 268.0], [7.5, 268.0], [7.6, 269.0], [7.7, 269.0], [7.8, 270.0], [7.9, 271.0], [8.0, 272.0], [8.1, 273.0], [8.2, 274.0], [8.3, 274.0], [8.4, 276.0], [8.5, 276.0], [8.6, 277.0], [8.7, 278.0], [8.8, 279.0], [8.9, 279.0], [9.0, 281.0], [9.1, 281.0], [9.2, 283.0], [9.3, 284.0], [9.4, 285.0], [9.5, 286.0], [9.6, 287.0], [9.7, 287.0], [9.8, 287.0], [9.9, 288.0], [10.0, 289.0], [10.1, 289.0], [10.2, 290.0], [10.3, 290.0], [10.4, 291.0], [10.5, 292.0], [10.6, 293.0], [10.7, 293.0], [10.8, 294.0], [10.9, 295.0], [11.0, 295.0], [11.1, 296.0], [11.2, 296.0], [11.3, 297.0], [11.4, 298.0], [11.5, 298.0], [11.6, 299.0], [11.7, 299.0], [11.8, 300.0], [11.9, 300.0], [12.0, 300.0], [12.1, 301.0], [12.2, 302.0], [12.3, 302.0], [12.4, 302.0], [12.5, 302.0], [12.6, 303.0], [12.7, 303.0], [12.8, 304.0], [12.9, 304.0], [13.0, 304.0], [13.1, 305.0], [13.2, 306.0], [13.3, 306.0], [13.4, 307.0], [13.5, 308.0], [13.6, 308.0], [13.7, 309.0], [13.8, 310.0], [13.9, 310.0], [14.0, 311.0], [14.1, 311.0], [14.2, 312.0], [14.3, 312.0], [14.4, 313.0], [14.5, 313.0], [14.6, 314.0], [14.7, 314.0], [14.8, 315.0], [14.9, 315.0], [15.0, 315.0], [15.1, 316.0], [15.2, 316.0], [15.3, 317.0], [15.4, 317.0], [15.5, 318.0], [15.6, 318.0], [15.7, 318.0], [15.8, 319.0], [15.9, 320.0], [16.0, 320.0], [16.1, 321.0], [16.2, 321.0], [16.3, 321.0], [16.4, 322.0], [16.5, 323.0], [16.6, 323.0], [16.7, 324.0], [16.8, 324.0], [16.9, 325.0], [17.0, 325.0], [17.1, 326.0], [17.2, 326.0], [17.3, 327.0], [17.4, 327.0], [17.5, 327.0], [17.6, 328.0], [17.7, 329.0], [17.8, 329.0], [17.9, 330.0], [18.0, 330.0], [18.1, 331.0], [18.2, 331.0], [18.3, 331.0], [18.4, 332.0], [18.5, 332.0], [18.6, 333.0], [18.7, 333.0], [18.8, 334.0], [18.9, 335.0], [19.0, 335.0], [19.1, 336.0], [19.2, 337.0], [19.3, 337.0], [19.4, 338.0], [19.5, 338.0], [19.6, 338.0], [19.7, 339.0], [19.8, 339.0], [19.9, 340.0], [20.0, 340.0], [20.1, 341.0], [20.2, 342.0], [20.3, 342.0], [20.4, 343.0], [20.5, 343.0], [20.6, 344.0], [20.7, 345.0], [20.8, 345.0], [20.9, 346.0], [21.0, 347.0], [21.1, 347.0], [21.2, 348.0], [21.3, 348.0], [21.4, 349.0], [21.5, 349.0], [21.6, 350.0], [21.7, 350.0], [21.8, 351.0], [21.9, 352.0], [22.0, 352.0], [22.1, 353.0], [22.2, 353.0], [22.3, 354.0], [22.4, 354.0], [22.5, 354.0], [22.6, 355.0], [22.7, 355.0], [22.8, 356.0], [22.9, 356.0], [23.0, 358.0], [23.1, 358.0], [23.2, 359.0], [23.3, 360.0], [23.4, 360.0], [23.5, 361.0], [23.6, 361.0], [23.7, 361.0], [23.8, 362.0], [23.9, 362.0], [24.0, 363.0], [24.1, 363.0], [24.2, 364.0], [24.3, 364.0], [24.4, 365.0], [24.5, 365.0], [24.6, 366.0], [24.7, 366.0], [24.8, 367.0], [24.9, 368.0], [25.0, 368.0], [25.1, 369.0], [25.2, 369.0], [25.3, 369.0], [25.4, 370.0], [25.5, 371.0], [25.6, 371.0], [25.7, 372.0], [25.8, 372.0], [25.9, 373.0], [26.0, 373.0], [26.1, 374.0], [26.2, 375.0], [26.3, 376.0], [26.4, 376.0], [26.5, 377.0], [26.6, 377.0], [26.7, 378.0], [26.8, 379.0], [26.9, 379.0], [27.0, 379.0], [27.1, 379.0], [27.2, 380.0], [27.3, 380.0], [27.4, 381.0], [27.5, 381.0], [27.6, 383.0], [27.7, 383.0], [27.8, 383.0], [27.9, 384.0], [28.0, 384.0], [28.1, 385.0], [28.2, 385.0], [28.3, 386.0], [28.4, 386.0], [28.5, 387.0], [28.6, 387.0], [28.7, 388.0], [28.8, 389.0], [28.9, 390.0], [29.0, 391.0], [29.1, 391.0], [29.2, 392.0], [29.3, 393.0], [29.4, 393.0], [29.5, 394.0], [29.6, 395.0], [29.7, 396.0], [29.8, 396.0], [29.9, 397.0], [30.0, 398.0], [30.1, 398.0], [30.2, 399.0], [30.3, 400.0], [30.4, 401.0], [30.5, 401.0], [30.6, 402.0], [30.7, 402.0], [30.8, 403.0], [30.9, 404.0], [31.0, 404.0], [31.1, 405.0], [31.2, 405.0], [31.3, 406.0], [31.4, 406.0], [31.5, 407.0], [31.6, 408.0], [31.7, 409.0], [31.8, 410.0], [31.9, 410.0], [32.0, 411.0], [32.1, 412.0], [32.2, 413.0], [32.3, 413.0], [32.4, 413.0], [32.5, 414.0], [32.6, 415.0], [32.7, 415.0], [32.8, 416.0], [32.9, 417.0], [33.0, 417.0], [33.1, 418.0], [33.2, 419.0], [33.3, 419.0], [33.4, 419.0], [33.5, 420.0], [33.6, 421.0], [33.7, 422.0], [33.8, 423.0], [33.9, 424.0], [34.0, 425.0], [34.1, 426.0], [34.2, 427.0], [34.3, 427.0], [34.4, 427.0], [34.5, 428.0], [34.6, 429.0], [34.7, 429.0], [34.8, 430.0], [34.9, 431.0], [35.0, 432.0], [35.1, 433.0], [35.2, 434.0], [35.3, 435.0], [35.4, 435.0], [35.5, 437.0], [35.6, 438.0], [35.7, 438.0], [35.8, 439.0], [35.9, 439.0], [36.0, 440.0], [36.1, 441.0], [36.2, 442.0], [36.3, 442.0], [36.4, 443.0], [36.5, 444.0], [36.6, 444.0], [36.7, 445.0], [36.8, 445.0], [36.9, 446.0], [37.0, 447.0], [37.1, 448.0], [37.2, 449.0], [37.3, 450.0], [37.4, 450.0], [37.5, 451.0], [37.6, 452.0], [37.7, 453.0], [37.8, 454.0], [37.9, 454.0], [38.0, 455.0], [38.1, 456.0], [38.2, 457.0], [38.3, 458.0], [38.4, 459.0], [38.5, 460.0], [38.6, 460.0], [38.7, 461.0], [38.8, 461.0], [38.9, 462.0], [39.0, 463.0], [39.1, 463.0], [39.2, 464.0], [39.3, 465.0], [39.4, 466.0], [39.5, 467.0], [39.6, 468.0], [39.7, 469.0], [39.8, 470.0], [39.9, 471.0], [40.0, 472.0], [40.1, 473.0], [40.2, 474.0], [40.3, 475.0], [40.4, 476.0], [40.5, 477.0], [40.6, 477.0], [40.7, 479.0], [40.8, 479.0], [40.9, 480.0], [41.0, 481.0], [41.1, 482.0], [41.2, 483.0], [41.3, 484.0], [41.4, 484.0], [41.5, 486.0], [41.6, 487.0], [41.7, 488.0], [41.8, 488.0], [41.9, 490.0], [42.0, 490.0], [42.1, 490.0], [42.2, 492.0], [42.3, 493.0], [42.4, 494.0], [42.5, 495.0], [42.6, 496.0], [42.7, 497.0], [42.8, 498.0], [42.9, 498.0], [43.0, 499.0], [43.1, 501.0], [43.2, 502.0], [43.3, 504.0], [43.4, 505.0], [43.5, 506.0], [43.6, 507.0], [43.7, 508.0], [43.8, 509.0], [43.9, 510.0], [44.0, 510.0], [44.1, 512.0], [44.2, 512.0], [44.3, 514.0], [44.4, 515.0], [44.5, 516.0], [44.6, 517.0], [44.7, 518.0], [44.8, 519.0], [44.9, 520.0], [45.0, 521.0], [45.1, 522.0], [45.2, 523.0], [45.3, 524.0], [45.4, 525.0], [45.5, 525.0], [45.6, 527.0], [45.7, 528.0], [45.8, 529.0], [45.9, 531.0], [46.0, 531.0], [46.1, 533.0], [46.2, 534.0], [46.3, 535.0], [46.4, 536.0], [46.5, 537.0], [46.6, 538.0], [46.7, 539.0], [46.8, 541.0], [46.9, 542.0], [47.0, 544.0], [47.1, 545.0], [47.2, 546.0], [47.3, 547.0], [47.4, 549.0], [47.5, 550.0], [47.6, 551.0], [47.7, 551.0], [47.8, 552.0], [47.9, 553.0], [48.0, 554.0], [48.1, 556.0], [48.2, 557.0], [48.3, 558.0], [48.4, 560.0], [48.5, 561.0], [48.6, 561.0], [48.7, 562.0], [48.8, 563.0], [48.9, 565.0], [49.0, 567.0], [49.1, 567.0], [49.2, 569.0], [49.3, 570.0], [49.4, 571.0], [49.5, 572.0], [49.6, 572.0], [49.7, 573.0], [49.8, 575.0], [49.9, 577.0], [50.0, 577.0], [50.1, 578.0], [50.2, 580.0], [50.3, 581.0], [50.4, 583.0], [50.5, 584.0], [50.6, 585.0], [50.7, 588.0], [50.8, 590.0], [50.9, 591.0], [51.0, 592.0], [51.1, 593.0], [51.2, 595.0], [51.3, 597.0], [51.4, 598.0], [51.5, 599.0], [51.6, 600.0], [51.7, 601.0], [51.8, 603.0], [51.9, 605.0], [52.0, 607.0], [52.1, 608.0], [52.2, 609.0], [52.3, 610.0], [52.4, 611.0], [52.5, 612.0], [52.6, 614.0], [52.7, 616.0], [52.8, 617.0], [52.9, 618.0], [53.0, 619.0], [53.1, 621.0], [53.2, 621.0], [53.3, 622.0], [53.4, 623.0], [53.5, 625.0], [53.6, 625.0], [53.7, 625.0], [53.8, 626.0], [53.9, 628.0], [54.0, 629.0], [54.1, 632.0], [54.2, 634.0], [54.3, 636.0], [54.4, 637.0], [54.5, 638.0], [54.6, 640.0], [54.7, 643.0], [54.8, 644.0], [54.9, 646.0], [55.0, 646.0], [55.1, 648.0], [55.2, 650.0], [55.3, 651.0], [55.4, 653.0], [55.5, 655.0], [55.6, 656.0], [55.7, 658.0], [55.8, 660.0], [55.9, 660.0], [56.0, 661.0], [56.1, 662.0], [56.2, 664.0], [56.3, 665.0], [56.4, 668.0], [56.5, 669.0], [56.6, 670.0], [56.7, 672.0], [56.8, 674.0], [56.9, 676.0], [57.0, 677.0], [57.1, 677.0], [57.2, 679.0], [57.3, 679.0], [57.4, 680.0], [57.5, 682.0], [57.6, 684.0], [57.7, 685.0], [57.8, 686.0], [57.9, 687.0], [58.0, 688.0], [58.1, 689.0], [58.2, 690.0], [58.3, 692.0], [58.4, 693.0], [58.5, 694.0], [58.6, 695.0], [58.7, 697.0], [58.8, 699.0], [58.9, 701.0], [59.0, 702.0], [59.1, 704.0], [59.2, 705.0], [59.3, 707.0], [59.4, 710.0], [59.5, 711.0], [59.6, 713.0], [59.7, 714.0], [59.8, 716.0], [59.9, 717.0], [60.0, 719.0], [60.1, 721.0], [60.2, 722.0], [60.3, 723.0], [60.4, 725.0], [60.5, 726.0], [60.6, 727.0], [60.7, 729.0], [60.8, 730.0], [60.9, 733.0], [61.0, 734.0], [61.1, 737.0], [61.2, 738.0], [61.3, 740.0], [61.4, 741.0], [61.5, 742.0], [61.6, 743.0], [61.7, 745.0], [61.8, 747.0], [61.9, 748.0], [62.0, 749.0], [62.1, 750.0], [62.2, 753.0], [62.3, 754.0], [62.4, 756.0], [62.5, 757.0], [62.6, 759.0], [62.7, 760.0], [62.8, 761.0], [62.9, 763.0], [63.0, 765.0], [63.1, 766.0], [63.2, 767.0], [63.3, 769.0], [63.4, 770.0], [63.5, 771.0], [63.6, 772.0], [63.7, 773.0], [63.8, 774.0], [63.9, 775.0], [64.0, 777.0], [64.1, 779.0], [64.2, 781.0], [64.3, 782.0], [64.4, 786.0], [64.5, 788.0], [64.6, 789.0], [64.7, 792.0], [64.8, 795.0], [64.9, 796.0], [65.0, 798.0], [65.1, 800.0], [65.2, 801.0], [65.3, 802.0], [65.4, 804.0], [65.5, 806.0], [65.6, 807.0], [65.7, 808.0], [65.8, 810.0], [65.9, 811.0], [66.0, 813.0], [66.1, 815.0], [66.2, 817.0], [66.3, 820.0], [66.4, 822.0], [66.5, 823.0], [66.6, 825.0], [66.7, 828.0], [66.8, 831.0], [66.9, 835.0], [67.0, 836.0], [67.1, 840.0], [67.2, 843.0], [67.3, 845.0], [67.4, 849.0], [67.5, 851.0], [67.6, 854.0], [67.7, 856.0], [67.8, 859.0], [67.9, 862.0], [68.0, 865.0], [68.1, 867.0], [68.2, 869.0], [68.3, 873.0], [68.4, 875.0], [68.5, 877.0], [68.6, 879.0], [68.7, 881.0], [68.8, 882.0], [68.9, 884.0], [69.0, 885.0], [69.1, 888.0], [69.2, 891.0], [69.3, 895.0], [69.4, 897.0], [69.5, 898.0], [69.6, 903.0], [69.7, 905.0], [69.8, 907.0], [69.9, 908.0], [70.0, 910.0], [70.1, 914.0], [70.2, 918.0], [70.3, 919.0], [70.4, 922.0], [70.5, 925.0], [70.6, 929.0], [70.7, 930.0], [70.8, 932.0], [70.9, 935.0], [71.0, 938.0], [71.1, 939.0], [71.2, 943.0], [71.3, 947.0], [71.4, 950.0], [71.5, 952.0], [71.6, 956.0], [71.7, 959.0], [71.8, 963.0], [71.9, 966.0], [72.0, 968.0], [72.1, 971.0], [72.2, 974.0], [72.3, 978.0], [72.4, 982.0], [72.5, 984.0], [72.6, 987.0], [72.7, 991.0], [72.8, 998.0], [72.9, 999.0], [73.0, 1001.0], [73.1, 1002.0], [73.2, 1006.0], [73.3, 1012.0], [73.4, 1015.0], [73.5, 1020.0], [73.6, 1022.0], [73.7, 1026.0], [73.8, 1030.0], [73.9, 1036.0], [74.0, 1039.0], [74.1, 1041.0], [74.2, 1043.0], [74.3, 1048.0], [74.4, 1051.0], [74.5, 1055.0], [74.6, 1059.0], [74.7, 1061.0], [74.8, 1065.0], [74.9, 1067.0], [75.0, 1075.0], [75.1, 1079.0], [75.2, 1082.0], [75.3, 1090.0], [75.4, 1093.0], [75.5, 1097.0], [75.6, 1100.0], [75.7, 1102.0], [75.8, 1107.0], [75.9, 1113.0], [76.0, 1115.0], [76.1, 1120.0], [76.2, 1124.0], [76.3, 1133.0], [76.4, 1138.0], [76.5, 1146.0], [76.6, 1151.0], [76.7, 1156.0], [76.8, 1162.0], [76.9, 1165.0], [77.0, 1168.0], [77.1, 1174.0], [77.2, 1179.0], [77.3, 1184.0], [77.4, 1197.0], [77.5, 1203.0], [77.6, 1205.0], [77.7, 1214.0], [77.8, 1218.0], [77.9, 1221.0], [78.0, 1227.0], [78.1, 1235.0], [78.2, 1238.0], [78.3, 1244.0], [78.4, 1247.0], [78.5, 1252.0], [78.6, 1256.0], [78.7, 1262.0], [78.8, 1266.0], [78.9, 1275.0], [79.0, 1283.0], [79.1, 1288.0], [79.2, 1295.0], [79.3, 1305.0], [79.4, 1311.0], [79.5, 1319.0], [79.6, 1326.0], [79.7, 1330.0], [79.8, 1333.0], [79.9, 1340.0], [80.0, 1345.0], [80.1, 1352.0], [80.2, 1361.0], [80.3, 1367.0], [80.4, 1373.0], [80.5, 1377.0], [80.6, 1390.0], [80.7, 1396.0], [80.8, 1407.0], [80.9, 1417.0], [81.0, 1419.0], [81.1, 1425.0], [81.2, 1438.0], [81.3, 1443.0], [81.4, 1448.0], [81.5, 1455.0], [81.6, 1467.0], [81.7, 1477.0], [81.8, 1483.0], [81.9, 1496.0], [82.0, 1503.0], [82.1, 1509.0], [82.2, 1519.0], [82.3, 1531.0], [82.4, 1540.0], [82.5, 1546.0], [82.6, 1565.0], [82.7, 1585.0], [82.8, 1596.0], [82.9, 1600.0], [83.0, 1608.0], [83.1, 1624.0], [83.2, 1630.0], [83.3, 1635.0], [83.4, 1652.0], [83.5, 1667.0], [83.6, 1678.0], [83.7, 1692.0], [83.8, 1698.0], [83.9, 1708.0], [84.0, 1714.0], [84.1, 1721.0], [84.2, 1729.0], [84.3, 1740.0], [84.4, 1746.0], [84.5, 1756.0], [84.6, 1762.0], [84.7, 1764.0], [84.8, 1773.0], [84.9, 1781.0], [85.0, 1784.0], [85.1, 1792.0], [85.2, 1803.0], [85.3, 1819.0], [85.4, 1825.0], [85.5, 1829.0], [85.6, 1835.0], [85.7, 1839.0], [85.8, 1845.0], [85.9, 1853.0], [86.0, 1860.0], [86.1, 1873.0], [86.2, 1879.0], [86.3, 1884.0], [86.4, 1891.0], [86.5, 1902.0], [86.6, 1910.0], [86.7, 1920.0], [86.8, 1930.0], [86.9, 1950.0], [87.0, 1957.0], [87.1, 1965.0], [87.2, 1971.0], [87.3, 1974.0], [87.4, 1988.0], [87.5, 1998.0], [87.6, 2001.0], [87.7, 2009.0], [87.8, 2024.0], [87.9, 2034.0], [88.0, 2043.0], [88.1, 2053.0], [88.2, 2064.0], [88.3, 2069.0], [88.4, 2076.0], [88.5, 2080.0], [88.6, 2084.0], [88.7, 2094.0], [88.8, 2099.0], [88.9, 2108.0], [89.0, 2126.0], [89.1, 2132.0], [89.2, 2138.0], [89.3, 2147.0], [89.4, 2153.0], [89.5, 2158.0], [89.6, 2163.0], [89.7, 2167.0], [89.8, 2174.0], [89.9, 2183.0], [90.0, 2194.0], [90.1, 2202.0], [90.2, 2211.0], [90.3, 2219.0], [90.4, 2223.0], [90.5, 2226.0], [90.6, 2230.0], [90.7, 2233.0], [90.8, 2241.0], [90.9, 2253.0], [91.0, 2259.0], [91.1, 2268.0], [91.2, 2278.0], [91.3, 2286.0], [91.4, 2299.0], [91.5, 2301.0], [91.6, 2309.0], [91.7, 2318.0], [91.8, 2324.0], [91.9, 2337.0], [92.0, 2344.0], [92.1, 2346.0], [92.2, 2356.0], [92.3, 2367.0], [92.4, 2376.0], [92.5, 2383.0], [92.6, 2386.0], [92.7, 2394.0], [92.8, 2397.0], [92.9, 2401.0], [93.0, 2410.0], [93.1, 2414.0], [93.2, 2423.0], [93.3, 2429.0], [93.4, 2442.0], [93.5, 2452.0], [93.6, 2459.0], [93.7, 2470.0], [93.8, 2475.0], [93.9, 2483.0], [94.0, 2496.0], [94.1, 2504.0], [94.2, 2515.0], [94.3, 2526.0], [94.4, 2542.0], [94.5, 2546.0], [94.6, 2564.0], [94.7, 2570.0], [94.8, 2581.0], [94.9, 2594.0], [95.0, 2604.0], [95.1, 2629.0], [95.2, 2651.0], [95.3, 2675.0], [95.4, 2690.0], [95.5, 2708.0], [95.6, 2739.0], [95.7, 2753.0], [95.8, 2811.0], [95.9, 2842.0], [96.0, 2888.0], [96.1, 2917.0], [96.2, 2961.0], [96.3, 3012.0], [96.4, 3088.0], [96.5, 3124.0], [96.6, 3175.0], [96.7, 3234.0], [96.8, 3303.0], [96.9, 3373.0], [97.0, 3444.0], [97.1, 3480.0], [97.2, 3546.0], [97.3, 3574.0], [97.4, 3660.0], [97.5, 3728.0], [97.6, 3776.0], [97.7, 3805.0], [97.8, 4022.0], [97.9, 4044.0], [98.0, 4152.0], [98.1, 4217.0], [98.2, 4424.0], [98.3, 4487.0], [98.4, 4625.0], [98.5, 4754.0], [98.6, 4850.0], [98.7, 4934.0], [98.8, 5045.0], [98.9, 5182.0], [99.0, 5300.0], [99.1, 5604.0], [99.2, 5782.0], [99.3, 6196.0], [99.4, 6416.0], [99.5, 7011.0], [99.6, 7816.0], [99.7, 8484.0], [99.8, 9058.0], [99.9, 12521.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 958.0, "series": [{"data": [[600.0, 379.0], [700.0, 324.0], [800.0, 230.0], [900.0, 176.0], [1000.0, 139.0], [1100.0, 98.0], [1200.0, 92.0], [1300.0, 76.0], [1400.0, 64.0], [1500.0, 49.0], [1600.0, 48.0], [1700.0, 70.0], [1800.0, 67.0], [1900.0, 56.0], [2000.0, 66.0], [2100.0, 66.0], [2300.0, 73.0], [2200.0, 72.0], [2400.0, 61.0], [2500.0, 47.0], [2600.0, 25.0], [2800.0, 15.0], [2700.0, 17.0], [2900.0, 11.0], [3000.0, 10.0], [3100.0, 10.0], [3300.0, 8.0], [3200.0, 7.0], [3400.0, 10.0], [3500.0, 12.0], [3700.0, 12.0], [3600.0, 4.0], [3800.0, 4.0], [3900.0, 2.0], [4000.0, 9.0], [4100.0, 7.0], [4200.0, 4.0], [4300.0, 1.0], [4500.0, 3.0], [4400.0, 7.0], [4600.0, 3.0], [4700.0, 7.0], [4800.0, 4.0], [5000.0, 7.0], [5100.0, 2.0], [4900.0, 4.0], [5200.0, 5.0], [5300.0, 2.0], [5600.0, 3.0], [5400.0, 1.0], [5500.0, 2.0], [5700.0, 3.0], [5800.0, 1.0], [6000.0, 2.0], [6100.0, 2.0], [6300.0, 1.0], [6200.0, 2.0], [6400.0, 3.0], [6600.0, 3.0], [6500.0, 1.0], [7100.0, 2.0], [7000.0, 2.0], [7900.0, 1.0], [7800.0, 3.0], [7700.0, 1.0], [8100.0, 1.0], [8400.0, 1.0], [8700.0, 2.0], [8600.0, 1.0], [9000.0, 1.0], [8800.0, 1.0], [10500.0, 1.0], [10800.0, 1.0], [11000.0, 1.0], [11900.0, 1.0], [12500.0, 1.0], [13000.0, 1.0], [13100.0, 1.0], [12900.0, 1.0], [14100.0, 1.0], [14200.0, 1.0], [200.0, 612.0], [300.0, 958.0], [400.0, 663.0], [500.0, 442.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 935.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2235.0, "series": [{"data": [[0.0, 2235.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2020.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 935.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.815789473684212, "minX": 1.60402674E12, "maxY": 10.0, "series": [{"data": [[1.60402704E12, 10.0], [1.60402674E12, 10.0], [1.60402722E12, 10.0], [1.60402692E12, 10.0], [1.6040271E12, 10.0], [1.6040268E12, 10.0], [1.60402728E12, 8.815789473684212], [1.60402698E12, 10.0], [1.60402716E12, 10.0], [1.60402686E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402728E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 304.0, "minX": 1.0, "maxY": 5604.0, "series": [{"data": [[8.0, 2706.0], [4.0, 1051.0], [2.0, 3373.0], [1.0, 5604.0], [9.0, 373.0], [10.0, 960.4219262690605], [5.0, 315.0], [6.0, 304.0], [3.0, 5182.0], [7.0, 644.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 962.523699421966]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 295.1166666666667, "minX": 1.60402674E12, "maxY": 3803372.183333333, "series": [{"data": [[1.60402704E12, 3260090.716666667], [1.60402674E12, 1093335.2666666666], [1.60402722E12, 3052665.4], [1.60402692E12, 3798091.3333333335], [1.6040271E12, 2759719.6], [1.6040268E12, 2790386.933333333], [1.60402728E12, 225026.96666666667], [1.60402698E12, 3199937.816666667], [1.60402716E12, 3803372.183333333], [1.60402686E12, 3596089.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60402704E12, 4122.566666666667], [1.60402674E12, 976.9333333333333], [1.60402722E12, 4504.616666666667], [1.60402692E12, 5182.066666666667], [1.6040271E12, 4536.666666666667], [1.6040268E12, 4028.133333333333], [1.60402728E12, 295.1166666666667], [1.60402698E12, 4177.216666666666], [1.60402716E12, 5332.25], [1.60402686E12, 5421.766666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402728E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 830.6497948016429, "minX": 1.60402674E12, "maxY": 1308.5263157894735, "series": [{"data": [[1.60402704E12, 1041.6271777003499], [1.60402674E12, 1197.8396946564887], [1.60402722E12, 998.8927973199324], [1.60402692E12, 872.4597364568081], [1.6040271E12, 964.5774193548389], [1.6040268E12, 1054.4749999999995], [1.60402728E12, 1308.5263157894735], [1.60402698E12, 1082.4556962025306], [1.60402716E12, 859.7254623044086], [1.60402686E12, 830.6497948016429]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402728E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 827.9972640218879, "minX": 1.60402674E12, "maxY": 1307.1052631578948, "series": [{"data": [[1.60402704E12, 1039.4163763066197], [1.60402674E12, 1194.5267175572515], [1.60402722E12, 997.0804020100502], [1.60402692E12, 869.5871156661779], [1.6040271E12, 963.0387096774192], [1.6040268E12, 1052.1107142857134], [1.60402728E12, 1307.1052631578948], [1.60402698E12, 1079.672694394214], [1.60402716E12, 858.0312944523474], [1.60402686E12, 827.9972640218879]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402728E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60402674E12, "maxY": 0.618320610687023, "series": [{"data": [[1.60402704E12, 0.012195121951219518], [1.60402674E12, 0.618320610687023], [1.60402722E12, 0.005025125628140702], [1.60402692E12, 0.01610541727672036], [1.6040271E12, 0.016129032258064512], [1.6040268E12, 0.012500000000000002], [1.60402728E12, 0.0], [1.60402698E12, 0.014466546112115728], [1.60402716E12, 0.011379800853485071], [1.60402686E12, 0.03009575923392617]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402728E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 209.0, "minX": 1.60402674E12, "maxY": 14293.0, "series": [{"data": [[1.60402704E12, 14293.0], [1.60402674E12, 4662.0], [1.60402722E12, 8797.0], [1.60402692E12, 7951.0], [1.6040271E12, 7817.0], [1.6040268E12, 14131.0], [1.60402728E12, 5604.0], [1.60402698E12, 11958.0], [1.60402716E12, 7816.0], [1.60402686E12, 9058.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60402704E12, 236.34999972581863], [1.60402674E12, 253.27999811172486], [1.60402722E12, 230.38199985742568], [1.60402692E12, 230.0], [1.6040271E12, 222.17799970388413], [1.6040268E12, 230.0], [1.60402728E12, 278.0], [1.60402698E12, 225.9719997358322], [1.60402716E12, 226.0], [1.60402686E12, 227.1759996509552]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60402704E12, 237.38500010967255], [1.60402674E12, 260.40800075531007], [1.60402722E12, 230.92020005702972], [1.60402692E12, 230.0], [1.6040271E12, 223.14790005922316], [1.6040268E12, 230.0], [1.60402728E12, 278.0], [1.60402698E12, 226.0], [1.60402716E12, 226.0], [1.60402686E12, 228.24680006980896]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60402704E12, 236.92499986290932], [1.60402674E12, 257.2399990558624], [1.60402722E12, 230.68099992871285], [1.60402692E12, 230.0], [1.6040271E12, 222.79899985194206], [1.6040268E12, 230.0], [1.60402728E12, 278.0], [1.60402698E12, 226.0], [1.60402716E12, 226.0], [1.60402686E12, 227.9079998254776]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60402704E12, 228.0], [1.60402674E12, 242.0], [1.60402722E12, 224.0], [1.60402692E12, 224.0], [1.6040271E12, 209.0], [1.6040268E12, 223.0], [1.60402728E12, 278.0], [1.60402698E12, 222.0], [1.60402716E12, 217.0], [1.60402686E12, 223.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60402704E12, 687.5], [1.60402674E12, 772.0], [1.60402722E12, 593.0], [1.60402692E12, 477.0], [1.6040271E12, 541.0], [1.6040268E12, 681.0], [1.60402728E12, 643.5], [1.60402698E12, 621.0], [1.60402716E12, 495.0], [1.60402686E12, 443.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402728E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 299.5, "minX": 1.0, "maxY": 4240.0, "series": [{"data": [[2.0, 1741.5], [3.0, 1326.0], [4.0, 1339.5], [5.0, 1059.5], [6.0, 936.5], [7.0, 880.0], [8.0, 839.5], [9.0, 651.0], [10.0, 640.0], [11.0, 622.0], [12.0, 510.0], [13.0, 625.0], [14.0, 576.0], [15.0, 585.0], [16.0, 455.0], [1.0, 4240.0], [17.0, 426.0], [18.0, 342.5], [19.0, 370.0], [20.0, 370.5], [21.0, 349.5], [22.0, 322.5], [24.0, 310.5], [25.0, 329.5], [26.0, 338.5], [27.0, 327.0], [28.0, 307.0], [29.0, 299.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 299.5, "minX": 1.0, "maxY": 4239.0, "series": [{"data": [[2.0, 1737.0], [3.0, 1325.0], [4.0, 1336.5], [5.0, 1059.0], [6.0, 934.0], [7.0, 878.0], [8.0, 838.5], [9.0, 649.5], [10.0, 639.5], [11.0, 621.0], [12.0, 510.0], [13.0, 624.5], [14.0, 576.0], [15.0, 585.0], [16.0, 455.0], [1.0, 4239.0], [17.0, 426.0], [18.0, 342.5], [19.0, 370.0], [20.0, 370.0], [21.0, 349.5], [22.0, 322.5], [24.0, 310.5], [25.0, 329.5], [26.0, 338.5], [27.0, 327.0], [28.0, 307.0], [29.0, 299.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60402674E12, "maxY": 12.183333333333334, "series": [{"data": [[1.60402704E12, 9.566666666666666], [1.60402674E12, 2.35], [1.60402722E12, 9.95], [1.60402692E12, 11.383333333333333], [1.6040271E12, 10.333333333333334], [1.6040268E12, 9.333333333333334], [1.60402728E12, 0.4666666666666667], [1.60402698E12, 9.216666666666667], [1.60402716E12, 11.716666666666667], [1.60402686E12, 12.183333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402728E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.60402674E12, "maxY": 12.183333333333334, "series": [{"data": [[1.60402704E12, 9.566666666666666], [1.60402674E12, 2.183333333333333], [1.60402722E12, 9.95], [1.60402692E12, 11.383333333333333], [1.6040271E12, 10.333333333333334], [1.6040268E12, 9.333333333333334], [1.60402728E12, 0.6333333333333333], [1.60402698E12, 9.216666666666667], [1.60402716E12, 11.716666666666667], [1.60402686E12, 12.183333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60402728E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.60402674E12, "maxY": 12.183333333333334, "series": [{"data": [[1.60402704E12, 9.566666666666666], [1.60402674E12, 2.183333333333333], [1.60402722E12, 9.95], [1.60402692E12, 11.383333333333333], [1.6040271E12, 10.333333333333334], [1.6040268E12, 9.333333333333334], [1.60402728E12, 0.6333333333333333], [1.60402698E12, 9.216666666666667], [1.60402716E12, 11.716666666666667], [1.60402686E12, 12.183333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402728E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6333333333333333, "minX": 1.60402674E12, "maxY": 12.183333333333334, "series": [{"data": [[1.60402704E12, 9.566666666666666], [1.60402674E12, 2.183333333333333], [1.60402722E12, 9.95], [1.60402692E12, 11.383333333333333], [1.6040271E12, 10.333333333333334], [1.6040268E12, 9.333333333333334], [1.60402728E12, 0.6333333333333333], [1.60402698E12, 9.216666666666667], [1.60402716E12, 11.716666666666667], [1.60402686E12, 12.183333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60402728E12, "title": "Total Transactions Per Second"}},
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

