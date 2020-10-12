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
        data: {"result": {"minY": 212.0, "minX": 0.0, "maxY": 17133.0, "series": [{"data": [[0.0, 212.0], [0.1, 217.0], [0.2, 222.0], [0.3, 224.0], [0.4, 226.0], [0.5, 228.0], [0.6, 229.0], [0.7, 229.0], [0.8, 230.0], [0.9, 231.0], [1.0, 231.0], [1.1, 232.0], [1.2, 233.0], [1.3, 234.0], [1.4, 234.0], [1.5, 234.0], [1.6, 235.0], [1.7, 235.0], [1.8, 236.0], [1.9, 236.0], [2.0, 237.0], [2.1, 237.0], [2.2, 238.0], [2.3, 238.0], [2.4, 238.0], [2.5, 239.0], [2.6, 239.0], [2.7, 240.0], [2.8, 241.0], [2.9, 241.0], [3.0, 242.0], [3.1, 243.0], [3.2, 243.0], [3.3, 243.0], [3.4, 244.0], [3.5, 244.0], [3.6, 245.0], [3.7, 245.0], [3.8, 246.0], [3.9, 246.0], [4.0, 247.0], [4.1, 247.0], [4.2, 248.0], [4.3, 249.0], [4.4, 250.0], [4.5, 250.0], [4.6, 251.0], [4.7, 251.0], [4.8, 251.0], [4.9, 252.0], [5.0, 252.0], [5.1, 252.0], [5.2, 253.0], [5.3, 254.0], [5.4, 254.0], [5.5, 255.0], [5.6, 256.0], [5.7, 256.0], [5.8, 257.0], [5.9, 258.0], [6.0, 259.0], [6.1, 260.0], [6.2, 261.0], [6.3, 262.0], [6.4, 263.0], [6.5, 264.0], [6.6, 264.0], [6.7, 265.0], [6.8, 265.0], [6.9, 266.0], [7.0, 267.0], [7.1, 267.0], [7.2, 268.0], [7.3, 269.0], [7.4, 269.0], [7.5, 270.0], [7.6, 270.0], [7.7, 271.0], [7.8, 271.0], [7.9, 272.0], [8.0, 273.0], [8.1, 274.0], [8.2, 274.0], [8.3, 275.0], [8.4, 276.0], [8.5, 276.0], [8.6, 277.0], [8.7, 278.0], [8.8, 278.0], [8.9, 278.0], [9.0, 281.0], [9.1, 282.0], [9.2, 283.0], [9.3, 284.0], [9.4, 284.0], [9.5, 285.0], [9.6, 286.0], [9.7, 287.0], [9.8, 288.0], [9.9, 289.0], [10.0, 289.0], [10.1, 290.0], [10.2, 291.0], [10.3, 292.0], [10.4, 293.0], [10.5, 294.0], [10.6, 295.0], [10.7, 295.0], [10.8, 296.0], [10.9, 296.0], [11.0, 297.0], [11.1, 298.0], [11.2, 298.0], [11.3, 299.0], [11.4, 299.0], [11.5, 300.0], [11.6, 301.0], [11.7, 301.0], [11.8, 302.0], [11.9, 302.0], [12.0, 302.0], [12.1, 303.0], [12.2, 304.0], [12.3, 304.0], [12.4, 305.0], [12.5, 305.0], [12.6, 306.0], [12.7, 307.0], [12.8, 307.0], [12.9, 307.0], [13.0, 308.0], [13.1, 309.0], [13.2, 309.0], [13.3, 310.0], [13.4, 311.0], [13.5, 311.0], [13.6, 311.0], [13.7, 312.0], [13.8, 313.0], [13.9, 313.0], [14.0, 313.0], [14.1, 313.0], [14.2, 314.0], [14.3, 315.0], [14.4, 316.0], [14.5, 316.0], [14.6, 317.0], [14.7, 317.0], [14.8, 318.0], [14.9, 318.0], [15.0, 319.0], [15.1, 319.0], [15.2, 320.0], [15.3, 321.0], [15.4, 322.0], [15.5, 322.0], [15.6, 323.0], [15.7, 324.0], [15.8, 324.0], [15.9, 325.0], [16.0, 325.0], [16.1, 326.0], [16.2, 326.0], [16.3, 327.0], [16.4, 328.0], [16.5, 328.0], [16.6, 329.0], [16.7, 330.0], [16.8, 330.0], [16.9, 331.0], [17.0, 331.0], [17.1, 332.0], [17.2, 332.0], [17.3, 333.0], [17.4, 333.0], [17.5, 334.0], [17.6, 334.0], [17.7, 334.0], [17.8, 335.0], [17.9, 336.0], [18.0, 336.0], [18.1, 337.0], [18.2, 338.0], [18.3, 338.0], [18.4, 339.0], [18.5, 340.0], [18.6, 340.0], [18.7, 341.0], [18.8, 341.0], [18.9, 342.0], [19.0, 342.0], [19.1, 343.0], [19.2, 344.0], [19.3, 344.0], [19.4, 345.0], [19.5, 346.0], [19.6, 346.0], [19.7, 347.0], [19.8, 348.0], [19.9, 348.0], [20.0, 349.0], [20.1, 350.0], [20.2, 351.0], [20.3, 351.0], [20.4, 352.0], [20.5, 353.0], [20.6, 354.0], [20.7, 354.0], [20.8, 355.0], [20.9, 355.0], [21.0, 356.0], [21.1, 356.0], [21.2, 357.0], [21.3, 358.0], [21.4, 359.0], [21.5, 359.0], [21.6, 360.0], [21.7, 361.0], [21.8, 361.0], [21.9, 362.0], [22.0, 363.0], [22.1, 363.0], [22.2, 364.0], [22.3, 364.0], [22.4, 365.0], [22.5, 365.0], [22.6, 366.0], [22.7, 367.0], [22.8, 367.0], [22.9, 368.0], [23.0, 368.0], [23.1, 369.0], [23.2, 370.0], [23.3, 371.0], [23.4, 371.0], [23.5, 372.0], [23.6, 373.0], [23.7, 374.0], [23.8, 374.0], [23.9, 375.0], [24.0, 376.0], [24.1, 377.0], [24.2, 377.0], [24.3, 378.0], [24.4, 379.0], [24.5, 380.0], [24.6, 380.0], [24.7, 381.0], [24.8, 382.0], [24.9, 383.0], [25.0, 383.0], [25.1, 384.0], [25.2, 385.0], [25.3, 386.0], [25.4, 386.0], [25.5, 387.0], [25.6, 388.0], [25.7, 388.0], [25.8, 389.0], [25.9, 389.0], [26.0, 390.0], [26.1, 391.0], [26.2, 391.0], [26.3, 392.0], [26.4, 393.0], [26.5, 394.0], [26.6, 395.0], [26.7, 395.0], [26.8, 396.0], [26.9, 396.0], [27.0, 397.0], [27.1, 398.0], [27.2, 399.0], [27.3, 400.0], [27.4, 400.0], [27.5, 401.0], [27.6, 402.0], [27.7, 403.0], [27.8, 403.0], [27.9, 404.0], [28.0, 404.0], [28.1, 405.0], [28.2, 406.0], [28.3, 407.0], [28.4, 408.0], [28.5, 409.0], [28.6, 410.0], [28.7, 410.0], [28.8, 411.0], [28.9, 411.0], [29.0, 412.0], [29.1, 412.0], [29.2, 413.0], [29.3, 413.0], [29.4, 414.0], [29.5, 415.0], [29.6, 415.0], [29.7, 417.0], [29.8, 417.0], [29.9, 418.0], [30.0, 420.0], [30.1, 421.0], [30.2, 421.0], [30.3, 422.0], [30.4, 422.0], [30.5, 423.0], [30.6, 424.0], [30.7, 425.0], [30.8, 425.0], [30.9, 426.0], [31.0, 427.0], [31.1, 427.0], [31.2, 428.0], [31.3, 429.0], [31.4, 430.0], [31.5, 431.0], [31.6, 431.0], [31.7, 432.0], [31.8, 432.0], [31.9, 433.0], [32.0, 434.0], [32.1, 434.0], [32.2, 435.0], [32.3, 436.0], [32.4, 437.0], [32.5, 438.0], [32.6, 438.0], [32.7, 439.0], [32.8, 440.0], [32.9, 441.0], [33.0, 441.0], [33.1, 442.0], [33.2, 443.0], [33.3, 443.0], [33.4, 443.0], [33.5, 444.0], [33.6, 445.0], [33.7, 445.0], [33.8, 446.0], [33.9, 447.0], [34.0, 448.0], [34.1, 449.0], [34.2, 449.0], [34.3, 451.0], [34.4, 452.0], [34.5, 452.0], [34.6, 453.0], [34.7, 453.0], [34.8, 455.0], [34.9, 455.0], [35.0, 456.0], [35.1, 457.0], [35.2, 458.0], [35.3, 459.0], [35.4, 460.0], [35.5, 461.0], [35.6, 462.0], [35.7, 463.0], [35.8, 464.0], [35.9, 465.0], [36.0, 465.0], [36.1, 465.0], [36.2, 466.0], [36.3, 467.0], [36.4, 468.0], [36.5, 469.0], [36.6, 470.0], [36.7, 471.0], [36.8, 472.0], [36.9, 472.0], [37.0, 473.0], [37.1, 473.0], [37.2, 474.0], [37.3, 475.0], [37.4, 475.0], [37.5, 477.0], [37.6, 477.0], [37.7, 478.0], [37.8, 479.0], [37.9, 480.0], [38.0, 480.0], [38.1, 480.0], [38.2, 481.0], [38.3, 481.0], [38.4, 483.0], [38.5, 484.0], [38.6, 485.0], [38.7, 486.0], [38.8, 487.0], [38.9, 488.0], [39.0, 490.0], [39.1, 491.0], [39.2, 491.0], [39.3, 492.0], [39.4, 493.0], [39.5, 495.0], [39.6, 495.0], [39.7, 496.0], [39.8, 497.0], [39.9, 498.0], [40.0, 498.0], [40.1, 500.0], [40.2, 501.0], [40.3, 501.0], [40.4, 503.0], [40.5, 504.0], [40.6, 504.0], [40.7, 506.0], [40.8, 506.0], [40.9, 507.0], [41.0, 507.0], [41.1, 508.0], [41.2, 509.0], [41.3, 510.0], [41.4, 511.0], [41.5, 512.0], [41.6, 513.0], [41.7, 514.0], [41.8, 515.0], [41.9, 516.0], [42.0, 517.0], [42.1, 517.0], [42.2, 519.0], [42.3, 519.0], [42.4, 520.0], [42.5, 522.0], [42.6, 523.0], [42.7, 524.0], [42.8, 525.0], [42.9, 525.0], [43.0, 526.0], [43.1, 526.0], [43.2, 528.0], [43.3, 529.0], [43.4, 530.0], [43.5, 532.0], [43.6, 533.0], [43.7, 534.0], [43.8, 535.0], [43.9, 535.0], [44.0, 537.0], [44.1, 538.0], [44.2, 538.0], [44.3, 539.0], [44.4, 540.0], [44.5, 542.0], [44.6, 542.0], [44.7, 543.0], [44.8, 546.0], [44.9, 546.0], [45.0, 547.0], [45.1, 548.0], [45.2, 548.0], [45.3, 549.0], [45.4, 550.0], [45.5, 551.0], [45.6, 554.0], [45.7, 554.0], [45.8, 555.0], [45.9, 557.0], [46.0, 557.0], [46.1, 558.0], [46.2, 560.0], [46.3, 560.0], [46.4, 560.0], [46.5, 562.0], [46.6, 563.0], [46.7, 564.0], [46.8, 566.0], [46.9, 568.0], [47.0, 569.0], [47.1, 570.0], [47.2, 572.0], [47.3, 573.0], [47.4, 575.0], [47.5, 576.0], [47.6, 577.0], [47.7, 578.0], [47.8, 579.0], [47.9, 581.0], [48.0, 582.0], [48.1, 582.0], [48.2, 584.0], [48.3, 585.0], [48.4, 586.0], [48.5, 587.0], [48.6, 588.0], [48.7, 590.0], [48.8, 591.0], [48.9, 593.0], [49.0, 593.0], [49.1, 594.0], [49.2, 595.0], [49.3, 596.0], [49.4, 597.0], [49.5, 598.0], [49.6, 600.0], [49.7, 601.0], [49.8, 602.0], [49.9, 604.0], [50.0, 605.0], [50.1, 606.0], [50.2, 608.0], [50.3, 609.0], [50.4, 610.0], [50.5, 612.0], [50.6, 614.0], [50.7, 617.0], [50.8, 617.0], [50.9, 619.0], [51.0, 619.0], [51.1, 620.0], [51.2, 621.0], [51.3, 622.0], [51.4, 623.0], [51.5, 624.0], [51.6, 626.0], [51.7, 627.0], [51.8, 628.0], [51.9, 629.0], [52.0, 631.0], [52.1, 632.0], [52.2, 633.0], [52.3, 635.0], [52.4, 636.0], [52.5, 637.0], [52.6, 638.0], [52.7, 640.0], [52.8, 640.0], [52.9, 640.0], [53.0, 641.0], [53.1, 643.0], [53.2, 644.0], [53.3, 645.0], [53.4, 646.0], [53.5, 647.0], [53.6, 648.0], [53.7, 649.0], [53.8, 650.0], [53.9, 651.0], [54.0, 653.0], [54.1, 653.0], [54.2, 656.0], [54.3, 657.0], [54.4, 658.0], [54.5, 660.0], [54.6, 661.0], [54.7, 662.0], [54.8, 663.0], [54.9, 665.0], [55.0, 667.0], [55.1, 668.0], [55.2, 669.0], [55.3, 671.0], [55.4, 672.0], [55.5, 673.0], [55.6, 674.0], [55.7, 677.0], [55.8, 679.0], [55.9, 681.0], [56.0, 682.0], [56.1, 683.0], [56.2, 684.0], [56.3, 685.0], [56.4, 687.0], [56.5, 690.0], [56.6, 691.0], [56.7, 692.0], [56.8, 694.0], [56.9, 696.0], [57.0, 697.0], [57.1, 698.0], [57.2, 700.0], [57.3, 701.0], [57.4, 702.0], [57.5, 703.0], [57.6, 704.0], [57.7, 706.0], [57.8, 708.0], [57.9, 709.0], [58.0, 712.0], [58.1, 714.0], [58.2, 715.0], [58.3, 717.0], [58.4, 718.0], [58.5, 719.0], [58.6, 721.0], [58.7, 724.0], [58.8, 725.0], [58.9, 728.0], [59.0, 728.0], [59.1, 730.0], [59.2, 731.0], [59.3, 732.0], [59.4, 734.0], [59.5, 735.0], [59.6, 739.0], [59.7, 741.0], [59.8, 744.0], [59.9, 746.0], [60.0, 747.0], [60.1, 748.0], [60.2, 750.0], [60.3, 752.0], [60.4, 756.0], [60.5, 758.0], [60.6, 760.0], [60.7, 763.0], [60.8, 766.0], [60.9, 767.0], [61.0, 768.0], [61.1, 769.0], [61.2, 772.0], [61.3, 774.0], [61.4, 774.0], [61.5, 776.0], [61.6, 778.0], [61.7, 779.0], [61.8, 781.0], [61.9, 783.0], [62.0, 784.0], [62.1, 785.0], [62.2, 788.0], [62.3, 790.0], [62.4, 794.0], [62.5, 795.0], [62.6, 798.0], [62.7, 800.0], [62.8, 803.0], [62.9, 806.0], [63.0, 808.0], [63.1, 810.0], [63.2, 813.0], [63.3, 814.0], [63.4, 817.0], [63.5, 819.0], [63.6, 820.0], [63.7, 822.0], [63.8, 824.0], [63.9, 827.0], [64.0, 828.0], [64.1, 829.0], [64.2, 832.0], [64.3, 835.0], [64.4, 837.0], [64.5, 839.0], [64.6, 841.0], [64.7, 843.0], [64.8, 846.0], [64.9, 847.0], [65.0, 850.0], [65.1, 852.0], [65.2, 855.0], [65.3, 858.0], [65.4, 860.0], [65.5, 862.0], [65.6, 863.0], [65.7, 864.0], [65.8, 867.0], [65.9, 869.0], [66.0, 870.0], [66.1, 874.0], [66.2, 878.0], [66.3, 880.0], [66.4, 882.0], [66.5, 883.0], [66.6, 885.0], [66.7, 886.0], [66.8, 888.0], [66.9, 889.0], [67.0, 891.0], [67.1, 892.0], [67.2, 893.0], [67.3, 895.0], [67.4, 897.0], [67.5, 905.0], [67.6, 907.0], [67.7, 909.0], [67.8, 909.0], [67.9, 912.0], [68.0, 914.0], [68.1, 915.0], [68.2, 918.0], [68.3, 921.0], [68.4, 925.0], [68.5, 929.0], [68.6, 932.0], [68.7, 935.0], [68.8, 938.0], [68.9, 940.0], [69.0, 943.0], [69.1, 945.0], [69.2, 950.0], [69.3, 952.0], [69.4, 955.0], [69.5, 958.0], [69.6, 961.0], [69.7, 965.0], [69.8, 967.0], [69.9, 968.0], [70.0, 971.0], [70.1, 974.0], [70.2, 977.0], [70.3, 979.0], [70.4, 981.0], [70.5, 984.0], [70.6, 988.0], [70.7, 991.0], [70.8, 995.0], [70.9, 998.0], [71.0, 1000.0], [71.1, 1004.0], [71.2, 1007.0], [71.3, 1009.0], [71.4, 1013.0], [71.5, 1015.0], [71.6, 1023.0], [71.7, 1025.0], [71.8, 1027.0], [71.9, 1028.0], [72.0, 1033.0], [72.1, 1036.0], [72.2, 1039.0], [72.3, 1042.0], [72.4, 1047.0], [72.5, 1052.0], [72.6, 1058.0], [72.7, 1062.0], [72.8, 1064.0], [72.9, 1068.0], [73.0, 1072.0], [73.1, 1076.0], [73.2, 1080.0], [73.3, 1086.0], [73.4, 1088.0], [73.5, 1090.0], [73.6, 1093.0], [73.7, 1097.0], [73.8, 1101.0], [73.9, 1102.0], [74.0, 1105.0], [74.1, 1109.0], [74.2, 1110.0], [74.3, 1113.0], [74.4, 1115.0], [74.5, 1117.0], [74.6, 1121.0], [74.7, 1124.0], [74.8, 1127.0], [74.9, 1131.0], [75.0, 1134.0], [75.1, 1138.0], [75.2, 1142.0], [75.3, 1146.0], [75.4, 1149.0], [75.5, 1152.0], [75.6, 1162.0], [75.7, 1165.0], [75.8, 1169.0], [75.9, 1173.0], [76.0, 1176.0], [76.1, 1182.0], [76.2, 1185.0], [76.3, 1190.0], [76.4, 1196.0], [76.5, 1202.0], [76.6, 1206.0], [76.7, 1211.0], [76.8, 1220.0], [76.9, 1225.0], [77.0, 1228.0], [77.1, 1237.0], [77.2, 1242.0], [77.3, 1248.0], [77.4, 1254.0], [77.5, 1258.0], [77.6, 1266.0], [77.7, 1273.0], [77.8, 1283.0], [77.9, 1286.0], [78.0, 1291.0], [78.1, 1294.0], [78.2, 1304.0], [78.3, 1309.0], [78.4, 1312.0], [78.5, 1323.0], [78.6, 1325.0], [78.7, 1330.0], [78.8, 1335.0], [78.9, 1341.0], [79.0, 1352.0], [79.1, 1364.0], [79.2, 1369.0], [79.3, 1382.0], [79.4, 1385.0], [79.5, 1392.0], [79.6, 1395.0], [79.7, 1400.0], [79.8, 1404.0], [79.9, 1410.0], [80.0, 1414.0], [80.1, 1419.0], [80.2, 1429.0], [80.3, 1438.0], [80.4, 1446.0], [80.5, 1456.0], [80.6, 1465.0], [80.7, 1471.0], [80.8, 1477.0], [80.9, 1487.0], [81.0, 1491.0], [81.1, 1501.0], [81.2, 1512.0], [81.3, 1518.0], [81.4, 1536.0], [81.5, 1539.0], [81.6, 1545.0], [81.7, 1553.0], [81.8, 1579.0], [81.9, 1587.0], [82.0, 1595.0], [82.1, 1604.0], [82.2, 1614.0], [82.3, 1618.0], [82.4, 1621.0], [82.5, 1633.0], [82.6, 1642.0], [82.7, 1659.0], [82.8, 1667.0], [82.9, 1672.0], [83.0, 1681.0], [83.1, 1687.0], [83.2, 1699.0], [83.3, 1704.0], [83.4, 1711.0], [83.5, 1717.0], [83.6, 1724.0], [83.7, 1728.0], [83.8, 1739.0], [83.9, 1747.0], [84.0, 1755.0], [84.1, 1763.0], [84.2, 1773.0], [84.3, 1782.0], [84.4, 1789.0], [84.5, 1800.0], [84.6, 1811.0], [84.7, 1822.0], [84.8, 1830.0], [84.9, 1834.0], [85.0, 1842.0], [85.1, 1850.0], [85.2, 1858.0], [85.3, 1865.0], [85.4, 1878.0], [85.5, 1893.0], [85.6, 1902.0], [85.7, 1913.0], [85.8, 1924.0], [85.9, 1929.0], [86.0, 1936.0], [86.1, 1944.0], [86.2, 1951.0], [86.3, 1960.0], [86.4, 1965.0], [86.5, 1970.0], [86.6, 1978.0], [86.7, 1992.0], [86.8, 2004.0], [86.9, 2022.0], [87.0, 2027.0], [87.1, 2035.0], [87.2, 2045.0], [87.3, 2058.0], [87.4, 2064.0], [87.5, 2073.0], [87.6, 2091.0], [87.7, 2097.0], [87.8, 2107.0], [87.9, 2122.0], [88.0, 2130.0], [88.1, 2134.0], [88.2, 2141.0], [88.3, 2156.0], [88.4, 2164.0], [88.5, 2182.0], [88.6, 2194.0], [88.7, 2198.0], [88.8, 2206.0], [88.9, 2210.0], [89.0, 2216.0], [89.1, 2236.0], [89.2, 2246.0], [89.3, 2251.0], [89.4, 2256.0], [89.5, 2267.0], [89.6, 2274.0], [89.7, 2281.0], [89.8, 2291.0], [89.9, 2298.0], [90.0, 2302.0], [90.1, 2305.0], [90.2, 2316.0], [90.3, 2323.0], [90.4, 2325.0], [90.5, 2334.0], [90.6, 2349.0], [90.7, 2354.0], [90.8, 2359.0], [90.9, 2371.0], [91.0, 2379.0], [91.1, 2392.0], [91.2, 2394.0], [91.3, 2405.0], [91.4, 2416.0], [91.5, 2423.0], [91.6, 2432.0], [91.7, 2445.0], [91.8, 2457.0], [91.9, 2463.0], [92.0, 2469.0], [92.1, 2473.0], [92.2, 2484.0], [92.3, 2493.0], [92.4, 2498.0], [92.5, 2508.0], [92.6, 2518.0], [92.7, 2531.0], [92.8, 2542.0], [92.9, 2552.0], [93.0, 2565.0], [93.1, 2569.0], [93.2, 2580.0], [93.3, 2596.0], [93.4, 2608.0], [93.5, 2618.0], [93.6, 2629.0], [93.7, 2653.0], [93.8, 2666.0], [93.9, 2675.0], [94.0, 2688.0], [94.1, 2701.0], [94.2, 2711.0], [94.3, 2729.0], [94.4, 2743.0], [94.5, 2750.0], [94.6, 2763.0], [94.7, 2781.0], [94.8, 2801.0], [94.9, 2820.0], [95.0, 2843.0], [95.1, 2867.0], [95.2, 2895.0], [95.3, 2916.0], [95.4, 2936.0], [95.5, 2972.0], [95.6, 2985.0], [95.7, 3021.0], [95.8, 3045.0], [95.9, 3070.0], [96.0, 3131.0], [96.1, 3162.0], [96.2, 3203.0], [96.3, 3238.0], [96.4, 3291.0], [96.5, 3353.0], [96.6, 3371.0], [96.7, 3399.0], [96.8, 3426.0], [96.9, 3482.0], [97.0, 3542.0], [97.1, 3583.0], [97.2, 3664.0], [97.3, 3726.0], [97.4, 3777.0], [97.5, 3883.0], [97.6, 4005.0], [97.7, 4075.0], [97.8, 4168.0], [97.9, 4266.0], [98.0, 4302.0], [98.1, 4402.0], [98.2, 4481.0], [98.3, 4671.0], [98.4, 4786.0], [98.5, 4930.0], [98.6, 5122.0], [98.7, 5214.0], [98.8, 5314.0], [98.9, 5348.0], [99.0, 5482.0], [99.1, 5786.0], [99.2, 6036.0], [99.3, 6336.0], [99.4, 6649.0], [99.5, 6943.0], [99.6, 7585.0], [99.7, 8156.0], [99.8, 10930.0], [99.9, 13206.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 824.0, "series": [{"data": [[600.0, 394.0], [700.0, 284.0], [800.0, 248.0], [900.0, 182.0], [1000.0, 147.0], [1100.0, 139.0], [1200.0, 88.0], [1300.0, 80.0], [1400.0, 73.0], [1500.0, 50.0], [1600.0, 61.0], [1700.0, 64.0], [1800.0, 57.0], [1900.0, 62.0], [2000.0, 51.0], [2100.0, 52.0], [2300.0, 69.0], [2200.0, 62.0], [2400.0, 59.0], [2500.0, 47.0], [2600.0, 38.0], [2700.0, 38.0], [2800.0, 23.0], [2900.0, 22.0], [3000.0, 17.0], [3100.0, 10.0], [3300.0, 15.0], [3200.0, 13.0], [3400.0, 11.0], [3500.0, 10.0], [3700.0, 11.0], [3600.0, 7.0], [3800.0, 4.0], [3900.0, 3.0], [4000.0, 9.0], [4200.0, 7.0], [4300.0, 5.0], [4100.0, 5.0], [4600.0, 2.0], [4500.0, 2.0], [4400.0, 7.0], [4800.0, 4.0], [4700.0, 6.0], [5000.0, 1.0], [4900.0, 4.0], [5100.0, 4.0], [5200.0, 5.0], [5300.0, 10.0], [5600.0, 3.0], [5400.0, 3.0], [5700.0, 2.0], [5800.0, 2.0], [6000.0, 3.0], [5900.0, 1.0], [6300.0, 2.0], [6200.0, 2.0], [6400.0, 2.0], [6600.0, 1.0], [6500.0, 2.0], [6800.0, 4.0], [6900.0, 1.0], [6700.0, 1.0], [7100.0, 1.0], [7000.0, 3.0], [7500.0, 1.0], [7800.0, 1.0], [7700.0, 1.0], [8100.0, 2.0], [8000.0, 1.0], [8700.0, 1.0], [8800.0, 1.0], [9700.0, 1.0], [9300.0, 1.0], [10900.0, 1.0], [11800.0, 1.0], [12200.0, 1.0], [12400.0, 1.0], [13300.0, 1.0], [12900.0, 1.0], [13200.0, 1.0], [14300.0, 1.0], [14900.0, 2.0], [17100.0, 1.0], [200.0, 592.0], [300.0, 824.0], [400.0, 664.0], [500.0, 494.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 981.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2123.0, "series": [{"data": [[0.0, 2086.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2123.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 981.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.788732394366198, "minX": 1.602486E12, "maxY": 10.0, "series": [{"data": [[1.60248606E12, 10.0], [1.60248636E12, 10.0], [1.60248654E12, 9.788732394366198], [1.60248618E12, 10.0], [1.60248648E12, 10.0], [1.602486E12, 10.0], [1.60248612E12, 10.0], [1.6024863E12, 10.0], [1.60248624E12, 10.0], [1.60248642E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248654E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 325.0, "minX": 1.0, "maxY": 5864.0, "series": [{"data": [[8.0, 1356.0], [4.0, 395.0], [2.0, 5676.0], [1.0, 5864.0], [9.0, 2626.0], [10.0, 1007.5811619378514], [5.0, 325.0], [6.0, 760.0], [3.0, 1871.0], [7.0, 2741.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1009.9984585741826]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 820.45, "minX": 1.602486E12, "maxY": 3926018.1666666665, "series": [{"data": [[1.60248606E12, 2928329.433333333], [1.60248636E12, 2273508.7], [1.60248654E12, 1171669.5], [1.60248618E12, 3800440.566666667], [1.60248648E12, 3349823.716666667], [1.602486E12, 864237.5333333333], [1.60248612E12, 3098249.216666667], [1.6024863E12, 3130559.5166666666], [1.60248624E12, 3038168.55], [1.60248642E12, 3926018.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60248606E12, 3981.2833333333333], [1.60248636E12, 4403.216666666666], [1.60248654E12, 1600.2], [1.60248618E12, 4929.033333333334], [1.60248648E12, 4921.433333333333], [1.602486E12, 820.45], [1.60248612E12, 4760.1], [1.6024863E12, 3882.116666666667], [1.60248624E12, 4355.75], [1.60248642E12, 4923.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248654E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 914.2592592592596, "minX": 1.602486E12, "maxY": 1475.389671361503, "series": [{"data": [[1.60248606E12, 1074.9512635379062], [1.60248636E12, 1010.7957166392089], [1.60248654E12, 1475.389671361503], [1.60248618E12, 917.7861538461539], [1.60248648E12, 914.2592592592596], [1.602486E12, 1200.5871559633022], [1.60248612E12, 950.7639751552798], [1.6024863E12, 1126.2342007434943], [1.60248624E12, 1004.1366782006925], [1.60248642E12, 924.6471494607077]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248654E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 912.3302469135796, "minX": 1.602486E12, "maxY": 1473.511737089202, "series": [{"data": [[1.60248606E12, 1072.3826714801457], [1.60248636E12, 1009.2635914332784], [1.60248654E12, 1473.511737089202], [1.60248618E12, 914.8661538461539], [1.60248648E12, 912.3302469135796], [1.602486E12, 1197.1100917431188], [1.60248612E12, 948.5186335403718], [1.6024863E12, 1123.9219330855024], [1.60248624E12, 1001.3806228373701], [1.60248642E12, 922.5639445300473]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248654E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004694835680751173, "minX": 1.602486E12, "maxY": 0.8807339449541289, "series": [{"data": [[1.60248606E12, 0.010830324909747295], [1.60248636E12, 0.014827018121911046], [1.60248654E12, 0.004694835680751173], [1.60248618E12, 0.012307692307692308], [1.60248648E12, 0.021604938271604947], [1.602486E12, 0.8807339449541289], [1.60248612E12, 0.027950310559006222], [1.6024863E12, 0.018587360594795557], [1.60248624E12, 0.015570934256055362], [1.60248642E12, 0.010785824345146378]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248654E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 212.0, "minX": 1.602486E12, "maxY": 17133.0, "series": [{"data": [[1.60248606E12, 14958.0], [1.60248636E12, 17133.0], [1.60248654E12, 8156.0], [1.60248618E12, 7865.0], [1.60248648E12, 7042.0], [1.602486E12, 4020.0], [1.60248612E12, 12451.0], [1.6024863E12, 14948.0], [1.60248624E12, 10930.0], [1.60248642E12, 8038.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60248606E12, 237.99499986767768], [1.60248636E12, 235.0], [1.60248654E12, 269.9259999489784], [1.60248618E12, 217.0], [1.60248648E12, 232.84099984526634], [1.602486E12, 238.0], [1.60248612E12, 234.0], [1.6024863E12, 233.85099987149238], [1.60248624E12, 225.21099986195566], [1.60248642E12, 237.84999984502792]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60248606E12, 238.98900010585785], [1.60248636E12, 235.0], [1.60248654E12, 274.62540079593657], [1.60248618E12, 217.8898001241684], [1.60248648E12, 233.0], [1.602486E12, 239.69100019931793], [1.60248612E12, 234.385500061512], [1.6024863E12, 234.0], [1.60248624E12, 225.73210005521776], [1.60248642E12, 238.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60248606E12, 238.5449998676777], [1.60248636E12, 235.0], [1.60248654E12, 271.2869990050793], [1.60248618E12, 217.3689998447895], [1.60248648E12, 233.0], [1.602486E12, 238.85499975085258], [1.60248612E12, 234.12749992311], [1.6024863E12, 234.0], [1.60248624E12, 225.5004999309778], [1.60248642E12, 238.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60248606E12, 228.0], [1.60248636E12, 230.0], [1.60248654E12, 269.0], [1.60248618E12, 212.0], [1.60248648E12, 224.0], [1.602486E12, 238.0], [1.60248612E12, 216.0], [1.6024863E12, 226.0], [1.60248624E12, 220.0], [1.60248642E12, 224.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60248606E12, 690.0], [1.60248636E12, 621.0], [1.60248654E12, 1012.0], [1.60248618E12, 532.5], [1.60248648E12, 532.5], [1.602486E12, 813.0], [1.60248612E12, 492.5], [1.6024863E12, 728.5], [1.60248624E12, 562.0], [1.60248642E12, 482.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248654E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 285.5, "minX": 1.0, "maxY": 4013.5, "series": [{"data": [[2.0, 1672.5], [3.0, 1505.0], [4.0, 1173.0], [5.0, 1114.5], [6.0, 971.5], [7.0, 883.0], [8.0, 804.5], [9.0, 747.0], [10.0, 635.5], [11.0, 665.0], [12.0, 623.5], [13.0, 596.0], [14.0, 526.0], [15.0, 490.5], [16.0, 448.0], [1.0, 4013.5], [17.0, 398.0], [18.0, 363.0], [19.0, 384.5], [20.0, 353.5], [21.0, 360.0], [22.0, 287.5], [23.0, 288.0], [24.0, 313.0], [25.0, 303.0], [26.0, 334.5], [27.0, 285.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 285.5, "minX": 1.0, "maxY": 4009.5, "series": [{"data": [[2.0, 1671.5], [3.0, 1503.0], [4.0, 1171.0], [5.0, 1113.0], [6.0, 969.0], [7.0, 879.0], [8.0, 803.0], [9.0, 746.0], [10.0, 634.0], [11.0, 664.0], [12.0, 623.5], [13.0, 596.0], [14.0, 525.5], [15.0, 490.0], [16.0, 447.0], [1.0, 4009.5], [17.0, 398.0], [18.0, 363.0], [19.0, 384.5], [20.0, 353.5], [21.0, 360.0], [22.0, 287.0], [23.0, 288.0], [24.0, 313.0], [25.0, 303.0], [26.0, 334.5], [27.0, 285.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.602486E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60248606E12, 9.233333333333333], [1.60248636E12, 10.116666666666667], [1.60248654E12, 3.3833333333333333], [1.60248618E12, 10.833333333333334], [1.60248648E12, 10.8], [1.602486E12, 1.9833333333333334], [1.60248612E12, 10.733333333333333], [1.6024863E12, 8.966666666666667], [1.60248624E12, 9.633333333333333], [1.60248642E12, 10.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248654E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.602486E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60248606E12, 9.233333333333333], [1.60248636E12, 10.116666666666667], [1.60248654E12, 3.55], [1.60248618E12, 10.833333333333334], [1.60248648E12, 10.8], [1.602486E12, 1.8166666666666667], [1.60248612E12, 10.733333333333333], [1.6024863E12, 8.966666666666667], [1.60248624E12, 9.633333333333333], [1.60248642E12, 10.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60248654E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.602486E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60248606E12, 9.233333333333333], [1.60248636E12, 10.116666666666667], [1.60248654E12, 3.55], [1.60248618E12, 10.833333333333334], [1.60248648E12, 10.8], [1.602486E12, 1.8166666666666667], [1.60248612E12, 10.733333333333333], [1.6024863E12, 8.966666666666667], [1.60248624E12, 9.633333333333333], [1.60248642E12, 10.816666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248654E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.602486E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60248606E12, 9.233333333333333], [1.60248636E12, 10.116666666666667], [1.60248654E12, 3.55], [1.60248618E12, 10.833333333333334], [1.60248648E12, 10.8], [1.602486E12, 1.8166666666666667], [1.60248612E12, 10.733333333333333], [1.6024863E12, 8.966666666666667], [1.60248624E12, 9.633333333333333], [1.60248642E12, 10.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60248654E12, "title": "Total Transactions Per Second"}},
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

