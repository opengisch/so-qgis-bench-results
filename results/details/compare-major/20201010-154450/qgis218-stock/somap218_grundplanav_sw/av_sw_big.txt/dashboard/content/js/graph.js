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
        data: {"result": {"minY": 209.0, "minX": 0.0, "maxY": 16905.0, "series": [{"data": [[0.0, 209.0], [0.1, 217.0], [0.2, 219.0], [0.3, 221.0], [0.4, 223.0], [0.5, 224.0], [0.6, 225.0], [0.7, 226.0], [0.8, 227.0], [0.9, 227.0], [1.0, 228.0], [1.1, 229.0], [1.2, 229.0], [1.3, 230.0], [1.4, 230.0], [1.5, 231.0], [1.6, 232.0], [1.7, 232.0], [1.8, 232.0], [1.9, 233.0], [2.0, 233.0], [2.1, 234.0], [2.2, 234.0], [2.3, 234.0], [2.4, 235.0], [2.5, 235.0], [2.6, 235.0], [2.7, 236.0], [2.8, 236.0], [2.9, 237.0], [3.0, 237.0], [3.1, 238.0], [3.2, 239.0], [3.3, 239.0], [3.4, 239.0], [3.5, 240.0], [3.6, 240.0], [3.7, 241.0], [3.8, 241.0], [3.9, 241.0], [4.0, 242.0], [4.1, 242.0], [4.2, 242.0], [4.3, 243.0], [4.4, 243.0], [4.5, 244.0], [4.6, 244.0], [4.7, 244.0], [4.8, 245.0], [4.9, 246.0], [5.0, 246.0], [5.1, 246.0], [5.2, 247.0], [5.3, 247.0], [5.4, 247.0], [5.5, 247.0], [5.6, 248.0], [5.7, 248.0], [5.8, 249.0], [5.9, 249.0], [6.0, 250.0], [6.1, 251.0], [6.2, 251.0], [6.3, 251.0], [6.4, 252.0], [6.5, 253.0], [6.6, 253.0], [6.7, 254.0], [6.8, 254.0], [6.9, 255.0], [7.0, 255.0], [7.1, 256.0], [7.2, 256.0], [7.3, 257.0], [7.4, 257.0], [7.5, 258.0], [7.6, 258.0], [7.7, 259.0], [7.8, 260.0], [7.9, 261.0], [8.0, 262.0], [8.1, 262.0], [8.2, 264.0], [8.3, 264.0], [8.4, 265.0], [8.5, 266.0], [8.6, 266.0], [8.7, 267.0], [8.8, 268.0], [8.9, 269.0], [9.0, 270.0], [9.1, 271.0], [9.2, 271.0], [9.3, 272.0], [9.4, 273.0], [9.5, 273.0], [9.6, 274.0], [9.7, 274.0], [9.8, 275.0], [9.9, 275.0], [10.0, 276.0], [10.1, 276.0], [10.2, 277.0], [10.3, 277.0], [10.4, 279.0], [10.5, 280.0], [10.6, 282.0], [10.7, 283.0], [10.8, 285.0], [10.9, 285.0], [11.0, 286.0], [11.1, 288.0], [11.2, 289.0], [11.3, 290.0], [11.4, 291.0], [11.5, 292.0], [11.6, 292.0], [11.7, 293.0], [11.8, 294.0], [11.9, 294.0], [12.0, 295.0], [12.1, 296.0], [12.2, 296.0], [12.3, 297.0], [12.4, 297.0], [12.5, 297.0], [12.6, 298.0], [12.7, 299.0], [12.8, 299.0], [12.9, 300.0], [13.0, 300.0], [13.1, 301.0], [13.2, 301.0], [13.3, 302.0], [13.4, 302.0], [13.5, 303.0], [13.6, 304.0], [13.7, 304.0], [13.8, 305.0], [13.9, 305.0], [14.0, 306.0], [14.1, 307.0], [14.2, 307.0], [14.3, 308.0], [14.4, 308.0], [14.5, 308.0], [14.6, 309.0], [14.7, 309.0], [14.8, 310.0], [14.9, 310.0], [15.0, 311.0], [15.1, 312.0], [15.2, 312.0], [15.3, 313.0], [15.4, 313.0], [15.5, 314.0], [15.6, 314.0], [15.7, 315.0], [15.8, 315.0], [15.9, 316.0], [16.0, 317.0], [16.1, 317.0], [16.2, 318.0], [16.3, 319.0], [16.4, 319.0], [16.5, 320.0], [16.6, 320.0], [16.7, 320.0], [16.8, 321.0], [16.9, 321.0], [17.0, 322.0], [17.1, 322.0], [17.2, 323.0], [17.3, 323.0], [17.4, 324.0], [17.5, 324.0], [17.6, 325.0], [17.7, 325.0], [17.8, 325.0], [17.9, 326.0], [18.0, 327.0], [18.1, 327.0], [18.2, 327.0], [18.3, 327.0], [18.4, 327.0], [18.5, 328.0], [18.6, 329.0], [18.7, 329.0], [18.8, 330.0], [18.9, 330.0], [19.0, 330.0], [19.1, 331.0], [19.2, 331.0], [19.3, 332.0], [19.4, 333.0], [19.5, 334.0], [19.6, 334.0], [19.7, 335.0], [19.8, 335.0], [19.9, 336.0], [20.0, 336.0], [20.1, 337.0], [20.2, 338.0], [20.3, 339.0], [20.4, 339.0], [20.5, 340.0], [20.6, 340.0], [20.7, 341.0], [20.8, 342.0], [20.9, 343.0], [21.0, 344.0], [21.1, 344.0], [21.2, 345.0], [21.3, 346.0], [21.4, 347.0], [21.5, 347.0], [21.6, 348.0], [21.7, 348.0], [21.8, 349.0], [21.9, 349.0], [22.0, 350.0], [22.1, 350.0], [22.2, 351.0], [22.3, 352.0], [22.4, 352.0], [22.5, 353.0], [22.6, 353.0], [22.7, 354.0], [22.8, 355.0], [22.9, 356.0], [23.0, 356.0], [23.1, 356.0], [23.2, 357.0], [23.3, 358.0], [23.4, 359.0], [23.5, 359.0], [23.6, 360.0], [23.7, 360.0], [23.8, 361.0], [23.9, 361.0], [24.0, 362.0], [24.1, 362.0], [24.2, 363.0], [24.3, 363.0], [24.4, 364.0], [24.5, 365.0], [24.6, 365.0], [24.7, 366.0], [24.8, 366.0], [24.9, 367.0], [25.0, 368.0], [25.1, 368.0], [25.2, 369.0], [25.3, 370.0], [25.4, 370.0], [25.5, 371.0], [25.6, 371.0], [25.7, 372.0], [25.8, 373.0], [25.9, 373.0], [26.0, 373.0], [26.1, 374.0], [26.2, 375.0], [26.3, 376.0], [26.4, 376.0], [26.5, 376.0], [26.6, 377.0], [26.7, 378.0], [26.8, 378.0], [26.9, 380.0], [27.0, 380.0], [27.1, 380.0], [27.2, 381.0], [27.3, 382.0], [27.4, 382.0], [27.5, 383.0], [27.6, 383.0], [27.7, 384.0], [27.8, 384.0], [27.9, 386.0], [28.0, 386.0], [28.1, 387.0], [28.2, 388.0], [28.3, 389.0], [28.4, 390.0], [28.5, 390.0], [28.6, 391.0], [28.7, 391.0], [28.8, 392.0], [28.9, 393.0], [29.0, 394.0], [29.1, 395.0], [29.2, 395.0], [29.3, 396.0], [29.4, 396.0], [29.5, 398.0], [29.6, 399.0], [29.7, 400.0], [29.8, 400.0], [29.9, 401.0], [30.0, 402.0], [30.1, 402.0], [30.2, 403.0], [30.3, 404.0], [30.4, 405.0], [30.5, 405.0], [30.6, 406.0], [30.7, 407.0], [30.8, 407.0], [30.9, 408.0], [31.0, 409.0], [31.1, 410.0], [31.2, 410.0], [31.3, 411.0], [31.4, 412.0], [31.5, 413.0], [31.6, 413.0], [31.7, 414.0], [31.8, 414.0], [31.9, 415.0], [32.0, 416.0], [32.1, 418.0], [32.2, 418.0], [32.3, 419.0], [32.4, 420.0], [32.5, 420.0], [32.6, 421.0], [32.7, 421.0], [32.8, 422.0], [32.9, 423.0], [33.0, 423.0], [33.1, 424.0], [33.2, 425.0], [33.3, 425.0], [33.4, 426.0], [33.5, 427.0], [33.6, 427.0], [33.7, 429.0], [33.8, 430.0], [33.9, 430.0], [34.0, 431.0], [34.1, 432.0], [34.2, 433.0], [34.3, 434.0], [34.4, 435.0], [34.5, 436.0], [34.6, 437.0], [34.7, 437.0], [34.8, 438.0], [34.9, 440.0], [35.0, 440.0], [35.1, 441.0], [35.2, 441.0], [35.3, 442.0], [35.4, 442.0], [35.5, 443.0], [35.6, 444.0], [35.7, 444.0], [35.8, 444.0], [35.9, 446.0], [36.0, 446.0], [36.1, 447.0], [36.2, 448.0], [36.3, 448.0], [36.4, 449.0], [36.5, 450.0], [36.6, 450.0], [36.7, 451.0], [36.8, 452.0], [36.9, 453.0], [37.0, 453.0], [37.1, 454.0], [37.2, 455.0], [37.3, 455.0], [37.4, 456.0], [37.5, 457.0], [37.6, 458.0], [37.7, 458.0], [37.8, 459.0], [37.9, 460.0], [38.0, 461.0], [38.1, 461.0], [38.2, 462.0], [38.3, 464.0], [38.4, 464.0], [38.5, 465.0], [38.6, 466.0], [38.7, 467.0], [38.8, 467.0], [38.9, 468.0], [39.0, 469.0], [39.1, 469.0], [39.2, 470.0], [39.3, 470.0], [39.4, 472.0], [39.5, 473.0], [39.6, 474.0], [39.7, 475.0], [39.8, 475.0], [39.9, 476.0], [40.0, 478.0], [40.1, 479.0], [40.2, 479.0], [40.3, 480.0], [40.4, 480.0], [40.5, 481.0], [40.6, 482.0], [40.7, 483.0], [40.8, 484.0], [40.9, 485.0], [41.0, 486.0], [41.1, 486.0], [41.2, 488.0], [41.3, 489.0], [41.4, 491.0], [41.5, 491.0], [41.6, 492.0], [41.7, 493.0], [41.8, 493.0], [41.9, 494.0], [42.0, 495.0], [42.1, 496.0], [42.2, 498.0], [42.3, 498.0], [42.4, 499.0], [42.5, 501.0], [42.6, 502.0], [42.7, 503.0], [42.8, 505.0], [42.9, 506.0], [43.0, 506.0], [43.1, 507.0], [43.2, 508.0], [43.3, 509.0], [43.4, 510.0], [43.5, 511.0], [43.6, 513.0], [43.7, 513.0], [43.8, 514.0], [43.9, 515.0], [44.0, 516.0], [44.1, 516.0], [44.2, 517.0], [44.3, 518.0], [44.4, 519.0], [44.5, 519.0], [44.6, 520.0], [44.7, 521.0], [44.8, 522.0], [44.9, 524.0], [45.0, 525.0], [45.1, 526.0], [45.2, 527.0], [45.3, 528.0], [45.4, 529.0], [45.5, 531.0], [45.6, 532.0], [45.7, 533.0], [45.8, 534.0], [45.9, 535.0], [46.0, 536.0], [46.1, 537.0], [46.2, 539.0], [46.3, 539.0], [46.4, 541.0], [46.5, 542.0], [46.6, 543.0], [46.7, 544.0], [46.8, 544.0], [46.9, 547.0], [47.0, 547.0], [47.1, 548.0], [47.2, 549.0], [47.3, 550.0], [47.4, 551.0], [47.5, 551.0], [47.6, 554.0], [47.7, 555.0], [47.8, 556.0], [47.9, 557.0], [48.0, 558.0], [48.1, 559.0], [48.2, 560.0], [48.3, 561.0], [48.4, 562.0], [48.5, 563.0], [48.6, 564.0], [48.7, 565.0], [48.8, 565.0], [48.9, 566.0], [49.0, 567.0], [49.1, 568.0], [49.2, 569.0], [49.3, 571.0], [49.4, 572.0], [49.5, 574.0], [49.6, 575.0], [49.7, 577.0], [49.8, 579.0], [49.9, 580.0], [50.0, 582.0], [50.1, 583.0], [50.2, 583.0], [50.3, 584.0], [50.4, 585.0], [50.5, 587.0], [50.6, 587.0], [50.7, 588.0], [50.8, 589.0], [50.9, 591.0], [51.0, 592.0], [51.1, 594.0], [51.2, 596.0], [51.3, 598.0], [51.4, 599.0], [51.5, 600.0], [51.6, 602.0], [51.7, 603.0], [51.8, 605.0], [51.9, 606.0], [52.0, 607.0], [52.1, 608.0], [52.2, 610.0], [52.3, 611.0], [52.4, 613.0], [52.5, 614.0], [52.6, 615.0], [52.7, 617.0], [52.8, 618.0], [52.9, 619.0], [53.0, 620.0], [53.1, 621.0], [53.2, 624.0], [53.3, 625.0], [53.4, 626.0], [53.5, 629.0], [53.6, 630.0], [53.7, 632.0], [53.8, 632.0], [53.9, 633.0], [54.0, 635.0], [54.1, 636.0], [54.2, 636.0], [54.3, 639.0], [54.4, 640.0], [54.5, 640.0], [54.6, 641.0], [54.7, 642.0], [54.8, 644.0], [54.9, 645.0], [55.0, 647.0], [55.1, 648.0], [55.2, 650.0], [55.3, 650.0], [55.4, 651.0], [55.5, 653.0], [55.6, 655.0], [55.7, 657.0], [55.8, 659.0], [55.9, 660.0], [56.0, 662.0], [56.1, 664.0], [56.2, 664.0], [56.3, 666.0], [56.4, 668.0], [56.5, 669.0], [56.6, 671.0], [56.7, 673.0], [56.8, 676.0], [56.9, 677.0], [57.0, 680.0], [57.1, 682.0], [57.2, 683.0], [57.3, 684.0], [57.4, 686.0], [57.5, 687.0], [57.6, 689.0], [57.7, 690.0], [57.8, 692.0], [57.9, 695.0], [58.0, 696.0], [58.1, 697.0], [58.2, 699.0], [58.3, 702.0], [58.4, 704.0], [58.5, 705.0], [58.6, 707.0], [58.7, 709.0], [58.8, 710.0], [58.9, 712.0], [59.0, 714.0], [59.1, 716.0], [59.2, 717.0], [59.3, 718.0], [59.4, 719.0], [59.5, 721.0], [59.6, 724.0], [59.7, 726.0], [59.8, 727.0], [59.9, 727.0], [60.0, 732.0], [60.1, 734.0], [60.2, 736.0], [60.3, 737.0], [60.4, 740.0], [60.5, 741.0], [60.6, 743.0], [60.7, 744.0], [60.8, 746.0], [60.9, 748.0], [61.0, 751.0], [61.1, 754.0], [61.2, 754.0], [61.3, 757.0], [61.4, 757.0], [61.5, 758.0], [61.6, 760.0], [61.7, 762.0], [61.8, 763.0], [61.9, 765.0], [62.0, 766.0], [62.1, 768.0], [62.2, 770.0], [62.3, 770.0], [62.4, 773.0], [62.5, 775.0], [62.6, 777.0], [62.7, 779.0], [62.8, 780.0], [62.9, 782.0], [63.0, 782.0], [63.1, 785.0], [63.2, 787.0], [63.3, 789.0], [63.4, 790.0], [63.5, 792.0], [63.6, 794.0], [63.7, 797.0], [63.8, 799.0], [63.9, 801.0], [64.0, 801.0], [64.1, 803.0], [64.2, 805.0], [64.3, 806.0], [64.4, 807.0], [64.5, 810.0], [64.6, 813.0], [64.7, 814.0], [64.8, 815.0], [64.9, 816.0], [65.0, 818.0], [65.1, 820.0], [65.2, 821.0], [65.3, 823.0], [65.4, 825.0], [65.5, 827.0], [65.6, 830.0], [65.7, 832.0], [65.8, 834.0], [65.9, 837.0], [66.0, 840.0], [66.1, 842.0], [66.2, 844.0], [66.3, 845.0], [66.4, 849.0], [66.5, 849.0], [66.6, 851.0], [66.7, 852.0], [66.8, 856.0], [66.9, 860.0], [67.0, 862.0], [67.1, 866.0], [67.2, 868.0], [67.3, 871.0], [67.4, 872.0], [67.5, 877.0], [67.6, 879.0], [67.7, 880.0], [67.8, 882.0], [67.9, 884.0], [68.0, 889.0], [68.1, 891.0], [68.2, 892.0], [68.3, 895.0], [68.4, 897.0], [68.5, 900.0], [68.6, 902.0], [68.7, 903.0], [68.8, 905.0], [68.9, 907.0], [69.0, 910.0], [69.1, 912.0], [69.2, 914.0], [69.3, 917.0], [69.4, 921.0], [69.5, 925.0], [69.6, 929.0], [69.7, 931.0], [69.8, 934.0], [69.9, 936.0], [70.0, 939.0], [70.1, 944.0], [70.2, 946.0], [70.3, 949.0], [70.4, 951.0], [70.5, 954.0], [70.6, 957.0], [70.7, 961.0], [70.8, 964.0], [70.9, 968.0], [71.0, 970.0], [71.1, 975.0], [71.2, 977.0], [71.3, 982.0], [71.4, 984.0], [71.5, 987.0], [71.6, 991.0], [71.7, 993.0], [71.8, 996.0], [71.9, 999.0], [72.0, 1000.0], [72.1, 1002.0], [72.2, 1005.0], [72.3, 1010.0], [72.4, 1013.0], [72.5, 1016.0], [72.6, 1020.0], [72.7, 1021.0], [72.8, 1024.0], [72.9, 1026.0], [73.0, 1029.0], [73.1, 1032.0], [73.2, 1035.0], [73.3, 1041.0], [73.4, 1045.0], [73.5, 1047.0], [73.6, 1050.0], [73.7, 1054.0], [73.8, 1056.0], [73.9, 1059.0], [74.0, 1064.0], [74.1, 1066.0], [74.2, 1068.0], [74.3, 1070.0], [74.4, 1073.0], [74.5, 1074.0], [74.6, 1076.0], [74.7, 1082.0], [74.8, 1085.0], [74.9, 1088.0], [75.0, 1091.0], [75.1, 1093.0], [75.2, 1095.0], [75.3, 1098.0], [75.4, 1103.0], [75.5, 1105.0], [75.6, 1108.0], [75.7, 1112.0], [75.8, 1118.0], [75.9, 1123.0], [76.0, 1127.0], [76.1, 1132.0], [76.2, 1135.0], [76.3, 1140.0], [76.4, 1148.0], [76.5, 1152.0], [76.6, 1156.0], [76.7, 1161.0], [76.8, 1168.0], [76.9, 1173.0], [77.0, 1176.0], [77.1, 1181.0], [77.2, 1192.0], [77.3, 1200.0], [77.4, 1206.0], [77.5, 1211.0], [77.6, 1214.0], [77.7, 1216.0], [77.8, 1218.0], [77.9, 1221.0], [78.0, 1223.0], [78.1, 1232.0], [78.2, 1233.0], [78.3, 1242.0], [78.4, 1246.0], [78.5, 1251.0], [78.6, 1261.0], [78.7, 1271.0], [78.8, 1275.0], [78.9, 1280.0], [79.0, 1288.0], [79.1, 1300.0], [79.2, 1305.0], [79.3, 1312.0], [79.4, 1318.0], [79.5, 1327.0], [79.6, 1332.0], [79.7, 1340.0], [79.8, 1348.0], [79.9, 1356.0], [80.0, 1360.0], [80.1, 1364.0], [80.2, 1370.0], [80.3, 1378.0], [80.4, 1387.0], [80.5, 1398.0], [80.6, 1408.0], [80.7, 1419.0], [80.8, 1427.0], [80.9, 1434.0], [81.0, 1442.0], [81.1, 1456.0], [81.2, 1460.0], [81.3, 1465.0], [81.4, 1479.0], [81.5, 1488.0], [81.6, 1496.0], [81.7, 1500.0], [81.8, 1507.0], [81.9, 1514.0], [82.0, 1530.0], [82.1, 1536.0], [82.2, 1542.0], [82.3, 1549.0], [82.4, 1554.0], [82.5, 1564.0], [82.6, 1569.0], [82.7, 1584.0], [82.8, 1600.0], [82.9, 1615.0], [83.0, 1619.0], [83.1, 1629.0], [83.2, 1636.0], [83.3, 1642.0], [83.4, 1648.0], [83.5, 1659.0], [83.6, 1667.0], [83.7, 1677.0], [83.8, 1678.0], [83.9, 1688.0], [84.0, 1696.0], [84.1, 1701.0], [84.2, 1707.0], [84.3, 1722.0], [84.4, 1725.0], [84.5, 1733.0], [84.6, 1739.0], [84.7, 1751.0], [84.8, 1758.0], [84.9, 1760.0], [85.0, 1772.0], [85.1, 1775.0], [85.2, 1782.0], [85.3, 1785.0], [85.4, 1792.0], [85.5, 1796.0], [85.6, 1803.0], [85.7, 1816.0], [85.8, 1833.0], [85.9, 1841.0], [86.0, 1849.0], [86.1, 1860.0], [86.2, 1871.0], [86.3, 1880.0], [86.4, 1893.0], [86.5, 1901.0], [86.6, 1906.0], [86.7, 1918.0], [86.8, 1927.0], [86.9, 1946.0], [87.0, 1955.0], [87.1, 1962.0], [87.2, 1971.0], [87.3, 1985.0], [87.4, 1997.0], [87.5, 2012.0], [87.6, 2016.0], [87.7, 2019.0], [87.8, 2026.0], [87.9, 2039.0], [88.0, 2045.0], [88.1, 2049.0], [88.2, 2053.0], [88.3, 2072.0], [88.4, 2077.0], [88.5, 2084.0], [88.6, 2096.0], [88.7, 2103.0], [88.8, 2116.0], [88.9, 2127.0], [89.0, 2138.0], [89.1, 2143.0], [89.2, 2147.0], [89.3, 2151.0], [89.4, 2155.0], [89.5, 2164.0], [89.6, 2172.0], [89.7, 2182.0], [89.8, 2192.0], [89.9, 2196.0], [90.0, 2203.0], [90.1, 2221.0], [90.2, 2239.0], [90.3, 2245.0], [90.4, 2249.0], [90.5, 2254.0], [90.6, 2263.0], [90.7, 2268.0], [90.8, 2277.0], [90.9, 2285.0], [91.0, 2290.0], [91.1, 2296.0], [91.2, 2300.0], [91.3, 2305.0], [91.4, 2314.0], [91.5, 2325.0], [91.6, 2330.0], [91.7, 2338.0], [91.8, 2346.0], [91.9, 2353.0], [92.0, 2357.0], [92.1, 2369.0], [92.2, 2376.0], [92.3, 2380.0], [92.4, 2394.0], [92.5, 2396.0], [92.6, 2406.0], [92.7, 2417.0], [92.8, 2427.0], [92.9, 2440.0], [93.0, 2456.0], [93.1, 2467.0], [93.2, 2481.0], [93.3, 2485.0], [93.4, 2494.0], [93.5, 2505.0], [93.6, 2516.0], [93.7, 2521.0], [93.8, 2526.0], [93.9, 2537.0], [94.0, 2550.0], [94.1, 2561.0], [94.2, 2573.0], [94.3, 2581.0], [94.4, 2607.0], [94.5, 2628.0], [94.6, 2646.0], [94.7, 2664.0], [94.8, 2675.0], [94.9, 2703.0], [95.0, 2725.0], [95.1, 2734.0], [95.2, 2745.0], [95.3, 2770.0], [95.4, 2796.0], [95.5, 2830.0], [95.6, 2872.0], [95.7, 2891.0], [95.8, 2948.0], [95.9, 2952.0], [96.0, 2972.0], [96.1, 3016.0], [96.2, 3066.0], [96.3, 3091.0], [96.4, 3113.0], [96.5, 3164.0], [96.6, 3247.0], [96.7, 3274.0], [96.8, 3342.0], [96.9, 3389.0], [97.0, 3398.0], [97.1, 3439.0], [97.2, 3496.0], [97.3, 3645.0], [97.4, 3772.0], [97.5, 3856.0], [97.6, 3896.0], [97.7, 3968.0], [97.8, 4046.0], [97.9, 4117.0], [98.0, 4184.0], [98.1, 4285.0], [98.2, 4392.0], [98.3, 4448.0], [98.4, 4531.0], [98.5, 4657.0], [98.6, 4741.0], [98.7, 4977.0], [98.8, 5038.0], [98.9, 5220.0], [99.0, 5383.0], [99.1, 5489.0], [99.2, 5602.0], [99.3, 5829.0], [99.4, 6575.0], [99.5, 7169.0], [99.6, 7656.0], [99.7, 8071.0], [99.8, 9439.0], [99.9, 12567.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 872.0, "series": [{"data": [[600.0, 350.0], [700.0, 293.0], [800.0, 241.0], [900.0, 179.0], [1000.0, 176.0], [1100.0, 101.0], [1200.0, 94.0], [1300.0, 75.0], [1400.0, 59.0], [1500.0, 58.0], [1600.0, 66.0], [1700.0, 76.0], [1800.0, 50.0], [1900.0, 51.0], [2000.0, 61.0], [2100.0, 68.0], [2300.0, 71.0], [2200.0, 63.0], [2400.0, 47.0], [2500.0, 49.0], [2600.0, 26.0], [2800.0, 17.0], [2700.0, 27.0], [2900.0, 15.0], [3000.0, 17.0], [3100.0, 9.0], [3300.0, 15.0], [3200.0, 10.0], [3400.0, 10.0], [3500.0, 3.0], [3600.0, 5.0], [3700.0, 4.0], [3800.0, 9.0], [3900.0, 7.0], [4000.0, 7.0], [4100.0, 8.0], [4300.0, 7.0], [4200.0, 4.0], [4600.0, 7.0], [4400.0, 7.0], [4500.0, 3.0], [4700.0, 3.0], [4800.0, 1.0], [5000.0, 5.0], [4900.0, 5.0], [5100.0, 2.0], [5300.0, 5.0], [5200.0, 3.0], [5500.0, 4.0], [5400.0, 4.0], [5600.0, 1.0], [5700.0, 2.0], [5800.0, 4.0], [5900.0, 1.0], [6000.0, 1.0], [6600.0, 2.0], [6500.0, 2.0], [6900.0, 1.0], [6800.0, 1.0], [7100.0, 2.0], [7400.0, 2.0], [7300.0, 2.0], [7600.0, 1.0], [7800.0, 1.0], [7700.0, 2.0], [8000.0, 2.0], [8600.0, 1.0], [8200.0, 1.0], [9100.0, 1.0], [9400.0, 1.0], [9300.0, 1.0], [10000.0, 1.0], [10700.0, 1.0], [11200.0, 1.0], [11600.0, 1.0], [12600.0, 1.0], [12500.0, 1.0], [13200.0, 1.0], [13800.0, 1.0], [14000.0, 1.0], [16900.0, 1.0], [200.0, 667.0], [300.0, 872.0], [400.0, 662.0], [500.0, 470.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 949.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2203.0, "series": [{"data": [[0.0, 2203.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2038.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 949.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.919266055045872, "minX": 1.60234506E12, "maxY": 10.0, "series": [{"data": [[1.60234548E12, 10.0], [1.60234518E12, 10.0], [1.60234512E12, 10.0], [1.6023453E12, 10.0], [1.60234524E12, 10.0], [1.60234542E12, 10.0], [1.60234536E12, 10.0], [1.60234506E12, 10.0], [1.60234554E12, 9.919266055045872]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234554E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 373.0, "minX": 1.0, "maxY": 5804.0, "series": [{"data": [[8.0, 589.0], [4.0, 5776.0], [2.0, 3512.0], [1.0, 5804.0], [9.0, 1775.0], [10.0, 968.2408801389689], [5.0, 377.0], [3.0, 5529.0], [7.0, 373.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 971.2069364161845]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1805.9, "minX": 1.60234506E12, "maxY": 3886719.066666667, "series": [{"data": [[1.60234548E12, 3530762.35], [1.60234518E12, 3875121.7], [1.60234512E12, 2600405.8333333335], [1.6023453E12, 3052042.8666666667], [1.60234524E12, 3886719.066666667], [1.60234542E12, 3380105.8666666667], [1.60234536E12, 2804324.533333333], [1.60234506E12, 1741261.4333333333], [1.60234554E12, 2708907.8333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60234548E12, 5385.266666666666], [1.60234518E12, 4954.766666666666], [1.60234512E12, 4768.283333333334], [1.6023453E12, 3735.05], [1.60234524E12, 4970.033333333334], [1.60234542E12, 4907.55], [1.60234536E12, 3940.8], [1.60234506E12, 1805.9], [1.60234554E12, 4109.683333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234554E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 839.1424541607895, "minX": 1.60234506E12, "maxY": 1178.9819639278555, "series": [{"data": [[1.60234548E12, 839.1424541607895], [1.60234518E12, 891.4818731117824], [1.60234512E12, 916.2134146341452], [1.6023453E12, 1178.9819639278555], [1.60234524E12, 914.7541984732821], [1.60234542E12, 928.6551724137935], [1.60234536E12, 1081.2901459854015], [1.60234506E12, 1176.2570281124492], [1.60234554E12, 1031.359633027523]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234554E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 837.6502115655862, "minX": 1.60234506E12, "maxY": 1175.8496993987974, "series": [{"data": [[1.60234548E12, 837.6502115655862], [1.60234518E12, 888.6993957703927], [1.60234512E12, 914.2134146341476], [1.6023453E12, 1175.8496993987974], [1.60234524E12, 912.2381679389308], [1.60234542E12, 927.089955022489], [1.60234536E12, 1079.4762773722637], [1.60234506E12, 1172.7269076305224], [1.60234554E12, 1029.8587155963296]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234554E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008016032064128261, "minX": 1.60234506E12, "maxY": 0.3453815261044175, "series": [{"data": [[1.60234548E12, 0.009873060648801137], [1.60234518E12, 0.012084592145015118], [1.60234512E12, 0.013719512195121948], [1.6023453E12, 0.008016032064128261], [1.60234524E12, 0.012213740458015276], [1.60234542E12, 0.020989505247376326], [1.60234536E12, 0.012773722627737226], [1.60234506E12, 0.3453815261044175], [1.60234554E12, 0.01651376146788992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234554E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 209.0, "minX": 1.60234506E12, "maxY": 16905.0, "series": [{"data": [[1.60234548E12, 6931.0], [1.60234518E12, 11621.0], [1.60234512E12, 13217.0], [1.6023453E12, 14058.0], [1.60234524E12, 7362.0], [1.60234542E12, 8273.0], [1.60234536E12, 16905.0], [1.60234506E12, 12698.0], [1.60234554E12, 8022.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60234548E12, 217.0], [1.60234518E12, 227.96699984192847], [1.60234512E12, 229.0], [1.6023453E12, 241.4999998807907], [1.60234524E12, 226.9039998435974], [1.60234542E12, 231.0119998407364], [1.60234536E12, 236.7639994764328], [1.60234506E12, 232.24999994039536], [1.60234554E12, 227.8279997396469]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60234548E12, 217.0], [1.60234518E12, 228.5637000632286], [1.60234512E12, 229.0], [1.6023453E12, 241.95000004768372], [1.60234524E12, 227.0], [1.60234542E12, 231.61320006370545], [1.60234536E12, 237.87020010471343], [1.60234506E12, 232.47500002384186], [1.60234554E12, 228.4054000520706]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60234548E12, 217.0], [1.60234518E12, 228.29849992096425], [1.60234512E12, 229.0], [1.6023453E12, 241.74999994039536], [1.60234524E12, 227.0], [1.60234542E12, 231.3459999203682], [1.60234536E12, 237.4309998691082], [1.60234506E12, 232.37499997019768], [1.60234554E12, 228.18699993491174]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60234548E12, 214.0], [1.60234518E12, 221.0], [1.60234512E12, 222.0], [1.6023453E12, 232.0], [1.60234524E12, 223.0], [1.60234542E12, 224.0], [1.60234536E12, 209.0], [1.60234506E12, 230.0], [1.60234554E12, 221.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60234548E12, 511.0], [1.60234518E12, 484.5], [1.60234512E12, 605.0], [1.6023453E12, 697.0], [1.60234524E12, 533.0], [1.60234542E12, 513.0], [1.60234536E12, 711.0], [1.60234506E12, 733.0], [1.60234554E12, 579.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234554E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 284.0, "minX": 1.0, "maxY": 3513.0, "series": [{"data": [[2.0, 1280.5], [32.0, 299.5], [3.0, 1437.0], [4.0, 1086.0], [5.0, 1150.0], [6.0, 976.5], [7.0, 849.5], [8.0, 798.0], [9.0, 707.0], [10.0, 675.0], [11.0, 640.0], [12.0, 571.5], [13.0, 610.5], [14.0, 548.0], [15.0, 491.0], [16.0, 408.0], [1.0, 3513.0], [17.0, 438.0], [18.0, 373.5], [19.0, 284.0], [20.0, 348.0], [21.0, 380.0], [22.0, 344.5], [23.0, 293.0], [24.0, 291.0], [25.0, 326.0], [26.0, 293.0], [27.0, 307.0], [28.0, 302.0], [30.0, 305.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 284.0, "minX": 1.0, "maxY": 3512.0, "series": [{"data": [[2.0, 1278.5], [32.0, 299.5], [3.0, 1436.0], [4.0, 1083.5], [5.0, 1142.0], [6.0, 972.5], [7.0, 848.0], [8.0, 796.0], [9.0, 705.5], [10.0, 670.0], [11.0, 639.0], [12.0, 568.0], [13.0, 609.5], [14.0, 547.0], [15.0, 491.0], [16.0, 407.5], [1.0, 3512.0], [17.0, 438.0], [18.0, 372.5], [19.0, 284.0], [20.0, 348.0], [21.0, 380.0], [22.0, 344.5], [23.0, 292.0], [24.0, 291.0], [25.0, 326.0], [26.0, 293.0], [27.0, 307.0], [28.0, 302.0], [30.0, 305.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.316666666666666, "minX": 1.60234506E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60234548E12, 11.816666666666666], [1.60234518E12, 11.033333333333333], [1.60234512E12, 10.933333333333334], [1.6023453E12, 8.3], [1.60234524E12, 10.916666666666666], [1.60234542E12, 11.116666666666667], [1.60234536E12, 9.15], [1.60234506E12, 4.316666666666666], [1.60234554E12, 8.916666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234554E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.15, "minX": 1.60234506E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60234548E12, 11.816666666666666], [1.60234518E12, 11.033333333333333], [1.60234512E12, 10.933333333333334], [1.6023453E12, 8.316666666666666], [1.60234524E12, 10.916666666666666], [1.60234542E12, 11.116666666666667], [1.60234536E12, 9.133333333333333], [1.60234506E12, 4.15], [1.60234554E12, 9.083333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60234554E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.15, "minX": 1.60234506E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60234548E12, 11.816666666666666], [1.60234518E12, 11.033333333333333], [1.60234512E12, 10.933333333333334], [1.6023453E12, 8.316666666666666], [1.60234524E12, 10.916666666666666], [1.60234542E12, 11.116666666666667], [1.60234536E12, 9.133333333333333], [1.60234506E12, 4.15], [1.60234554E12, 9.083333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234554E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.15, "minX": 1.60234506E12, "maxY": 11.816666666666666, "series": [{"data": [[1.60234548E12, 11.816666666666666], [1.60234518E12, 11.033333333333333], [1.60234512E12, 10.933333333333334], [1.6023453E12, 8.316666666666666], [1.60234524E12, 10.916666666666666], [1.60234542E12, 11.116666666666667], [1.60234536E12, 9.133333333333333], [1.60234506E12, 4.15], [1.60234554E12, 9.083333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60234554E12, "title": "Total Transactions Per Second"}},
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

