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
        data: {"result": {"minY": 221.0, "minX": 0.0, "maxY": 18832.0, "series": [{"data": [[0.0, 221.0], [0.1, 224.0], [0.2, 225.0], [0.3, 226.0], [0.4, 227.0], [0.5, 229.0], [0.6, 230.0], [0.7, 230.0], [0.8, 231.0], [0.9, 232.0], [1.0, 232.0], [1.1, 233.0], [1.2, 234.0], [1.3, 235.0], [1.4, 235.0], [1.5, 236.0], [1.6, 236.0], [1.7, 237.0], [1.8, 238.0], [1.9, 238.0], [2.0, 238.0], [2.1, 239.0], [2.2, 239.0], [2.3, 240.0], [2.4, 241.0], [2.5, 241.0], [2.6, 241.0], [2.7, 242.0], [2.8, 243.0], [2.9, 243.0], [3.0, 244.0], [3.1, 245.0], [3.2, 246.0], [3.3, 246.0], [3.4, 246.0], [3.5, 247.0], [3.6, 247.0], [3.7, 248.0], [3.8, 249.0], [3.9, 250.0], [4.0, 251.0], [4.1, 251.0], [4.2, 252.0], [4.3, 252.0], [4.4, 253.0], [4.5, 253.0], [4.6, 254.0], [4.7, 255.0], [4.8, 255.0], [4.9, 256.0], [5.0, 257.0], [5.1, 258.0], [5.2, 259.0], [5.3, 260.0], [5.4, 261.0], [5.5, 261.0], [5.6, 262.0], [5.7, 263.0], [5.8, 264.0], [5.9, 265.0], [6.0, 265.0], [6.1, 266.0], [6.2, 267.0], [6.3, 268.0], [6.4, 269.0], [6.5, 270.0], [6.6, 270.0], [6.7, 271.0], [6.8, 272.0], [6.9, 273.0], [7.0, 274.0], [7.1, 275.0], [7.2, 276.0], [7.3, 276.0], [7.4, 277.0], [7.5, 277.0], [7.6, 278.0], [7.7, 279.0], [7.8, 279.0], [7.9, 280.0], [8.0, 280.0], [8.1, 281.0], [8.2, 281.0], [8.3, 283.0], [8.4, 284.0], [8.5, 284.0], [8.6, 285.0], [8.7, 286.0], [8.8, 287.0], [8.9, 287.0], [9.0, 288.0], [9.1, 288.0], [9.2, 290.0], [9.3, 290.0], [9.4, 291.0], [9.5, 292.0], [9.6, 293.0], [9.7, 294.0], [9.8, 295.0], [9.9, 295.0], [10.0, 296.0], [10.1, 297.0], [10.2, 298.0], [10.3, 299.0], [10.4, 299.0], [10.5, 301.0], [10.6, 301.0], [10.7, 302.0], [10.8, 302.0], [10.9, 302.0], [11.0, 303.0], [11.1, 303.0], [11.2, 304.0], [11.3, 304.0], [11.4, 304.0], [11.5, 305.0], [11.6, 306.0], [11.7, 306.0], [11.8, 306.0], [11.9, 307.0], [12.0, 308.0], [12.1, 308.0], [12.2, 309.0], [12.3, 309.0], [12.4, 310.0], [12.5, 310.0], [12.6, 310.0], [12.7, 311.0], [12.8, 312.0], [12.9, 312.0], [13.0, 313.0], [13.1, 313.0], [13.2, 313.0], [13.3, 314.0], [13.4, 315.0], [13.5, 315.0], [13.6, 315.0], [13.7, 316.0], [13.8, 317.0], [13.9, 317.0], [14.0, 318.0], [14.1, 319.0], [14.2, 319.0], [14.3, 319.0], [14.4, 320.0], [14.5, 320.0], [14.6, 321.0], [14.7, 322.0], [14.8, 323.0], [14.9, 324.0], [15.0, 324.0], [15.1, 325.0], [15.2, 325.0], [15.3, 326.0], [15.4, 326.0], [15.5, 327.0], [15.6, 327.0], [15.7, 328.0], [15.8, 328.0], [15.9, 329.0], [16.0, 329.0], [16.1, 330.0], [16.2, 330.0], [16.3, 330.0], [16.4, 331.0], [16.5, 332.0], [16.6, 332.0], [16.7, 333.0], [16.8, 333.0], [16.9, 334.0], [17.0, 334.0], [17.1, 334.0], [17.2, 335.0], [17.3, 335.0], [17.4, 336.0], [17.5, 337.0], [17.6, 337.0], [17.7, 337.0], [17.8, 338.0], [17.9, 338.0], [18.0, 339.0], [18.1, 340.0], [18.2, 340.0], [18.3, 340.0], [18.4, 341.0], [18.5, 341.0], [18.6, 342.0], [18.7, 343.0], [18.8, 343.0], [18.9, 344.0], [19.0, 345.0], [19.1, 345.0], [19.2, 346.0], [19.3, 347.0], [19.4, 348.0], [19.5, 349.0], [19.6, 350.0], [19.7, 350.0], [19.8, 350.0], [19.9, 351.0], [20.0, 352.0], [20.1, 352.0], [20.2, 353.0], [20.3, 353.0], [20.4, 354.0], [20.5, 355.0], [20.6, 355.0], [20.7, 356.0], [20.8, 357.0], [20.9, 357.0], [21.0, 358.0], [21.1, 359.0], [21.2, 360.0], [21.3, 360.0], [21.4, 361.0], [21.5, 362.0], [21.6, 363.0], [21.7, 364.0], [21.8, 364.0], [21.9, 365.0], [22.0, 366.0], [22.1, 366.0], [22.2, 367.0], [22.3, 368.0], [22.4, 368.0], [22.5, 369.0], [22.6, 370.0], [22.7, 370.0], [22.8, 371.0], [22.9, 372.0], [23.0, 372.0], [23.1, 373.0], [23.2, 374.0], [23.3, 374.0], [23.4, 375.0], [23.5, 376.0], [23.6, 376.0], [23.7, 377.0], [23.8, 377.0], [23.9, 378.0], [24.0, 378.0], [24.1, 379.0], [24.2, 380.0], [24.3, 380.0], [24.4, 381.0], [24.5, 381.0], [24.6, 382.0], [24.7, 383.0], [24.8, 384.0], [24.9, 384.0], [25.0, 385.0], [25.1, 386.0], [25.2, 386.0], [25.3, 387.0], [25.4, 387.0], [25.5, 388.0], [25.6, 388.0], [25.7, 389.0], [25.8, 389.0], [25.9, 390.0], [26.0, 390.0], [26.1, 391.0], [26.2, 391.0], [26.3, 391.0], [26.4, 392.0], [26.5, 393.0], [26.6, 393.0], [26.7, 394.0], [26.8, 394.0], [26.9, 395.0], [27.0, 395.0], [27.1, 396.0], [27.2, 397.0], [27.3, 398.0], [27.4, 399.0], [27.5, 399.0], [27.6, 401.0], [27.7, 401.0], [27.8, 402.0], [27.9, 404.0], [28.0, 405.0], [28.1, 405.0], [28.2, 406.0], [28.3, 406.0], [28.4, 407.0], [28.5, 408.0], [28.6, 408.0], [28.7, 409.0], [28.8, 410.0], [28.9, 411.0], [29.0, 412.0], [29.1, 412.0], [29.2, 413.0], [29.3, 413.0], [29.4, 414.0], [29.5, 414.0], [29.6, 414.0], [29.7, 415.0], [29.8, 416.0], [29.9, 416.0], [30.0, 416.0], [30.1, 417.0], [30.2, 418.0], [30.3, 419.0], [30.4, 419.0], [30.5, 420.0], [30.6, 421.0], [30.7, 421.0], [30.8, 421.0], [30.9, 422.0], [31.0, 423.0], [31.1, 423.0], [31.2, 423.0], [31.3, 424.0], [31.4, 425.0], [31.5, 426.0], [31.6, 426.0], [31.7, 427.0], [31.8, 427.0], [31.9, 428.0], [32.0, 429.0], [32.1, 429.0], [32.2, 431.0], [32.3, 433.0], [32.4, 433.0], [32.5, 434.0], [32.6, 434.0], [32.7, 435.0], [32.8, 436.0], [32.9, 437.0], [33.0, 437.0], [33.1, 438.0], [33.2, 439.0], [33.3, 439.0], [33.4, 440.0], [33.5, 441.0], [33.6, 442.0], [33.7, 442.0], [33.8, 443.0], [33.9, 444.0], [34.0, 445.0], [34.1, 446.0], [34.2, 447.0], [34.3, 448.0], [34.4, 448.0], [34.5, 449.0], [34.6, 450.0], [34.7, 451.0], [34.8, 452.0], [34.9, 452.0], [35.0, 454.0], [35.1, 454.0], [35.2, 456.0], [35.3, 456.0], [35.4, 457.0], [35.5, 457.0], [35.6, 458.0], [35.7, 459.0], [35.8, 460.0], [35.9, 460.0], [36.0, 461.0], [36.1, 463.0], [36.2, 463.0], [36.3, 464.0], [36.4, 465.0], [36.5, 466.0], [36.6, 468.0], [36.7, 468.0], [36.8, 469.0], [36.9, 470.0], [37.0, 471.0], [37.1, 472.0], [37.2, 472.0], [37.3, 474.0], [37.4, 475.0], [37.5, 475.0], [37.6, 476.0], [37.7, 477.0], [37.8, 477.0], [37.9, 478.0], [38.0, 479.0], [38.1, 480.0], [38.2, 480.0], [38.3, 481.0], [38.4, 483.0], [38.5, 484.0], [38.6, 485.0], [38.7, 486.0], [38.8, 487.0], [38.9, 487.0], [39.0, 488.0], [39.1, 489.0], [39.2, 489.0], [39.3, 490.0], [39.4, 491.0], [39.5, 492.0], [39.6, 493.0], [39.7, 494.0], [39.8, 494.0], [39.9, 495.0], [40.0, 496.0], [40.1, 496.0], [40.2, 497.0], [40.3, 497.0], [40.4, 498.0], [40.5, 500.0], [40.6, 501.0], [40.7, 501.0], [40.8, 502.0], [40.9, 502.0], [41.0, 503.0], [41.1, 505.0], [41.2, 506.0], [41.3, 507.0], [41.4, 507.0], [41.5, 507.0], [41.6, 509.0], [41.7, 509.0], [41.8, 510.0], [41.9, 510.0], [42.0, 511.0], [42.1, 512.0], [42.2, 513.0], [42.3, 514.0], [42.4, 515.0], [42.5, 516.0], [42.6, 516.0], [42.7, 518.0], [42.8, 520.0], [42.9, 521.0], [43.0, 522.0], [43.1, 523.0], [43.2, 525.0], [43.3, 526.0], [43.4, 527.0], [43.5, 528.0], [43.6, 528.0], [43.7, 530.0], [43.8, 531.0], [43.9, 532.0], [44.0, 533.0], [44.1, 534.0], [44.2, 535.0], [44.3, 536.0], [44.4, 536.0], [44.5, 538.0], [44.6, 539.0], [44.7, 539.0], [44.8, 541.0], [44.9, 541.0], [45.0, 542.0], [45.1, 543.0], [45.2, 544.0], [45.3, 545.0], [45.4, 545.0], [45.5, 546.0], [45.6, 547.0], [45.7, 548.0], [45.8, 550.0], [45.9, 551.0], [46.0, 553.0], [46.1, 553.0], [46.2, 554.0], [46.3, 555.0], [46.4, 557.0], [46.5, 557.0], [46.6, 558.0], [46.7, 559.0], [46.8, 560.0], [46.9, 563.0], [47.0, 564.0], [47.1, 564.0], [47.2, 566.0], [47.3, 567.0], [47.4, 569.0], [47.5, 571.0], [47.6, 571.0], [47.7, 572.0], [47.8, 573.0], [47.9, 575.0], [48.0, 576.0], [48.1, 577.0], [48.2, 579.0], [48.3, 581.0], [48.4, 582.0], [48.5, 583.0], [48.6, 584.0], [48.7, 588.0], [48.8, 589.0], [48.9, 591.0], [49.0, 592.0], [49.1, 593.0], [49.2, 593.0], [49.3, 594.0], [49.4, 595.0], [49.5, 596.0], [49.6, 597.0], [49.7, 599.0], [49.8, 600.0], [49.9, 602.0], [50.0, 604.0], [50.1, 604.0], [50.2, 604.0], [50.3, 607.0], [50.4, 607.0], [50.5, 609.0], [50.6, 610.0], [50.7, 610.0], [50.8, 611.0], [50.9, 612.0], [51.0, 613.0], [51.1, 614.0], [51.2, 616.0], [51.3, 617.0], [51.4, 618.0], [51.5, 619.0], [51.6, 621.0], [51.7, 622.0], [51.8, 624.0], [51.9, 625.0], [52.0, 628.0], [52.1, 628.0], [52.2, 631.0], [52.3, 632.0], [52.4, 634.0], [52.5, 635.0], [52.6, 637.0], [52.7, 639.0], [52.8, 639.0], [52.9, 641.0], [53.0, 643.0], [53.1, 645.0], [53.2, 646.0], [53.3, 648.0], [53.4, 650.0], [53.5, 650.0], [53.6, 652.0], [53.7, 653.0], [53.8, 653.0], [53.9, 654.0], [54.0, 655.0], [54.1, 657.0], [54.2, 658.0], [54.3, 659.0], [54.4, 660.0], [54.5, 661.0], [54.6, 663.0], [54.7, 664.0], [54.8, 665.0], [54.9, 666.0], [55.0, 668.0], [55.1, 670.0], [55.2, 672.0], [55.3, 673.0], [55.4, 674.0], [55.5, 676.0], [55.6, 678.0], [55.7, 679.0], [55.8, 681.0], [55.9, 683.0], [56.0, 685.0], [56.1, 686.0], [56.2, 687.0], [56.3, 689.0], [56.4, 690.0], [56.5, 692.0], [56.6, 694.0], [56.7, 695.0], [56.8, 696.0], [56.9, 699.0], [57.0, 701.0], [57.1, 701.0], [57.2, 702.0], [57.3, 703.0], [57.4, 705.0], [57.5, 707.0], [57.6, 709.0], [57.7, 711.0], [57.8, 712.0], [57.9, 714.0], [58.0, 716.0], [58.1, 718.0], [58.2, 721.0], [58.3, 723.0], [58.4, 724.0], [58.5, 725.0], [58.6, 726.0], [58.7, 728.0], [58.8, 729.0], [58.9, 730.0], [59.0, 732.0], [59.1, 734.0], [59.2, 736.0], [59.3, 737.0], [59.4, 739.0], [59.5, 742.0], [59.6, 743.0], [59.7, 744.0], [59.8, 745.0], [59.9, 747.0], [60.0, 749.0], [60.1, 750.0], [60.2, 751.0], [60.3, 752.0], [60.4, 754.0], [60.5, 756.0], [60.6, 758.0], [60.7, 761.0], [60.8, 763.0], [60.9, 764.0], [61.0, 766.0], [61.1, 768.0], [61.2, 769.0], [61.3, 771.0], [61.4, 772.0], [61.5, 774.0], [61.6, 776.0], [61.7, 777.0], [61.8, 781.0], [61.9, 783.0], [62.0, 785.0], [62.1, 787.0], [62.2, 790.0], [62.3, 792.0], [62.4, 793.0], [62.5, 795.0], [62.6, 797.0], [62.7, 799.0], [62.8, 801.0], [62.9, 804.0], [63.0, 807.0], [63.1, 809.0], [63.2, 811.0], [63.3, 813.0], [63.4, 815.0], [63.5, 816.0], [63.6, 816.0], [63.7, 817.0], [63.8, 818.0], [63.9, 820.0], [64.0, 821.0], [64.1, 823.0], [64.2, 824.0], [64.3, 826.0], [64.4, 831.0], [64.5, 833.0], [64.6, 834.0], [64.7, 836.0], [64.8, 839.0], [64.9, 841.0], [65.0, 844.0], [65.1, 844.0], [65.2, 849.0], [65.3, 852.0], [65.4, 854.0], [65.5, 856.0], [65.6, 857.0], [65.7, 859.0], [65.8, 861.0], [65.9, 864.0], [66.0, 866.0], [66.1, 869.0], [66.2, 874.0], [66.3, 877.0], [66.4, 879.0], [66.5, 880.0], [66.6, 882.0], [66.7, 884.0], [66.8, 886.0], [66.9, 887.0], [67.0, 890.0], [67.1, 892.0], [67.2, 896.0], [67.3, 898.0], [67.4, 901.0], [67.5, 903.0], [67.6, 905.0], [67.7, 907.0], [67.8, 908.0], [67.9, 911.0], [68.0, 915.0], [68.1, 917.0], [68.2, 919.0], [68.3, 919.0], [68.4, 923.0], [68.5, 925.0], [68.6, 927.0], [68.7, 930.0], [68.8, 932.0], [68.9, 934.0], [69.0, 938.0], [69.1, 940.0], [69.2, 942.0], [69.3, 943.0], [69.4, 945.0], [69.5, 947.0], [69.6, 951.0], [69.7, 953.0], [69.8, 954.0], [69.9, 956.0], [70.0, 957.0], [70.1, 959.0], [70.2, 962.0], [70.3, 963.0], [70.4, 964.0], [70.5, 966.0], [70.6, 971.0], [70.7, 974.0], [70.8, 979.0], [70.9, 983.0], [71.0, 988.0], [71.1, 993.0], [71.2, 998.0], [71.3, 1001.0], [71.4, 1003.0], [71.5, 1008.0], [71.6, 1011.0], [71.7, 1013.0], [71.8, 1016.0], [71.9, 1018.0], [72.0, 1021.0], [72.1, 1024.0], [72.2, 1027.0], [72.3, 1030.0], [72.4, 1034.0], [72.5, 1036.0], [72.6, 1040.0], [72.7, 1041.0], [72.8, 1047.0], [72.9, 1049.0], [73.0, 1051.0], [73.1, 1054.0], [73.2, 1059.0], [73.3, 1060.0], [73.4, 1065.0], [73.5, 1068.0], [73.6, 1071.0], [73.7, 1073.0], [73.8, 1074.0], [73.9, 1076.0], [74.0, 1079.0], [74.1, 1081.0], [74.2, 1083.0], [74.3, 1087.0], [74.4, 1090.0], [74.5, 1095.0], [74.6, 1100.0], [74.7, 1103.0], [74.8, 1108.0], [74.9, 1112.0], [75.0, 1118.0], [75.1, 1122.0], [75.2, 1127.0], [75.3, 1133.0], [75.4, 1135.0], [75.5, 1138.0], [75.6, 1140.0], [75.7, 1143.0], [75.8, 1146.0], [75.9, 1150.0], [76.0, 1155.0], [76.1, 1164.0], [76.2, 1169.0], [76.3, 1176.0], [76.4, 1185.0], [76.5, 1188.0], [76.6, 1198.0], [76.7, 1204.0], [76.8, 1208.0], [76.9, 1212.0], [77.0, 1218.0], [77.1, 1222.0], [77.2, 1224.0], [77.3, 1227.0], [77.4, 1232.0], [77.5, 1236.0], [77.6, 1247.0], [77.7, 1251.0], [77.8, 1254.0], [77.9, 1259.0], [78.0, 1266.0], [78.1, 1269.0], [78.2, 1272.0], [78.3, 1278.0], [78.4, 1284.0], [78.5, 1290.0], [78.6, 1293.0], [78.7, 1296.0], [78.8, 1304.0], [78.9, 1317.0], [79.0, 1324.0], [79.1, 1331.0], [79.2, 1339.0], [79.3, 1342.0], [79.4, 1350.0], [79.5, 1355.0], [79.6, 1358.0], [79.7, 1371.0], [79.8, 1384.0], [79.9, 1389.0], [80.0, 1394.0], [80.1, 1398.0], [80.2, 1409.0], [80.3, 1413.0], [80.4, 1419.0], [80.5, 1428.0], [80.6, 1445.0], [80.7, 1450.0], [80.8, 1457.0], [80.9, 1464.0], [81.0, 1467.0], [81.1, 1479.0], [81.2, 1486.0], [81.3, 1494.0], [81.4, 1504.0], [81.5, 1510.0], [81.6, 1526.0], [81.7, 1536.0], [81.8, 1542.0], [81.9, 1547.0], [82.0, 1560.0], [82.1, 1568.0], [82.2, 1582.0], [82.3, 1593.0], [82.4, 1606.0], [82.5, 1615.0], [82.6, 1617.0], [82.7, 1627.0], [82.8, 1634.0], [82.9, 1646.0], [83.0, 1651.0], [83.1, 1660.0], [83.2, 1671.0], [83.3, 1675.0], [83.4, 1682.0], [83.5, 1686.0], [83.6, 1692.0], [83.7, 1702.0], [83.8, 1718.0], [83.9, 1725.0], [84.0, 1732.0], [84.1, 1739.0], [84.2, 1747.0], [84.3, 1757.0], [84.4, 1772.0], [84.5, 1778.0], [84.6, 1789.0], [84.7, 1796.0], [84.8, 1809.0], [84.9, 1822.0], [85.0, 1831.0], [85.1, 1838.0], [85.2, 1844.0], [85.3, 1852.0], [85.4, 1865.0], [85.5, 1874.0], [85.6, 1886.0], [85.7, 1893.0], [85.8, 1904.0], [85.9, 1914.0], [86.0, 1926.0], [86.1, 1933.0], [86.2, 1947.0], [86.3, 1950.0], [86.4, 1959.0], [86.5, 1976.0], [86.6, 1988.0], [86.7, 1996.0], [86.8, 2015.0], [86.9, 2040.0], [87.0, 2052.0], [87.1, 2066.0], [87.2, 2080.0], [87.3, 2087.0], [87.4, 2099.0], [87.5, 2106.0], [87.6, 2109.0], [87.7, 2113.0], [87.8, 2117.0], [87.9, 2126.0], [88.0, 2131.0], [88.1, 2137.0], [88.2, 2148.0], [88.3, 2158.0], [88.4, 2162.0], [88.5, 2173.0], [88.6, 2175.0], [88.7, 2180.0], [88.8, 2193.0], [88.9, 2203.0], [89.0, 2216.0], [89.1, 2222.0], [89.2, 2236.0], [89.3, 2249.0], [89.4, 2256.0], [89.5, 2265.0], [89.6, 2266.0], [89.7, 2277.0], [89.8, 2283.0], [89.9, 2291.0], [90.0, 2301.0], [90.1, 2309.0], [90.2, 2318.0], [90.3, 2323.0], [90.4, 2332.0], [90.5, 2337.0], [90.6, 2347.0], [90.7, 2351.0], [90.8, 2358.0], [90.9, 2370.0], [91.0, 2378.0], [91.1, 2385.0], [91.2, 2392.0], [91.3, 2404.0], [91.4, 2411.0], [91.5, 2421.0], [91.6, 2425.0], [91.7, 2433.0], [91.8, 2438.0], [91.9, 2445.0], [92.0, 2454.0], [92.1, 2461.0], [92.2, 2471.0], [92.3, 2480.0], [92.4, 2487.0], [92.5, 2502.0], [92.6, 2508.0], [92.7, 2518.0], [92.8, 2529.0], [92.9, 2539.0], [93.0, 2550.0], [93.1, 2554.0], [93.2, 2561.0], [93.3, 2565.0], [93.4, 2579.0], [93.5, 2590.0], [93.6, 2601.0], [93.7, 2620.0], [93.8, 2643.0], [93.9, 2649.0], [94.0, 2656.0], [94.1, 2664.0], [94.2, 2676.0], [94.3, 2697.0], [94.4, 2713.0], [94.5, 2723.0], [94.6, 2737.0], [94.7, 2746.0], [94.8, 2763.0], [94.9, 2804.0], [95.0, 2826.0], [95.1, 2855.0], [95.2, 2882.0], [95.3, 2921.0], [95.4, 2943.0], [95.5, 2955.0], [95.6, 2999.0], [95.7, 3024.0], [95.8, 3059.0], [95.9, 3119.0], [96.0, 3144.0], [96.1, 3180.0], [96.2, 3192.0], [96.3, 3212.0], [96.4, 3255.0], [96.5, 3281.0], [96.6, 3312.0], [96.7, 3355.0], [96.8, 3377.0], [96.9, 3458.0], [97.0, 3491.0], [97.1, 3549.0], [97.2, 3600.0], [97.3, 3701.0], [97.4, 3780.0], [97.5, 3852.0], [97.6, 3917.0], [97.7, 4013.0], [97.8, 4124.0], [97.9, 4335.0], [98.0, 4494.0], [98.1, 4546.0], [98.2, 4668.0], [98.3, 4775.0], [98.4, 4856.0], [98.5, 5019.0], [98.6, 5083.0], [98.7, 5155.0], [98.8, 5309.0], [98.9, 5462.0], [99.0, 5533.0], [99.1, 5741.0], [99.2, 6011.0], [99.3, 6203.0], [99.4, 6365.0], [99.5, 6776.0], [99.6, 7682.0], [99.7, 8366.0], [99.8, 10184.0], [99.9, 12667.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 888.0, "series": [{"data": [[600.0, 373.0], [700.0, 301.0], [800.0, 240.0], [900.0, 202.0], [1000.0, 173.0], [1100.0, 106.0], [1200.0, 110.0], [1300.0, 71.0], [1400.0, 64.0], [1500.0, 51.0], [1600.0, 70.0], [1700.0, 53.0], [1800.0, 56.0], [1900.0, 49.0], [2000.0, 36.0], [2100.0, 74.0], [2200.0, 57.0], [2300.0, 70.0], [2400.0, 62.0], [2500.0, 56.0], [2600.0, 39.0], [2700.0, 30.0], [2800.0, 18.0], [2900.0, 19.0], [3000.0, 12.0], [3100.0, 21.0], [3200.0, 17.0], [3300.0, 14.0], [3400.0, 9.0], [3500.0, 9.0], [3700.0, 8.0], [3600.0, 5.0], [3800.0, 7.0], [3900.0, 6.0], [4000.0, 5.0], [4200.0, 3.0], [4300.0, 4.0], [4100.0, 2.0], [4500.0, 7.0], [4400.0, 3.0], [4600.0, 5.0], [4800.0, 6.0], [4700.0, 4.0], [5000.0, 7.0], [5100.0, 4.0], [4900.0, 3.0], [5200.0, 4.0], [5300.0, 4.0], [5500.0, 8.0], [5400.0, 2.0], [5600.0, 1.0], [5700.0, 3.0], [5800.0, 2.0], [6000.0, 4.0], [6100.0, 1.0], [6300.0, 4.0], [6200.0, 3.0], [6400.0, 2.0], [6500.0, 1.0], [6700.0, 3.0], [6900.0, 2.0], [7000.0, 1.0], [7200.0, 1.0], [7600.0, 1.0], [7700.0, 1.0], [8000.0, 1.0], [8200.0, 2.0], [8300.0, 1.0], [8600.0, 1.0], [8500.0, 1.0], [9200.0, 1.0], [9300.0, 1.0], [10100.0, 1.0], [10300.0, 1.0], [10800.0, 1.0], [11000.0, 1.0], [11400.0, 1.0], [12600.0, 1.0], [13100.0, 1.0], [12800.0, 1.0], [13500.0, 1.0], [14000.0, 1.0], [18800.0, 1.0], [200.0, 540.0], [300.0, 888.0], [400.0, 673.0], [500.0, 481.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 967.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2117.0, "series": [{"data": [[0.0, 2106.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2117.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 967.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.822134387351776, "minX": 1.60386888E12, "maxY": 10.0, "series": [{"data": [[1.60386918E12, 10.0], [1.603869E12, 10.0], [1.6038693E12, 10.0], [1.60386912E12, 10.0], [1.60386942E12, 9.822134387351776], [1.60386894E12, 10.0], [1.60386924E12, 10.0], [1.60386906E12, 10.0], [1.60386936E12, 10.0], [1.60386888E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386942E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 359.0, "minX": 1.0, "maxY": 5732.0, "series": [{"data": [[8.0, 423.0], [4.0, 5267.0], [2.0, 3374.0], [1.0, 5732.0], [9.0, 565.0], [10.0, 1001.8859293572689], [5.0, 1533.0], [6.0, 436.0], [3.0, 1947.0], [7.0, 359.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1003.9319845857439]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 472.46666666666664, "minX": 1.60386888E12, "maxY": 3860634.283333333, "series": [{"data": [[1.60386918E12, 3194943.7666666666], [1.603869E12, 2571851.3666666667], [1.6038693E12, 3860634.283333333], [1.60386912E12, 3381563.5], [1.60386942E12, 1561923.1], [1.60386894E12, 3248779.216666667], [1.60386924E12, 2309773.85], [1.60386906E12, 3826749.033333333], [1.60386936E12, 3225925.533333333], [1.60386888E12, 397997.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386918E12, 3849.2166666666667], [1.603869E12, 4205.733333333334], [1.6038693E12, 4815.366666666667], [1.60386912E12, 4788.15], [1.60386942E12, 1903.2666666666667], [1.60386894E12, 4120.766666666666], [1.60386924E12, 4309.383333333333], [1.60386906E12, 4860.833333333333], [1.60386936E12, 5252.15], [1.60386888E12, 472.46666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386942E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 850.5086705202315, "minX": 1.60386888E12, "maxY": 1423.2134387351773, "series": [{"data": [[1.60386918E12, 1114.561205273069], [1.603869E12, 1061.2268760907502], [1.6038693E12, 935.5410852713183], [1.60386912E12, 943.2527646129539], [1.60386942E12, 1423.2134387351773], [1.60386894E12, 1031.01048951049], [1.60386924E12, 1032.3424190800686], [1.60386906E12, 934.7881619937691], [1.60386936E12, 850.5086705202315], [1.60386888E12, 1056.5645161290327]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386942E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 848.752890173411, "minX": 1.60386888E12, "maxY": 1420.6324110671926, "series": [{"data": [[1.60386918E12, 1112.192090395479], [1.603869E12, 1058.5183246073298], [1.6038693E12, 933.1674418604644], [1.60386912E12, 941.1437598736172], [1.60386942E12, 1420.6324110671926], [1.60386894E12, 1028.4353146853148], [1.60386924E12, 1030.7086882453136], [1.60386906E12, 932.09968847352], [1.60386936E12, 848.752890173411], [1.60386888E12, 1052.967741935484]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386942E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008670520231213858, "minX": 1.60386888E12, "maxY": 1.2903225806451615, "series": [{"data": [[1.60386918E12, 0.016949152542372885], [1.603869E12, 0.045375218150087264], [1.6038693E12, 0.012403100775193786], [1.60386912E12, 0.12006319115323859], [1.60386942E12, 0.09486166007905147], [1.60386894E12, 0.01923076923076923], [1.60386924E12, 0.011925042589437834], [1.60386906E12, 0.012461059190031158], [1.60386936E12, 0.008670520231213858], [1.60386888E12, 1.2903225806451615]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386942E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 221.0, "minX": 1.60386888E12, "maxY": 18832.0, "series": [{"data": [[1.60386918E12, 13578.0], [1.603869E12, 13179.0], [1.6038693E12, 6966.0], [1.60386912E12, 11020.0], [1.60386942E12, 9372.0], [1.60386894E12, 14092.0], [1.60386924E12, 18832.0], [1.60386906E12, 8366.0], [1.60386936E12, 7225.0], [1.60386888E12, 3805.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386918E12, 235.7879998731613], [1.603869E12, 235.4979995894432], [1.6038693E12, 230.0], [1.60386912E12, 226.70599984884262], [1.60386942E12, 243.42999969720842], [1.60386894E12, 230.0], [1.60386924E12, 236.29199985980986], [1.60386906E12, 226.57399969339372], [1.60386936E12, 232.47399966955186], [1.60386888E12, 236.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386918E12, 236.0], [1.603869E12, 237.0478001642227], [1.6038693E12, 230.39540006160735], [1.60386912E12, 227.5532001209259], [1.60386942E12, 244.57300012111665], [1.60386894E12, 230.0], [1.60386924E12, 236.82120005607604], [1.60386906E12, 227.36570006132126], [1.60386936E12, 233.72140013217927], [1.60386888E12, 236.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386918E12, 236.0], [1.603869E12, 236.3589997947216], [1.6038693E12, 230.1369999229908], [1.60386912E12, 227.04599984884263], [1.60386942E12, 244.0649998486042], [1.60386894E12, 230.0], [1.60386924E12, 236.58599992990494], [1.60386906E12, 227.10849992334843], [1.60386936E12, 233.16699983477594], [1.60386888E12, 236.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386918E12, 230.0], [1.603869E12, 230.0], [1.6038693E12, 225.0], [1.60386912E12, 221.0], [1.60386942E12, 242.0], [1.60386894E12, 225.0], [1.60386924E12, 229.0], [1.60386906E12, 223.0], [1.60386936E12, 224.0], [1.60386888E12, 236.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386918E12, 749.0], [1.603869E12, 555.0], [1.6038693E12, 502.0], [1.60386912E12, 571.0], [1.60386942E12, 956.0], [1.60386894E12, 714.0], [1.60386924E12, 583.0], [1.60386906E12, 508.5], [1.60386936E12, 493.0], [1.60386888E12, 641.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386942E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 311.5, "minX": 1.0, "maxY": 4759.0, "series": [{"data": [[2.0, 1145.5], [3.0, 1659.0], [4.0, 1348.5], [5.0, 1092.5], [6.0, 954.5], [7.0, 836.0], [8.0, 832.0], [9.0, 727.0], [10.0, 676.0], [11.0, 593.0], [12.0, 615.5], [13.0, 548.0], [14.0, 618.0], [15.0, 536.5], [16.0, 490.0], [1.0, 4759.0], [17.0, 429.5], [18.0, 349.5], [19.0, 347.0], [20.0, 354.0], [21.0, 329.5], [22.0, 316.0], [23.0, 331.5], [24.0, 311.5], [26.0, 320.5], [27.0, 320.5], [29.0, 313.0], [30.0, 339.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 311.5, "minX": 1.0, "maxY": 4757.5, "series": [{"data": [[2.0, 1144.0], [3.0, 1656.0], [4.0, 1346.5], [5.0, 1090.0], [6.0, 948.5], [7.0, 833.0], [8.0, 829.5], [9.0, 725.0], [10.0, 674.5], [11.0, 592.0], [12.0, 614.0], [13.0, 547.0], [14.0, 617.5], [15.0, 536.5], [16.0, 490.0], [1.0, 4757.5], [17.0, 429.5], [18.0, 348.5], [19.0, 347.0], [20.0, 354.0], [21.0, 329.5], [22.0, 316.0], [23.0, 331.0], [24.0, 311.5], [26.0, 320.5], [27.0, 320.5], [29.0, 313.0], [30.0, 339.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.60386888E12, "maxY": 11.533333333333333, "series": [{"data": [[1.60386918E12, 8.85], [1.603869E12, 9.55], [1.6038693E12, 10.75], [1.60386912E12, 10.55], [1.60386942E12, 4.05], [1.60386894E12, 9.533333333333333], [1.60386924E12, 9.783333333333333], [1.60386906E12, 10.7], [1.60386936E12, 11.533333333333333], [1.60386888E12, 1.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.60386888E12, "maxY": 11.533333333333333, "series": [{"data": [[1.60386918E12, 8.85], [1.603869E12, 9.55], [1.6038693E12, 10.75], [1.60386912E12, 10.55], [1.60386942E12, 4.216666666666667], [1.60386894E12, 9.533333333333333], [1.60386924E12, 9.783333333333333], [1.60386906E12, 10.7], [1.60386936E12, 11.533333333333333], [1.60386888E12, 1.0333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386942E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.60386888E12, "maxY": 11.533333333333333, "series": [{"data": [[1.60386918E12, 8.85], [1.603869E12, 9.55], [1.6038693E12, 10.75], [1.60386912E12, 10.55], [1.60386942E12, 4.216666666666667], [1.60386894E12, 9.533333333333333], [1.60386924E12, 9.783333333333333], [1.60386906E12, 10.7], [1.60386936E12, 11.533333333333333], [1.60386888E12, 1.0333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386942E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.60386888E12, "maxY": 11.533333333333333, "series": [{"data": [[1.60386918E12, 8.85], [1.603869E12, 9.55], [1.6038693E12, 10.75], [1.60386912E12, 10.55], [1.60386942E12, 4.216666666666667], [1.60386894E12, 9.533333333333333], [1.60386924E12, 9.783333333333333], [1.60386906E12, 10.7], [1.60386936E12, 11.533333333333333], [1.60386888E12, 1.0333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386942E12, "title": "Total Transactions Per Second"}},
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

