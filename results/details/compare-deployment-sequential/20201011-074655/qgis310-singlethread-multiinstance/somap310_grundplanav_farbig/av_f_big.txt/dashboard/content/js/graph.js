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
        data: {"result": {"minY": 172.0, "minX": 0.0, "maxY": 3400.0, "series": [{"data": [[0.0, 172.0], [0.1, 172.0], [0.2, 174.0], [0.3, 187.0], [0.4, 187.0], [0.5, 193.0], [0.6, 193.0], [0.7, 194.0], [0.8, 194.0], [0.9, 194.0], [1.0, 196.0], [1.1, 197.0], [1.2, 197.0], [1.3, 197.0], [1.4, 198.0], [1.5, 199.0], [1.6, 199.0], [1.7, 199.0], [1.8, 200.0], [1.9, 200.0], [2.0, 201.0], [2.1, 202.0], [2.2, 204.0], [2.3, 204.0], [2.4, 204.0], [2.5, 204.0], [2.6, 206.0], [2.7, 206.0], [2.8, 207.0], [2.9, 207.0], [3.0, 207.0], [3.1, 207.0], [3.2, 208.0], [3.3, 208.0], [3.4, 208.0], [3.5, 208.0], [3.6, 208.0], [3.7, 209.0], [3.8, 209.0], [3.9, 210.0], [4.0, 211.0], [4.1, 211.0], [4.2, 211.0], [4.3, 212.0], [4.4, 212.0], [4.5, 212.0], [4.6, 212.0], [4.7, 214.0], [4.8, 215.0], [4.9, 215.0], [5.0, 215.0], [5.1, 217.0], [5.2, 217.0], [5.3, 217.0], [5.4, 217.0], [5.5, 220.0], [5.6, 221.0], [5.7, 221.0], [5.8, 223.0], [5.9, 223.0], [6.0, 225.0], [6.1, 225.0], [6.2, 225.0], [6.3, 226.0], [6.4, 226.0], [6.5, 226.0], [6.6, 227.0], [6.7, 230.0], [6.8, 230.0], [6.9, 231.0], [7.0, 236.0], [7.1, 237.0], [7.2, 237.0], [7.3, 242.0], [7.4, 244.0], [7.5, 244.0], [7.6, 244.0], [7.7, 254.0], [7.8, 285.0], [7.9, 286.0], [8.0, 286.0], [8.1, 287.0], [8.2, 287.0], [8.3, 289.0], [8.4, 289.0], [8.5, 291.0], [8.6, 292.0], [8.7, 292.0], [8.8, 292.0], [8.9, 295.0], [9.0, 301.0], [9.1, 301.0], [9.2, 302.0], [9.3, 304.0], [9.4, 304.0], [9.5, 304.0], [9.6, 307.0], [9.7, 309.0], [9.8, 310.0], [9.9, 310.0], [10.0, 311.0], [10.1, 311.0], [10.2, 311.0], [10.3, 311.0], [10.4, 313.0], [10.5, 314.0], [10.6, 314.0], [10.7, 314.0], [10.8, 315.0], [10.9, 315.0], [11.0, 315.0], [11.1, 316.0], [11.2, 316.0], [11.3, 317.0], [11.4, 317.0], [11.5, 317.0], [11.6, 318.0], [11.7, 318.0], [11.8, 319.0], [11.9, 319.0], [12.0, 320.0], [12.1, 320.0], [12.2, 320.0], [12.3, 320.0], [12.4, 321.0], [12.5, 321.0], [12.6, 322.0], [12.7, 322.0], [12.8, 323.0], [12.9, 323.0], [13.0, 323.0], [13.1, 323.0], [13.2, 323.0], [13.3, 323.0], [13.4, 323.0], [13.5, 323.0], [13.6, 323.0], [13.7, 324.0], [13.8, 324.0], [13.9, 326.0], [14.0, 326.0], [14.1, 326.0], [14.2, 327.0], [14.3, 327.0], [14.4, 327.0], [14.5, 328.0], [14.6, 328.0], [14.7, 330.0], [14.8, 330.0], [14.9, 331.0], [15.0, 331.0], [15.1, 331.0], [15.2, 332.0], [15.3, 332.0], [15.4, 333.0], [15.5, 333.0], [15.6, 333.0], [15.7, 334.0], [15.8, 336.0], [15.9, 336.0], [16.0, 336.0], [16.1, 336.0], [16.2, 336.0], [16.3, 336.0], [16.4, 337.0], [16.5, 337.0], [16.6, 338.0], [16.7, 338.0], [16.8, 338.0], [16.9, 339.0], [17.0, 339.0], [17.1, 339.0], [17.2, 340.0], [17.3, 341.0], [17.4, 341.0], [17.5, 344.0], [17.6, 344.0], [17.7, 346.0], [17.8, 346.0], [17.9, 347.0], [18.0, 347.0], [18.1, 347.0], [18.2, 347.0], [18.3, 348.0], [18.4, 349.0], [18.5, 349.0], [18.6, 350.0], [18.7, 352.0], [18.8, 353.0], [18.9, 353.0], [19.0, 355.0], [19.1, 355.0], [19.2, 357.0], [19.3, 357.0], [19.4, 361.0], [19.5, 363.0], [19.6, 363.0], [19.7, 363.0], [19.8, 364.0], [19.9, 367.0], [20.0, 368.0], [20.1, 368.0], [20.2, 368.0], [20.3, 369.0], [20.4, 369.0], [20.5, 371.0], [20.6, 372.0], [20.7, 375.0], [20.8, 375.0], [20.9, 379.0], [21.0, 385.0], [21.1, 408.0], [21.2, 408.0], [21.3, 418.0], [21.4, 422.0], [21.5, 422.0], [21.6, 422.0], [21.7, 423.0], [21.8, 424.0], [21.9, 424.0], [22.0, 424.0], [22.1, 424.0], [22.2, 425.0], [22.3, 425.0], [22.4, 427.0], [22.5, 431.0], [22.6, 436.0], [22.7, 436.0], [22.8, 437.0], [22.9, 437.0], [23.0, 438.0], [23.1, 438.0], [23.2, 438.0], [23.3, 439.0], [23.4, 439.0], [23.5, 440.0], [23.6, 442.0], [23.7, 442.0], [23.8, 442.0], [23.9, 443.0], [24.0, 445.0], [24.1, 445.0], [24.2, 445.0], [24.3, 446.0], [24.4, 446.0], [24.5, 447.0], [24.6, 447.0], [24.7, 448.0], [24.8, 450.0], [24.9, 451.0], [25.0, 451.0], [25.1, 451.0], [25.2, 451.0], [25.3, 451.0], [25.4, 451.0], [25.5, 452.0], [25.6, 453.0], [25.7, 453.0], [25.8, 454.0], [25.9, 455.0], [26.0, 455.0], [26.1, 455.0], [26.2, 456.0], [26.3, 456.0], [26.4, 456.0], [26.5, 456.0], [26.6, 456.0], [26.7, 457.0], [26.8, 457.0], [26.9, 459.0], [27.0, 461.0], [27.1, 461.0], [27.2, 461.0], [27.3, 461.0], [27.4, 463.0], [27.5, 463.0], [27.6, 463.0], [27.7, 466.0], [27.8, 466.0], [27.9, 476.0], [28.0, 476.0], [28.1, 477.0], [28.2, 477.0], [28.3, 479.0], [28.4, 479.0], [28.5, 481.0], [28.6, 482.0], [28.7, 482.0], [28.8, 483.0], [28.9, 484.0], [29.0, 486.0], [29.1, 486.0], [29.2, 487.0], [29.3, 488.0], [29.4, 489.0], [29.5, 489.0], [29.6, 490.0], [29.7, 493.0], [29.8, 495.0], [29.9, 495.0], [30.0, 498.0], [30.1, 501.0], [30.2, 501.0], [30.3, 507.0], [30.4, 525.0], [30.5, 525.0], [30.6, 525.0], [30.7, 527.0], [30.8, 531.0], [30.9, 532.0], [31.0, 532.0], [31.1, 533.0], [31.2, 538.0], [31.3, 542.0], [31.4, 542.0], [31.5, 542.0], [31.6, 543.0], [31.7, 543.0], [31.8, 544.0], [31.9, 544.0], [32.0, 545.0], [32.1, 545.0], [32.2, 546.0], [32.3, 547.0], [32.4, 548.0], [32.5, 548.0], [32.6, 549.0], [32.7, 551.0], [32.8, 558.0], [32.9, 558.0], [33.0, 558.0], [33.1, 559.0], [33.2, 559.0], [33.3, 559.0], [33.4, 559.0], [33.5, 559.0], [33.6, 559.0], [33.7, 560.0], [33.8, 564.0], [33.9, 564.0], [34.0, 564.0], [34.1, 565.0], [34.2, 570.0], [34.3, 570.0], [34.4, 570.0], [34.5, 578.0], [34.6, 578.0], [34.7, 579.0], [34.8, 579.0], [34.9, 584.0], [35.0, 585.0], [35.1, 585.0], [35.2, 588.0], [35.3, 588.0], [35.4, 595.0], [35.5, 595.0], [35.6, 596.0], [35.7, 614.0], [35.8, 620.0], [35.9, 620.0], [36.0, 643.0], [36.1, 646.0], [36.2, 652.0], [36.3, 652.0], [36.4, 654.0], [36.5, 654.0], [36.6, 658.0], [36.7, 658.0], [36.8, 660.0], [36.9, 660.0], [37.0, 660.0], [37.1, 663.0], [37.2, 664.0], [37.3, 665.0], [37.4, 665.0], [37.5, 669.0], [37.6, 670.0], [37.7, 671.0], [37.8, 671.0], [37.9, 672.0], [38.0, 673.0], [38.1, 673.0], [38.2, 673.0], [38.3, 673.0], [38.4, 673.0], [38.5, 673.0], [38.6, 675.0], [38.7, 675.0], [38.8, 675.0], [38.9, 675.0], [39.0, 675.0], [39.1, 676.0], [39.2, 676.0], [39.3, 676.0], [39.4, 677.0], [39.5, 678.0], [39.6, 681.0], [39.7, 681.0], [39.8, 681.0], [39.9, 682.0], [40.0, 682.0], [40.1, 682.0], [40.2, 683.0], [40.3, 683.0], [40.4, 683.0], [40.5, 683.0], [40.6, 683.0], [40.7, 684.0], [40.8, 684.0], [40.9, 684.0], [41.0, 684.0], [41.1, 684.0], [41.2, 684.0], [41.3, 684.0], [41.4, 685.0], [41.5, 686.0], [41.6, 686.0], [41.7, 687.0], [41.8, 687.0], [41.9, 687.0], [42.0, 688.0], [42.1, 688.0], [42.2, 688.0], [42.3, 688.0], [42.4, 689.0], [42.5, 690.0], [42.6, 690.0], [42.7, 690.0], [42.8, 691.0], [42.9, 692.0], [43.0, 692.0], [43.1, 692.0], [43.2, 693.0], [43.3, 695.0], [43.4, 695.0], [43.5, 695.0], [43.6, 696.0], [43.7, 696.0], [43.8, 696.0], [43.9, 696.0], [44.0, 696.0], [44.1, 697.0], [44.2, 697.0], [44.3, 697.0], [44.4, 697.0], [44.5, 697.0], [44.6, 697.0], [44.7, 697.0], [44.8, 697.0], [44.9, 698.0], [45.0, 698.0], [45.1, 698.0], [45.2, 698.0], [45.3, 698.0], [45.4, 698.0], [45.5, 698.0], [45.6, 698.0], [45.7, 698.0], [45.8, 699.0], [45.9, 700.0], [46.0, 700.0], [46.1, 700.0], [46.2, 700.0], [46.3, 700.0], [46.4, 700.0], [46.5, 700.0], [46.6, 701.0], [46.7, 701.0], [46.8, 701.0], [46.9, 701.0], [47.0, 702.0], [47.1, 703.0], [47.2, 703.0], [47.3, 703.0], [47.4, 704.0], [47.5, 705.0], [47.6, 705.0], [47.7, 705.0], [47.8, 705.0], [47.9, 705.0], [48.0, 705.0], [48.1, 705.0], [48.2, 705.0], [48.3, 705.0], [48.4, 705.0], [48.5, 705.0], [48.6, 705.0], [48.7, 705.0], [48.8, 705.0], [48.9, 706.0], [49.0, 706.0], [49.1, 706.0], [49.2, 706.0], [49.3, 707.0], [49.4, 707.0], [49.5, 707.0], [49.6, 708.0], [49.7, 708.0], [49.8, 708.0], [49.9, 708.0], [50.0, 708.0], [50.1, 709.0], [50.2, 709.0], [50.3, 709.0], [50.4, 709.0], [50.5, 710.0], [50.6, 710.0], [50.7, 711.0], [50.8, 711.0], [50.9, 711.0], [51.0, 711.0], [51.1, 711.0], [51.2, 712.0], [51.3, 712.0], [51.4, 712.0], [51.5, 713.0], [51.6, 714.0], [51.7, 714.0], [51.8, 714.0], [51.9, 714.0], [52.0, 715.0], [52.1, 715.0], [52.2, 716.0], [52.3, 716.0], [52.4, 717.0], [52.5, 717.0], [52.6, 717.0], [52.7, 718.0], [52.8, 718.0], [52.9, 718.0], [53.0, 718.0], [53.1, 719.0], [53.2, 720.0], [53.3, 720.0], [53.4, 721.0], [53.5, 721.0], [53.6, 721.0], [53.7, 721.0], [53.8, 721.0], [53.9, 722.0], [54.0, 722.0], [54.1, 723.0], [54.2, 723.0], [54.3, 724.0], [54.4, 724.0], [54.5, 725.0], [54.6, 725.0], [54.7, 726.0], [54.8, 726.0], [54.9, 726.0], [55.0, 727.0], [55.1, 727.0], [55.2, 727.0], [55.3, 728.0], [55.4, 728.0], [55.5, 728.0], [55.6, 729.0], [55.7, 729.0], [55.8, 730.0], [55.9, 730.0], [56.0, 731.0], [56.1, 732.0], [56.2, 733.0], [56.3, 733.0], [56.4, 733.0], [56.5, 737.0], [56.6, 737.0], [56.7, 737.0], [56.8, 738.0], [56.9, 739.0], [57.0, 739.0], [57.1, 739.0], [57.2, 742.0], [57.3, 742.0], [57.4, 742.0], [57.5, 743.0], [57.6, 746.0], [57.7, 746.0], [57.8, 746.0], [57.9, 748.0], [58.0, 748.0], [58.1, 749.0], [58.2, 749.0], [58.3, 749.0], [58.4, 752.0], [58.5, 752.0], [58.6, 753.0], [58.7, 754.0], [58.8, 754.0], [58.9, 754.0], [59.0, 754.0], [59.1, 756.0], [59.2, 757.0], [59.3, 757.0], [59.4, 757.0], [59.5, 760.0], [59.6, 760.0], [59.7, 760.0], [59.8, 760.0], [59.9, 762.0], [60.0, 764.0], [60.1, 764.0], [60.2, 765.0], [60.3, 766.0], [60.4, 766.0], [60.5, 767.0], [60.6, 767.0], [60.7, 768.0], [60.8, 768.0], [60.9, 768.0], [61.0, 769.0], [61.1, 769.0], [61.2, 769.0], [61.3, 770.0], [61.4, 770.0], [61.5, 773.0], [61.6, 773.0], [61.7, 773.0], [61.8, 775.0], [61.9, 775.0], [62.0, 776.0], [62.1, 776.0], [62.2, 777.0], [62.3, 777.0], [62.4, 778.0], [62.5, 778.0], [62.6, 781.0], [62.7, 781.0], [62.8, 782.0], [62.9, 784.0], [63.0, 786.0], [63.1, 786.0], [63.2, 787.0], [63.3, 787.0], [63.4, 787.0], [63.5, 792.0], [63.6, 802.0], [63.7, 806.0], [63.8, 806.0], [63.9, 806.0], [64.0, 812.0], [64.1, 812.0], [64.2, 812.0], [64.3, 815.0], [64.4, 819.0], [64.5, 825.0], [64.6, 825.0], [64.7, 826.0], [64.8, 826.0], [64.9, 827.0], [65.0, 827.0], [65.1, 827.0], [65.2, 828.0], [65.3, 828.0], [65.4, 828.0], [65.5, 829.0], [65.6, 829.0], [65.7, 829.0], [65.8, 830.0], [65.9, 830.0], [66.0, 832.0], [66.1, 832.0], [66.2, 835.0], [66.3, 836.0], [66.4, 837.0], [66.5, 837.0], [66.6, 840.0], [66.7, 841.0], [66.8, 841.0], [66.9, 842.0], [67.0, 843.0], [67.1, 845.0], [67.2, 845.0], [67.3, 845.0], [67.4, 845.0], [67.5, 846.0], [67.6, 846.0], [67.7, 847.0], [67.8, 848.0], [67.9, 848.0], [68.0, 848.0], [68.1, 848.0], [68.2, 849.0], [68.3, 849.0], [68.4, 849.0], [68.5, 850.0], [68.6, 850.0], [68.7, 850.0], [68.8, 853.0], [68.9, 853.0], [69.0, 854.0], [69.1, 854.0], [69.2, 854.0], [69.3, 856.0], [69.4, 857.0], [69.5, 857.0], [69.6, 857.0], [69.7, 857.0], [69.8, 859.0], [69.9, 859.0], [70.0, 860.0], [70.1, 860.0], [70.2, 860.0], [70.3, 861.0], [70.4, 861.0], [70.5, 863.0], [70.6, 863.0], [70.7, 864.0], [70.8, 867.0], [70.9, 867.0], [71.0, 867.0], [71.1, 869.0], [71.2, 870.0], [71.3, 871.0], [71.4, 871.0], [71.5, 871.0], [71.6, 871.0], [71.7, 871.0], [71.8, 872.0], [71.9, 872.0], [72.0, 873.0], [72.1, 873.0], [72.2, 875.0], [72.3, 876.0], [72.4, 876.0], [72.5, 876.0], [72.6, 877.0], [72.7, 878.0], [72.8, 879.0], [72.9, 879.0], [73.0, 879.0], [73.1, 880.0], [73.2, 881.0], [73.3, 881.0], [73.4, 881.0], [73.5, 881.0], [73.6, 881.0], [73.7, 882.0], [73.8, 882.0], [73.9, 884.0], [74.0, 884.0], [74.1, 884.0], [74.2, 885.0], [74.3, 886.0], [74.4, 886.0], [74.5, 886.0], [74.6, 887.0], [74.7, 887.0], [74.8, 887.0], [74.9, 888.0], [75.0, 889.0], [75.1, 889.0], [75.2, 892.0], [75.3, 895.0], [75.4, 898.0], [75.5, 898.0], [75.6, 898.0], [75.7, 899.0], [75.8, 901.0], [75.9, 901.0], [76.0, 901.0], [76.1, 904.0], [76.2, 904.0], [76.3, 904.0], [76.4, 904.0], [76.5, 905.0], [76.6, 906.0], [76.7, 906.0], [76.8, 906.0], [76.9, 907.0], [77.0, 907.0], [77.1, 907.0], [77.2, 907.0], [77.3, 907.0], [77.4, 907.0], [77.5, 910.0], [77.6, 911.0], [77.7, 912.0], [77.8, 912.0], [77.9, 912.0], [78.0, 912.0], [78.1, 913.0], [78.2, 913.0], [78.3, 915.0], [78.4, 915.0], [78.5, 915.0], [78.6, 915.0], [78.7, 916.0], [78.8, 918.0], [78.9, 918.0], [79.0, 919.0], [79.1, 922.0], [79.2, 922.0], [79.3, 922.0], [79.4, 923.0], [79.5, 923.0], [79.6, 925.0], [79.7, 925.0], [79.8, 929.0], [79.9, 930.0], [80.0, 930.0], [80.1, 930.0], [80.2, 931.0], [80.3, 933.0], [80.4, 933.0], [80.5, 935.0], [80.6, 936.0], [80.7, 939.0], [80.8, 939.0], [80.9, 941.0], [81.0, 941.0], [81.1, 943.0], [81.2, 943.0], [81.3, 943.0], [81.4, 945.0], [81.5, 946.0], [81.6, 946.0], [81.7, 946.0], [81.8, 947.0], [81.9, 947.0], [82.0, 948.0], [82.1, 949.0], [82.2, 950.0], [82.3, 950.0], [82.4, 951.0], [82.5, 951.0], [82.6, 952.0], [82.7, 952.0], [82.8, 953.0], [82.9, 954.0], [83.0, 955.0], [83.1, 955.0], [83.2, 959.0], [83.3, 963.0], [83.4, 963.0], [83.5, 965.0], [83.6, 966.0], [83.7, 966.0], [83.8, 966.0], [83.9, 966.0], [84.0, 969.0], [84.1, 970.0], [84.2, 970.0], [84.3, 971.0], [84.4, 971.0], [84.5, 973.0], [84.6, 973.0], [84.7, 974.0], [84.8, 974.0], [84.9, 975.0], [85.0, 975.0], [85.1, 976.0], [85.2, 978.0], [85.3, 978.0], [85.4, 978.0], [85.5, 978.0], [85.6, 980.0], [85.7, 980.0], [85.8, 981.0], [85.9, 983.0], [86.0, 986.0], [86.1, 986.0], [86.2, 988.0], [86.3, 988.0], [86.4, 988.0], [86.5, 988.0], [86.6, 989.0], [86.7, 994.0], [86.8, 994.0], [86.9, 994.0], [87.0, 996.0], [87.1, 996.0], [87.2, 996.0], [87.3, 996.0], [87.4, 997.0], [87.5, 999.0], [87.6, 999.0], [87.7, 1000.0], [87.8, 1001.0], [87.9, 1001.0], [88.0, 1001.0], [88.1, 1002.0], [88.2, 1005.0], [88.3, 1005.0], [88.4, 1005.0], [88.5, 1017.0], [88.6, 1019.0], [88.7, 1019.0], [88.8, 1021.0], [88.9, 1024.0], [89.0, 1025.0], [89.1, 1025.0], [89.2, 1026.0], [89.3, 1026.0], [89.4, 1029.0], [89.5, 1029.0], [89.6, 1032.0], [89.7, 1033.0], [89.8, 1035.0], [89.9, 1035.0], [90.0, 1036.0], [90.1, 1037.0], [90.2, 1037.0], [90.3, 1042.0], [90.4, 1043.0], [90.5, 1045.0], [90.6, 1045.0], [90.7, 1045.0], [90.8, 1047.0], [90.9, 1056.0], [91.0, 1056.0], [91.1, 1057.0], [91.2, 1057.0], [91.3, 1060.0], [91.4, 1060.0], [91.5, 1061.0], [91.6, 1064.0], [91.7, 1064.0], [91.8, 1065.0], [91.9, 1068.0], [92.0, 1075.0], [92.1, 1075.0], [92.2, 1077.0], [92.3, 1082.0], [92.4, 1089.0], [92.5, 1089.0], [92.6, 1089.0], [92.7, 1091.0], [92.8, 1091.0], [92.9, 1091.0], [93.0, 1102.0], [93.1, 1105.0], [93.2, 1109.0], [93.3, 1109.0], [93.4, 1124.0], [93.5, 1125.0], [93.6, 1125.0], [93.7, 1129.0], [93.8, 1130.0], [93.9, 1137.0], [94.0, 1137.0], [94.1, 1151.0], [94.2, 1158.0], [94.3, 1159.0], [94.4, 1159.0], [94.5, 1160.0], [94.6, 1166.0], [94.7, 1167.0], [94.8, 1167.0], [94.9, 1176.0], [95.0, 1183.0], [95.1, 1183.0], [95.2, 1197.0], [95.3, 1199.0], [95.4, 1223.0], [95.5, 1223.0], [95.6, 1251.0], [95.7, 1258.0], [95.8, 1276.0], [95.9, 1276.0], [96.0, 1280.0], [96.1, 1287.0], [96.2, 1293.0], [96.3, 1293.0], [96.4, 1294.0], [96.5, 1300.0], [96.6, 1305.0], [96.7, 1305.0], [96.8, 1317.0], [96.9, 1320.0], [97.0, 1320.0], [97.1, 1339.0], [97.2, 1343.0], [97.3, 1350.0], [97.4, 1350.0], [97.5, 1357.0], [97.6, 1384.0], [97.7, 1422.0], [97.8, 1422.0], [97.9, 1450.0], [98.0, 1473.0], [98.1, 1499.0], [98.2, 1499.0], [98.3, 1508.0], [98.4, 1514.0], [98.5, 1514.0], [98.6, 1559.0], [98.7, 1572.0], [98.8, 1635.0], [98.9, 1635.0], [99.0, 1643.0], [99.1, 1664.0], [99.2, 1763.0], [99.3, 1763.0], [99.4, 1929.0], [99.5, 1989.0], [99.6, 2001.0], [99.7, 2001.0], [99.8, 3324.0], [99.9, 3400.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 130.0, "series": [{"data": [[600.0, 75.0], [700.0, 130.0], [800.0, 90.0], [200.0, 53.0], [3300.0, 1.0], [3400.0, 1.0], [900.0, 87.0], [1000.0, 39.0], [1100.0, 18.0], [300.0, 89.0], [1200.0, 8.0], [1300.0, 9.0], [1400.0, 4.0], [1500.0, 4.0], [400.0, 66.0], [100.0, 13.0], [1600.0, 3.0], [1700.0, 1.0], [1900.0, 2.0], [500.0, 41.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 501.0, "series": [{"data": [[0.0, 221.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 501.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60240242E12, "maxY": 1.0, "series": [{"data": [[1.60240284E12, 1.0], [1.60240254E12, 1.0], [1.60240248E12, 1.0], [1.60240296E12, 1.0], [1.60240266E12, 1.0], [1.6024026E12, 1.0], [1.60240278E12, 1.0], [1.60240272E12, 1.0], [1.60240242E12, 1.0], [1.6024029E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240296E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 704.4571428571426, "minX": 1.0, "maxY": 704.4571428571426, "series": [{"data": [[1.0, 704.4571428571426]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 704.4571428571426]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 83.71666666666667, "minX": 1.60240242E12, "maxY": 285912.4, "series": [{"data": [[1.60240284E12, 161473.48333333334], [1.60240254E12, 162534.78333333333], [1.60240248E12, 269699.5833333333], [1.60240296E12, 11172.583333333334], [1.60240266E12, 285912.4], [1.6024026E12, 163040.75], [1.60240278E12, 170511.06666666668], [1.60240272E12, 208683.41666666666], [1.60240242E12, 172891.28333333333], [1.6024029E12, 229848.53333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60240284E12, 544.2], [1.60240254E12, 528.95], [1.60240248E12, 518.6166666666667], [1.60240296E12, 83.71666666666667], [1.60240266E12, 843.8833333333333], [1.6024026E12, 634.6333333333333], [1.60240278E12, 537.15], [1.60240272E12, 618.0333333333333], [1.60240242E12, 435.71666666666664], [1.6024029E12, 778.1333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240296E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 429.6666666666667, "minX": 1.60240242E12, "maxY": 877.7352941176471, "series": [{"data": [[1.60240284E12, 831.0833333333334], [1.60240254E12, 850.2], [1.60240248E12, 877.7352941176471], [1.60240296E12, 429.6666666666667], [1.60240266E12, 528.3596491228072], [1.6024026E12, 719.3571428571429], [1.60240278E12, 835.1126760563379], [1.60240272E12, 730.5975609756096], [1.60240242E12, 569.3275862068961], [1.6024029E12, 583.6538461538461]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240296E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 429.41666666666663, "minX": 1.60240242E12, "maxY": 876.1323529411765, "series": [{"data": [[1.60240284E12, 829.9166666666669], [1.60240254E12, 848.9142857142855], [1.60240248E12, 876.1323529411765], [1.60240296E12, 429.41666666666663], [1.60240266E12, 527.2368421052632], [1.6024026E12, 718.4047619047618], [1.60240278E12, 833.8873239436617], [1.60240272E12, 729.439024390244], [1.60240242E12, 568.3965517241378], [1.6024029E12, 582.7307692307692]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240296E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60240242E12, "maxY": 0.586206896551724, "series": [{"data": [[1.60240284E12, 0.02777777777777778], [1.60240254E12, 0.02857142857142857], [1.60240248E12, 0.058823529411764705], [1.60240296E12, 0.0], [1.60240266E12, 0.017543859649122813], [1.6024026E12, 0.02380952380952381], [1.60240278E12, 0.04225352112676058], [1.60240272E12, 0.012195121951219513], [1.60240242E12, 0.586206896551724], [1.6024029E12, 0.019230769230769232]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240296E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 172.0, "minX": 1.60240242E12, "maxY": 3400.0, "series": [{"data": [[1.60240284E12, 1129.0], [1.60240254E12, 1160.0], [1.60240248E12, 1635.0], [1.60240296E12, 1137.0], [1.60240266E12, 3324.0], [1.6024026E12, 1130.0], [1.60240278E12, 1183.0], [1.60240272E12, 1514.0], [1.60240242E12, 3400.0], [1.6024029E12, 2001.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60240284E12, 338.0], [1.60240254E12, 664.0], [1.60240248E12, 324.0], [1.60240296E12, 307.0], [1.60240266E12, 172.52499958872795], [1.6024026E12, 422.0], [1.60240278E12, 344.0], [1.60240272E12, 193.0], [1.60240242E12, 193.0], [1.6024029E12, 174.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60240284E12, 338.0], [1.60240254E12, 664.0], [1.60240248E12, 324.0], [1.60240296E12, 307.0], [1.60240266E12, 174.07750016450882], [1.6024026E12, 422.0], [1.60240278E12, 344.0], [1.60240272E12, 193.0], [1.60240242E12, 193.0], [1.6024029E12, 174.94800024032594]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60240284E12, 338.0], [1.60240254E12, 664.0], [1.60240248E12, 324.0], [1.60240296E12, 307.0], [1.60240266E12, 173.38749979436398], [1.6024026E12, 422.0], [1.60240278E12, 344.0], [1.60240272E12, 193.0], [1.60240242E12, 193.0], [1.6024029E12, 174.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60240284E12, 338.0], [1.60240254E12, 664.0], [1.60240248E12, 324.0], [1.60240296E12, 307.0], [1.60240266E12, 172.0], [1.6024026E12, 422.0], [1.60240278E12, 344.0], [1.60240272E12, 193.0], [1.60240242E12, 193.0], [1.6024029E12, 174.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60240284E12, 865.5], [1.60240254E12, 831.5], [1.60240248E12, 812.5], [1.60240296E12, 326.5], [1.60240266E12, 337.5], [1.6024026E12, 721.0], [1.60240278E12, 829.0], [1.60240272E12, 705.0], [1.60240242E12, 542.5], [1.6024029E12, 452.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240296E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 205.0, "minX": 1.0, "maxY": 871.0, "series": [{"data": [[1.0, 871.0], [2.0, 690.5], [4.0, 205.0], [5.0, 210.0], [3.0, 331.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 204.5, "minX": 1.0, "maxY": 869.5, "series": [{"data": [[1.0, 869.5], [2.0, 689.5], [4.0, 204.5], [5.0, 209.5], [3.0, 331.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60240242E12, "maxY": 1.9, "series": [{"data": [[1.60240284E12, 1.2], [1.60240254E12, 1.1666666666666667], [1.60240248E12, 1.1333333333333333], [1.60240296E12, 0.18333333333333332], [1.60240266E12, 1.9], [1.6024026E12, 1.4], [1.60240278E12, 1.1833333333333333], [1.60240272E12, 1.3666666666666667], [1.60240242E12, 0.9833333333333333], [1.6024029E12, 1.7333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240296E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60240242E12, "maxY": 1.9, "series": [{"data": [[1.60240284E12, 1.2], [1.60240254E12, 1.1666666666666667], [1.60240248E12, 1.1333333333333333], [1.60240296E12, 0.2], [1.60240266E12, 1.9], [1.6024026E12, 1.4], [1.60240278E12, 1.1833333333333333], [1.60240272E12, 1.3666666666666667], [1.60240242E12, 0.9666666666666667], [1.6024029E12, 1.7333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240296E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60240242E12, "maxY": 1.9, "series": [{"data": [[1.60240284E12, 1.2], [1.60240254E12, 1.1666666666666667], [1.60240248E12, 1.1333333333333333], [1.60240296E12, 0.2], [1.60240266E12, 1.9], [1.6024026E12, 1.4], [1.60240278E12, 1.1833333333333333], [1.60240272E12, 1.3666666666666667], [1.60240242E12, 0.9666666666666667], [1.6024029E12, 1.7333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240296E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.60240242E12, "maxY": 1.9, "series": [{"data": [[1.60240284E12, 1.2], [1.60240254E12, 1.1666666666666667], [1.60240248E12, 1.1333333333333333], [1.60240296E12, 0.2], [1.60240266E12, 1.9], [1.6024026E12, 1.4], [1.60240278E12, 1.1833333333333333], [1.60240272E12, 1.3666666666666667], [1.60240242E12, 0.9666666666666667], [1.6024029E12, 1.7333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240296E12, "title": "Total Transactions Per Second"}},
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

