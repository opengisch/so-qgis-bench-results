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
        data: {"result": {"minY": 221.0, "minX": 0.0, "maxY": 90091.0, "series": [{"data": [[0.0, 221.0], [0.1, 224.0], [0.2, 226.0], [0.3, 227.0], [0.4, 227.0], [0.5, 228.0], [0.6, 228.0], [0.7, 229.0], [0.8, 229.0], [0.9, 230.0], [1.0, 231.0], [1.1, 231.0], [1.2, 232.0], [1.3, 232.0], [1.4, 233.0], [1.5, 233.0], [1.6, 233.0], [1.7, 233.0], [1.8, 234.0], [1.9, 234.0], [2.0, 234.0], [2.1, 235.0], [2.2, 235.0], [2.3, 236.0], [2.4, 236.0], [2.5, 236.0], [2.6, 237.0], [2.7, 237.0], [2.8, 238.0], [2.9, 238.0], [3.0, 238.0], [3.1, 239.0], [3.2, 239.0], [3.3, 240.0], [3.4, 240.0], [3.5, 241.0], [3.6, 241.0], [3.7, 242.0], [3.8, 242.0], [3.9, 243.0], [4.0, 243.0], [4.1, 243.0], [4.2, 244.0], [4.3, 245.0], [4.4, 245.0], [4.5, 245.0], [4.6, 246.0], [4.7, 246.0], [4.8, 247.0], [4.9, 248.0], [5.0, 248.0], [5.1, 249.0], [5.2, 249.0], [5.3, 250.0], [5.4, 251.0], [5.5, 251.0], [5.6, 252.0], [5.7, 252.0], [5.8, 253.0], [5.9, 254.0], [6.0, 255.0], [6.1, 256.0], [6.2, 256.0], [6.3, 257.0], [6.4, 257.0], [6.5, 258.0], [6.6, 258.0], [6.7, 259.0], [6.8, 260.0], [6.9, 260.0], [7.0, 262.0], [7.1, 262.0], [7.2, 263.0], [7.3, 263.0], [7.4, 264.0], [7.5, 265.0], [7.6, 266.0], [7.7, 266.0], [7.8, 266.0], [7.9, 267.0], [8.0, 268.0], [8.1, 269.0], [8.2, 270.0], [8.3, 271.0], [8.4, 272.0], [8.5, 274.0], [8.6, 275.0], [8.7, 275.0], [8.8, 276.0], [8.9, 277.0], [9.0, 278.0], [9.1, 279.0], [9.2, 279.0], [9.3, 280.0], [9.4, 280.0], [9.5, 281.0], [9.6, 283.0], [9.7, 283.0], [9.8, 283.0], [9.9, 285.0], [10.0, 286.0], [10.1, 286.0], [10.2, 287.0], [10.3, 289.0], [10.4, 289.0], [10.5, 290.0], [10.6, 291.0], [10.7, 292.0], [10.8, 293.0], [10.9, 293.0], [11.0, 294.0], [11.1, 294.0], [11.2, 295.0], [11.3, 295.0], [11.4, 296.0], [11.5, 297.0], [11.6, 298.0], [11.7, 298.0], [11.8, 299.0], [11.9, 299.0], [12.0, 300.0], [12.1, 300.0], [12.2, 301.0], [12.3, 302.0], [12.4, 302.0], [12.5, 303.0], [12.6, 303.0], [12.7, 303.0], [12.8, 304.0], [12.9, 304.0], [13.0, 304.0], [13.1, 305.0], [13.2, 305.0], [13.3, 305.0], [13.4, 306.0], [13.5, 306.0], [13.6, 307.0], [13.7, 307.0], [13.8, 307.0], [13.9, 308.0], [14.0, 308.0], [14.1, 308.0], [14.2, 309.0], [14.3, 309.0], [14.4, 309.0], [14.5, 310.0], [14.6, 311.0], [14.7, 311.0], [14.8, 312.0], [14.9, 312.0], [15.0, 313.0], [15.1, 314.0], [15.2, 314.0], [15.3, 315.0], [15.4, 315.0], [15.5, 316.0], [15.6, 316.0], [15.7, 317.0], [15.8, 317.0], [15.9, 318.0], [16.0, 318.0], [16.1, 319.0], [16.2, 320.0], [16.3, 320.0], [16.4, 320.0], [16.5, 320.0], [16.6, 321.0], [16.7, 321.0], [16.8, 322.0], [16.9, 322.0], [17.0, 322.0], [17.1, 323.0], [17.2, 324.0], [17.3, 324.0], [17.4, 324.0], [17.5, 325.0], [17.6, 325.0], [17.7, 326.0], [17.8, 327.0], [17.9, 327.0], [18.0, 328.0], [18.1, 328.0], [18.2, 329.0], [18.3, 330.0], [18.4, 331.0], [18.5, 331.0], [18.6, 331.0], [18.7, 332.0], [18.8, 333.0], [18.9, 333.0], [19.0, 334.0], [19.1, 334.0], [19.2, 334.0], [19.3, 335.0], [19.4, 335.0], [19.5, 336.0], [19.6, 336.0], [19.7, 337.0], [19.8, 337.0], [19.9, 337.0], [20.0, 338.0], [20.1, 339.0], [20.2, 340.0], [20.3, 341.0], [20.4, 341.0], [20.5, 341.0], [20.6, 342.0], [20.7, 343.0], [20.8, 343.0], [20.9, 344.0], [21.0, 345.0], [21.1, 345.0], [21.2, 346.0], [21.3, 346.0], [21.4, 347.0], [21.5, 348.0], [21.6, 348.0], [21.7, 349.0], [21.8, 349.0], [21.9, 350.0], [22.0, 350.0], [22.1, 351.0], [22.2, 351.0], [22.3, 352.0], [22.4, 352.0], [22.5, 353.0], [22.6, 353.0], [22.7, 354.0], [22.8, 354.0], [22.9, 355.0], [23.0, 356.0], [23.1, 357.0], [23.2, 357.0], [23.3, 358.0], [23.4, 359.0], [23.5, 359.0], [23.6, 360.0], [23.7, 361.0], [23.8, 361.0], [23.9, 361.0], [24.0, 362.0], [24.1, 363.0], [24.2, 363.0], [24.3, 364.0], [24.4, 364.0], [24.5, 365.0], [24.6, 365.0], [24.7, 365.0], [24.8, 366.0], [24.9, 366.0], [25.0, 367.0], [25.1, 367.0], [25.2, 368.0], [25.3, 369.0], [25.4, 370.0], [25.5, 370.0], [25.6, 370.0], [25.7, 371.0], [25.8, 371.0], [25.9, 372.0], [26.0, 373.0], [26.1, 373.0], [26.2, 374.0], [26.3, 374.0], [26.4, 375.0], [26.5, 375.0], [26.6, 375.0], [26.7, 376.0], [26.8, 376.0], [26.9, 376.0], [27.0, 378.0], [27.1, 378.0], [27.2, 378.0], [27.3, 379.0], [27.4, 381.0], [27.5, 381.0], [27.6, 382.0], [27.7, 382.0], [27.8, 383.0], [27.9, 383.0], [28.0, 383.0], [28.1, 385.0], [28.2, 385.0], [28.3, 386.0], [28.4, 386.0], [28.5, 387.0], [28.6, 388.0], [28.7, 388.0], [28.8, 389.0], [28.9, 390.0], [29.0, 391.0], [29.1, 392.0], [29.2, 392.0], [29.3, 392.0], [29.4, 393.0], [29.5, 393.0], [29.6, 394.0], [29.7, 395.0], [29.8, 396.0], [29.9, 397.0], [30.0, 398.0], [30.1, 399.0], [30.2, 400.0], [30.3, 400.0], [30.4, 401.0], [30.5, 401.0], [30.6, 402.0], [30.7, 403.0], [30.8, 405.0], [30.9, 406.0], [31.0, 407.0], [31.1, 407.0], [31.2, 408.0], [31.3, 409.0], [31.4, 409.0], [31.5, 410.0], [31.6, 411.0], [31.7, 411.0], [31.8, 412.0], [31.9, 412.0], [32.0, 413.0], [32.1, 414.0], [32.2, 415.0], [32.3, 415.0], [32.4, 416.0], [32.5, 416.0], [32.6, 417.0], [32.7, 417.0], [32.8, 418.0], [32.9, 418.0], [33.0, 419.0], [33.1, 420.0], [33.2, 420.0], [33.3, 421.0], [33.4, 421.0], [33.5, 422.0], [33.6, 423.0], [33.7, 424.0], [33.8, 425.0], [33.9, 426.0], [34.0, 426.0], [34.1, 427.0], [34.2, 428.0], [34.3, 428.0], [34.4, 429.0], [34.5, 430.0], [34.6, 431.0], [34.7, 432.0], [34.8, 433.0], [34.9, 433.0], [35.0, 435.0], [35.1, 435.0], [35.2, 436.0], [35.3, 437.0], [35.4, 437.0], [35.5, 438.0], [35.6, 439.0], [35.7, 439.0], [35.8, 441.0], [35.9, 442.0], [36.0, 443.0], [36.1, 443.0], [36.2, 444.0], [36.3, 445.0], [36.4, 446.0], [36.5, 446.0], [36.6, 447.0], [36.7, 448.0], [36.8, 449.0], [36.9, 450.0], [37.0, 450.0], [37.1, 451.0], [37.2, 452.0], [37.3, 453.0], [37.4, 453.0], [37.5, 454.0], [37.6, 455.0], [37.7, 456.0], [37.8, 457.0], [37.9, 458.0], [38.0, 459.0], [38.1, 459.0], [38.2, 460.0], [38.3, 460.0], [38.4, 461.0], [38.5, 462.0], [38.6, 462.0], [38.7, 463.0], [38.8, 464.0], [38.9, 464.0], [39.0, 465.0], [39.1, 467.0], [39.2, 467.0], [39.3, 468.0], [39.4, 468.0], [39.5, 469.0], [39.6, 469.0], [39.7, 470.0], [39.8, 471.0], [39.9, 472.0], [40.0, 473.0], [40.1, 474.0], [40.2, 475.0], [40.3, 475.0], [40.4, 476.0], [40.5, 477.0], [40.6, 478.0], [40.7, 479.0], [40.8, 480.0], [40.9, 481.0], [41.0, 482.0], [41.1, 482.0], [41.2, 484.0], [41.3, 485.0], [41.4, 486.0], [41.5, 486.0], [41.6, 487.0], [41.7, 488.0], [41.8, 488.0], [41.9, 490.0], [42.0, 490.0], [42.1, 491.0], [42.2, 491.0], [42.3, 492.0], [42.4, 494.0], [42.5, 497.0], [42.6, 497.0], [42.7, 498.0], [42.8, 499.0], [42.9, 500.0], [43.0, 501.0], [43.1, 502.0], [43.2, 503.0], [43.3, 503.0], [43.4, 504.0], [43.5, 505.0], [43.6, 506.0], [43.7, 508.0], [43.8, 509.0], [43.9, 510.0], [44.0, 511.0], [44.1, 511.0], [44.2, 512.0], [44.3, 513.0], [44.4, 514.0], [44.5, 515.0], [44.6, 516.0], [44.7, 516.0], [44.8, 517.0], [44.9, 519.0], [45.0, 520.0], [45.1, 521.0], [45.2, 523.0], [45.3, 524.0], [45.4, 525.0], [45.5, 526.0], [45.6, 527.0], [45.7, 528.0], [45.8, 529.0], [45.9, 530.0], [46.0, 531.0], [46.1, 533.0], [46.2, 535.0], [46.3, 537.0], [46.4, 538.0], [46.5, 539.0], [46.6, 541.0], [46.7, 543.0], [46.8, 543.0], [46.9, 545.0], [47.0, 546.0], [47.1, 546.0], [47.2, 547.0], [47.3, 548.0], [47.4, 549.0], [47.5, 550.0], [47.6, 551.0], [47.7, 552.0], [47.8, 553.0], [47.9, 555.0], [48.0, 556.0], [48.1, 558.0], [48.2, 561.0], [48.3, 562.0], [48.4, 563.0], [48.5, 564.0], [48.6, 565.0], [48.7, 567.0], [48.8, 568.0], [48.9, 569.0], [49.0, 571.0], [49.1, 572.0], [49.2, 574.0], [49.3, 574.0], [49.4, 575.0], [49.5, 578.0], [49.6, 579.0], [49.7, 581.0], [49.8, 582.0], [49.9, 583.0], [50.0, 584.0], [50.1, 585.0], [50.2, 587.0], [50.3, 588.0], [50.4, 590.0], [50.5, 591.0], [50.6, 592.0], [50.7, 593.0], [50.8, 593.0], [50.9, 595.0], [51.0, 597.0], [51.1, 598.0], [51.2, 600.0], [51.3, 602.0], [51.4, 603.0], [51.5, 605.0], [51.6, 605.0], [51.7, 607.0], [51.8, 609.0], [51.9, 610.0], [52.0, 611.0], [52.1, 612.0], [52.2, 613.0], [52.3, 615.0], [52.4, 618.0], [52.5, 620.0], [52.6, 621.0], [52.7, 622.0], [52.8, 624.0], [52.9, 625.0], [53.0, 625.0], [53.1, 627.0], [53.2, 629.0], [53.3, 630.0], [53.4, 632.0], [53.5, 634.0], [53.6, 636.0], [53.7, 638.0], [53.8, 639.0], [53.9, 640.0], [54.0, 641.0], [54.1, 642.0], [54.2, 643.0], [54.3, 644.0], [54.4, 644.0], [54.5, 645.0], [54.6, 646.0], [54.7, 648.0], [54.8, 649.0], [54.9, 651.0], [55.0, 652.0], [55.1, 654.0], [55.2, 655.0], [55.3, 657.0], [55.4, 658.0], [55.5, 660.0], [55.6, 662.0], [55.7, 663.0], [55.8, 664.0], [55.9, 665.0], [56.0, 667.0], [56.1, 668.0], [56.2, 669.0], [56.3, 671.0], [56.4, 673.0], [56.5, 674.0], [56.6, 675.0], [56.7, 676.0], [56.8, 678.0], [56.9, 679.0], [57.0, 680.0], [57.1, 682.0], [57.2, 684.0], [57.3, 685.0], [57.4, 687.0], [57.5, 689.0], [57.6, 690.0], [57.7, 691.0], [57.8, 692.0], [57.9, 693.0], [58.0, 694.0], [58.1, 695.0], [58.2, 696.0], [58.3, 697.0], [58.4, 698.0], [58.5, 700.0], [58.6, 700.0], [58.7, 703.0], [58.8, 704.0], [58.9, 706.0], [59.0, 708.0], [59.1, 710.0], [59.2, 712.0], [59.3, 713.0], [59.4, 713.0], [59.5, 715.0], [59.6, 715.0], [59.7, 718.0], [59.8, 721.0], [59.9, 722.0], [60.0, 724.0], [60.1, 726.0], [60.2, 727.0], [60.3, 730.0], [60.4, 732.0], [60.5, 734.0], [60.6, 736.0], [60.7, 736.0], [60.8, 737.0], [60.9, 738.0], [61.0, 739.0], [61.1, 741.0], [61.2, 742.0], [61.3, 744.0], [61.4, 746.0], [61.5, 747.0], [61.6, 748.0], [61.7, 750.0], [61.8, 753.0], [61.9, 756.0], [62.0, 758.0], [62.1, 760.0], [62.2, 760.0], [62.3, 762.0], [62.4, 765.0], [62.5, 767.0], [62.6, 769.0], [62.7, 770.0], [62.8, 774.0], [62.9, 778.0], [63.0, 781.0], [63.1, 783.0], [63.2, 787.0], [63.3, 789.0], [63.4, 792.0], [63.5, 795.0], [63.6, 797.0], [63.7, 799.0], [63.8, 801.0], [63.9, 803.0], [64.0, 805.0], [64.1, 807.0], [64.2, 810.0], [64.3, 811.0], [64.4, 815.0], [64.5, 816.0], [64.6, 817.0], [64.7, 818.0], [64.8, 819.0], [64.9, 821.0], [65.0, 825.0], [65.1, 827.0], [65.2, 829.0], [65.3, 833.0], [65.4, 834.0], [65.5, 835.0], [65.6, 837.0], [65.7, 840.0], [65.8, 842.0], [65.9, 843.0], [66.0, 845.0], [66.1, 847.0], [66.2, 848.0], [66.3, 851.0], [66.4, 853.0], [66.5, 855.0], [66.6, 857.0], [66.7, 858.0], [66.8, 861.0], [66.9, 863.0], [67.0, 865.0], [67.1, 866.0], [67.2, 868.0], [67.3, 871.0], [67.4, 872.0], [67.5, 878.0], [67.6, 879.0], [67.7, 882.0], [67.8, 883.0], [67.9, 886.0], [68.0, 889.0], [68.1, 892.0], [68.2, 894.0], [68.3, 898.0], [68.4, 900.0], [68.5, 902.0], [68.6, 906.0], [68.7, 908.0], [68.8, 911.0], [68.9, 913.0], [69.0, 915.0], [69.1, 916.0], [69.2, 921.0], [69.3, 922.0], [69.4, 925.0], [69.5, 929.0], [69.6, 935.0], [69.7, 942.0], [69.8, 944.0], [69.9, 946.0], [70.0, 947.0], [70.1, 949.0], [70.2, 952.0], [70.3, 956.0], [70.4, 959.0], [70.5, 961.0], [70.6, 963.0], [70.7, 965.0], [70.8, 969.0], [70.9, 970.0], [71.0, 973.0], [71.1, 980.0], [71.2, 982.0], [71.3, 986.0], [71.4, 988.0], [71.5, 990.0], [71.6, 994.0], [71.7, 997.0], [71.8, 1000.0], [71.9, 1005.0], [72.0, 1006.0], [72.1, 1009.0], [72.2, 1012.0], [72.3, 1016.0], [72.4, 1016.0], [72.5, 1020.0], [72.6, 1022.0], [72.7, 1024.0], [72.8, 1026.0], [72.9, 1028.0], [73.0, 1030.0], [73.1, 1031.0], [73.2, 1037.0], [73.3, 1040.0], [73.4, 1042.0], [73.5, 1044.0], [73.6, 1046.0], [73.7, 1051.0], [73.8, 1053.0], [73.9, 1057.0], [74.0, 1061.0], [74.1, 1067.0], [74.2, 1069.0], [74.3, 1072.0], [74.4, 1080.0], [74.5, 1084.0], [74.6, 1088.0], [74.7, 1094.0], [74.8, 1099.0], [74.9, 1103.0], [75.0, 1109.0], [75.1, 1112.0], [75.2, 1116.0], [75.3, 1120.0], [75.4, 1125.0], [75.5, 1127.0], [75.6, 1131.0], [75.7, 1134.0], [75.8, 1138.0], [75.9, 1140.0], [76.0, 1149.0], [76.1, 1154.0], [76.2, 1158.0], [76.3, 1161.0], [76.4, 1164.0], [76.5, 1168.0], [76.6, 1174.0], [76.7, 1181.0], [76.8, 1187.0], [76.9, 1192.0], [77.0, 1198.0], [77.1, 1200.0], [77.2, 1206.0], [77.3, 1218.0], [77.4, 1221.0], [77.5, 1227.0], [77.6, 1236.0], [77.7, 1238.0], [77.8, 1245.0], [77.9, 1250.0], [78.0, 1254.0], [78.1, 1262.0], [78.2, 1264.0], [78.3, 1268.0], [78.4, 1271.0], [78.5, 1274.0], [78.6, 1278.0], [78.7, 1288.0], [78.8, 1295.0], [78.9, 1301.0], [79.0, 1303.0], [79.1, 1309.0], [79.2, 1315.0], [79.3, 1319.0], [79.4, 1323.0], [79.5, 1326.0], [79.6, 1333.0], [79.7, 1339.0], [79.8, 1343.0], [79.9, 1352.0], [80.0, 1356.0], [80.1, 1365.0], [80.2, 1373.0], [80.3, 1381.0], [80.4, 1391.0], [80.5, 1399.0], [80.6, 1403.0], [80.7, 1411.0], [80.8, 1416.0], [80.9, 1423.0], [81.0, 1429.0], [81.1, 1434.0], [81.2, 1441.0], [81.3, 1448.0], [81.4, 1456.0], [81.5, 1464.0], [81.6, 1469.0], [81.7, 1481.0], [81.8, 1492.0], [81.9, 1497.0], [82.0, 1511.0], [82.1, 1517.0], [82.2, 1536.0], [82.3, 1549.0], [82.4, 1561.0], [82.5, 1566.0], [82.6, 1575.0], [82.7, 1590.0], [82.8, 1598.0], [82.9, 1611.0], [83.0, 1622.0], [83.1, 1637.0], [83.2, 1647.0], [83.3, 1659.0], [83.4, 1671.0], [83.5, 1677.0], [83.6, 1680.0], [83.7, 1694.0], [83.8, 1700.0], [83.9, 1710.0], [84.0, 1722.0], [84.1, 1730.0], [84.2, 1741.0], [84.3, 1749.0], [84.4, 1756.0], [84.5, 1758.0], [84.6, 1767.0], [84.7, 1772.0], [84.8, 1776.0], [84.9, 1786.0], [85.0, 1795.0], [85.1, 1798.0], [85.2, 1807.0], [85.3, 1818.0], [85.4, 1823.0], [85.5, 1830.0], [85.6, 1841.0], [85.7, 1848.0], [85.8, 1852.0], [85.9, 1862.0], [86.0, 1870.0], [86.1, 1882.0], [86.2, 1893.0], [86.3, 1904.0], [86.4, 1918.0], [86.5, 1927.0], [86.6, 1934.0], [86.7, 1940.0], [86.8, 1946.0], [86.9, 1950.0], [87.0, 1961.0], [87.1, 1965.0], [87.2, 1971.0], [87.3, 1979.0], [87.4, 1983.0], [87.5, 1997.0], [87.6, 2010.0], [87.7, 2017.0], [87.8, 2024.0], [87.9, 2032.0], [88.0, 2038.0], [88.1, 2046.0], [88.2, 2051.0], [88.3, 2055.0], [88.4, 2060.0], [88.5, 2067.0], [88.6, 2079.0], [88.7, 2089.0], [88.8, 2092.0], [88.9, 2103.0], [89.0, 2118.0], [89.1, 2127.0], [89.2, 2131.0], [89.3, 2137.0], [89.4, 2147.0], [89.5, 2152.0], [89.6, 2158.0], [89.7, 2169.0], [89.8, 2172.0], [89.9, 2179.0], [90.0, 2193.0], [90.1, 2197.0], [90.2, 2207.0], [90.3, 2216.0], [90.4, 2220.0], [90.5, 2226.0], [90.6, 2235.0], [90.7, 2247.0], [90.8, 2252.0], [90.9, 2265.0], [91.0, 2275.0], [91.1, 2281.0], [91.2, 2286.0], [91.3, 2292.0], [91.4, 2302.0], [91.5, 2310.0], [91.6, 2319.0], [91.7, 2326.0], [91.8, 2339.0], [91.9, 2345.0], [92.0, 2349.0], [92.1, 2354.0], [92.2, 2363.0], [92.3, 2369.0], [92.4, 2376.0], [92.5, 2383.0], [92.6, 2398.0], [92.7, 2413.0], [92.8, 2415.0], [92.9, 2418.0], [93.0, 2428.0], [93.1, 2431.0], [93.2, 2440.0], [93.3, 2445.0], [93.4, 2460.0], [93.5, 2469.0], [93.6, 2475.0], [93.7, 2491.0], [93.8, 2506.0], [93.9, 2520.0], [94.0, 2528.0], [94.1, 2546.0], [94.2, 2563.0], [94.3, 2573.0], [94.4, 2586.0], [94.5, 2598.0], [94.6, 2607.0], [94.7, 2615.0], [94.8, 2629.0], [94.9, 2669.0], [95.0, 2688.0], [95.1, 2710.0], [95.2, 2751.0], [95.3, 2775.0], [95.4, 2794.0], [95.5, 2805.0], [95.6, 2842.0], [95.7, 2857.0], [95.8, 2882.0], [95.9, 2923.0], [96.0, 2940.0], [96.1, 2961.0], [96.2, 3014.0], [96.3, 3058.0], [96.4, 3096.0], [96.5, 3151.0], [96.6, 3189.0], [96.7, 3288.0], [96.8, 3344.0], [96.9, 3386.0], [97.0, 3427.0], [97.1, 3481.0], [97.2, 3533.0], [97.3, 3566.0], [97.4, 3645.0], [97.5, 3744.0], [97.6, 3934.0], [97.7, 4031.0], [97.8, 4136.0], [97.9, 4186.0], [98.0, 4218.0], [98.1, 4361.0], [98.2, 4442.0], [98.3, 4503.0], [98.4, 4608.0], [98.5, 4787.0], [98.6, 4879.0], [98.7, 4968.0], [98.8, 5074.0], [98.9, 5306.0], [99.0, 5560.0], [99.1, 5732.0], [99.2, 5950.0], [99.3, 6371.0], [99.4, 6552.0], [99.5, 7096.0], [99.6, 7421.0], [99.7, 8643.0], [99.8, 10422.0], [99.9, 12894.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 948.0, "series": [{"data": [[600.0, 380.0], [700.0, 272.0], [800.0, 239.0], [900.0, 178.0], [1000.0, 158.0], [1100.0, 119.0], [1200.0, 92.0], [1300.0, 86.0], [1400.0, 73.0], [1500.0, 46.0], [1600.0, 51.0], [1700.0, 69.0], [1800.0, 56.0], [1900.0, 69.0], [2000.0, 70.0], [2100.0, 67.0], [2200.0, 63.0], [2300.0, 63.0], [2400.0, 60.0], [2500.0, 40.0], [2600.0, 28.0], [2700.0, 21.0], [2800.0, 20.0], [2900.0, 16.0], [3000.0, 13.0], [3100.0, 11.0], [3300.0, 12.0], [3200.0, 5.0], [3400.0, 11.0], [3500.0, 9.0], [3600.0, 8.0], [3700.0, 1.0], [3800.0, 3.0], [3900.0, 6.0], [4000.0, 4.0], [4300.0, 3.0], [4200.0, 8.0], [4100.0, 8.0], [4400.0, 8.0], [4500.0, 4.0], [4600.0, 6.0], [4700.0, 3.0], [4800.0, 5.0], [5000.0, 4.0], [4900.0, 5.0], [5100.0, 1.0], [5300.0, 2.0], [5200.0, 3.0], [5400.0, 2.0], [5600.0, 2.0], [5500.0, 3.0], [5700.0, 4.0], [5800.0, 1.0], [6000.0, 1.0], [5900.0, 3.0], [6300.0, 3.0], [6200.0, 1.0], [6400.0, 4.0], [6600.0, 1.0], [6500.0, 1.0], [6800.0, 2.0], [7100.0, 2.0], [7000.0, 3.0], [7200.0, 1.0], [7400.0, 1.0], [7300.0, 1.0], [7600.0, 2.0], [7800.0, 1.0], [8100.0, 1.0], [8600.0, 1.0], [9000.0, 2.0], [9100.0, 1.0], [9300.0, 1.0], [10400.0, 2.0], [10600.0, 1.0], [10900.0, 1.0], [11300.0, 1.0], [12800.0, 1.0], [13700.0, 1.0], [13900.0, 1.0], [17300.0, 1.0], [17400.0, 1.0], [200.0, 619.0], [300.0, 948.0], [90000.0, 1.0], [400.0, 659.0], [500.0, 430.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2231.0, "series": [{"data": [[0.0, 2231.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2022.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 937.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.210526315789473, "minX": 1.60219812E12, "maxY": 10.0, "series": [{"data": [[1.60219824E12, 10.0], [1.60219842E12, 10.0], [1.60219812E12, 10.0], [1.6021986E12, 10.0], [1.6021983E12, 10.0], [1.60219848E12, 10.0], [1.60219818E12, 10.0], [1.60219866E12, 9.210526315789473], [1.60219836E12, 10.0], [1.60219854E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219866E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 330.0, "minX": 1.0, "maxY": 5724.0, "series": [{"data": [[8.0, 1348.0], [4.0, 1830.0], [2.0, 3150.0], [1.0, 5724.0], [9.0, 331.0], [10.0, 988.636626785025], [5.0, 774.0], [6.0, 351.0], [3.0, 330.0], [7.0, 822.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 989.7466769408591]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 436.76666666666665, "minX": 1.60219812E12, "maxY": 3805581.0, "series": [{"data": [[1.60219824E12, 3736877.6166666667], [1.60219842E12, 3270905.85], [1.60219812E12, 1671326.55], [1.6021986E12, 2961591.8833333333], [1.6021983E12, 3723459.6666666665], [1.60219848E12, 2786058.55], [1.60219818E12, 2599750.0166666666], [1.60219866E12, 314518.18333333335], [1.60219836E12, 2708269.783333333], [1.60219854E12, 3805581.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60219824E12, 5165.166666666667], [1.60219842E12, 4138.316666666667], [1.60219812E12, 1646.4666666666667], [1.6021986E12, 4339.833333333333], [1.6021983E12, 4640.516666666666], [1.60219848E12, 4567.25], [1.60219818E12, 4518.383333333333], [1.60219866E12, 436.76666666666665], [1.60219836E12, 3783.65], [1.60219854E12, 5347.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219866E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 856.007092198582, "minX": 1.60219812E12, "maxY": 1659.7192982456138, "series": [{"data": [[1.60219824E12, 864.6579710144924], [1.60219842E12, 1044.0486111111102], [1.60219812E12, 1166.2256637168146], [1.6021986E12, 1012.1721739130435], [1.6021983E12, 920.23076923077], [1.60219848E12, 951.9471153846157], [1.60219818E12, 969.6751999999999], [1.60219866E12, 1659.7192982456138], [1.60219836E12, 1262.5717131474112], [1.60219854E12, 856.007092198582]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219866E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 854.2865248226946, "minX": 1.60219812E12, "maxY": 1658.0175438596495, "series": [{"data": [[1.60219824E12, 861.9724637681162], [1.60219842E12, 1041.9253472222222], [1.60219812E12, 1163.075221238939], [1.6021986E12, 1009.8800000000011], [1.6021983E12, 917.5941080196402], [1.60219848E12, 950.5897435897444], [1.60219818E12, 967.7552000000004], [1.60219866E12, 1658.0175438596495], [1.60219836E12, 1260.7071713147402], [1.60219854E12, 854.2865248226946]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219866E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60219812E12, "maxY": 0.44247787610619466, "series": [{"data": [[1.60219824E12, 0.020289855072463763], [1.60219842E12, 0.01909722222222223], [1.60219812E12, 0.44247787610619466], [1.6021986E12, 0.019130434782608705], [1.6021983E12, 0.011456628477905071], [1.60219848E12, 0.01442307692307692], [1.60219818E12, 0.011200000000000002], [1.60219866E12, 0.0], [1.60219836E12, 0.013944223107569738], [1.60219854E12, 0.011347517730496462]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219866E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 221.0, "minX": 1.60219812E12, "maxY": 17482.0, "series": [{"data": [[1.60219824E12, 9375.0], [1.60219842E12, 17482.0], [1.60219812E12, 10442.0], [1.6021986E12, 7693.0], [1.6021983E12, 8110.0], [1.60219848E12, 7421.0], [1.60219818E12, 13907.0], [1.60219866E12, 8643.0], [1.60219836E12, 17360.0], [1.60219854E12, 6319.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60219824E12, 233.21899983525276], [1.60219842E12, 233.1929998624325], [1.60219812E12, 239.08599989175798], [1.6021986E12, 228.7359994506836], [1.6021983E12, 230.0], [1.60219848E12, 230.6249998509884], [1.60219818E12, 230.90199955224992], [1.60219866E12, 259.0], [1.60219836E12, 226.51799988031388], [1.60219854E12, 228.35399983167648]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60219824E12, 233.8409000658989], [1.60219842E12, 233.71230005502701], [1.60219812E12, 239.49460004329683], [1.6021986E12, 230.80960021972658], [1.6021983E12, 230.05880005836488], [1.60219848E12, 231.18750005960464], [1.60219818E12, 232.19740005970002], [1.60219866E12, 259.0], [1.60219836E12, 226.96980004787446], [1.60219854E12, 228.9894000673294]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60219824E12, 233.5644999176264], [1.60219842E12, 233.48149993121623], [1.60219812E12, 239.31299994587897], [1.6021986E12, 229.88799972534179], [1.6021983E12, 230.0], [1.60219848E12, 230.9374999254942], [1.60219818E12, 231.84099977612496], [1.60219866E12, 259.0], [1.60219836E12, 226.76899994015693], [1.60219854E12, 228.70699991583825]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60219824E12, 226.0], [1.60219842E12, 228.0], [1.60219812E12, 237.0], [1.6021986E12, 221.0], [1.6021983E12, 225.0], [1.60219848E12, 221.0], [1.60219818E12, 221.0], [1.60219866E12, 259.0], [1.60219836E12, 221.0], [1.60219854E12, 225.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60219824E12, 480.5], [1.60219842E12, 696.0], [1.60219812E12, 723.0], [1.6021986E12, 627.0], [1.6021983E12, 509.0], [1.60219848E12, 517.5], [1.60219818E12, 629.0], [1.60219866E12, 782.0], [1.60219836E12, 641.0], [1.60219854E12, 481.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219866E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 259.0, "minX": 1.0, "maxY": 90091.0, "series": [{"data": [[2.0, 2343.5], [3.0, 1271.5], [4.0, 1244.0], [5.0, 1068.0], [6.0, 1058.5], [7.0, 875.0], [8.0, 738.5], [9.0, 690.0], [10.0, 645.0], [11.0, 651.0], [12.0, 592.0], [13.0, 590.5], [14.0, 550.5], [15.0, 419.0], [16.0, 493.0], [1.0, 3150.0], [17.0, 390.0], [18.0, 381.5], [19.0, 385.5], [20.0, 363.0], [21.0, 383.0], [22.0, 294.0], [23.0, 259.0], [24.0, 321.5], [26.0, 316.5], [27.0, 311.0], [28.0, 260.5], [29.0, 302.0], [30.0, 280.0], [31.0, 294.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 90091.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 258.0, "minX": 1.0, "maxY": 90090.0, "series": [{"data": [[2.0, 2341.5], [3.0, 1268.5], [4.0, 1242.0], [5.0, 1067.0], [6.0, 1053.5], [7.0, 872.5], [8.0, 737.0], [9.0, 688.0], [10.0, 645.0], [11.0, 649.5], [12.0, 591.0], [13.0, 589.5], [14.0, 549.5], [15.0, 419.0], [16.0, 492.5], [1.0, 3142.0], [17.0, 390.0], [18.0, 381.5], [19.0, 385.5], [20.0, 362.5], [21.0, 383.0], [22.0, 294.0], [23.0, 258.0], [24.0, 321.0], [26.0, 316.5], [27.0, 311.0], [28.0, 260.5], [29.0, 302.0], [30.0, 280.0], [31.0, 293.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 90090.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.60219812E12, "maxY": 11.75, "series": [{"data": [[1.60219824E12, 11.5], [1.60219842E12, 9.6], [1.60219812E12, 3.933333333333333], [1.6021986E12, 9.583333333333334], [1.6021983E12, 10.183333333333334], [1.60219848E12, 10.4], [1.60219818E12, 10.416666666666666], [1.60219866E12, 0.7833333333333333], [1.60219836E12, 8.366666666666667], [1.60219854E12, 11.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219866E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219812E12, "maxY": 11.75, "series": [{"data": [[1.60219824E12, 11.5], [1.60219842E12, 9.6], [1.60219812E12, 3.7666666666666666], [1.6021986E12, 9.583333333333334], [1.6021983E12, 10.183333333333334], [1.60219848E12, 10.4], [1.60219818E12, 10.416666666666666], [1.60219866E12, 0.95], [1.60219836E12, 8.35], [1.60219854E12, 11.75]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60219836E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60219866E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219812E12, "maxY": 11.75, "series": [{"data": [[1.60219824E12, 11.5], [1.60219842E12, 9.6], [1.60219812E12, 3.7666666666666666], [1.6021986E12, 9.583333333333334], [1.6021983E12, 10.183333333333334], [1.60219848E12, 10.4], [1.60219818E12, 10.416666666666666], [1.60219866E12, 0.95], [1.60219836E12, 8.35], [1.60219854E12, 11.75]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60219836E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219866E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60219812E12, "maxY": 11.75, "series": [{"data": [[1.60219824E12, 11.5], [1.60219842E12, 9.6], [1.60219812E12, 3.7666666666666666], [1.6021986E12, 9.583333333333334], [1.6021983E12, 10.183333333333334], [1.60219848E12, 10.4], [1.60219818E12, 10.416666666666666], [1.60219866E12, 0.95], [1.60219836E12, 8.35], [1.60219854E12, 11.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60219836E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60219866E12, "title": "Total Transactions Per Second"}},
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

