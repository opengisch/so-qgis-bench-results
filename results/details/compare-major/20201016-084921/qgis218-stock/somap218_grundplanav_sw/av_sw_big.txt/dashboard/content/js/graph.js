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
        data: {"result": {"minY": 214.0, "minX": 0.0, "maxY": 18140.0, "series": [{"data": [[0.0, 214.0], [0.1, 222.0], [0.2, 224.0], [0.3, 225.0], [0.4, 226.0], [0.5, 227.0], [0.6, 228.0], [0.7, 229.0], [0.8, 230.0], [0.9, 230.0], [1.0, 231.0], [1.1, 232.0], [1.2, 233.0], [1.3, 233.0], [1.4, 233.0], [1.5, 234.0], [1.6, 234.0], [1.7, 234.0], [1.8, 235.0], [1.9, 235.0], [2.0, 236.0], [2.1, 237.0], [2.2, 237.0], [2.3, 238.0], [2.4, 238.0], [2.5, 239.0], [2.6, 239.0], [2.7, 240.0], [2.8, 241.0], [2.9, 241.0], [3.0, 242.0], [3.1, 242.0], [3.2, 243.0], [3.3, 243.0], [3.4, 244.0], [3.5, 245.0], [3.6, 245.0], [3.7, 246.0], [3.8, 247.0], [3.9, 247.0], [4.0, 248.0], [4.1, 248.0], [4.2, 249.0], [4.3, 250.0], [4.4, 250.0], [4.5, 251.0], [4.6, 252.0], [4.7, 253.0], [4.8, 253.0], [4.9, 254.0], [5.0, 255.0], [5.1, 255.0], [5.2, 256.0], [5.3, 256.0], [5.4, 258.0], [5.5, 258.0], [5.6, 258.0], [5.7, 259.0], [5.8, 260.0], [5.9, 261.0], [6.0, 261.0], [6.1, 262.0], [6.2, 263.0], [6.3, 264.0], [6.4, 265.0], [6.5, 265.0], [6.6, 266.0], [6.7, 266.0], [6.8, 267.0], [6.9, 269.0], [7.0, 269.0], [7.1, 270.0], [7.2, 271.0], [7.3, 273.0], [7.4, 273.0], [7.5, 274.0], [7.6, 275.0], [7.7, 275.0], [7.8, 276.0], [7.9, 277.0], [8.0, 278.0], [8.1, 279.0], [8.2, 279.0], [8.3, 280.0], [8.4, 281.0], [8.5, 282.0], [8.6, 283.0], [8.7, 284.0], [8.8, 285.0], [8.9, 287.0], [9.0, 287.0], [9.1, 289.0], [9.2, 289.0], [9.3, 291.0], [9.4, 292.0], [9.5, 292.0], [9.6, 293.0], [9.7, 294.0], [9.8, 294.0], [9.9, 295.0], [10.0, 296.0], [10.1, 297.0], [10.2, 297.0], [10.3, 298.0], [10.4, 298.0], [10.5, 299.0], [10.6, 299.0], [10.7, 300.0], [10.8, 301.0], [10.9, 302.0], [11.0, 302.0], [11.1, 303.0], [11.2, 303.0], [11.3, 304.0], [11.4, 304.0], [11.5, 305.0], [11.6, 305.0], [11.7, 305.0], [11.8, 306.0], [11.9, 306.0], [12.0, 307.0], [12.1, 308.0], [12.2, 309.0], [12.3, 309.0], [12.4, 310.0], [12.5, 310.0], [12.6, 311.0], [12.7, 311.0], [12.8, 311.0], [12.9, 312.0], [13.0, 312.0], [13.1, 313.0], [13.2, 313.0], [13.3, 314.0], [13.4, 315.0], [13.5, 315.0], [13.6, 316.0], [13.7, 316.0], [13.8, 317.0], [13.9, 318.0], [14.0, 318.0], [14.1, 319.0], [14.2, 319.0], [14.3, 320.0], [14.4, 321.0], [14.5, 321.0], [14.6, 322.0], [14.7, 322.0], [14.8, 323.0], [14.9, 323.0], [15.0, 324.0], [15.1, 324.0], [15.2, 325.0], [15.3, 325.0], [15.4, 325.0], [15.5, 327.0], [15.6, 327.0], [15.7, 328.0], [15.8, 328.0], [15.9, 329.0], [16.0, 329.0], [16.1, 330.0], [16.2, 331.0], [16.3, 332.0], [16.4, 333.0], [16.5, 333.0], [16.6, 334.0], [16.7, 334.0], [16.8, 335.0], [16.9, 335.0], [17.0, 336.0], [17.1, 337.0], [17.2, 337.0], [17.3, 338.0], [17.4, 338.0], [17.5, 339.0], [17.6, 339.0], [17.7, 340.0], [17.8, 340.0], [17.9, 341.0], [18.0, 341.0], [18.1, 342.0], [18.2, 343.0], [18.3, 343.0], [18.4, 344.0], [18.5, 345.0], [18.6, 345.0], [18.7, 346.0], [18.8, 346.0], [18.9, 347.0], [19.0, 348.0], [19.1, 348.0], [19.2, 349.0], [19.3, 349.0], [19.4, 350.0], [19.5, 350.0], [19.6, 351.0], [19.7, 352.0], [19.8, 353.0], [19.9, 354.0], [20.0, 355.0], [20.1, 355.0], [20.2, 355.0], [20.3, 356.0], [20.4, 357.0], [20.5, 358.0], [20.6, 359.0], [20.7, 360.0], [20.8, 361.0], [20.9, 361.0], [21.0, 362.0], [21.1, 362.0], [21.2, 363.0], [21.3, 363.0], [21.4, 364.0], [21.5, 364.0], [21.6, 365.0], [21.7, 365.0], [21.8, 366.0], [21.9, 366.0], [22.0, 367.0], [22.1, 368.0], [22.2, 369.0], [22.3, 369.0], [22.4, 369.0], [22.5, 370.0], [22.6, 371.0], [22.7, 372.0], [22.8, 372.0], [22.9, 373.0], [23.0, 373.0], [23.1, 374.0], [23.2, 375.0], [23.3, 376.0], [23.4, 376.0], [23.5, 377.0], [23.6, 378.0], [23.7, 379.0], [23.8, 379.0], [23.9, 380.0], [24.0, 380.0], [24.1, 382.0], [24.2, 382.0], [24.3, 383.0], [24.4, 384.0], [24.5, 385.0], [24.6, 386.0], [24.7, 386.0], [24.8, 387.0], [24.9, 388.0], [25.0, 388.0], [25.1, 389.0], [25.2, 390.0], [25.3, 390.0], [25.4, 391.0], [25.5, 391.0], [25.6, 392.0], [25.7, 392.0], [25.8, 393.0], [25.9, 393.0], [26.0, 394.0], [26.1, 395.0], [26.2, 396.0], [26.3, 397.0], [26.4, 397.0], [26.5, 398.0], [26.6, 399.0], [26.7, 399.0], [26.8, 400.0], [26.9, 401.0], [27.0, 401.0], [27.1, 402.0], [27.2, 403.0], [27.3, 403.0], [27.4, 404.0], [27.5, 404.0], [27.6, 405.0], [27.7, 405.0], [27.8, 406.0], [27.9, 406.0], [28.0, 407.0], [28.1, 408.0], [28.2, 409.0], [28.3, 409.0], [28.4, 410.0], [28.5, 411.0], [28.6, 412.0], [28.7, 413.0], [28.8, 414.0], [28.9, 415.0], [29.0, 416.0], [29.1, 416.0], [29.2, 417.0], [29.3, 418.0], [29.4, 418.0], [29.5, 419.0], [29.6, 420.0], [29.7, 421.0], [29.8, 422.0], [29.9, 422.0], [30.0, 422.0], [30.1, 423.0], [30.2, 424.0], [30.3, 425.0], [30.4, 425.0], [30.5, 426.0], [30.6, 426.0], [30.7, 427.0], [30.8, 428.0], [30.9, 428.0], [31.0, 429.0], [31.1, 430.0], [31.2, 430.0], [31.3, 431.0], [31.4, 432.0], [31.5, 432.0], [31.6, 433.0], [31.7, 434.0], [31.8, 435.0], [31.9, 436.0], [32.0, 437.0], [32.1, 437.0], [32.2, 438.0], [32.3, 438.0], [32.4, 439.0], [32.5, 439.0], [32.6, 440.0], [32.7, 441.0], [32.8, 442.0], [32.9, 442.0], [33.0, 443.0], [33.1, 444.0], [33.2, 445.0], [33.3, 446.0], [33.4, 447.0], [33.5, 448.0], [33.6, 448.0], [33.7, 449.0], [33.8, 449.0], [33.9, 450.0], [34.0, 451.0], [34.1, 452.0], [34.2, 452.0], [34.3, 453.0], [34.4, 454.0], [34.5, 455.0], [34.6, 455.0], [34.7, 455.0], [34.8, 457.0], [34.9, 458.0], [35.0, 459.0], [35.1, 459.0], [35.2, 460.0], [35.3, 461.0], [35.4, 462.0], [35.5, 463.0], [35.6, 464.0], [35.7, 465.0], [35.8, 465.0], [35.9, 466.0], [36.0, 468.0], [36.1, 468.0], [36.2, 468.0], [36.3, 469.0], [36.4, 469.0], [36.5, 470.0], [36.6, 471.0], [36.7, 472.0], [36.8, 473.0], [36.9, 474.0], [37.0, 476.0], [37.1, 476.0], [37.2, 477.0], [37.3, 477.0], [37.4, 478.0], [37.5, 480.0], [37.6, 481.0], [37.7, 482.0], [37.8, 483.0], [37.9, 485.0], [38.0, 485.0], [38.1, 487.0], [38.2, 487.0], [38.3, 488.0], [38.4, 489.0], [38.5, 490.0], [38.6, 491.0], [38.7, 491.0], [38.8, 492.0], [38.9, 493.0], [39.0, 494.0], [39.1, 495.0], [39.2, 496.0], [39.3, 497.0], [39.4, 498.0], [39.5, 498.0], [39.6, 499.0], [39.7, 500.0], [39.8, 501.0], [39.9, 502.0], [40.0, 503.0], [40.1, 505.0], [40.2, 506.0], [40.3, 506.0], [40.4, 507.0], [40.5, 508.0], [40.6, 508.0], [40.7, 509.0], [40.8, 510.0], [40.9, 511.0], [41.0, 512.0], [41.1, 514.0], [41.2, 515.0], [41.3, 516.0], [41.4, 517.0], [41.5, 519.0], [41.6, 520.0], [41.7, 521.0], [41.8, 522.0], [41.9, 523.0], [42.0, 524.0], [42.1, 525.0], [42.2, 526.0], [42.3, 526.0], [42.4, 527.0], [42.5, 528.0], [42.6, 529.0], [42.7, 530.0], [42.8, 531.0], [42.9, 531.0], [43.0, 532.0], [43.1, 533.0], [43.2, 535.0], [43.3, 537.0], [43.4, 537.0], [43.5, 538.0], [43.6, 539.0], [43.7, 540.0], [43.8, 541.0], [43.9, 543.0], [44.0, 544.0], [44.1, 545.0], [44.2, 546.0], [44.3, 547.0], [44.4, 548.0], [44.5, 550.0], [44.6, 552.0], [44.7, 552.0], [44.8, 553.0], [44.9, 555.0], [45.0, 557.0], [45.1, 558.0], [45.2, 558.0], [45.3, 560.0], [45.4, 561.0], [45.5, 562.0], [45.6, 563.0], [45.7, 564.0], [45.8, 565.0], [45.9, 566.0], [46.0, 567.0], [46.1, 568.0], [46.2, 569.0], [46.3, 570.0], [46.4, 571.0], [46.5, 572.0], [46.6, 572.0], [46.7, 573.0], [46.8, 575.0], [46.9, 576.0], [47.0, 580.0], [47.1, 581.0], [47.2, 582.0], [47.3, 583.0], [47.4, 584.0], [47.5, 585.0], [47.6, 587.0], [47.7, 588.0], [47.8, 589.0], [47.9, 590.0], [48.0, 591.0], [48.1, 591.0], [48.2, 592.0], [48.3, 594.0], [48.4, 595.0], [48.5, 595.0], [48.6, 597.0], [48.7, 597.0], [48.8, 598.0], [48.9, 599.0], [49.0, 600.0], [49.1, 601.0], [49.2, 602.0], [49.3, 603.0], [49.4, 604.0], [49.5, 607.0], [49.6, 608.0], [49.7, 609.0], [49.8, 610.0], [49.9, 612.0], [50.0, 612.0], [50.1, 614.0], [50.2, 616.0], [50.3, 617.0], [50.4, 618.0], [50.5, 620.0], [50.6, 622.0], [50.7, 624.0], [50.8, 625.0], [50.9, 628.0], [51.0, 629.0], [51.1, 632.0], [51.2, 632.0], [51.3, 634.0], [51.4, 635.0], [51.5, 635.0], [51.6, 636.0], [51.7, 638.0], [51.8, 640.0], [51.9, 642.0], [52.0, 643.0], [52.1, 644.0], [52.2, 646.0], [52.3, 648.0], [52.4, 649.0], [52.5, 650.0], [52.6, 651.0], [52.7, 653.0], [52.8, 654.0], [52.9, 655.0], [53.0, 656.0], [53.1, 658.0], [53.2, 660.0], [53.3, 662.0], [53.4, 663.0], [53.5, 663.0], [53.6, 664.0], [53.7, 666.0], [53.8, 667.0], [53.9, 668.0], [54.0, 668.0], [54.1, 669.0], [54.2, 671.0], [54.3, 672.0], [54.4, 674.0], [54.5, 675.0], [54.6, 676.0], [54.7, 677.0], [54.8, 678.0], [54.9, 681.0], [55.0, 683.0], [55.1, 685.0], [55.2, 686.0], [55.3, 686.0], [55.4, 688.0], [55.5, 689.0], [55.6, 691.0], [55.7, 693.0], [55.8, 695.0], [55.9, 697.0], [56.0, 698.0], [56.1, 700.0], [56.2, 701.0], [56.3, 701.0], [56.4, 703.0], [56.5, 704.0], [56.6, 706.0], [56.7, 708.0], [56.8, 710.0], [56.9, 712.0], [57.0, 714.0], [57.1, 715.0], [57.2, 717.0], [57.3, 718.0], [57.4, 719.0], [57.5, 720.0], [57.6, 722.0], [57.7, 724.0], [57.8, 726.0], [57.9, 726.0], [58.0, 728.0], [58.1, 729.0], [58.2, 731.0], [58.3, 735.0], [58.4, 736.0], [58.5, 738.0], [58.6, 740.0], [58.7, 741.0], [58.8, 744.0], [58.9, 745.0], [59.0, 747.0], [59.1, 749.0], [59.2, 753.0], [59.3, 755.0], [59.4, 756.0], [59.5, 757.0], [59.6, 758.0], [59.7, 761.0], [59.8, 764.0], [59.9, 766.0], [60.0, 767.0], [60.1, 770.0], [60.2, 771.0], [60.3, 772.0], [60.4, 774.0], [60.5, 777.0], [60.6, 779.0], [60.7, 781.0], [60.8, 785.0], [60.9, 786.0], [61.0, 788.0], [61.1, 790.0], [61.2, 793.0], [61.3, 794.0], [61.4, 795.0], [61.5, 796.0], [61.6, 797.0], [61.7, 798.0], [61.8, 799.0], [61.9, 801.0], [62.0, 803.0], [62.1, 804.0], [62.2, 808.0], [62.3, 811.0], [62.4, 813.0], [62.5, 814.0], [62.6, 816.0], [62.7, 818.0], [62.8, 820.0], [62.9, 822.0], [63.0, 825.0], [63.1, 828.0], [63.2, 831.0], [63.3, 833.0], [63.4, 836.0], [63.5, 838.0], [63.6, 839.0], [63.7, 845.0], [63.8, 847.0], [63.9, 850.0], [64.0, 853.0], [64.1, 855.0], [64.2, 857.0], [64.3, 858.0], [64.4, 862.0], [64.5, 864.0], [64.6, 866.0], [64.7, 867.0], [64.8, 869.0], [64.9, 870.0], [65.0, 872.0], [65.1, 874.0], [65.2, 875.0], [65.3, 878.0], [65.4, 880.0], [65.5, 884.0], [65.6, 886.0], [65.7, 888.0], [65.8, 890.0], [65.9, 892.0], [66.0, 895.0], [66.1, 896.0], [66.2, 898.0], [66.3, 901.0], [66.4, 904.0], [66.5, 908.0], [66.6, 911.0], [66.7, 914.0], [66.8, 916.0], [66.9, 919.0], [67.0, 921.0], [67.1, 925.0], [67.2, 927.0], [67.3, 929.0], [67.4, 932.0], [67.5, 934.0], [67.6, 936.0], [67.7, 939.0], [67.8, 940.0], [67.9, 942.0], [68.0, 945.0], [68.1, 947.0], [68.2, 950.0], [68.3, 951.0], [68.4, 954.0], [68.5, 955.0], [68.6, 958.0], [68.7, 960.0], [68.8, 964.0], [68.9, 965.0], [69.0, 968.0], [69.1, 970.0], [69.2, 973.0], [69.3, 978.0], [69.4, 980.0], [69.5, 986.0], [69.6, 988.0], [69.7, 991.0], [69.8, 993.0], [69.9, 996.0], [70.0, 999.0], [70.1, 1002.0], [70.2, 1006.0], [70.3, 1008.0], [70.4, 1012.0], [70.5, 1015.0], [70.6, 1020.0], [70.7, 1022.0], [70.8, 1024.0], [70.9, 1029.0], [71.0, 1030.0], [71.1, 1034.0], [71.2, 1036.0], [71.3, 1041.0], [71.4, 1045.0], [71.5, 1049.0], [71.6, 1052.0], [71.7, 1057.0], [71.8, 1059.0], [71.9, 1061.0], [72.0, 1063.0], [72.1, 1066.0], [72.2, 1069.0], [72.3, 1072.0], [72.4, 1076.0], [72.5, 1077.0], [72.6, 1080.0], [72.7, 1081.0], [72.8, 1084.0], [72.9, 1087.0], [73.0, 1088.0], [73.1, 1090.0], [73.2, 1094.0], [73.3, 1097.0], [73.4, 1102.0], [73.5, 1105.0], [73.6, 1108.0], [73.7, 1110.0], [73.8, 1113.0], [73.9, 1117.0], [74.0, 1119.0], [74.1, 1124.0], [74.2, 1128.0], [74.3, 1134.0], [74.4, 1137.0], [74.5, 1141.0], [74.6, 1143.0], [74.7, 1148.0], [74.8, 1154.0], [74.9, 1160.0], [75.0, 1164.0], [75.1, 1168.0], [75.2, 1170.0], [75.3, 1176.0], [75.4, 1178.0], [75.5, 1180.0], [75.6, 1184.0], [75.7, 1186.0], [75.8, 1192.0], [75.9, 1195.0], [76.0, 1199.0], [76.1, 1205.0], [76.2, 1210.0], [76.3, 1213.0], [76.4, 1217.0], [76.5, 1219.0], [76.6, 1223.0], [76.7, 1226.0], [76.8, 1231.0], [76.9, 1236.0], [77.0, 1240.0], [77.1, 1245.0], [77.2, 1250.0], [77.3, 1254.0], [77.4, 1256.0], [77.5, 1258.0], [77.6, 1266.0], [77.7, 1270.0], [77.8, 1274.0], [77.9, 1281.0], [78.0, 1283.0], [78.1, 1294.0], [78.2, 1296.0], [78.3, 1300.0], [78.4, 1310.0], [78.5, 1319.0], [78.6, 1324.0], [78.7, 1334.0], [78.8, 1339.0], [78.9, 1344.0], [79.0, 1352.0], [79.1, 1360.0], [79.2, 1373.0], [79.3, 1377.0], [79.4, 1386.0], [79.5, 1391.0], [79.6, 1398.0], [79.7, 1404.0], [79.8, 1414.0], [79.9, 1422.0], [80.0, 1428.0], [80.1, 1440.0], [80.2, 1448.0], [80.3, 1451.0], [80.4, 1459.0], [80.5, 1472.0], [80.6, 1483.0], [80.7, 1489.0], [80.8, 1499.0], [80.9, 1503.0], [81.0, 1511.0], [81.1, 1518.0], [81.2, 1526.0], [81.3, 1531.0], [81.4, 1537.0], [81.5, 1551.0], [81.6, 1573.0], [81.7, 1585.0], [81.8, 1592.0], [81.9, 1600.0], [82.0, 1620.0], [82.1, 1645.0], [82.2, 1649.0], [82.3, 1659.0], [82.4, 1662.0], [82.5, 1665.0], [82.6, 1675.0], [82.7, 1689.0], [82.8, 1693.0], [82.9, 1698.0], [83.0, 1708.0], [83.1, 1713.0], [83.2, 1718.0], [83.3, 1723.0], [83.4, 1733.0], [83.5, 1736.0], [83.6, 1745.0], [83.7, 1753.0], [83.8, 1765.0], [83.9, 1767.0], [84.0, 1771.0], [84.1, 1780.0], [84.2, 1783.0], [84.3, 1795.0], [84.4, 1804.0], [84.5, 1810.0], [84.6, 1820.0], [84.7, 1831.0], [84.8, 1840.0], [84.9, 1852.0], [85.0, 1858.0], [85.1, 1861.0], [85.2, 1867.0], [85.3, 1874.0], [85.4, 1877.0], [85.5, 1884.0], [85.6, 1888.0], [85.7, 1902.0], [85.8, 1908.0], [85.9, 1914.0], [86.0, 1924.0], [86.1, 1937.0], [86.2, 1954.0], [86.3, 1959.0], [86.4, 1967.0], [86.5, 1976.0], [86.6, 1982.0], [86.7, 1988.0], [86.8, 1994.0], [86.9, 2002.0], [87.0, 2008.0], [87.1, 2015.0], [87.2, 2024.0], [87.3, 2031.0], [87.4, 2045.0], [87.5, 2048.0], [87.6, 2052.0], [87.7, 2061.0], [87.8, 2065.0], [87.9, 2076.0], [88.0, 2080.0], [88.1, 2085.0], [88.2, 2096.0], [88.3, 2100.0], [88.4, 2111.0], [88.5, 2116.0], [88.6, 2124.0], [88.7, 2131.0], [88.8, 2153.0], [88.9, 2156.0], [89.0, 2164.0], [89.1, 2175.0], [89.2, 2194.0], [89.3, 2202.0], [89.4, 2217.0], [89.5, 2233.0], [89.6, 2241.0], [89.7, 2246.0], [89.8, 2252.0], [89.9, 2262.0], [90.0, 2270.0], [90.1, 2277.0], [90.2, 2281.0], [90.3, 2284.0], [90.4, 2295.0], [90.5, 2299.0], [90.6, 2318.0], [90.7, 2333.0], [90.8, 2338.0], [90.9, 2346.0], [91.0, 2350.0], [91.1, 2360.0], [91.2, 2370.0], [91.3, 2383.0], [91.4, 2388.0], [91.5, 2396.0], [91.6, 2413.0], [91.7, 2424.0], [91.8, 2434.0], [91.9, 2450.0], [92.0, 2457.0], [92.1, 2468.0], [92.2, 2481.0], [92.3, 2487.0], [92.4, 2496.0], [92.5, 2501.0], [92.6, 2509.0], [92.7, 2518.0], [92.8, 2527.0], [92.9, 2536.0], [93.0, 2551.0], [93.1, 2562.0], [93.2, 2571.0], [93.3, 2577.0], [93.4, 2584.0], [93.5, 2596.0], [93.6, 2612.0], [93.7, 2622.0], [93.8, 2628.0], [93.9, 2641.0], [94.0, 2654.0], [94.1, 2660.0], [94.2, 2670.0], [94.3, 2691.0], [94.4, 2700.0], [94.5, 2709.0], [94.6, 2715.0], [94.7, 2733.0], [94.8, 2751.0], [94.9, 2770.0], [95.0, 2781.0], [95.1, 2815.0], [95.2, 2864.0], [95.3, 2908.0], [95.4, 2952.0], [95.5, 2970.0], [95.6, 3013.0], [95.7, 3044.0], [95.8, 3080.0], [95.9, 3125.0], [96.0, 3147.0], [96.1, 3173.0], [96.2, 3212.0], [96.3, 3274.0], [96.4, 3306.0], [96.5, 3348.0], [96.6, 3438.0], [96.7, 3453.0], [96.8, 3501.0], [96.9, 3557.0], [97.0, 3606.0], [97.1, 3742.0], [97.2, 3778.0], [97.3, 3845.0], [97.4, 3908.0], [97.5, 3984.0], [97.6, 4026.0], [97.7, 4080.0], [97.8, 4191.0], [97.9, 4319.0], [98.0, 4421.0], [98.1, 4555.0], [98.2, 4681.0], [98.3, 4760.0], [98.4, 4867.0], [98.5, 5038.0], [98.6, 5082.0], [98.7, 5160.0], [98.8, 5240.0], [98.9, 5362.0], [99.0, 5610.0], [99.1, 5804.0], [99.2, 5989.0], [99.3, 6275.0], [99.4, 6601.0], [99.5, 7198.0], [99.6, 7626.0], [99.7, 8639.0], [99.8, 9987.0], [99.9, 13963.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 837.0, "series": [{"data": [[600.0, 370.0], [700.0, 297.0], [800.0, 232.0], [900.0, 194.0], [1000.0, 172.0], [1100.0, 139.0], [1200.0, 117.0], [1300.0, 70.0], [1400.0, 62.0], [1500.0, 56.0], [1600.0, 53.0], [1700.0, 75.0], [1800.0, 68.0], [1900.0, 62.0], [2000.0, 74.0], [2100.0, 51.0], [2200.0, 64.0], [2300.0, 53.0], [2400.0, 47.0], [2500.0, 57.0], [2600.0, 45.0], [2700.0, 34.0], [2800.0, 11.0], [2900.0, 17.0], [3000.0, 15.0], [3100.0, 15.0], [3200.0, 12.0], [3300.0, 9.0], [3400.0, 11.0], [3500.0, 9.0], [3700.0, 7.0], [3600.0, 6.0], [3800.0, 10.0], [3900.0, 8.0], [4000.0, 10.0], [4100.0, 4.0], [4300.0, 2.0], [4200.0, 4.0], [4600.0, 5.0], [4500.0, 2.0], [4400.0, 8.0], [4700.0, 6.0], [4800.0, 3.0], [5000.0, 6.0], [5100.0, 7.0], [4900.0, 5.0], [5200.0, 6.0], [5300.0, 2.0], [5400.0, 4.0], [5500.0, 1.0], [5600.0, 3.0], [5800.0, 4.0], [5700.0, 1.0], [6100.0, 2.0], [5900.0, 4.0], [6000.0, 1.0], [6200.0, 1.0], [6300.0, 2.0], [6400.0, 2.0], [6600.0, 2.0], [6700.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7100.0, 1.0], [7000.0, 1.0], [7300.0, 1.0], [7200.0, 1.0], [7400.0, 1.0], [7600.0, 2.0], [7500.0, 1.0], [8100.0, 1.0], [8200.0, 1.0], [8700.0, 1.0], [8300.0, 1.0], [8600.0, 1.0], [9000.0, 1.0], [9300.0, 2.0], [9900.0, 1.0], [11300.0, 1.0], [12900.0, 1.0], [12800.0, 1.0], [13000.0, 1.0], [14000.0, 1.0], [13900.0, 1.0], [14500.0, 2.0], [15200.0, 1.0], [18100.0, 1.0], [200.0, 551.0], [300.0, 837.0], [400.0, 671.0], [500.0, 482.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 996.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2129.0, "series": [{"data": [[0.0, 2065.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2129.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 996.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.745762711864408, "minX": 1.60283838E12, "maxY": 10.0, "series": [{"data": [[1.60283838E12, 10.0], [1.60283868E12, 10.0], [1.60283886E12, 10.0], [1.6028385E12, 10.0], [1.6028388E12, 10.0], [1.60283892E12, 9.745762711864408], [1.60283844E12, 10.0], [1.60283862E12, 10.0], [1.60283856E12, 10.0], [1.60283874E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283892E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 387.0, "minX": 1.0, "maxY": 5752.0, "series": [{"data": [[8.0, 820.0], [4.0, 1649.0], [2.0, 3095.0], [1.0, 5752.0], [9.0, 1240.0], [10.0, 1016.804284887086], [5.0, 437.0], [6.0, 663.0], [3.0, 387.0], [7.0, 5296.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1018.7672447013474]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1328.95, "minX": 1.60283838E12, "maxY": 3899070.433333333, "series": [{"data": [[1.60283838E12, 1403875.0666666667], [1.60283868E12, 3160245.05], [1.60283886E12, 3206512.216666667], [1.6028385E12, 3336603.85], [1.6028388E12, 3899070.433333333], [1.60283892E12, 937192.15], [1.60283844E12, 2566070.75], [1.60283862E12, 3026665.6166666667], [1.60283856E12, 3649736.216666667], [1.60283874E12, 2394978.816666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60283838E12, 1360.8], [1.60283868E12, 3972.8333333333335], [1.60283886E12, 4747.65], [1.6028385E12, 5036.5], [1.6028388E12, 5040.566666666667], [1.60283892E12, 1328.95], [1.60283844E12, 3786.766666666667], [1.60283862E12, 4227.816666666667], [1.60283856E12, 4712.283333333334], [1.60283874E12, 4363.166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283892E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 887.7098674521347, "minX": 1.60283838E12, "maxY": 1491.0564971751407, "series": [{"data": [[1.60283838E12, 1198.4565217391303], [1.60283868E12, 1059.3170289855063], [1.60283886E12, 950.7827476038335], [1.6028385E12, 887.7098674521347], [1.6028388E12, 900.9533132530132], [1.60283892E12, 1491.0564971751407], [1.60283844E12, 1163.3396584440222], [1.60283862E12, 1072.4866310160428], [1.60283856E12, 956.5483870967746], [1.60283874E12, 1023.7383333333331]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283892E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 885.3048600883662, "minX": 1.60283838E12, "maxY": 1489.1073446327691, "series": [{"data": [[1.60283838E12, 1194.8695652173908], [1.60283868E12, 1057.1159420289873], [1.60283886E12, 949.0543130990416], [1.6028385E12, 885.3048600883662], [1.6028388E12, 898.9096385542172], [1.60283892E12, 1489.1073446327691], [1.60283844E12, 1160.8899430740041], [1.60283862E12, 1070.1800356506235], [1.60283856E12, 953.5645161290322], [1.60283874E12, 1022.5416666666662]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283892E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60283838E12, "maxY": 0.5652173913043478, "series": [{"data": [[1.60283838E12, 0.5652173913043478], [1.60283868E12, 0.014492753623188415], [1.60283886E12, 0.012779552715654962], [1.6028385E12, 0.01620029455081001], [1.6028388E12, 0.019578313253012066], [1.60283892E12, 0.0], [1.60283844E12, 0.01897533206831121], [1.60283862E12, 0.016042780748663103], [1.60283856E12, 0.011290322580645164], [1.60283874E12, 0.013333333333333327]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283892E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 214.0, "minX": 1.60283838E12, "maxY": 18140.0, "series": [{"data": [[1.60283838E12, 5123.0], [1.60283868E12, 15202.0], [1.60283886E12, 7556.0], [1.6028385E12, 12809.0], [1.6028388E12, 8381.0], [1.60283892E12, 9338.0], [1.60283844E12, 14527.0], [1.60283862E12, 13963.0], [1.60283856E12, 6833.0], [1.60283874E12, 18140.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60283838E12, 235.97999947071077], [1.60283868E12, 237.0], [1.60283886E12, 231.0], [1.6028385E12, 225.11999983787535], [1.6028388E12, 233.0], [1.60283892E12, 299.6719984722138], [1.60283844E12, 231.25599962234497], [1.60283862E12, 226.05799986600877], [1.60283856E12, 227.0], [1.60283874E12, 232.40899985671044]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60283838E12, 237.9780002117157], [1.60283868E12, 237.4747000527382], [1.60283886E12, 231.0], [1.6028385E12, 225.73200006484984], [1.6028388E12, 233.58350006341934], [1.60283892E12, 305.43920061111453], [1.60283844E12, 232.454400100708], [1.60283862E12, 226.5638000535965], [1.60283856E12, 227.14790005922316], [1.60283874E12, 232.94990005731583]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60283838E12, 237.08999973535538], [1.60283868E12, 237.25349993407727], [1.60283886E12, 231.0], [1.6028385E12, 225.45999991893768], [1.6028388E12, 233.31749992072582], [1.60283892E12, 302.87599923610685], [1.60283844E12, 232.031999874115], [1.60283862E12, 226.33899993300437], [1.60283856E12, 227.0], [1.60283874E12, 232.70949992835523]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60283838E12, 228.0], [1.60283868E12, 227.0], [1.60283886E12, 224.0], [1.6028385E12, 214.0], [1.6028388E12, 228.0], [1.60283892E12, 278.0], [1.60283844E12, 218.0], [1.60283862E12, 221.0], [1.60283856E12, 223.0], [1.60283874E12, 226.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60283838E12, 752.0], [1.60283868E12, 727.5], [1.60283886E12, 589.0], [1.6028385E12, 501.0], [1.6028388E12, 493.0], [1.60283892E12, 1070.0], [1.60283844E12, 755.0], [1.60283862E12, 573.0], [1.60283856E12, 551.5], [1.60283874E12, 586.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283892E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 293.5, "minX": 1.0, "maxY": 2674.0, "series": [{"data": [[2.0, 1116.5], [3.0, 1135.0], [4.0, 1456.0], [5.0, 1223.0], [6.0, 949.0], [7.0, 895.0], [8.0, 833.5], [9.0, 745.0], [10.0, 679.5], [11.0, 686.0], [12.0, 595.0], [13.0, 495.5], [14.0, 545.5], [15.0, 495.5], [1.0, 2674.0], [16.0, 510.5], [17.0, 423.0], [18.0, 389.0], [19.0, 387.5], [20.0, 347.0], [21.0, 366.0], [22.0, 336.0], [23.0, 340.0], [24.0, 335.5], [25.0, 318.0], [26.0, 334.0], [27.0, 293.5], [28.0, 344.5], [29.0, 315.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 293.5, "minX": 1.0, "maxY": 2667.0, "series": [{"data": [[2.0, 1114.5], [3.0, 1134.0], [4.0, 1454.5], [5.0, 1221.0], [6.0, 946.5], [7.0, 887.0], [8.0, 826.0], [9.0, 743.0], [10.0, 677.5], [11.0, 686.0], [12.0, 595.0], [13.0, 495.5], [14.0, 545.5], [15.0, 495.5], [1.0, 2667.0], [16.0, 510.5], [17.0, 423.0], [18.0, 388.5], [19.0, 387.5], [20.0, 347.0], [21.0, 366.0], [22.0, 336.0], [23.0, 339.0], [24.0, 335.5], [25.0, 318.0], [26.0, 334.0], [27.0, 293.5], [28.0, 344.5], [29.0, 315.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.783333333333333, "minX": 1.60283838E12, "maxY": 11.316666666666666, "series": [{"data": [[1.60283838E12, 3.2333333333333334], [1.60283868E12, 9.2], [1.60283886E12, 10.433333333333334], [1.6028385E12, 11.316666666666666], [1.6028388E12, 11.066666666666666], [1.60283892E12, 2.783333333333333], [1.60283844E12, 8.783333333333333], [1.60283862E12, 9.35], [1.60283856E12, 10.333333333333334], [1.60283874E12, 10.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283892E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.60283838E12, "maxY": 11.316666666666666, "series": [{"data": [[1.60283838E12, 3.066666666666667], [1.60283868E12, 9.2], [1.60283886E12, 10.433333333333334], [1.6028385E12, 11.316666666666666], [1.6028388E12, 11.066666666666666], [1.60283892E12, 2.95], [1.60283844E12, 8.783333333333333], [1.60283862E12, 9.35], [1.60283856E12, 10.333333333333334], [1.60283874E12, 10.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60283892E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.60283838E12, "maxY": 11.316666666666666, "series": [{"data": [[1.60283838E12, 3.066666666666667], [1.60283868E12, 9.2], [1.60283886E12, 10.433333333333334], [1.6028385E12, 11.316666666666666], [1.6028388E12, 11.066666666666666], [1.60283892E12, 2.95], [1.60283844E12, 8.783333333333333], [1.60283862E12, 9.35], [1.60283856E12, 10.333333333333334], [1.60283874E12, 10.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283892E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.95, "minX": 1.60283838E12, "maxY": 11.316666666666666, "series": [{"data": [[1.60283838E12, 3.066666666666667], [1.60283868E12, 9.2], [1.60283886E12, 10.433333333333334], [1.6028385E12, 11.316666666666666], [1.6028388E12, 11.066666666666666], [1.60283892E12, 2.95], [1.60283844E12, 8.783333333333333], [1.60283862E12, 9.35], [1.60283856E12, 10.333333333333334], [1.60283874E12, 10.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60283892E12, "title": "Total Transactions Per Second"}},
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

