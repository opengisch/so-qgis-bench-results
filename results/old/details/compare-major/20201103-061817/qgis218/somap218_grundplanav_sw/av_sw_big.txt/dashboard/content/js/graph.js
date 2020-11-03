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
        data: {"result": {"minY": 208.0, "minX": 0.0, "maxY": 16520.0, "series": [{"data": [[0.0, 208.0], [0.1, 224.0], [0.2, 225.0], [0.3, 227.0], [0.4, 228.0], [0.5, 229.0], [0.6, 231.0], [0.7, 232.0], [0.8, 233.0], [0.9, 233.0], [1.0, 234.0], [1.1, 234.0], [1.2, 235.0], [1.3, 236.0], [1.4, 236.0], [1.5, 237.0], [1.6, 237.0], [1.7, 238.0], [1.8, 239.0], [1.9, 239.0], [2.0, 240.0], [2.1, 240.0], [2.2, 241.0], [2.3, 242.0], [2.4, 243.0], [2.5, 244.0], [2.6, 244.0], [2.7, 245.0], [2.8, 245.0], [2.9, 246.0], [3.0, 247.0], [3.1, 247.0], [3.2, 247.0], [3.3, 248.0], [3.4, 248.0], [3.5, 249.0], [3.6, 249.0], [3.7, 250.0], [3.8, 251.0], [3.9, 251.0], [4.0, 252.0], [4.1, 252.0], [4.2, 253.0], [4.3, 253.0], [4.4, 254.0], [4.5, 254.0], [4.6, 255.0], [4.7, 255.0], [4.8, 256.0], [4.9, 257.0], [5.0, 258.0], [5.1, 258.0], [5.2, 259.0], [5.3, 260.0], [5.4, 261.0], [5.5, 261.0], [5.6, 261.0], [5.7, 262.0], [5.8, 262.0], [5.9, 263.0], [6.0, 264.0], [6.1, 264.0], [6.2, 265.0], [6.3, 266.0], [6.4, 267.0], [6.5, 268.0], [6.6, 268.0], [6.7, 269.0], [6.8, 270.0], [6.9, 270.0], [7.0, 271.0], [7.1, 272.0], [7.2, 273.0], [7.3, 273.0], [7.4, 274.0], [7.5, 275.0], [7.6, 276.0], [7.7, 276.0], [7.8, 277.0], [7.9, 278.0], [8.0, 278.0], [8.1, 279.0], [8.2, 280.0], [8.3, 280.0], [8.4, 281.0], [8.5, 281.0], [8.6, 282.0], [8.7, 283.0], [8.8, 283.0], [8.9, 283.0], [9.0, 284.0], [9.1, 284.0], [9.2, 285.0], [9.3, 285.0], [9.4, 286.0], [9.5, 286.0], [9.6, 287.0], [9.7, 288.0], [9.8, 288.0], [9.9, 289.0], [10.0, 290.0], [10.1, 291.0], [10.2, 291.0], [10.3, 292.0], [10.4, 292.0], [10.5, 293.0], [10.6, 293.0], [10.7, 294.0], [10.8, 295.0], [10.9, 295.0], [11.0, 295.0], [11.1, 296.0], [11.2, 296.0], [11.3, 297.0], [11.4, 297.0], [11.5, 297.0], [11.6, 298.0], [11.7, 298.0], [11.8, 299.0], [11.9, 299.0], [12.0, 299.0], [12.1, 300.0], [12.2, 300.0], [12.3, 301.0], [12.4, 301.0], [12.5, 301.0], [12.6, 301.0], [12.7, 302.0], [12.8, 303.0], [12.9, 303.0], [13.0, 304.0], [13.1, 304.0], [13.2, 305.0], [13.3, 305.0], [13.4, 305.0], [13.5, 306.0], [13.6, 306.0], [13.7, 307.0], [13.8, 308.0], [13.9, 308.0], [14.0, 309.0], [14.1, 309.0], [14.2, 310.0], [14.3, 310.0], [14.4, 310.0], [14.5, 311.0], [14.6, 311.0], [14.7, 312.0], [14.8, 312.0], [14.9, 312.0], [15.0, 313.0], [15.1, 313.0], [15.2, 314.0], [15.3, 314.0], [15.4, 314.0], [15.5, 315.0], [15.6, 315.0], [15.7, 316.0], [15.8, 316.0], [15.9, 317.0], [16.0, 317.0], [16.1, 318.0], [16.2, 318.0], [16.3, 319.0], [16.4, 320.0], [16.5, 320.0], [16.6, 320.0], [16.7, 321.0], [16.8, 322.0], [16.9, 322.0], [17.0, 322.0], [17.1, 323.0], [17.2, 323.0], [17.3, 323.0], [17.4, 324.0], [17.5, 324.0], [17.6, 324.0], [17.7, 325.0], [17.8, 326.0], [17.9, 326.0], [18.0, 327.0], [18.1, 327.0], [18.2, 328.0], [18.3, 328.0], [18.4, 329.0], [18.5, 329.0], [18.6, 330.0], [18.7, 331.0], [18.8, 332.0], [18.9, 332.0], [19.0, 332.0], [19.1, 333.0], [19.2, 334.0], [19.3, 334.0], [19.4, 335.0], [19.5, 335.0], [19.6, 335.0], [19.7, 336.0], [19.8, 337.0], [19.9, 337.0], [20.0, 338.0], [20.1, 338.0], [20.2, 339.0], [20.3, 339.0], [20.4, 340.0], [20.5, 340.0], [20.6, 341.0], [20.7, 341.0], [20.8, 342.0], [20.9, 342.0], [21.0, 343.0], [21.1, 343.0], [21.2, 343.0], [21.3, 344.0], [21.4, 345.0], [21.5, 345.0], [21.6, 347.0], [21.7, 347.0], [21.8, 348.0], [21.9, 349.0], [22.0, 349.0], [22.1, 350.0], [22.2, 350.0], [22.3, 351.0], [22.4, 351.0], [22.5, 352.0], [22.6, 352.0], [22.7, 353.0], [22.8, 353.0], [22.9, 354.0], [23.0, 354.0], [23.1, 354.0], [23.2, 355.0], [23.3, 356.0], [23.4, 356.0], [23.5, 357.0], [23.6, 357.0], [23.7, 358.0], [23.8, 358.0], [23.9, 359.0], [24.0, 359.0], [24.1, 360.0], [24.2, 360.0], [24.3, 360.0], [24.4, 361.0], [24.5, 362.0], [24.6, 362.0], [24.7, 363.0], [24.8, 364.0], [24.9, 365.0], [25.0, 365.0], [25.1, 366.0], [25.2, 367.0], [25.3, 367.0], [25.4, 368.0], [25.5, 369.0], [25.6, 369.0], [25.7, 369.0], [25.8, 370.0], [25.9, 370.0], [26.0, 370.0], [26.1, 371.0], [26.2, 372.0], [26.3, 372.0], [26.4, 373.0], [26.5, 373.0], [26.6, 374.0], [26.7, 374.0], [26.8, 376.0], [26.9, 376.0], [27.0, 377.0], [27.1, 378.0], [27.2, 378.0], [27.3, 378.0], [27.4, 379.0], [27.5, 380.0], [27.6, 380.0], [27.7, 381.0], [27.8, 381.0], [27.9, 382.0], [28.0, 382.0], [28.1, 383.0], [28.2, 384.0], [28.3, 384.0], [28.4, 385.0], [28.5, 386.0], [28.6, 387.0], [28.7, 387.0], [28.8, 388.0], [28.9, 388.0], [29.0, 389.0], [29.1, 389.0], [29.2, 390.0], [29.3, 390.0], [29.4, 391.0], [29.5, 392.0], [29.6, 392.0], [29.7, 393.0], [29.8, 393.0], [29.9, 394.0], [30.0, 395.0], [30.1, 395.0], [30.2, 396.0], [30.3, 397.0], [30.4, 397.0], [30.5, 398.0], [30.6, 399.0], [30.7, 399.0], [30.8, 399.0], [30.9, 400.0], [31.0, 401.0], [31.1, 401.0], [31.2, 401.0], [31.3, 402.0], [31.4, 403.0], [31.5, 404.0], [31.6, 404.0], [31.7, 405.0], [31.8, 406.0], [31.9, 406.0], [32.0, 407.0], [32.1, 407.0], [32.2, 408.0], [32.3, 410.0], [32.4, 410.0], [32.5, 411.0], [32.6, 411.0], [32.7, 412.0], [32.8, 413.0], [32.9, 413.0], [33.0, 414.0], [33.1, 415.0], [33.2, 416.0], [33.3, 416.0], [33.4, 417.0], [33.5, 418.0], [33.6, 418.0], [33.7, 419.0], [33.8, 419.0], [33.9, 420.0], [34.0, 421.0], [34.1, 421.0], [34.2, 422.0], [34.3, 423.0], [34.4, 424.0], [34.5, 424.0], [34.6, 425.0], [34.7, 425.0], [34.8, 426.0], [34.9, 427.0], [35.0, 427.0], [35.1, 427.0], [35.2, 428.0], [35.3, 428.0], [35.4, 430.0], [35.5, 430.0], [35.6, 433.0], [35.7, 434.0], [35.8, 434.0], [35.9, 435.0], [36.0, 435.0], [36.1, 436.0], [36.2, 437.0], [36.3, 437.0], [36.4, 438.0], [36.5, 439.0], [36.6, 439.0], [36.7, 440.0], [36.8, 441.0], [36.9, 442.0], [37.0, 442.0], [37.1, 443.0], [37.2, 443.0], [37.3, 444.0], [37.4, 444.0], [37.5, 445.0], [37.6, 446.0], [37.7, 447.0], [37.8, 447.0], [37.9, 449.0], [38.0, 450.0], [38.1, 451.0], [38.2, 451.0], [38.3, 452.0], [38.4, 453.0], [38.5, 454.0], [38.6, 455.0], [38.7, 456.0], [38.8, 457.0], [38.9, 458.0], [39.0, 460.0], [39.1, 461.0], [39.2, 463.0], [39.3, 463.0], [39.4, 464.0], [39.5, 465.0], [39.6, 466.0], [39.7, 466.0], [39.8, 467.0], [39.9, 468.0], [40.0, 469.0], [40.1, 470.0], [40.2, 471.0], [40.3, 472.0], [40.4, 473.0], [40.5, 474.0], [40.6, 475.0], [40.7, 475.0], [40.8, 476.0], [40.9, 477.0], [41.0, 478.0], [41.1, 479.0], [41.2, 479.0], [41.3, 480.0], [41.4, 480.0], [41.5, 481.0], [41.6, 482.0], [41.7, 483.0], [41.8, 484.0], [41.9, 484.0], [42.0, 485.0], [42.1, 486.0], [42.2, 486.0], [42.3, 488.0], [42.4, 489.0], [42.5, 489.0], [42.6, 490.0], [42.7, 492.0], [42.8, 493.0], [42.9, 493.0], [43.0, 494.0], [43.1, 495.0], [43.2, 496.0], [43.3, 497.0], [43.4, 499.0], [43.5, 500.0], [43.6, 502.0], [43.7, 503.0], [43.8, 504.0], [43.9, 505.0], [44.0, 505.0], [44.1, 506.0], [44.2, 507.0], [44.3, 508.0], [44.4, 509.0], [44.5, 509.0], [44.6, 510.0], [44.7, 511.0], [44.8, 512.0], [44.9, 513.0], [45.0, 514.0], [45.1, 514.0], [45.2, 515.0], [45.3, 516.0], [45.4, 517.0], [45.5, 518.0], [45.6, 519.0], [45.7, 520.0], [45.8, 520.0], [45.9, 522.0], [46.0, 523.0], [46.1, 524.0], [46.2, 526.0], [46.3, 527.0], [46.4, 530.0], [46.5, 531.0], [46.6, 532.0], [46.7, 532.0], [46.8, 533.0], [46.9, 534.0], [47.0, 536.0], [47.1, 538.0], [47.2, 539.0], [47.3, 540.0], [47.4, 542.0], [47.5, 543.0], [47.6, 544.0], [47.7, 545.0], [47.8, 547.0], [47.9, 548.0], [48.0, 550.0], [48.1, 553.0], [48.2, 554.0], [48.3, 556.0], [48.4, 557.0], [48.5, 560.0], [48.6, 561.0], [48.7, 561.0], [48.8, 562.0], [48.9, 563.0], [49.0, 565.0], [49.1, 566.0], [49.2, 567.0], [49.3, 569.0], [49.4, 569.0], [49.5, 570.0], [49.6, 572.0], [49.7, 575.0], [49.8, 576.0], [49.9, 578.0], [50.0, 578.0], [50.1, 580.0], [50.2, 581.0], [50.3, 582.0], [50.4, 584.0], [50.5, 585.0], [50.6, 586.0], [50.7, 586.0], [50.8, 587.0], [50.9, 588.0], [51.0, 590.0], [51.1, 591.0], [51.2, 592.0], [51.3, 595.0], [51.4, 596.0], [51.5, 597.0], [51.6, 599.0], [51.7, 600.0], [51.8, 601.0], [51.9, 603.0], [52.0, 604.0], [52.1, 605.0], [52.2, 606.0], [52.3, 607.0], [52.4, 610.0], [52.5, 613.0], [52.6, 614.0], [52.7, 617.0], [52.8, 619.0], [52.9, 619.0], [53.0, 620.0], [53.1, 622.0], [53.2, 624.0], [53.3, 626.0], [53.4, 629.0], [53.5, 630.0], [53.6, 632.0], [53.7, 634.0], [53.8, 635.0], [53.9, 636.0], [54.0, 638.0], [54.1, 638.0], [54.2, 640.0], [54.3, 640.0], [54.4, 642.0], [54.5, 643.0], [54.6, 644.0], [54.7, 645.0], [54.8, 646.0], [54.9, 647.0], [55.0, 647.0], [55.1, 649.0], [55.2, 650.0], [55.3, 652.0], [55.4, 653.0], [55.5, 654.0], [55.6, 655.0], [55.7, 656.0], [55.8, 657.0], [55.9, 658.0], [56.0, 659.0], [56.1, 661.0], [56.2, 662.0], [56.3, 665.0], [56.4, 666.0], [56.5, 668.0], [56.6, 670.0], [56.7, 671.0], [56.8, 673.0], [56.9, 673.0], [57.0, 675.0], [57.1, 677.0], [57.2, 679.0], [57.3, 680.0], [57.4, 681.0], [57.5, 683.0], [57.6, 683.0], [57.7, 685.0], [57.8, 686.0], [57.9, 688.0], [58.0, 689.0], [58.1, 690.0], [58.2, 691.0], [58.3, 693.0], [58.4, 694.0], [58.5, 696.0], [58.6, 697.0], [58.7, 698.0], [58.8, 699.0], [58.9, 702.0], [59.0, 703.0], [59.1, 705.0], [59.2, 706.0], [59.3, 708.0], [59.4, 709.0], [59.5, 711.0], [59.6, 712.0], [59.7, 713.0], [59.8, 714.0], [59.9, 716.0], [60.0, 717.0], [60.1, 719.0], [60.2, 721.0], [60.3, 722.0], [60.4, 724.0], [60.5, 726.0], [60.6, 727.0], [60.7, 728.0], [60.8, 729.0], [60.9, 731.0], [61.0, 733.0], [61.1, 735.0], [61.2, 737.0], [61.3, 737.0], [61.4, 738.0], [61.5, 739.0], [61.6, 741.0], [61.7, 742.0], [61.8, 744.0], [61.9, 745.0], [62.0, 748.0], [62.1, 750.0], [62.2, 751.0], [62.3, 752.0], [62.4, 754.0], [62.5, 755.0], [62.6, 758.0], [62.7, 760.0], [62.8, 762.0], [62.9, 764.0], [63.0, 765.0], [63.1, 766.0], [63.2, 767.0], [63.3, 768.0], [63.4, 771.0], [63.5, 773.0], [63.6, 776.0], [63.7, 777.0], [63.8, 781.0], [63.9, 784.0], [64.0, 786.0], [64.1, 787.0], [64.2, 790.0], [64.3, 792.0], [64.4, 793.0], [64.5, 796.0], [64.6, 796.0], [64.7, 797.0], [64.8, 802.0], [64.9, 804.0], [65.0, 805.0], [65.1, 806.0], [65.2, 808.0], [65.3, 811.0], [65.4, 814.0], [65.5, 816.0], [65.6, 819.0], [65.7, 821.0], [65.8, 824.0], [65.9, 826.0], [66.0, 829.0], [66.1, 832.0], [66.2, 836.0], [66.3, 837.0], [66.4, 839.0], [66.5, 841.0], [66.6, 846.0], [66.7, 849.0], [66.8, 849.0], [66.9, 851.0], [67.0, 852.0], [67.1, 855.0], [67.2, 857.0], [67.3, 858.0], [67.4, 861.0], [67.5, 864.0], [67.6, 867.0], [67.7, 868.0], [67.8, 870.0], [67.9, 873.0], [68.0, 876.0], [68.1, 878.0], [68.2, 880.0], [68.3, 882.0], [68.4, 885.0], [68.5, 888.0], [68.6, 889.0], [68.7, 893.0], [68.8, 897.0], [68.9, 899.0], [69.0, 902.0], [69.1, 904.0], [69.2, 905.0], [69.3, 907.0], [69.4, 910.0], [69.5, 913.0], [69.6, 916.0], [69.7, 920.0], [69.8, 923.0], [69.9, 925.0], [70.0, 927.0], [70.1, 930.0], [70.2, 933.0], [70.3, 935.0], [70.4, 938.0], [70.5, 941.0], [70.6, 943.0], [70.7, 944.0], [70.8, 946.0], [70.9, 948.0], [71.0, 950.0], [71.1, 954.0], [71.2, 956.0], [71.3, 959.0], [71.4, 962.0], [71.5, 963.0], [71.6, 967.0], [71.7, 971.0], [71.8, 973.0], [71.9, 974.0], [72.0, 975.0], [72.1, 978.0], [72.2, 979.0], [72.3, 982.0], [72.4, 985.0], [72.5, 989.0], [72.6, 991.0], [72.7, 995.0], [72.8, 998.0], [72.9, 1000.0], [73.0, 1002.0], [73.1, 1004.0], [73.2, 1007.0], [73.3, 1009.0], [73.4, 1010.0], [73.5, 1017.0], [73.6, 1020.0], [73.7, 1025.0], [73.8, 1027.0], [73.9, 1032.0], [74.0, 1035.0], [74.1, 1040.0], [74.2, 1041.0], [74.3, 1046.0], [74.4, 1050.0], [74.5, 1053.0], [74.6, 1057.0], [74.7, 1061.0], [74.8, 1064.0], [74.9, 1066.0], [75.0, 1068.0], [75.1, 1073.0], [75.2, 1075.0], [75.3, 1082.0], [75.4, 1084.0], [75.5, 1089.0], [75.6, 1093.0], [75.7, 1096.0], [75.8, 1100.0], [75.9, 1104.0], [76.0, 1108.0], [76.1, 1116.0], [76.2, 1118.0], [76.3, 1123.0], [76.4, 1127.0], [76.5, 1131.0], [76.6, 1134.0], [76.7, 1139.0], [76.8, 1143.0], [76.9, 1148.0], [77.0, 1150.0], [77.1, 1156.0], [77.2, 1165.0], [77.3, 1170.0], [77.4, 1177.0], [77.5, 1179.0], [77.6, 1185.0], [77.7, 1189.0], [77.8, 1196.0], [77.9, 1199.0], [78.0, 1208.0], [78.1, 1216.0], [78.2, 1222.0], [78.3, 1227.0], [78.4, 1231.0], [78.5, 1240.0], [78.6, 1245.0], [78.7, 1250.0], [78.8, 1259.0], [78.9, 1266.0], [79.0, 1271.0], [79.1, 1281.0], [79.2, 1290.0], [79.3, 1296.0], [79.4, 1304.0], [79.5, 1314.0], [79.6, 1322.0], [79.7, 1326.0], [79.8, 1334.0], [79.9, 1335.0], [80.0, 1352.0], [80.1, 1358.0], [80.2, 1360.0], [80.3, 1363.0], [80.4, 1375.0], [80.5, 1379.0], [80.6, 1388.0], [80.7, 1394.0], [80.8, 1402.0], [80.9, 1408.0], [81.0, 1412.0], [81.1, 1422.0], [81.2, 1428.0], [81.3, 1432.0], [81.4, 1440.0], [81.5, 1444.0], [81.6, 1458.0], [81.7, 1466.0], [81.8, 1477.0], [81.9, 1483.0], [82.0, 1488.0], [82.1, 1496.0], [82.2, 1506.0], [82.3, 1515.0], [82.4, 1528.0], [82.5, 1543.0], [82.6, 1552.0], [82.7, 1558.0], [82.8, 1570.0], [82.9, 1580.0], [83.0, 1595.0], [83.1, 1603.0], [83.2, 1622.0], [83.3, 1635.0], [83.4, 1647.0], [83.5, 1658.0], [83.6, 1664.0], [83.7, 1681.0], [83.8, 1702.0], [83.9, 1714.0], [84.0, 1733.0], [84.1, 1752.0], [84.2, 1755.0], [84.3, 1772.0], [84.4, 1781.0], [84.5, 1794.0], [84.6, 1799.0], [84.7, 1813.0], [84.8, 1830.0], [84.9, 1842.0], [85.0, 1852.0], [85.1, 1865.0], [85.2, 1875.0], [85.3, 1880.0], [85.4, 1892.0], [85.5, 1894.0], [85.6, 1896.0], [85.7, 1911.0], [85.8, 1926.0], [85.9, 1932.0], [86.0, 1941.0], [86.1, 1944.0], [86.2, 1954.0], [86.3, 1958.0], [86.4, 1965.0], [86.5, 1976.0], [86.6, 1982.0], [86.7, 1992.0], [86.8, 1997.0], [86.9, 2003.0], [87.0, 2009.0], [87.1, 2017.0], [87.2, 2021.0], [87.3, 2026.0], [87.4, 2034.0], [87.5, 2041.0], [87.6, 2047.0], [87.7, 2053.0], [87.8, 2058.0], [87.9, 2066.0], [88.0, 2071.0], [88.1, 2074.0], [88.2, 2077.0], [88.3, 2079.0], [88.4, 2084.0], [88.5, 2088.0], [88.6, 2093.0], [88.7, 2097.0], [88.8, 2102.0], [88.9, 2109.0], [89.0, 2115.0], [89.1, 2121.0], [89.2, 2126.0], [89.3, 2128.0], [89.4, 2131.0], [89.5, 2138.0], [89.6, 2140.0], [89.7, 2144.0], [89.8, 2149.0], [89.9, 2151.0], [90.0, 2155.0], [90.1, 2160.0], [90.2, 2165.0], [90.3, 2171.0], [90.4, 2176.0], [90.5, 2183.0], [90.6, 2190.0], [90.7, 2193.0], [90.8, 2199.0], [90.9, 2202.0], [91.0, 2208.0], [91.1, 2215.0], [91.2, 2218.0], [91.3, 2221.0], [91.4, 2225.0], [91.5, 2229.0], [91.6, 2240.0], [91.7, 2243.0], [91.8, 2250.0], [91.9, 2261.0], [92.0, 2267.0], [92.1, 2274.0], [92.2, 2279.0], [92.3, 2290.0], [92.4, 2294.0], [92.5, 2302.0], [92.6, 2306.0], [92.7, 2315.0], [92.8, 2322.0], [92.9, 2333.0], [93.0, 2340.0], [93.1, 2347.0], [93.2, 2360.0], [93.3, 2365.0], [93.4, 2378.0], [93.5, 2385.0], [93.6, 2392.0], [93.7, 2413.0], [93.8, 2428.0], [93.9, 2441.0], [94.0, 2455.0], [94.1, 2462.0], [94.2, 2473.0], [94.3, 2490.0], [94.4, 2514.0], [94.5, 2520.0], [94.6, 2553.0], [94.7, 2576.0], [94.8, 2604.0], [94.9, 2615.0], [95.0, 2623.0], [95.1, 2642.0], [95.2, 2660.0], [95.3, 2687.0], [95.4, 2704.0], [95.5, 2715.0], [95.6, 2746.0], [95.7, 2802.0], [95.8, 2847.0], [95.9, 2874.0], [96.0, 2903.0], [96.1, 2999.0], [96.2, 3018.0], [96.3, 3052.0], [96.4, 3097.0], [96.5, 3121.0], [96.6, 3146.0], [96.7, 3168.0], [96.8, 3245.0], [96.9, 3293.0], [97.0, 3330.0], [97.1, 3386.0], [97.2, 3519.0], [97.3, 3581.0], [97.4, 3695.0], [97.5, 3730.0], [97.6, 3799.0], [97.7, 3893.0], [97.8, 3967.0], [97.9, 4120.0], [98.0, 4173.0], [98.1, 4267.0], [98.2, 4364.0], [98.3, 4501.0], [98.4, 4583.0], [98.5, 4696.0], [98.6, 4772.0], [98.7, 4880.0], [98.8, 4938.0], [98.9, 5055.0], [99.0, 5249.0], [99.1, 5620.0], [99.2, 5704.0], [99.3, 6164.0], [99.4, 6364.0], [99.5, 7072.0], [99.6, 7540.0], [99.7, 8422.0], [99.8, 9844.0], [99.9, 12365.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 977.0, "series": [{"data": [[600.0, 372.0], [700.0, 307.0], [800.0, 216.0], [900.0, 207.0], [1000.0, 151.0], [1100.0, 110.0], [1200.0, 74.0], [1300.0, 75.0], [1400.0, 69.0], [1500.0, 48.0], [1600.0, 38.0], [1700.0, 43.0], [1800.0, 53.0], [1900.0, 63.0], [2000.0, 100.0], [2100.0, 106.0], [2200.0, 87.0], [2300.0, 59.0], [2400.0, 38.0], [2500.0, 22.0], [2600.0, 31.0], [2800.0, 16.0], [2700.0, 16.0], [2900.0, 6.0], [3000.0, 16.0], [3100.0, 18.0], [3200.0, 8.0], [3300.0, 11.0], [3400.0, 2.0], [3500.0, 7.0], [3700.0, 9.0], [3600.0, 7.0], [3800.0, 5.0], [3900.0, 5.0], [4000.0, 5.0], [4200.0, 7.0], [4100.0, 6.0], [4300.0, 5.0], [4500.0, 7.0], [4400.0, 2.0], [4600.0, 5.0], [4800.0, 3.0], [4700.0, 7.0], [4900.0, 7.0], [5000.0, 4.0], [5100.0, 2.0], [5200.0, 4.0], [5600.0, 5.0], [5400.0, 3.0], [5700.0, 3.0], [5800.0, 1.0], [6000.0, 1.0], [6100.0, 3.0], [6300.0, 2.0], [6200.0, 2.0], [6600.0, 1.0], [6700.0, 1.0], [6900.0, 2.0], [7000.0, 1.0], [7100.0, 1.0], [7200.0, 2.0], [7300.0, 1.0], [7500.0, 2.0], [7600.0, 1.0], [7800.0, 1.0], [7700.0, 1.0], [8700.0, 1.0], [8400.0, 1.0], [9200.0, 1.0], [9400.0, 1.0], [9800.0, 2.0], [10800.0, 1.0], [10900.0, 1.0], [11500.0, 1.0], [12200.0, 1.0], [12400.0, 2.0], [12300.0, 1.0], [12900.0, 1.0], [12800.0, 1.0], [16500.0, 1.0], [200.0, 624.0], [300.0, 977.0], [400.0, 653.0], [500.0, 427.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 927.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2259.0, "series": [{"data": [[0.0, 2259.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2004.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 927.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.333333333333332, "minX": 1.60438452E12, "maxY": 10.0, "series": [{"data": [[1.60438458E12, 10.0], [1.60438506E12, 9.687500000000002], [1.60438488E12, 10.0], [1.60438494E12, 10.0], [1.60438476E12, 10.0], [1.60438482E12, 10.0], [1.60438464E12, 10.0], [1.6043847E12, 10.0], [1.60438452E12, 9.333333333333332], [1.604385E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438506E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 408.0, "minX": 1.0, "maxY": 6164.0, "series": [{"data": [[8.0, 415.0], [4.0, 2814.0], [2.0, 6164.0], [1.0, 5657.0], [9.0, 572.0], [10.0, 959.0005792624054], [5.0, 2819.0], [6.0, 702.0], [3.0, 2075.0], [7.0, 408.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99055876685938, 961.3236994219639]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 46.18333333333333, "minX": 1.60438452E12, "maxY": 4132193.05, "series": [{"data": [[1.60438458E12, 3521076.183333333], [1.60438506E12, 785258.7333333333], [1.60438488E12, 2426113.8666666667], [1.60438494E12, 4132193.05], [1.60438476E12, 3337892.15], [1.60438482E12, 3248515.566666667], [1.60438464E12, 2842026.1166666667], [1.6043847E12, 3942951.7666666666], [1.60438452E12, 24754.35], [1.604385E12, 3317879.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438458E12, 4318.05], [1.60438506E12, 1084.2], [1.60438488E12, 4542.733333333334], [1.60438494E12, 5208.75], [1.60438476E12, 4649.316666666667], [1.60438482E12, 4039.633333333333], [1.60438464E12, 4586.633333333333], [1.6043847E12, 5155.633333333333], [1.60438452E12, 46.18333333333333], [1.604385E12, 4946.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438506E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 540.5, "minX": 1.60438452E12, "maxY": 1404.3541666666667, "series": [{"data": [[1.60438458E12, 1007.1892797319932], [1.60438506E12, 1404.3541666666667], [1.60438488E12, 965.7600000000006], [1.60438494E12, 873.7973760932939], [1.60438476E12, 943.358766233767], [1.60438482E12, 1083.1466905187835], [1.60438464E12, 955.2964743589745], [1.6043847E12, 885.669117647059], [1.60438452E12, 540.5], [1.604385E12, 910.4670750382851]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438506E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 537.5, "minX": 1.60438452E12, "maxY": 1402.277777777777, "series": [{"data": [[1.60438458E12, 1003.8760469011728], [1.60438506E12, 1402.277777777777], [1.60438488E12, 963.9679999999989], [1.60438494E12, 871.4198250728873], [1.60438476E12, 940.2694805194816], [1.60438482E12, 1080.7155635062618], [1.60438464E12, 952.6987179487176], [1.6043847E12, 882.2264705882351], [1.60438452E12, 537.5], [1.604385E12, 908.4150076569675]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438506E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01071975497702911, "minX": 1.60438452E12, "maxY": 8.333333333333334, "series": [{"data": [[1.60438458E12, 0.12395309882747076], [1.60438506E12, 0.06249999999999999], [1.60438488E12, 0.016000000000000004], [1.60438494E12, 0.014577259475218662], [1.60438476E12, 0.04383116883116879], [1.60438482E12, 0.012522361359570683], [1.60438464E12, 0.01923076923076925], [1.6043847E12, 0.013235294117647057], [1.60438452E12, 8.333333333333334], [1.604385E12, 0.01071975497702911]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438506E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 208.0, "minX": 1.60438452E12, "maxY": 16520.0, "series": [{"data": [[1.60438458E12, 12967.0], [1.60438506E12, 9475.0], [1.60438488E12, 16520.0], [1.60438494E12, 7866.0], [1.60438476E12, 12466.0], [1.60438482E12, 12425.0], [1.60438464E12, 10872.0], [1.6043847E12, 7234.0], [1.60438452E12, 720.0], [1.604385E12, 6959.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438458E12, 234.76399971485137], [1.60438506E12, 236.43999972343445], [1.60438488E12, 229.90199955224992], [1.60438494E12, 230.18299983620645], [1.60438476E12, 233.0], [1.60438482E12, 237.0399998664856], [1.60438464E12, 233.87499955296516], [1.6043847E12, 231.12899983763694], [1.60438452E12, 269.0], [1.604385E12, 226.88599984407426]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438458E12, 235.84040011405943], [1.60438506E12, 237.48400011062623], [1.60438488E12, 231.78960023880006], [1.60438494E12, 230.80130006551744], [1.60438476E12, 233.1083000588417], [1.60438482E12, 237.54400005340577], [1.60438464E12, 235.0], [1.6043847E12, 231.7419000649452], [1.60438452E12, 269.0], [1.604385E12, 227.9492001247406]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438458E12, 235.3619998574257], [1.60438506E12, 237.01999986171722], [1.60438488E12, 230.84099977612496], [1.60438494E12, 230.5264999181032], [1.60438476E12, 233.0], [1.60438482E12, 237.3199999332428], [1.60438464E12, 234.81249977648258], [1.6043847E12, 231.46949991881849], [1.60438452E12, 269.0], [1.604385E12, 227.42599984407425]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438458E12, 230.0], [1.60438506E12, 234.0], [1.60438488E12, 208.0], [1.60438494E12, 224.0], [1.60438476E12, 225.0], [1.60438482E12, 225.0], [1.60438464E12, 229.0], [1.6043847E12, 223.0], [1.60438452E12, 269.0], [1.604385E12, 212.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438458E12, 694.0], [1.60438506E12, 893.5], [1.60438488E12, 589.0], [1.60438494E12, 444.0], [1.60438476E12, 535.5], [1.60438482E12, 708.0], [1.60438464E12, 480.0], [1.6043847E12, 493.0], [1.60438452E12, 579.5], [1.604385E12, 523.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438506E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 295.5, "minX": 1.0, "maxY": 2735.0, "series": [{"data": [[2.0, 1219.0], [3.0, 1528.0], [4.0, 1863.5], [5.0, 1097.5], [6.0, 1006.0], [7.0, 868.0], [8.0, 744.0], [9.0, 721.0], [10.0, 681.5], [11.0, 612.0], [12.0, 572.5], [13.0, 647.5], [14.0, 552.0], [15.0, 508.0], [1.0, 2735.0], [16.0, 465.0], [17.0, 457.0], [18.0, 452.0], [19.0, 403.0], [20.0, 349.5], [21.0, 314.0], [22.0, 306.5], [23.0, 298.5], [24.0, 295.5], [25.0, 310.0], [26.0, 310.0], [27.0, 309.0], [28.0, 301.0], [29.0, 307.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 295.5, "minX": 1.0, "maxY": 2734.0, "series": [{"data": [[2.0, 1217.5], [3.0, 1525.0], [4.0, 1861.5], [5.0, 1094.0], [6.0, 1003.0], [7.0, 868.0], [8.0, 743.5], [9.0, 720.0], [10.0, 679.0], [11.0, 609.0], [12.0, 572.0], [13.0, 645.5], [14.0, 551.5], [15.0, 508.0], [1.0, 2734.0], [16.0, 465.0], [17.0, 455.5], [18.0, 452.0], [19.0, 403.0], [20.0, 349.5], [21.0, 314.0], [22.0, 306.5], [23.0, 298.5], [24.0, 295.5], [25.0, 310.0], [26.0, 310.0], [27.0, 309.0], [28.0, 301.0], [29.0, 307.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60438452E12, "maxY": 11.433333333333334, "series": [{"data": [[1.60438458E12, 9.95], [1.60438506E12, 2.2333333333333334], [1.60438488E12, 10.416666666666666], [1.60438494E12, 11.433333333333334], [1.60438476E12, 10.266666666666667], [1.60438482E12, 9.316666666666666], [1.60438464E12, 10.4], [1.6043847E12, 11.333333333333334], [1.60438452E12, 0.26666666666666666], [1.604385E12, 10.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438506E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60438452E12, "maxY": 11.433333333333334, "series": [{"data": [[1.60438458E12, 9.95], [1.60438506E12, 2.4], [1.60438488E12, 10.416666666666666], [1.60438494E12, 11.433333333333334], [1.60438476E12, 10.266666666666667], [1.60438482E12, 9.316666666666666], [1.60438464E12, 10.4], [1.6043847E12, 11.333333333333334], [1.60438452E12, 0.1], [1.604385E12, 10.883333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438506E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60438452E12, "maxY": 11.433333333333334, "series": [{"data": [[1.60438458E12, 9.95], [1.60438506E12, 2.4], [1.60438488E12, 10.416666666666666], [1.60438494E12, 11.433333333333334], [1.60438476E12, 10.266666666666667], [1.60438482E12, 9.316666666666666], [1.60438464E12, 10.4], [1.6043847E12, 11.333333333333334], [1.60438452E12, 0.1], [1.604385E12, 10.883333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438506E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.60438452E12, "maxY": 11.433333333333334, "series": [{"data": [[1.60438458E12, 9.95], [1.60438506E12, 2.4], [1.60438488E12, 10.416666666666666], [1.60438494E12, 11.433333333333334], [1.60438476E12, 10.266666666666667], [1.60438482E12, 9.316666666666666], [1.60438464E12, 10.4], [1.6043847E12, 11.333333333333334], [1.60438452E12, 0.1], [1.604385E12, 10.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438506E12, "title": "Total Transactions Per Second"}},
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

