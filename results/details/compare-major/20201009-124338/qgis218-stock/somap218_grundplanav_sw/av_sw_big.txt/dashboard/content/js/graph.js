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
        data: {"result": {"minY": 215.0, "minX": 0.0, "maxY": 90090.0, "series": [{"data": [[0.0, 215.0], [0.1, 219.0], [0.2, 221.0], [0.3, 224.0], [0.4, 225.0], [0.5, 225.0], [0.6, 226.0], [0.7, 227.0], [0.8, 227.0], [0.9, 227.0], [1.0, 228.0], [1.1, 228.0], [1.2, 229.0], [1.3, 229.0], [1.4, 230.0], [1.5, 230.0], [1.6, 231.0], [1.7, 231.0], [1.8, 231.0], [1.9, 232.0], [2.0, 232.0], [2.1, 233.0], [2.2, 233.0], [2.3, 234.0], [2.4, 234.0], [2.5, 235.0], [2.6, 235.0], [2.7, 236.0], [2.8, 236.0], [2.9, 236.0], [3.0, 237.0], [3.1, 237.0], [3.2, 238.0], [3.3, 238.0], [3.4, 238.0], [3.5, 239.0], [3.6, 239.0], [3.7, 240.0], [3.8, 240.0], [3.9, 240.0], [4.0, 241.0], [4.1, 242.0], [4.2, 242.0], [4.3, 243.0], [4.4, 243.0], [4.5, 243.0], [4.6, 244.0], [4.7, 244.0], [4.8, 244.0], [4.9, 245.0], [5.0, 245.0], [5.1, 245.0], [5.2, 246.0], [5.3, 246.0], [5.4, 246.0], [5.5, 246.0], [5.6, 247.0], [5.7, 247.0], [5.8, 248.0], [5.9, 248.0], [6.0, 248.0], [6.1, 249.0], [6.2, 249.0], [6.3, 250.0], [6.4, 250.0], [6.5, 251.0], [6.6, 252.0], [6.7, 253.0], [6.8, 253.0], [6.9, 254.0], [7.0, 255.0], [7.1, 256.0], [7.2, 256.0], [7.3, 257.0], [7.4, 258.0], [7.5, 258.0], [7.6, 259.0], [7.7, 260.0], [7.8, 262.0], [7.9, 263.0], [8.0, 263.0], [8.1, 263.0], [8.2, 264.0], [8.3, 265.0], [8.4, 266.0], [8.5, 266.0], [8.6, 267.0], [8.7, 268.0], [8.8, 268.0], [8.9, 269.0], [9.0, 270.0], [9.1, 270.0], [9.2, 271.0], [9.3, 271.0], [9.4, 272.0], [9.5, 273.0], [9.6, 274.0], [9.7, 274.0], [9.8, 275.0], [9.9, 275.0], [10.0, 277.0], [10.1, 278.0], [10.2, 279.0], [10.3, 280.0], [10.4, 281.0], [10.5, 282.0], [10.6, 283.0], [10.7, 284.0], [10.8, 284.0], [10.9, 285.0], [11.0, 286.0], [11.1, 286.0], [11.2, 288.0], [11.3, 289.0], [11.4, 289.0], [11.5, 290.0], [11.6, 291.0], [11.7, 292.0], [11.8, 293.0], [11.9, 293.0], [12.0, 294.0], [12.1, 294.0], [12.2, 295.0], [12.3, 296.0], [12.4, 296.0], [12.5, 297.0], [12.6, 297.0], [12.7, 298.0], [12.8, 299.0], [12.9, 299.0], [13.0, 300.0], [13.1, 301.0], [13.2, 301.0], [13.3, 302.0], [13.4, 302.0], [13.5, 303.0], [13.6, 304.0], [13.7, 304.0], [13.8, 304.0], [13.9, 304.0], [14.0, 305.0], [14.1, 306.0], [14.2, 306.0], [14.3, 306.0], [14.4, 307.0], [14.5, 308.0], [14.6, 308.0], [14.7, 308.0], [14.8, 309.0], [14.9, 309.0], [15.0, 310.0], [15.1, 310.0], [15.2, 311.0], [15.3, 311.0], [15.4, 312.0], [15.5, 312.0], [15.6, 313.0], [15.7, 313.0], [15.8, 313.0], [15.9, 314.0], [16.0, 314.0], [16.1, 315.0], [16.2, 315.0], [16.3, 316.0], [16.4, 316.0], [16.5, 316.0], [16.6, 317.0], [16.7, 317.0], [16.8, 318.0], [16.9, 318.0], [17.0, 319.0], [17.1, 319.0], [17.2, 319.0], [17.3, 320.0], [17.4, 320.0], [17.5, 320.0], [17.6, 321.0], [17.7, 321.0], [17.8, 322.0], [17.9, 323.0], [18.0, 323.0], [18.1, 324.0], [18.2, 324.0], [18.3, 325.0], [18.4, 325.0], [18.5, 326.0], [18.6, 327.0], [18.7, 327.0], [18.8, 327.0], [18.9, 328.0], [19.0, 328.0], [19.1, 328.0], [19.2, 329.0], [19.3, 330.0], [19.4, 330.0], [19.5, 331.0], [19.6, 331.0], [19.7, 332.0], [19.8, 332.0], [19.9, 333.0], [20.0, 334.0], [20.1, 334.0], [20.2, 335.0], [20.3, 335.0], [20.4, 335.0], [20.5, 336.0], [20.6, 337.0], [20.7, 337.0], [20.8, 338.0], [20.9, 339.0], [21.0, 339.0], [21.1, 340.0], [21.2, 340.0], [21.3, 341.0], [21.4, 341.0], [21.5, 342.0], [21.6, 342.0], [21.7, 343.0], [21.8, 343.0], [21.9, 344.0], [22.0, 345.0], [22.1, 346.0], [22.2, 346.0], [22.3, 347.0], [22.4, 348.0], [22.5, 348.0], [22.6, 349.0], [22.7, 349.0], [22.8, 350.0], [22.9, 350.0], [23.0, 350.0], [23.1, 351.0], [23.2, 352.0], [23.3, 353.0], [23.4, 354.0], [23.5, 355.0], [23.6, 355.0], [23.7, 356.0], [23.8, 356.0], [23.9, 357.0], [24.0, 357.0], [24.1, 358.0], [24.2, 359.0], [24.3, 359.0], [24.4, 360.0], [24.5, 361.0], [24.6, 361.0], [24.7, 362.0], [24.8, 363.0], [24.9, 363.0], [25.0, 363.0], [25.1, 364.0], [25.2, 364.0], [25.3, 365.0], [25.4, 366.0], [25.5, 366.0], [25.6, 368.0], [25.7, 369.0], [25.8, 370.0], [25.9, 370.0], [26.0, 371.0], [26.1, 372.0], [26.2, 372.0], [26.3, 373.0], [26.4, 374.0], [26.5, 375.0], [26.6, 376.0], [26.7, 376.0], [26.8, 377.0], [26.9, 378.0], [27.0, 379.0], [27.1, 380.0], [27.2, 381.0], [27.3, 381.0], [27.4, 382.0], [27.5, 383.0], [27.6, 384.0], [27.7, 384.0], [27.8, 385.0], [27.9, 386.0], [28.0, 387.0], [28.1, 387.0], [28.2, 387.0], [28.3, 388.0], [28.4, 388.0], [28.5, 389.0], [28.6, 389.0], [28.7, 390.0], [28.8, 390.0], [28.9, 391.0], [29.0, 392.0], [29.1, 392.0], [29.2, 393.0], [29.3, 393.0], [29.4, 394.0], [29.5, 395.0], [29.6, 395.0], [29.7, 396.0], [29.8, 397.0], [29.9, 398.0], [30.0, 399.0], [30.1, 400.0], [30.2, 400.0], [30.3, 401.0], [30.4, 402.0], [30.5, 402.0], [30.6, 403.0], [30.7, 403.0], [30.8, 404.0], [30.9, 404.0], [31.0, 404.0], [31.1, 405.0], [31.2, 405.0], [31.3, 406.0], [31.4, 407.0], [31.5, 408.0], [31.6, 408.0], [31.7, 408.0], [31.8, 409.0], [31.9, 410.0], [32.0, 411.0], [32.1, 411.0], [32.2, 412.0], [32.3, 412.0], [32.4, 413.0], [32.5, 414.0], [32.6, 414.0], [32.7, 416.0], [32.8, 416.0], [32.9, 417.0], [33.0, 419.0], [33.1, 419.0], [33.2, 420.0], [33.3, 421.0], [33.4, 421.0], [33.5, 421.0], [33.6, 422.0], [33.7, 424.0], [33.8, 424.0], [33.9, 425.0], [34.0, 426.0], [34.1, 428.0], [34.2, 428.0], [34.3, 429.0], [34.4, 430.0], [34.5, 430.0], [34.6, 431.0], [34.7, 432.0], [34.8, 434.0], [34.9, 434.0], [35.0, 435.0], [35.1, 436.0], [35.2, 436.0], [35.3, 437.0], [35.4, 438.0], [35.5, 439.0], [35.6, 439.0], [35.7, 440.0], [35.8, 440.0], [35.9, 441.0], [36.0, 441.0], [36.1, 443.0], [36.2, 444.0], [36.3, 445.0], [36.4, 446.0], [36.5, 446.0], [36.6, 447.0], [36.7, 448.0], [36.8, 449.0], [36.9, 450.0], [37.0, 451.0], [37.1, 452.0], [37.2, 453.0], [37.3, 453.0], [37.4, 454.0], [37.5, 455.0], [37.6, 455.0], [37.7, 456.0], [37.8, 457.0], [37.9, 457.0], [38.0, 458.0], [38.1, 460.0], [38.2, 460.0], [38.3, 461.0], [38.4, 461.0], [38.5, 463.0], [38.6, 464.0], [38.7, 465.0], [38.8, 466.0], [38.9, 467.0], [39.0, 467.0], [39.1, 468.0], [39.2, 469.0], [39.3, 470.0], [39.4, 470.0], [39.5, 471.0], [39.6, 472.0], [39.7, 473.0], [39.8, 474.0], [39.9, 474.0], [40.0, 475.0], [40.1, 476.0], [40.2, 477.0], [40.3, 478.0], [40.4, 479.0], [40.5, 479.0], [40.6, 480.0], [40.7, 481.0], [40.8, 481.0], [40.9, 483.0], [41.0, 483.0], [41.1, 485.0], [41.2, 485.0], [41.3, 486.0], [41.4, 487.0], [41.5, 487.0], [41.6, 488.0], [41.7, 488.0], [41.8, 489.0], [41.9, 490.0], [42.0, 491.0], [42.1, 492.0], [42.2, 493.0], [42.3, 493.0], [42.4, 494.0], [42.5, 495.0], [42.6, 495.0], [42.7, 496.0], [42.8, 497.0], [42.9, 498.0], [43.0, 499.0], [43.1, 499.0], [43.2, 500.0], [43.3, 501.0], [43.4, 501.0], [43.5, 503.0], [43.6, 504.0], [43.7, 506.0], [43.8, 506.0], [43.9, 508.0], [44.0, 509.0], [44.1, 510.0], [44.2, 511.0], [44.3, 512.0], [44.4, 514.0], [44.5, 515.0], [44.6, 516.0], [44.7, 517.0], [44.8, 517.0], [44.9, 518.0], [45.0, 518.0], [45.1, 519.0], [45.2, 520.0], [45.3, 521.0], [45.4, 523.0], [45.5, 524.0], [45.6, 525.0], [45.7, 526.0], [45.8, 526.0], [45.9, 527.0], [46.0, 528.0], [46.1, 529.0], [46.2, 530.0], [46.3, 531.0], [46.4, 532.0], [46.5, 533.0], [46.6, 535.0], [46.7, 536.0], [46.8, 537.0], [46.9, 539.0], [47.0, 540.0], [47.1, 542.0], [47.2, 543.0], [47.3, 545.0], [47.4, 545.0], [47.5, 547.0], [47.6, 548.0], [47.7, 550.0], [47.8, 551.0], [47.9, 552.0], [48.0, 554.0], [48.1, 555.0], [48.2, 556.0], [48.3, 557.0], [48.4, 558.0], [48.5, 561.0], [48.6, 562.0], [48.7, 563.0], [48.8, 564.0], [48.9, 565.0], [49.0, 566.0], [49.1, 567.0], [49.2, 569.0], [49.3, 570.0], [49.4, 571.0], [49.5, 572.0], [49.6, 575.0], [49.7, 576.0], [49.8, 577.0], [49.9, 577.0], [50.0, 578.0], [50.1, 578.0], [50.2, 580.0], [50.3, 580.0], [50.4, 581.0], [50.5, 582.0], [50.6, 584.0], [50.7, 586.0], [50.8, 587.0], [50.9, 587.0], [51.0, 587.0], [51.1, 588.0], [51.2, 590.0], [51.3, 591.0], [51.4, 593.0], [51.5, 594.0], [51.6, 595.0], [51.7, 596.0], [51.8, 598.0], [51.9, 600.0], [52.0, 600.0], [52.1, 603.0], [52.2, 603.0], [52.3, 605.0], [52.4, 606.0], [52.5, 606.0], [52.6, 607.0], [52.7, 609.0], [52.8, 611.0], [52.9, 612.0], [53.0, 613.0], [53.1, 615.0], [53.2, 617.0], [53.3, 619.0], [53.4, 621.0], [53.5, 624.0], [53.6, 624.0], [53.7, 626.0], [53.8, 629.0], [53.9, 630.0], [54.0, 631.0], [54.1, 633.0], [54.2, 635.0], [54.3, 636.0], [54.4, 638.0], [54.5, 641.0], [54.6, 642.0], [54.7, 642.0], [54.8, 644.0], [54.9, 645.0], [55.0, 646.0], [55.1, 648.0], [55.2, 649.0], [55.3, 650.0], [55.4, 651.0], [55.5, 654.0], [55.6, 655.0], [55.7, 657.0], [55.8, 659.0], [55.9, 660.0], [56.0, 661.0], [56.1, 663.0], [56.2, 664.0], [56.3, 667.0], [56.4, 668.0], [56.5, 669.0], [56.6, 671.0], [56.7, 672.0], [56.8, 673.0], [56.9, 675.0], [57.0, 675.0], [57.1, 677.0], [57.2, 678.0], [57.3, 679.0], [57.4, 681.0], [57.5, 682.0], [57.6, 685.0], [57.7, 686.0], [57.8, 688.0], [57.9, 691.0], [58.0, 692.0], [58.1, 693.0], [58.2, 695.0], [58.3, 697.0], [58.4, 698.0], [58.5, 699.0], [58.6, 701.0], [58.7, 702.0], [58.8, 703.0], [58.9, 704.0], [59.0, 707.0], [59.1, 708.0], [59.2, 710.0], [59.3, 710.0], [59.4, 712.0], [59.5, 714.0], [59.6, 715.0], [59.7, 717.0], [59.8, 718.0], [59.9, 720.0], [60.0, 720.0], [60.1, 721.0], [60.2, 725.0], [60.3, 727.0], [60.4, 730.0], [60.5, 732.0], [60.6, 733.0], [60.7, 734.0], [60.8, 736.0], [60.9, 737.0], [61.0, 738.0], [61.1, 740.0], [61.2, 741.0], [61.3, 744.0], [61.4, 746.0], [61.5, 749.0], [61.6, 750.0], [61.7, 751.0], [61.8, 753.0], [61.9, 756.0], [62.0, 757.0], [62.1, 760.0], [62.2, 761.0], [62.3, 762.0], [62.4, 765.0], [62.5, 766.0], [62.6, 768.0], [62.7, 771.0], [62.8, 772.0], [62.9, 775.0], [63.0, 776.0], [63.1, 778.0], [63.2, 778.0], [63.3, 780.0], [63.4, 781.0], [63.5, 782.0], [63.6, 783.0], [63.7, 785.0], [63.8, 787.0], [63.9, 790.0], [64.0, 792.0], [64.1, 795.0], [64.2, 798.0], [64.3, 801.0], [64.4, 804.0], [64.5, 805.0], [64.6, 807.0], [64.7, 809.0], [64.8, 811.0], [64.9, 814.0], [65.0, 815.0], [65.1, 817.0], [65.2, 820.0], [65.3, 821.0], [65.4, 823.0], [65.5, 825.0], [65.6, 828.0], [65.7, 831.0], [65.8, 833.0], [65.9, 835.0], [66.0, 837.0], [66.1, 839.0], [66.2, 840.0], [66.3, 841.0], [66.4, 842.0], [66.5, 844.0], [66.6, 845.0], [66.7, 846.0], [66.8, 848.0], [66.9, 849.0], [67.0, 851.0], [67.1, 853.0], [67.2, 857.0], [67.3, 859.0], [67.4, 864.0], [67.5, 867.0], [67.6, 871.0], [67.7, 872.0], [67.8, 875.0], [67.9, 876.0], [68.0, 879.0], [68.1, 880.0], [68.2, 882.0], [68.3, 884.0], [68.4, 885.0], [68.5, 887.0], [68.6, 889.0], [68.7, 892.0], [68.8, 895.0], [68.9, 898.0], [69.0, 900.0], [69.1, 903.0], [69.2, 906.0], [69.3, 908.0], [69.4, 911.0], [69.5, 913.0], [69.6, 916.0], [69.7, 918.0], [69.8, 920.0], [69.9, 924.0], [70.0, 927.0], [70.1, 929.0], [70.2, 931.0], [70.3, 935.0], [70.4, 939.0], [70.5, 941.0], [70.6, 944.0], [70.7, 947.0], [70.8, 950.0], [70.9, 953.0], [71.0, 956.0], [71.1, 958.0], [71.2, 961.0], [71.3, 962.0], [71.4, 965.0], [71.5, 967.0], [71.6, 969.0], [71.7, 972.0], [71.8, 973.0], [71.9, 976.0], [72.0, 977.0], [72.1, 979.0], [72.2, 982.0], [72.3, 985.0], [72.4, 987.0], [72.5, 989.0], [72.6, 993.0], [72.7, 998.0], [72.8, 1001.0], [72.9, 1003.0], [73.0, 1005.0], [73.1, 1010.0], [73.2, 1015.0], [73.3, 1018.0], [73.4, 1020.0], [73.5, 1021.0], [73.6, 1023.0], [73.7, 1026.0], [73.8, 1029.0], [73.9, 1031.0], [74.0, 1037.0], [74.1, 1042.0], [74.2, 1045.0], [74.3, 1047.0], [74.4, 1050.0], [74.5, 1056.0], [74.6, 1060.0], [74.7, 1065.0], [74.8, 1068.0], [74.9, 1070.0], [75.0, 1075.0], [75.1, 1078.0], [75.2, 1079.0], [75.3, 1084.0], [75.4, 1087.0], [75.5, 1091.0], [75.6, 1093.0], [75.7, 1097.0], [75.8, 1103.0], [75.9, 1109.0], [76.0, 1116.0], [76.1, 1121.0], [76.2, 1129.0], [76.3, 1132.0], [76.4, 1135.0], [76.5, 1142.0], [76.6, 1148.0], [76.7, 1152.0], [76.8, 1156.0], [76.9, 1160.0], [77.0, 1163.0], [77.1, 1165.0], [77.2, 1172.0], [77.3, 1178.0], [77.4, 1182.0], [77.5, 1185.0], [77.6, 1189.0], [77.7, 1197.0], [77.8, 1202.0], [77.9, 1206.0], [78.0, 1213.0], [78.1, 1221.0], [78.2, 1226.0], [78.3, 1236.0], [78.4, 1239.0], [78.5, 1249.0], [78.6, 1257.0], [78.7, 1264.0], [78.8, 1267.0], [78.9, 1268.0], [79.0, 1274.0], [79.1, 1284.0], [79.2, 1292.0], [79.3, 1298.0], [79.4, 1305.0], [79.5, 1317.0], [79.6, 1321.0], [79.7, 1327.0], [79.8, 1331.0], [79.9, 1338.0], [80.0, 1345.0], [80.1, 1353.0], [80.2, 1368.0], [80.3, 1370.0], [80.4, 1382.0], [80.5, 1393.0], [80.6, 1403.0], [80.7, 1411.0], [80.8, 1424.0], [80.9, 1434.0], [81.0, 1441.0], [81.1, 1447.0], [81.2, 1458.0], [81.3, 1469.0], [81.4, 1476.0], [81.5, 1482.0], [81.6, 1485.0], [81.7, 1492.0], [81.8, 1507.0], [81.9, 1512.0], [82.0, 1522.0], [82.1, 1533.0], [82.2, 1545.0], [82.3, 1547.0], [82.4, 1555.0], [82.5, 1564.0], [82.6, 1569.0], [82.7, 1584.0], [82.8, 1600.0], [82.9, 1604.0], [83.0, 1619.0], [83.1, 1628.0], [83.2, 1632.0], [83.3, 1645.0], [83.4, 1649.0], [83.5, 1655.0], [83.6, 1660.0], [83.7, 1670.0], [83.8, 1681.0], [83.9, 1687.0], [84.0, 1700.0], [84.1, 1710.0], [84.2, 1718.0], [84.3, 1723.0], [84.4, 1727.0], [84.5, 1733.0], [84.6, 1740.0], [84.7, 1752.0], [84.8, 1760.0], [84.9, 1768.0], [85.0, 1772.0], [85.1, 1780.0], [85.2, 1786.0], [85.3, 1794.0], [85.4, 1801.0], [85.5, 1806.0], [85.6, 1810.0], [85.7, 1814.0], [85.8, 1823.0], [85.9, 1833.0], [86.0, 1843.0], [86.1, 1849.0], [86.2, 1858.0], [86.3, 1869.0], [86.4, 1882.0], [86.5, 1893.0], [86.6, 1901.0], [86.7, 1906.0], [86.8, 1911.0], [86.9, 1917.0], [87.0, 1927.0], [87.1, 1932.0], [87.2, 1938.0], [87.3, 1949.0], [87.4, 1960.0], [87.5, 1968.0], [87.6, 1976.0], [87.7, 1981.0], [87.8, 1991.0], [87.9, 1998.0], [88.0, 2010.0], [88.1, 2016.0], [88.2, 2022.0], [88.3, 2030.0], [88.4, 2044.0], [88.5, 2052.0], [88.6, 2055.0], [88.7, 2063.0], [88.8, 2080.0], [88.9, 2095.0], [89.0, 2102.0], [89.1, 2114.0], [89.2, 2122.0], [89.3, 2133.0], [89.4, 2143.0], [89.5, 2150.0], [89.6, 2159.0], [89.7, 2165.0], [89.8, 2169.0], [89.9, 2177.0], [90.0, 2182.0], [90.1, 2189.0], [90.2, 2197.0], [90.3, 2202.0], [90.4, 2213.0], [90.5, 2221.0], [90.6, 2226.0], [90.7, 2237.0], [90.8, 2240.0], [90.9, 2249.0], [91.0, 2256.0], [91.1, 2266.0], [91.2, 2275.0], [91.3, 2281.0], [91.4, 2292.0], [91.5, 2313.0], [91.6, 2319.0], [91.7, 2329.0], [91.8, 2337.0], [91.9, 2341.0], [92.0, 2345.0], [92.1, 2353.0], [92.2, 2359.0], [92.3, 2376.0], [92.4, 2387.0], [92.5, 2395.0], [92.6, 2410.0], [92.7, 2424.0], [92.8, 2428.0], [92.9, 2436.0], [93.0, 2442.0], [93.1, 2458.0], [93.2, 2475.0], [93.3, 2483.0], [93.4, 2486.0], [93.5, 2493.0], [93.6, 2508.0], [93.7, 2514.0], [93.8, 2527.0], [93.9, 2549.0], [94.0, 2561.0], [94.1, 2570.0], [94.2, 2579.0], [94.3, 2589.0], [94.4, 2592.0], [94.5, 2614.0], [94.6, 2642.0], [94.7, 2671.0], [94.8, 2690.0], [94.9, 2702.0], [95.0, 2730.0], [95.1, 2758.0], [95.2, 2773.0], [95.3, 2804.0], [95.4, 2822.0], [95.5, 2834.0], [95.6, 2853.0], [95.7, 2873.0], [95.8, 2923.0], [95.9, 2951.0], [96.0, 2991.0], [96.1, 3015.0], [96.2, 3044.0], [96.3, 3103.0], [96.4, 3154.0], [96.5, 3197.0], [96.6, 3267.0], [96.7, 3311.0], [96.8, 3335.0], [96.9, 3390.0], [97.0, 3478.0], [97.1, 3540.0], [97.2, 3585.0], [97.3, 3682.0], [97.4, 3819.0], [97.5, 3877.0], [97.6, 3957.0], [97.7, 4008.0], [97.8, 4091.0], [97.9, 4130.0], [98.0, 4216.0], [98.1, 4302.0], [98.2, 4374.0], [98.3, 4429.0], [98.4, 4506.0], [98.5, 4692.0], [98.6, 4784.0], [98.7, 4954.0], [98.8, 4998.0], [98.9, 5112.0], [99.0, 5335.0], [99.1, 5595.0], [99.2, 5978.0], [99.3, 6451.0], [99.4, 6681.0], [99.5, 7220.0], [99.6, 7885.0], [99.7, 8678.0], [99.8, 10016.0], [99.9, 12307.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 891.0, "series": [{"data": [[600.0, 348.0], [700.0, 297.0], [800.0, 246.0], [900.0, 194.0], [1000.0, 157.0], [1100.0, 104.0], [1200.0, 81.0], [1300.0, 65.0], [1400.0, 62.0], [1500.0, 54.0], [1600.0, 62.0], [1700.0, 73.0], [1800.0, 61.0], [1900.0, 69.0], [2000.0, 55.0], [2100.0, 69.0], [2200.0, 62.0], [2300.0, 53.0], [2400.0, 54.0], [2500.0, 45.0], [2600.0, 24.0], [2700.0, 22.0], [2800.0, 25.0], [2900.0, 14.0], [3000.0, 12.0], [3100.0, 12.0], [3300.0, 13.0], [3200.0, 8.0], [3400.0, 7.0], [3500.0, 8.0], [3700.0, 4.0], [3600.0, 5.0], [3800.0, 8.0], [3900.0, 8.0], [4000.0, 7.0], [4300.0, 7.0], [4100.0, 9.0], [4200.0, 5.0], [4400.0, 8.0], [4500.0, 3.0], [4600.0, 4.0], [4700.0, 5.0], [4800.0, 3.0], [4900.0, 7.0], [5000.0, 4.0], [5100.0, 2.0], [5200.0, 3.0], [5300.0, 2.0], [5600.0, 2.0], [5500.0, 5.0], [5700.0, 2.0], [5900.0, 2.0], [6000.0, 1.0], [6200.0, 2.0], [6400.0, 1.0], [6600.0, 3.0], [6500.0, 2.0], [6900.0, 1.0], [6700.0, 2.0], [7000.0, 1.0], [7100.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 2.0], [8100.0, 1.0], [8700.0, 1.0], [8600.0, 1.0], [8400.0, 1.0], [9100.0, 2.0], [10200.0, 1.0], [10000.0, 1.0], [9800.0, 1.0], [10400.0, 1.0], [10700.0, 1.0], [11100.0, 1.0], [12300.0, 1.0], [13300.0, 1.0], [13400.0, 1.0], [14400.0, 1.0], [16600.0, 1.0], [200.0, 670.0], [300.0, 891.0], [90000.0, 1.0], [400.0, 677.0], [500.0, 452.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2244.0, "series": [{"data": [[0.0, 2244.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2000.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 946.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.889975550122248, "minX": 1.6022478E12, "maxY": 10.0, "series": [{"data": [[1.60224816E12, 10.0], [1.60224786E12, 10.0], [1.60224804E12, 10.0], [1.60224822E12, 10.0], [1.60224792E12, 10.0], [1.6022481E12, 10.0], [1.60224828E12, 9.889975550122248], [1.6022478E12, 10.0], [1.60224798E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224828E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 323.0, "minX": 1.0, "maxY": 5998.0, "series": [{"data": [[8.0, 366.0], [4.0, 2853.0], [2.0, 3248.0], [1.0, 5998.0], [9.0, 1516.0], [10.0, 980.3232342724809], [5.0, 612.0], [6.0, 432.0], [3.0, 5507.0], [7.0, 323.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067428, 982.6411096127905]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3008.5333333333333, "minX": 1.6022478E12, "maxY": 4358802.6, "series": [{"data": [[1.60224816E12, 3709605.466666667], [1.60224786E12, 2526124.533333333], [1.60224804E12, 2879352.316666667], [1.60224822E12, 3493412.4166666665], [1.60224792E12, 4358802.6], [1.6022481E12, 2596099.2], [1.60224828E12, 2132660.7666666666], [1.6022478E12, 2543433.65], [1.60224798E12, 3339569.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60224816E12, 5432.733333333334], [1.60224786E12, 4761.7], [1.60224804E12, 3196.85], [1.60224822E12, 5344.083333333333], [1.60224792E12, 5152.35], [1.6022481E12, 3875.883333333333], [1.60224828E12, 3083.5333333333333], [1.6022478E12, 3008.5333333333333], [1.60224798E12, 4728.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224828E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 815.2472677595619, "minX": 1.6022478E12, "maxY": 1477.5347222222215, "series": [{"data": [[1.60224816E12, 815.2472677595619], [1.60224786E12, 926.1257668711653], [1.60224804E12, 1477.5347222222215], [1.60224822E12, 846.0596590909101], [1.60224792E12, 881.2297496318114], [1.6022481E12, 1155.714285714287], [1.60224828E12, 1135.4352078239606], [1.6022478E12, 1037.442857142856], [1.60224798E12, 873.3493589743588]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224828E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 813.3333333333329, "minX": 1.6022478E12, "maxY": 1474.5509259259263, "series": [{"data": [[1.60224816E12, 813.3333333333329], [1.60224786E12, 924.1426380368096], [1.60224804E12, 1474.5509259259263], [1.60224822E12, 843.8167613636368], [1.60224792E12, 877.9131075110455], [1.6022481E12, 1153.7903525046383], [1.60224828E12, 1133.3691931540343], [1.6022478E12, 1034.6333333333323], [1.60224798E12, 870.4102564102573]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224828E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008522727272727272, "minX": 1.6022478E12, "maxY": 0.2333333333333332, "series": [{"data": [[1.60224816E12, 0.01092896174863389], [1.60224786E12, 0.01073619631901842], [1.60224804E12, 0.020833333333333332], [1.60224822E12, 0.008522727272727272], [1.60224792E12, 0.025036818851251894], [1.6022481E12, 0.01113172541743971], [1.60224828E12, 0.01711491442542788], [1.6022478E12, 0.2333333333333332], [1.60224798E12, 0.03365384615384618]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224828E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 215.0, "minX": 1.6022478E12, "maxY": 16602.0, "series": [{"data": [[1.60224816E12, 8043.0], [1.60224786E12, 14485.0], [1.60224804E12, 10016.0], [1.60224822E12, 7885.0], [1.60224792E12, 10795.0], [1.6022481E12, 16602.0], [1.60224828E12, 8474.0], [1.6022478E12, 13482.0], [1.60224798E12, 10243.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60224816E12, 226.0], [1.60224786E12, 227.0], [1.60224804E12, 238.6639996910095], [1.60224822E12, 230.0], [1.60224792E12, 219.11999983787535], [1.6022481E12, 234.71999974250792], [1.60224828E12, 226.6899999022484], [1.6022478E12, 236.78899989962576], [1.60224798E12, 226.6249998509884]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60224816E12, 226.25670006990433], [1.60224786E12, 227.0], [1.60224804E12, 240.38400020599366], [1.60224822E12, 230.0], [1.60224792E12, 219.73200006484984], [1.6022481E12, 235.3460000514984], [1.60224828E12, 227.1180000782013], [1.6022478E12, 237.0], [1.60224798E12, 227.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60224816E12, 226.0], [1.60224786E12, 227.0], [1.60224804E12, 239.51999974250793], [1.60224822E12, 230.0], [1.60224792E12, 219.45999991893768], [1.6022481E12, 235.12999993562698], [1.60224828E12, 226.8949999511242], [1.6022478E12, 236.9994999498129], [1.60224798E12, 226.9374999254942]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60224816E12, 221.0], [1.60224786E12, 221.0], [1.60224804E12, 227.0], [1.60224822E12, 220.0], [1.60224792E12, 215.0], [1.6022481E12, 227.0], [1.60224828E12, 224.0], [1.6022478E12, 225.0], [1.60224798E12, 223.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60224816E12, 472.5], [1.60224786E12, 531.5], [1.60224804E12, 847.0], [1.60224822E12, 484.5], [1.60224792E12, 468.0], [1.6022481E12, 718.0], [1.60224828E12, 707.0], [1.6022478E12, 716.5], [1.60224798E12, 501.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224828E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 284.0, "minX": 1.0, "maxY": 90090.0, "series": [{"data": [[2.0, 1875.5], [3.0, 1480.0], [4.0, 1435.0], [5.0, 895.5], [6.0, 953.0], [7.0, 811.0], [8.0, 832.5], [9.0, 657.0], [10.0, 641.0], [11.0, 640.0], [12.0, 590.0], [13.0, 578.0], [14.0, 541.0], [15.0, 555.0], [16.0, 466.5], [1.0, 4146.0], [17.0, 420.0], [18.0, 347.0], [19.0, 340.0], [20.0, 308.5], [21.0, 341.0], [22.0, 343.0], [23.0, 338.0], [24.0, 292.5], [25.0, 291.0], [26.0, 315.0], [27.0, 308.0], [30.0, 284.0], [31.0, 299.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 90090.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 283.5, "minX": 1.0, "maxY": 90090.0, "series": [{"data": [[2.0, 1873.0], [3.0, 1473.5], [4.0, 1425.0], [5.0, 895.0], [6.0, 950.5], [7.0, 808.0], [8.0, 830.5], [9.0, 656.0], [10.0, 638.5], [11.0, 637.0], [12.0, 589.0], [13.0, 578.0], [14.0, 541.0], [15.0, 555.0], [16.0, 466.0], [1.0, 4142.0], [17.0, 419.5], [18.0, 346.5], [19.0, 340.0], [20.0, 308.5], [21.0, 341.0], [22.0, 343.0], [23.0, 338.0], [24.0, 292.5], [25.0, 290.5], [26.0, 315.0], [27.0, 308.0], [30.0, 283.5], [31.0, 299.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 90090.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.65, "minX": 1.6022478E12, "maxY": 12.2, "series": [{"data": [[1.60224816E12, 12.2], [1.60224786E12, 10.866666666666667], [1.60224804E12, 7.2], [1.60224822E12, 11.733333333333333], [1.60224792E12, 11.316666666666666], [1.6022481E12, 8.983333333333333], [1.60224828E12, 6.65], [1.6022478E12, 7.166666666666667], [1.60224798E12, 10.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224828E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022478E12, "maxY": 12.2, "series": [{"data": [[1.60224816E12, 12.2], [1.60224786E12, 10.866666666666667], [1.60224804E12, 7.183333333333334], [1.60224822E12, 11.733333333333333], [1.60224792E12, 11.316666666666666], [1.6022481E12, 8.983333333333333], [1.60224828E12, 6.816666666666666], [1.6022478E12, 7.0], [1.60224798E12, 10.4]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60224804E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224828E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022478E12, "maxY": 12.2, "series": [{"data": [[1.60224816E12, 12.2], [1.60224786E12, 10.866666666666667], [1.60224804E12, 7.183333333333334], [1.60224822E12, 11.733333333333333], [1.60224792E12, 11.316666666666666], [1.6022481E12, 8.983333333333333], [1.60224828E12, 6.816666666666666], [1.6022478E12, 7.0], [1.60224798E12, 10.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60224804E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224828E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6022478E12, "maxY": 12.2, "series": [{"data": [[1.60224816E12, 12.2], [1.60224786E12, 10.866666666666667], [1.60224804E12, 7.183333333333334], [1.60224822E12, 11.733333333333333], [1.60224792E12, 11.316666666666666], [1.6022481E12, 8.983333333333333], [1.60224828E12, 6.816666666666666], [1.6022478E12, 7.0], [1.60224798E12, 10.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60224804E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224828E12, "title": "Total Transactions Per Second"}},
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

