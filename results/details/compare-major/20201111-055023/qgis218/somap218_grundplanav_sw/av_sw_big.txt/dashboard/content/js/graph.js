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
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 16954.0, "series": [{"data": [[0.0, 216.0], [0.1, 219.0], [0.2, 221.0], [0.3, 223.0], [0.4, 224.0], [0.5, 224.0], [0.6, 225.0], [0.7, 225.0], [0.8, 226.0], [0.9, 227.0], [1.0, 227.0], [1.1, 228.0], [1.2, 229.0], [1.3, 229.0], [1.4, 230.0], [1.5, 230.0], [1.6, 231.0], [1.7, 231.0], [1.8, 231.0], [1.9, 232.0], [2.0, 232.0], [2.1, 232.0], [2.2, 233.0], [2.3, 233.0], [2.4, 233.0], [2.5, 234.0], [2.6, 234.0], [2.7, 235.0], [2.8, 235.0], [2.9, 235.0], [3.0, 236.0], [3.1, 237.0], [3.2, 237.0], [3.3, 237.0], [3.4, 238.0], [3.5, 238.0], [3.6, 238.0], [3.7, 239.0], [3.8, 239.0], [3.9, 240.0], [4.0, 240.0], [4.1, 240.0], [4.2, 241.0], [4.3, 241.0], [4.4, 241.0], [4.5, 242.0], [4.6, 242.0], [4.7, 243.0], [4.8, 243.0], [4.9, 244.0], [5.0, 244.0], [5.1, 244.0], [5.2, 245.0], [5.3, 245.0], [5.4, 246.0], [5.5, 246.0], [5.6, 247.0], [5.7, 247.0], [5.8, 248.0], [5.9, 249.0], [6.0, 249.0], [6.1, 250.0], [6.2, 250.0], [6.3, 251.0], [6.4, 251.0], [6.5, 252.0], [6.6, 252.0], [6.7, 253.0], [6.8, 253.0], [6.9, 254.0], [7.0, 254.0], [7.1, 255.0], [7.2, 256.0], [7.3, 257.0], [7.4, 257.0], [7.5, 258.0], [7.6, 258.0], [7.7, 259.0], [7.8, 259.0], [7.9, 261.0], [8.0, 261.0], [8.1, 262.0], [8.2, 263.0], [8.3, 264.0], [8.4, 264.0], [8.5, 265.0], [8.6, 266.0], [8.7, 267.0], [8.8, 268.0], [8.9, 269.0], [9.0, 270.0], [9.1, 270.0], [9.2, 271.0], [9.3, 272.0], [9.4, 273.0], [9.5, 275.0], [9.6, 275.0], [9.7, 275.0], [9.8, 276.0], [9.9, 276.0], [10.0, 276.0], [10.1, 277.0], [10.2, 278.0], [10.3, 279.0], [10.4, 280.0], [10.5, 281.0], [10.6, 281.0], [10.7, 282.0], [10.8, 282.0], [10.9, 282.0], [11.0, 283.0], [11.1, 284.0], [11.2, 285.0], [11.3, 286.0], [11.4, 286.0], [11.5, 288.0], [11.6, 289.0], [11.7, 290.0], [11.8, 290.0], [11.9, 291.0], [12.0, 291.0], [12.1, 291.0], [12.2, 292.0], [12.3, 292.0], [12.4, 293.0], [12.5, 294.0], [12.6, 294.0], [12.7, 295.0], [12.8, 295.0], [12.9, 296.0], [13.0, 296.0], [13.1, 297.0], [13.2, 297.0], [13.3, 297.0], [13.4, 297.0], [13.5, 298.0], [13.6, 298.0], [13.7, 300.0], [13.8, 300.0], [13.9, 301.0], [14.0, 301.0], [14.1, 301.0], [14.2, 302.0], [14.3, 302.0], [14.4, 302.0], [14.5, 303.0], [14.6, 303.0], [14.7, 303.0], [14.8, 304.0], [14.9, 304.0], [15.0, 305.0], [15.1, 305.0], [15.2, 306.0], [15.3, 307.0], [15.4, 307.0], [15.5, 308.0], [15.6, 308.0], [15.7, 309.0], [15.8, 309.0], [15.9, 310.0], [16.0, 310.0], [16.1, 310.0], [16.2, 311.0], [16.3, 311.0], [16.4, 312.0], [16.5, 313.0], [16.6, 313.0], [16.7, 313.0], [16.8, 314.0], [16.9, 315.0], [17.0, 315.0], [17.1, 316.0], [17.2, 316.0], [17.3, 317.0], [17.4, 317.0], [17.5, 318.0], [17.6, 318.0], [17.7, 319.0], [17.8, 319.0], [17.9, 320.0], [18.0, 320.0], [18.1, 320.0], [18.2, 321.0], [18.3, 321.0], [18.4, 322.0], [18.5, 322.0], [18.6, 323.0], [18.7, 324.0], [18.8, 325.0], [18.9, 325.0], [19.0, 326.0], [19.1, 326.0], [19.2, 326.0], [19.3, 327.0], [19.4, 327.0], [19.5, 328.0], [19.6, 328.0], [19.7, 329.0], [19.8, 330.0], [19.9, 330.0], [20.0, 331.0], [20.1, 332.0], [20.2, 332.0], [20.3, 333.0], [20.4, 333.0], [20.5, 334.0], [20.6, 335.0], [20.7, 337.0], [20.8, 338.0], [20.9, 338.0], [21.0, 339.0], [21.1, 339.0], [21.2, 340.0], [21.3, 340.0], [21.4, 341.0], [21.5, 341.0], [21.6, 342.0], [21.7, 344.0], [21.8, 344.0], [21.9, 344.0], [22.0, 345.0], [22.1, 346.0], [22.2, 346.0], [22.3, 347.0], [22.4, 347.0], [22.5, 348.0], [22.6, 349.0], [22.7, 350.0], [22.8, 350.0], [22.9, 351.0], [23.0, 351.0], [23.1, 352.0], [23.2, 353.0], [23.3, 354.0], [23.4, 354.0], [23.5, 355.0], [23.6, 355.0], [23.7, 355.0], [23.8, 356.0], [23.9, 356.0], [24.0, 357.0], [24.1, 357.0], [24.2, 358.0], [24.3, 359.0], [24.4, 359.0], [24.5, 360.0], [24.6, 361.0], [24.7, 362.0], [24.8, 363.0], [24.9, 363.0], [25.0, 364.0], [25.1, 364.0], [25.2, 365.0], [25.3, 366.0], [25.4, 366.0], [25.5, 367.0], [25.6, 368.0], [25.7, 368.0], [25.8, 369.0], [25.9, 369.0], [26.0, 370.0], [26.1, 370.0], [26.2, 371.0], [26.3, 372.0], [26.4, 372.0], [26.5, 373.0], [26.6, 374.0], [26.7, 375.0], [26.8, 375.0], [26.9, 376.0], [27.0, 377.0], [27.1, 377.0], [27.2, 378.0], [27.3, 379.0], [27.4, 379.0], [27.5, 380.0], [27.6, 380.0], [27.7, 381.0], [27.8, 381.0], [27.9, 382.0], [28.0, 383.0], [28.1, 383.0], [28.2, 384.0], [28.3, 384.0], [28.4, 385.0], [28.5, 386.0], [28.6, 386.0], [28.7, 386.0], [28.8, 387.0], [28.9, 388.0], [29.0, 389.0], [29.1, 389.0], [29.2, 390.0], [29.3, 391.0], [29.4, 391.0], [29.5, 392.0], [29.6, 393.0], [29.7, 393.0], [29.8, 393.0], [29.9, 394.0], [30.0, 396.0], [30.1, 397.0], [30.2, 398.0], [30.3, 398.0], [30.4, 399.0], [30.5, 400.0], [30.6, 402.0], [30.7, 403.0], [30.8, 404.0], [30.9, 405.0], [31.0, 406.0], [31.1, 406.0], [31.2, 407.0], [31.3, 409.0], [31.4, 409.0], [31.5, 410.0], [31.6, 411.0], [31.7, 411.0], [31.8, 412.0], [31.9, 413.0], [32.0, 413.0], [32.1, 414.0], [32.2, 415.0], [32.3, 416.0], [32.4, 416.0], [32.5, 417.0], [32.6, 418.0], [32.7, 419.0], [32.8, 419.0], [32.9, 420.0], [33.0, 421.0], [33.1, 421.0], [33.2, 423.0], [33.3, 424.0], [33.4, 424.0], [33.5, 425.0], [33.6, 425.0], [33.7, 427.0], [33.8, 428.0], [33.9, 429.0], [34.0, 429.0], [34.1, 430.0], [34.2, 431.0], [34.3, 432.0], [34.4, 432.0], [34.5, 433.0], [34.6, 434.0], [34.7, 434.0], [34.8, 435.0], [34.9, 437.0], [35.0, 438.0], [35.1, 438.0], [35.2, 439.0], [35.3, 440.0], [35.4, 441.0], [35.5, 442.0], [35.6, 443.0], [35.7, 443.0], [35.8, 444.0], [35.9, 445.0], [36.0, 446.0], [36.1, 447.0], [36.2, 447.0], [36.3, 448.0], [36.4, 449.0], [36.5, 450.0], [36.6, 451.0], [36.7, 451.0], [36.8, 452.0], [36.9, 453.0], [37.0, 454.0], [37.1, 454.0], [37.2, 455.0], [37.3, 455.0], [37.4, 456.0], [37.5, 457.0], [37.6, 458.0], [37.7, 459.0], [37.8, 460.0], [37.9, 460.0], [38.0, 461.0], [38.1, 461.0], [38.2, 462.0], [38.3, 463.0], [38.4, 463.0], [38.5, 464.0], [38.6, 465.0], [38.7, 466.0], [38.8, 466.0], [38.9, 467.0], [39.0, 468.0], [39.1, 469.0], [39.2, 469.0], [39.3, 471.0], [39.4, 472.0], [39.5, 474.0], [39.6, 475.0], [39.7, 475.0], [39.8, 476.0], [39.9, 476.0], [40.0, 477.0], [40.1, 478.0], [40.2, 478.0], [40.3, 479.0], [40.4, 480.0], [40.5, 481.0], [40.6, 482.0], [40.7, 483.0], [40.8, 483.0], [40.9, 484.0], [41.0, 485.0], [41.1, 486.0], [41.2, 486.0], [41.3, 488.0], [41.4, 489.0], [41.5, 490.0], [41.6, 491.0], [41.7, 492.0], [41.8, 493.0], [41.9, 494.0], [42.0, 495.0], [42.1, 496.0], [42.2, 498.0], [42.3, 499.0], [42.4, 500.0], [42.5, 501.0], [42.6, 501.0], [42.7, 502.0], [42.8, 503.0], [42.9, 504.0], [43.0, 504.0], [43.1, 505.0], [43.2, 506.0], [43.3, 507.0], [43.4, 508.0], [43.5, 510.0], [43.6, 511.0], [43.7, 512.0], [43.8, 512.0], [43.9, 513.0], [44.0, 515.0], [44.1, 516.0], [44.2, 517.0], [44.3, 518.0], [44.4, 519.0], [44.5, 520.0], [44.6, 521.0], [44.7, 522.0], [44.8, 525.0], [44.9, 526.0], [45.0, 526.0], [45.1, 527.0], [45.2, 527.0], [45.3, 529.0], [45.4, 529.0], [45.5, 530.0], [45.6, 531.0], [45.7, 533.0], [45.8, 535.0], [45.9, 536.0], [46.0, 537.0], [46.1, 537.0], [46.2, 538.0], [46.3, 539.0], [46.4, 540.0], [46.5, 542.0], [46.6, 543.0], [46.7, 544.0], [46.8, 545.0], [46.9, 546.0], [47.0, 546.0], [47.1, 547.0], [47.2, 548.0], [47.3, 551.0], [47.4, 552.0], [47.5, 553.0], [47.6, 553.0], [47.7, 554.0], [47.8, 554.0], [47.9, 556.0], [48.0, 557.0], [48.1, 558.0], [48.2, 559.0], [48.3, 561.0], [48.4, 563.0], [48.5, 563.0], [48.6, 565.0], [48.7, 565.0], [48.8, 566.0], [48.9, 568.0], [49.0, 569.0], [49.1, 570.0], [49.2, 572.0], [49.3, 573.0], [49.4, 574.0], [49.5, 575.0], [49.6, 576.0], [49.7, 578.0], [49.8, 579.0], [49.9, 581.0], [50.0, 582.0], [50.1, 583.0], [50.2, 584.0], [50.3, 585.0], [50.4, 586.0], [50.5, 587.0], [50.6, 589.0], [50.7, 591.0], [50.8, 592.0], [50.9, 593.0], [51.0, 594.0], [51.1, 595.0], [51.2, 597.0], [51.3, 597.0], [51.4, 598.0], [51.5, 600.0], [51.6, 602.0], [51.7, 603.0], [51.8, 604.0], [51.9, 604.0], [52.0, 605.0], [52.1, 606.0], [52.2, 610.0], [52.3, 612.0], [52.4, 613.0], [52.5, 613.0], [52.6, 615.0], [52.7, 616.0], [52.8, 618.0], [52.9, 619.0], [53.0, 621.0], [53.1, 622.0], [53.2, 624.0], [53.3, 625.0], [53.4, 627.0], [53.5, 628.0], [53.6, 629.0], [53.7, 630.0], [53.8, 631.0], [53.9, 632.0], [54.0, 633.0], [54.1, 635.0], [54.2, 637.0], [54.3, 637.0], [54.4, 639.0], [54.5, 641.0], [54.6, 642.0], [54.7, 645.0], [54.8, 648.0], [54.9, 649.0], [55.0, 650.0], [55.1, 652.0], [55.2, 653.0], [55.3, 654.0], [55.4, 656.0], [55.5, 657.0], [55.6, 659.0], [55.7, 660.0], [55.8, 662.0], [55.9, 663.0], [56.0, 664.0], [56.1, 666.0], [56.2, 669.0], [56.3, 671.0], [56.4, 671.0], [56.5, 673.0], [56.6, 674.0], [56.7, 675.0], [56.8, 676.0], [56.9, 678.0], [57.0, 680.0], [57.1, 680.0], [57.2, 681.0], [57.3, 682.0], [57.4, 683.0], [57.5, 685.0], [57.6, 687.0], [57.7, 687.0], [57.8, 689.0], [57.9, 693.0], [58.0, 694.0], [58.1, 696.0], [58.2, 698.0], [58.3, 700.0], [58.4, 702.0], [58.5, 704.0], [58.6, 705.0], [58.7, 707.0], [58.8, 708.0], [58.9, 710.0], [59.0, 711.0], [59.1, 714.0], [59.2, 717.0], [59.3, 719.0], [59.4, 721.0], [59.5, 724.0], [59.6, 725.0], [59.7, 725.0], [59.8, 728.0], [59.9, 729.0], [60.0, 731.0], [60.1, 733.0], [60.2, 734.0], [60.3, 735.0], [60.4, 736.0], [60.5, 737.0], [60.6, 740.0], [60.7, 743.0], [60.8, 744.0], [60.9, 746.0], [61.0, 747.0], [61.1, 751.0], [61.2, 752.0], [61.3, 754.0], [61.4, 755.0], [61.5, 757.0], [61.6, 758.0], [61.7, 760.0], [61.8, 760.0], [61.9, 763.0], [62.0, 766.0], [62.1, 768.0], [62.2, 769.0], [62.3, 772.0], [62.4, 774.0], [62.5, 775.0], [62.6, 777.0], [62.7, 779.0], [62.8, 780.0], [62.9, 784.0], [63.0, 785.0], [63.1, 787.0], [63.2, 789.0], [63.3, 793.0], [63.4, 794.0], [63.5, 796.0], [63.6, 797.0], [63.7, 800.0], [63.8, 802.0], [63.9, 804.0], [64.0, 805.0], [64.1, 805.0], [64.2, 807.0], [64.3, 809.0], [64.4, 814.0], [64.5, 817.0], [64.6, 819.0], [64.7, 820.0], [64.8, 822.0], [64.9, 824.0], [65.0, 825.0], [65.1, 829.0], [65.2, 830.0], [65.3, 833.0], [65.4, 834.0], [65.5, 835.0], [65.6, 836.0], [65.7, 839.0], [65.8, 842.0], [65.9, 844.0], [66.0, 846.0], [66.1, 849.0], [66.2, 851.0], [66.3, 852.0], [66.4, 854.0], [66.5, 857.0], [66.6, 859.0], [66.7, 861.0], [66.8, 865.0], [66.9, 867.0], [67.0, 868.0], [67.1, 870.0], [67.2, 873.0], [67.3, 875.0], [67.4, 876.0], [67.5, 877.0], [67.6, 879.0], [67.7, 881.0], [67.8, 881.0], [67.9, 885.0], [68.0, 887.0], [68.1, 888.0], [68.2, 895.0], [68.3, 896.0], [68.4, 897.0], [68.5, 900.0], [68.6, 903.0], [68.7, 904.0], [68.8, 907.0], [68.9, 910.0], [69.0, 913.0], [69.1, 916.0], [69.2, 919.0], [69.3, 922.0], [69.4, 924.0], [69.5, 927.0], [69.6, 928.0], [69.7, 930.0], [69.8, 933.0], [69.9, 935.0], [70.0, 936.0], [70.1, 939.0], [70.2, 941.0], [70.3, 943.0], [70.4, 946.0], [70.5, 948.0], [70.6, 951.0], [70.7, 954.0], [70.8, 956.0], [70.9, 958.0], [71.0, 960.0], [71.1, 962.0], [71.2, 964.0], [71.3, 965.0], [71.4, 968.0], [71.5, 971.0], [71.6, 974.0], [71.7, 976.0], [71.8, 977.0], [71.9, 981.0], [72.0, 983.0], [72.1, 987.0], [72.2, 989.0], [72.3, 992.0], [72.4, 996.0], [72.5, 1005.0], [72.6, 1008.0], [72.7, 1011.0], [72.8, 1013.0], [72.9, 1015.0], [73.0, 1019.0], [73.1, 1022.0], [73.2, 1024.0], [73.3, 1030.0], [73.4, 1033.0], [73.5, 1037.0], [73.6, 1040.0], [73.7, 1042.0], [73.8, 1045.0], [73.9, 1047.0], [74.0, 1051.0], [74.1, 1056.0], [74.2, 1059.0], [74.3, 1068.0], [74.4, 1070.0], [74.5, 1071.0], [74.6, 1075.0], [74.7, 1077.0], [74.8, 1079.0], [74.9, 1081.0], [75.0, 1088.0], [75.1, 1092.0], [75.2, 1093.0], [75.3, 1095.0], [75.4, 1098.0], [75.5, 1102.0], [75.6, 1106.0], [75.7, 1109.0], [75.8, 1114.0], [75.9, 1120.0], [76.0, 1128.0], [76.1, 1130.0], [76.2, 1132.0], [76.3, 1137.0], [76.4, 1143.0], [76.5, 1148.0], [76.6, 1156.0], [76.7, 1158.0], [76.8, 1167.0], [76.9, 1169.0], [77.0, 1171.0], [77.1, 1180.0], [77.2, 1184.0], [77.3, 1192.0], [77.4, 1196.0], [77.5, 1200.0], [77.6, 1203.0], [77.7, 1205.0], [77.8, 1208.0], [77.9, 1213.0], [78.0, 1216.0], [78.1, 1225.0], [78.2, 1234.0], [78.3, 1242.0], [78.4, 1251.0], [78.5, 1258.0], [78.6, 1261.0], [78.7, 1267.0], [78.8, 1271.0], [78.9, 1276.0], [79.0, 1286.0], [79.1, 1291.0], [79.2, 1300.0], [79.3, 1302.0], [79.4, 1310.0], [79.5, 1315.0], [79.6, 1325.0], [79.7, 1334.0], [79.8, 1336.0], [79.9, 1344.0], [80.0, 1350.0], [80.1, 1361.0], [80.2, 1365.0], [80.3, 1373.0], [80.4, 1379.0], [80.5, 1388.0], [80.6, 1401.0], [80.7, 1407.0], [80.8, 1420.0], [80.9, 1426.0], [81.0, 1430.0], [81.1, 1441.0], [81.2, 1448.0], [81.3, 1459.0], [81.4, 1464.0], [81.5, 1471.0], [81.6, 1479.0], [81.7, 1487.0], [81.8, 1502.0], [81.9, 1508.0], [82.0, 1512.0], [82.1, 1525.0], [82.2, 1528.0], [82.3, 1534.0], [82.4, 1542.0], [82.5, 1557.0], [82.6, 1568.0], [82.7, 1587.0], [82.8, 1614.0], [82.9, 1618.0], [83.0, 1623.0], [83.1, 1635.0], [83.2, 1645.0], [83.3, 1656.0], [83.4, 1665.0], [83.5, 1672.0], [83.6, 1683.0], [83.7, 1693.0], [83.8, 1699.0], [83.9, 1714.0], [84.0, 1717.0], [84.1, 1722.0], [84.2, 1728.0], [84.3, 1738.0], [84.4, 1745.0], [84.5, 1752.0], [84.6, 1767.0], [84.7, 1773.0], [84.8, 1780.0], [84.9, 1784.0], [85.0, 1793.0], [85.1, 1803.0], [85.2, 1812.0], [85.3, 1815.0], [85.4, 1818.0], [85.5, 1822.0], [85.6, 1828.0], [85.7, 1833.0], [85.8, 1841.0], [85.9, 1848.0], [86.0, 1859.0], [86.1, 1867.0], [86.2, 1873.0], [86.3, 1882.0], [86.4, 1891.0], [86.5, 1905.0], [86.6, 1912.0], [86.7, 1923.0], [86.8, 1931.0], [86.9, 1943.0], [87.0, 1951.0], [87.1, 1961.0], [87.2, 1970.0], [87.3, 1977.0], [87.4, 1979.0], [87.5, 1988.0], [87.6, 1997.0], [87.7, 2003.0], [87.8, 2011.0], [87.9, 2015.0], [88.0, 2019.0], [88.1, 2026.0], [88.2, 2038.0], [88.3, 2053.0], [88.4, 2064.0], [88.5, 2070.0], [88.6, 2079.0], [88.7, 2083.0], [88.8, 2087.0], [88.9, 2093.0], [89.0, 2102.0], [89.1, 2108.0], [89.2, 2117.0], [89.3, 2122.0], [89.4, 2132.0], [89.5, 2141.0], [89.6, 2149.0], [89.7, 2151.0], [89.8, 2159.0], [89.9, 2169.0], [90.0, 2184.0], [90.1, 2187.0], [90.2, 2195.0], [90.3, 2206.0], [90.4, 2219.0], [90.5, 2232.0], [90.6, 2240.0], [90.7, 2256.0], [90.8, 2261.0], [90.9, 2267.0], [91.0, 2276.0], [91.1, 2283.0], [91.2, 2290.0], [91.3, 2295.0], [91.4, 2298.0], [91.5, 2303.0], [91.6, 2312.0], [91.7, 2320.0], [91.8, 2324.0], [91.9, 2334.0], [92.0, 2348.0], [92.1, 2351.0], [92.2, 2355.0], [92.3, 2363.0], [92.4, 2375.0], [92.5, 2388.0], [92.6, 2392.0], [92.7, 2405.0], [92.8, 2410.0], [92.9, 2415.0], [93.0, 2423.0], [93.1, 2428.0], [93.2, 2437.0], [93.3, 2442.0], [93.4, 2449.0], [93.5, 2451.0], [93.6, 2454.0], [93.7, 2467.0], [93.8, 2477.0], [93.9, 2491.0], [94.0, 2500.0], [94.1, 2509.0], [94.2, 2522.0], [94.3, 2546.0], [94.4, 2565.0], [94.5, 2577.0], [94.6, 2593.0], [94.7, 2600.0], [94.8, 2617.0], [94.9, 2638.0], [95.0, 2651.0], [95.1, 2677.0], [95.2, 2718.0], [95.3, 2761.0], [95.4, 2768.0], [95.5, 2785.0], [95.6, 2798.0], [95.7, 2855.0], [95.8, 2908.0], [95.9, 2931.0], [96.0, 2961.0], [96.1, 3016.0], [96.2, 3054.0], [96.3, 3088.0], [96.4, 3105.0], [96.5, 3152.0], [96.6, 3186.0], [96.7, 3214.0], [96.8, 3259.0], [96.9, 3330.0], [97.0, 3415.0], [97.1, 3452.0], [97.2, 3506.0], [97.3, 3580.0], [97.4, 3686.0], [97.5, 3778.0], [97.6, 3829.0], [97.7, 3909.0], [97.8, 3972.0], [97.9, 4051.0], [98.0, 4101.0], [98.1, 4203.0], [98.2, 4339.0], [98.3, 4494.0], [98.4, 4526.0], [98.5, 4685.0], [98.6, 4800.0], [98.7, 4863.0], [98.8, 4982.0], [98.9, 5061.0], [99.0, 5151.0], [99.1, 5435.0], [99.2, 5744.0], [99.3, 6010.0], [99.4, 6136.0], [99.5, 6593.0], [99.6, 6986.0], [99.7, 7670.0], [99.8, 9146.0], [99.9, 12378.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 870.0, "series": [{"data": [[600.0, 353.0], [700.0, 281.0], [800.0, 249.0], [900.0, 205.0], [1000.0, 157.0], [1100.0, 106.0], [1200.0, 88.0], [1300.0, 73.0], [1400.0, 61.0], [1500.0, 50.0], [1600.0, 56.0], [1700.0, 63.0], [1800.0, 74.0], [1900.0, 62.0], [2000.0, 69.0], [2100.0, 65.0], [2300.0, 63.0], [2200.0, 62.0], [2400.0, 70.0], [2500.0, 35.0], [2600.0, 25.0], [2700.0, 24.0], [2800.0, 9.0], [2900.0, 15.0], [3000.0, 15.0], [3100.0, 14.0], [3300.0, 7.0], [3200.0, 11.0], [3400.0, 11.0], [3500.0, 6.0], [3600.0, 6.0], [3700.0, 7.0], [3800.0, 7.0], [3900.0, 8.0], [4000.0, 8.0], [4200.0, 2.0], [4300.0, 4.0], [4100.0, 5.0], [4400.0, 5.0], [4600.0, 3.0], [4500.0, 8.0], [4800.0, 7.0], [4700.0, 4.0], [5100.0, 4.0], [5000.0, 7.0], [4900.0, 4.0], [5300.0, 2.0], [5200.0, 2.0], [5600.0, 3.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [6100.0, 2.0], [6000.0, 5.0], [5900.0, 2.0], [6200.0, 2.0], [6300.0, 1.0], [6600.0, 2.0], [6400.0, 1.0], [6500.0, 1.0], [6900.0, 3.0], [7100.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [7600.0, 3.0], [8100.0, 1.0], [8200.0, 1.0], [8900.0, 1.0], [9100.0, 1.0], [9600.0, 1.0], [9900.0, 1.0], [10900.0, 1.0], [11700.0, 1.0], [12400.0, 1.0], [12700.0, 1.0], [12300.0, 1.0], [13400.0, 1.0], [13600.0, 1.0], [16900.0, 1.0], [200.0, 711.0], [300.0, 870.0], [400.0, 618.0], [500.0, 472.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 945.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2205.0, "series": [{"data": [[0.0, 2205.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2040.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 945.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.60507404E12, "maxY": 10.0, "series": [{"data": [[1.60507416E12, 10.0], [1.60507434E12, 10.0], [1.60507452E12, 10.0], [1.60507404E12, 9.959999999999997], [1.60507422E12, 10.0], [1.6050741E12, 10.0], [1.6050744E12, 10.0], [1.60507458E12, 5.5], [1.60507428E12, 10.0], [1.60507446E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507458E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 319.0, "minX": 1.0, "maxY": 5689.0, "series": [{"data": [[8.0, 1422.5], [4.0, 4958.0], [2.0, 3250.0], [1.0, 5689.0], [9.0, 323.0], [10.0, 961.4684301988798], [5.0, 442.0], [6.0, 471.0], [3.0, 1997.0], [7.0, 319.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990173410404598, 963.4315992292865]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 77.11666666666666, "minX": 1.60507404E12, "maxY": 3768897.6666666665, "series": [{"data": [[1.60507416E12, 3722598.8666666667], [1.60507434E12, 3170086.8833333333], [1.60507452E12, 2951914.7], [1.60507404E12, 1281339.5666666667], [1.60507422E12, 3768897.6666666665], [1.6050741E12, 2728163.3], [1.6050744E12, 3037673.2], [1.60507458E12, 118171.61666666667], [1.60507428E12, 3141625.8], [1.60507446E12, 3669176.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507416E12, 5454.666666666667], [1.60507434E12, 3999.7], [1.60507452E12, 4492.866666666667], [1.60507404E12, 1109.5333333333333], [1.60507422E12, 5159.166666666667], [1.6050741E12, 4139.35], [1.6050744E12, 4735.833333333333], [1.60507458E12, 77.11666666666666], [1.60507428E12, 4112.516666666666], [1.60507446E12, 5296.583333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507458E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 824.8032786885249, "minX": 1.60507404E12, "maxY": 2063.8, "series": [{"data": [[1.60507416E12, 824.8032786885249], [1.60507434E12, 1054.5906642728899], [1.60507452E12, 1004.0907563025206], [1.60507404E12, 1193.4266666666674], [1.60507422E12, 874.9088235294123], [1.6050741E12, 1056.6597222222222], [1.6050744E12, 948.0247678018569], [1.60507458E12, 2063.8], [1.60507428E12, 1096.0073260073261], [1.60507446E12, 856.0787965616045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507458E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 822.319672131148, "minX": 1.60507404E12, "maxY": 2059.9, "series": [{"data": [[1.60507416E12, 822.319672131148], [1.60507434E12, 1052.615798922801], [1.60507452E12, 1002.3176470588231], [1.60507404E12, 1189.2533333333329], [1.60507422E12, 872.2661764705884], [1.6050741E12, 1054.2638888888896], [1.6050744E12, 946.486068111456], [1.60507458E12, 2059.9], [1.60507428E12, 1093.639194139194], [1.60507446E12, 854.2793696275065]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507458E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60507404E12, "maxY": 0.5200000000000005, "series": [{"data": [[1.60507416E12, 0.008196721311475414], [1.60507434E12, 0.019748653500897658], [1.60507452E12, 0.011764705882352941], [1.60507404E12, 0.5200000000000005], [1.60507422E12, 0.01470588235294118], [1.6050741E12, 0.03298611111111111], [1.6050744E12, 0.009287925696594422], [1.60507458E12, 0.0], [1.60507428E12, 0.012820512820512827], [1.60507446E12, 0.010028653295128939]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507458E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 216.0, "minX": 1.60507404E12, "maxY": 16954.0, "series": [{"data": [[1.60507416E12, 10993.0], [1.60507434E12, 16954.0], [1.60507452E12, 9146.0], [1.60507404E12, 4421.0], [1.60507422E12, 8152.0], [1.6050741E12, 13478.0], [1.6050744E12, 6593.0], [1.60507458E12, 5689.0], [1.60507428E12, 11707.0], [1.60507446E12, 5998.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507416E12, 226.59699982523918], [1.60507434E12, 227.0659996008873], [1.60507452E12, 225.0], [1.60507404E12, 237.3589999639988], [1.60507422E12, 223.0], [1.6050741E12, 230.1929998624325], [1.6050744E12, 231.64599969148637], [1.60507458E12, 319.0], [1.60507428E12, 227.92299986958503], [1.60507446E12, 226.2909998333454]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507416E12, 227.0], [1.60507434E12, 228.57260015964508], [1.60507452E12, 225.0], [1.60507404E12, 237.49490001440049], [1.60507422E12, 223.0], [1.6050741E12, 230.71230005502701], [1.6050744E12, 232.0], [1.60507458E12, 319.0], [1.60507428E12, 228.0], [1.60507446E12, 226.92010006666183]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507416E12, 226.9634999126196], [1.60507434E12, 227.90299980044364], [1.60507452E12, 225.0], [1.60507404E12, 237.4344999819994], [1.60507422E12, 223.0], [1.6050741E12, 230.48149993121623], [1.6050744E12, 232.0], [1.60507458E12, 319.0], [1.60507428E12, 228.0], [1.60507446E12, 226.6404999166727]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507416E12, 219.0], [1.60507434E12, 224.0], [1.60507452E12, 216.0], [1.60507404E12, 237.0], [1.60507422E12, 219.0], [1.6050741E12, 221.0], [1.6050744E12, 224.0], [1.60507458E12, 319.0], [1.60507428E12, 224.0], [1.60507446E12, 216.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507416E12, 459.5], [1.60507434E12, 685.0], [1.60507452E12, 615.0], [1.60507404E12, 802.0], [1.60507422E12, 478.5], [1.6050741E12, 696.0], [1.6050744E12, 499.0], [1.60507458E12, 1328.0], [1.60507428E12, 649.5], [1.60507446E12, 511.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507458E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 289.5, "minX": 1.0, "maxY": 4469.5, "series": [{"data": [[2.0, 1224.0], [3.0, 1363.0], [4.0, 1020.0], [5.0, 1184.0], [6.0, 1081.0], [7.0, 875.0], [8.0, 726.5], [9.0, 786.0], [10.0, 635.0], [11.0, 637.0], [12.0, 563.0], [13.0, 592.0], [14.0, 576.0], [15.0, 508.5], [16.0, 559.5], [1.0, 4469.5], [17.0, 501.5], [18.0, 455.0], [19.0, 290.0], [20.0, 321.5], [21.0, 352.0], [22.0, 342.0], [23.0, 318.0], [24.0, 295.0], [25.0, 289.5], [26.0, 291.5], [27.0, 297.5], [29.0, 303.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 289.5, "minX": 1.0, "maxY": 4457.0, "series": [{"data": [[2.0, 1221.5], [3.0, 1361.0], [4.0, 1016.0], [5.0, 1181.0], [6.0, 1076.0], [7.0, 873.0], [8.0, 724.5], [9.0, 784.0], [10.0, 634.0], [11.0, 636.0], [12.0, 563.0], [13.0, 586.0], [14.0, 575.5], [15.0, 508.5], [16.0, 559.0], [1.0, 4457.0], [17.0, 501.5], [18.0, 453.0], [19.0, 290.0], [20.0, 321.0], [21.0, 351.5], [22.0, 341.5], [23.0, 318.0], [24.0, 295.0], [25.0, 289.5], [26.0, 291.0], [27.0, 297.0], [29.0, 303.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.60507404E12, "maxY": 12.216666666666667, "series": [{"data": [[1.60507416E12, 12.216666666666667], [1.60507434E12, 9.283333333333333], [1.60507452E12, 9.916666666666666], [1.60507404E12, 2.6666666666666665], [1.60507422E12, 11.333333333333334], [1.6050741E12, 9.583333333333334], [1.6050744E12, 10.766666666666667], [1.60507428E12, 9.1], [1.60507446E12, 11.633333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507452E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60507404E12, "maxY": 12.2, "series": [{"data": [[1.60507416E12, 12.2], [1.60507434E12, 9.283333333333333], [1.60507452E12, 9.916666666666666], [1.60507404E12, 2.5], [1.60507422E12, 11.333333333333334], [1.6050741E12, 9.6], [1.6050744E12, 10.766666666666667], [1.60507458E12, 0.16666666666666666], [1.60507428E12, 9.1], [1.60507446E12, 11.633333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60507458E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60507404E12, "maxY": 12.2, "series": [{"data": [[1.60507416E12, 12.2], [1.60507434E12, 9.283333333333333], [1.60507452E12, 9.916666666666666], [1.60507404E12, 2.5], [1.60507422E12, 11.333333333333334], [1.6050741E12, 9.6], [1.6050744E12, 10.766666666666667], [1.60507458E12, 0.16666666666666666], [1.60507428E12, 9.1], [1.60507446E12, 11.633333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507458E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60507404E12, "maxY": 12.2, "series": [{"data": [[1.60507416E12, 12.2], [1.60507434E12, 9.283333333333333], [1.60507452E12, 9.916666666666666], [1.60507404E12, 2.5], [1.60507422E12, 11.333333333333334], [1.6050741E12, 9.6], [1.6050744E12, 10.766666666666667], [1.60507458E12, 0.16666666666666666], [1.60507428E12, 9.1], [1.60507446E12, 11.633333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60507458E12, "title": "Total Transactions Per Second"}},
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

