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
        data: {"result": {"minY": 141.0, "minX": 0.0, "maxY": 6191.0, "series": [{"data": [[0.0, 141.0], [0.1, 141.0], [0.2, 141.0], [0.3, 141.0], [0.4, 141.0], [0.5, 141.0], [0.6, 141.0], [0.7, 141.0], [0.8, 141.0], [0.9, 141.0], [1.0, 141.0], [1.1, 141.0], [1.2, 141.0], [1.3, 141.0], [1.4, 141.0], [1.5, 141.0], [1.6, 153.0], [1.7, 153.0], [1.8, 153.0], [1.9, 153.0], [2.0, 153.0], [2.1, 153.0], [2.2, 153.0], [2.3, 153.0], [2.4, 153.0], [2.5, 153.0], [2.6, 153.0], [2.7, 153.0], [2.8, 153.0], [2.9, 153.0], [3.0, 153.0], [3.1, 153.0], [3.2, 179.0], [3.3, 179.0], [3.4, 179.0], [3.5, 179.0], [3.6, 179.0], [3.7, 179.0], [3.8, 179.0], [3.9, 179.0], [4.0, 179.0], [4.1, 179.0], [4.2, 179.0], [4.3, 179.0], [4.4, 179.0], [4.5, 179.0], [4.6, 179.0], [4.7, 179.0], [4.8, 185.0], [4.9, 185.0], [5.0, 185.0], [5.1, 185.0], [5.2, 185.0], [5.3, 185.0], [5.4, 185.0], [5.5, 185.0], [5.6, 185.0], [5.7, 185.0], [5.8, 185.0], [5.9, 185.0], [6.0, 185.0], [6.1, 185.0], [6.2, 185.0], [6.3, 185.0], [6.4, 203.0], [6.5, 203.0], [6.6, 203.0], [6.7, 203.0], [6.8, 203.0], [6.9, 203.0], [7.0, 203.0], [7.1, 203.0], [7.2, 203.0], [7.3, 203.0], [7.4, 203.0], [7.5, 203.0], [7.6, 203.0], [7.7, 203.0], [7.8, 203.0], [7.9, 203.0], [8.0, 219.0], [8.1, 219.0], [8.2, 219.0], [8.3, 219.0], [8.4, 219.0], [8.5, 219.0], [8.6, 219.0], [8.7, 219.0], [8.8, 219.0], [8.9, 219.0], [9.0, 219.0], [9.1, 219.0], [9.2, 219.0], [9.3, 219.0], [9.4, 219.0], [9.5, 219.0], [9.6, 221.0], [9.7, 221.0], [9.8, 221.0], [9.9, 221.0], [10.0, 221.0], [10.1, 221.0], [10.2, 221.0], [10.3, 221.0], [10.4, 221.0], [10.5, 221.0], [10.6, 221.0], [10.7, 221.0], [10.8, 221.0], [10.9, 221.0], [11.0, 221.0], [11.1, 221.0], [11.2, 236.0], [11.3, 236.0], [11.4, 236.0], [11.5, 236.0], [11.6, 236.0], [11.7, 236.0], [11.8, 236.0], [11.9, 236.0], [12.0, 236.0], [12.1, 236.0], [12.2, 236.0], [12.3, 236.0], [12.4, 236.0], [12.5, 236.0], [12.6, 236.0], [12.7, 242.0], [12.8, 242.0], [12.9, 242.0], [13.0, 242.0], [13.1, 242.0], [13.2, 242.0], [13.3, 242.0], [13.4, 242.0], [13.5, 242.0], [13.6, 242.0], [13.7, 242.0], [13.8, 242.0], [13.9, 242.0], [14.0, 242.0], [14.1, 242.0], [14.2, 242.0], [14.3, 245.0], [14.4, 245.0], [14.5, 245.0], [14.6, 245.0], [14.7, 245.0], [14.8, 245.0], [14.9, 245.0], [15.0, 245.0], [15.1, 245.0], [15.2, 245.0], [15.3, 245.0], [15.4, 245.0], [15.5, 245.0], [15.6, 245.0], [15.7, 245.0], [15.8, 245.0], [15.9, 265.0], [16.0, 265.0], [16.1, 265.0], [16.2, 265.0], [16.3, 265.0], [16.4, 265.0], [16.5, 265.0], [16.6, 265.0], [16.7, 265.0], [16.8, 265.0], [16.9, 265.0], [17.0, 265.0], [17.1, 265.0], [17.2, 265.0], [17.3, 265.0], [17.4, 265.0], [17.5, 276.0], [17.6, 276.0], [17.7, 276.0], [17.8, 276.0], [17.9, 276.0], [18.0, 276.0], [18.1, 276.0], [18.2, 276.0], [18.3, 276.0], [18.4, 276.0], [18.5, 276.0], [18.6, 276.0], [18.7, 276.0], [18.8, 276.0], [18.9, 276.0], [19.0, 276.0], [19.1, 279.0], [19.2, 279.0], [19.3, 279.0], [19.4, 279.0], [19.5, 279.0], [19.6, 279.0], [19.7, 279.0], [19.8, 279.0], [19.9, 279.0], [20.0, 279.0], [20.1, 279.0], [20.2, 279.0], [20.3, 279.0], [20.4, 279.0], [20.5, 279.0], [20.6, 279.0], [20.7, 284.0], [20.8, 284.0], [20.9, 284.0], [21.0, 284.0], [21.1, 284.0], [21.2, 284.0], [21.3, 284.0], [21.4, 284.0], [21.5, 284.0], [21.6, 284.0], [21.7, 284.0], [21.8, 284.0], [21.9, 284.0], [22.0, 284.0], [22.1, 284.0], [22.2, 284.0], [22.3, 292.0], [22.4, 292.0], [22.5, 292.0], [22.6, 292.0], [22.7, 292.0], [22.8, 292.0], [22.9, 292.0], [23.0, 292.0], [23.1, 292.0], [23.2, 292.0], [23.3, 292.0], [23.4, 292.0], [23.5, 292.0], [23.6, 292.0], [23.7, 292.0], [23.8, 292.0], [23.9, 293.0], [24.0, 293.0], [24.1, 293.0], [24.2, 293.0], [24.3, 293.0], [24.4, 293.0], [24.5, 293.0], [24.6, 293.0], [24.7, 293.0], [24.8, 293.0], [24.9, 293.0], [25.0, 293.0], [25.1, 293.0], [25.2, 293.0], [25.3, 293.0], [25.4, 318.0], [25.5, 318.0], [25.6, 318.0], [25.7, 318.0], [25.8, 318.0], [25.9, 318.0], [26.0, 318.0], [26.1, 318.0], [26.2, 318.0], [26.3, 318.0], [26.4, 318.0], [26.5, 318.0], [26.6, 318.0], [26.7, 318.0], [26.8, 318.0], [26.9, 318.0], [27.0, 341.0], [27.1, 341.0], [27.2, 341.0], [27.3, 341.0], [27.4, 341.0], [27.5, 341.0], [27.6, 341.0], [27.7, 341.0], [27.8, 341.0], [27.9, 341.0], [28.0, 341.0], [28.1, 341.0], [28.2, 341.0], [28.3, 341.0], [28.4, 341.0], [28.5, 341.0], [28.6, 348.0], [28.7, 348.0], [28.8, 348.0], [28.9, 348.0], [29.0, 348.0], [29.1, 348.0], [29.2, 348.0], [29.3, 348.0], [29.4, 348.0], [29.5, 348.0], [29.6, 348.0], [29.7, 348.0], [29.8, 348.0], [29.9, 348.0], [30.0, 348.0], [30.1, 348.0], [30.2, 362.0], [30.3, 362.0], [30.4, 362.0], [30.5, 362.0], [30.6, 362.0], [30.7, 362.0], [30.8, 362.0], [30.9, 362.0], [31.0, 362.0], [31.1, 362.0], [31.2, 362.0], [31.3, 362.0], [31.4, 362.0], [31.5, 362.0], [31.6, 362.0], [31.7, 362.0], [31.8, 363.0], [31.9, 363.0], [32.0, 363.0], [32.1, 363.0], [32.2, 363.0], [32.3, 363.0], [32.4, 363.0], [32.5, 363.0], [32.6, 363.0], [32.7, 363.0], [32.8, 363.0], [32.9, 363.0], [33.0, 363.0], [33.1, 363.0], [33.2, 363.0], [33.3, 363.0], [33.4, 374.0], [33.5, 374.0], [33.6, 374.0], [33.7, 374.0], [33.8, 374.0], [33.9, 374.0], [34.0, 374.0], [34.1, 374.0], [34.2, 374.0], [34.3, 374.0], [34.4, 374.0], [34.5, 374.0], [34.6, 374.0], [34.7, 374.0], [34.8, 374.0], [34.9, 374.0], [35.0, 379.0], [35.1, 379.0], [35.2, 379.0], [35.3, 379.0], [35.4, 379.0], [35.5, 379.0], [35.6, 379.0], [35.7, 379.0], [35.8, 379.0], [35.9, 379.0], [36.0, 379.0], [36.1, 379.0], [36.2, 379.0], [36.3, 379.0], [36.4, 379.0], [36.5, 379.0], [36.6, 384.0], [36.7, 384.0], [36.8, 384.0], [36.9, 384.0], [37.0, 384.0], [37.1, 384.0], [37.2, 384.0], [37.3, 384.0], [37.4, 384.0], [37.5, 384.0], [37.6, 384.0], [37.7, 384.0], [37.8, 384.0], [37.9, 384.0], [38.0, 384.0], [38.1, 388.0], [38.2, 388.0], [38.3, 388.0], [38.4, 388.0], [38.5, 388.0], [38.6, 388.0], [38.7, 388.0], [38.8, 388.0], [38.9, 388.0], [39.0, 388.0], [39.1, 388.0], [39.2, 388.0], [39.3, 388.0], [39.4, 388.0], [39.5, 388.0], [39.6, 388.0], [39.7, 391.0], [39.8, 391.0], [39.9, 391.0], [40.0, 391.0], [40.1, 391.0], [40.2, 391.0], [40.3, 391.0], [40.4, 391.0], [40.5, 391.0], [40.6, 391.0], [40.7, 391.0], [40.8, 391.0], [40.9, 391.0], [41.0, 391.0], [41.1, 391.0], [41.2, 391.0], [41.3, 425.0], [41.4, 425.0], [41.5, 425.0], [41.6, 425.0], [41.7, 425.0], [41.8, 425.0], [41.9, 425.0], [42.0, 425.0], [42.1, 425.0], [42.2, 425.0], [42.3, 425.0], [42.4, 425.0], [42.5, 425.0], [42.6, 425.0], [42.7, 425.0], [42.8, 425.0], [42.9, 458.0], [43.0, 458.0], [43.1, 458.0], [43.2, 458.0], [43.3, 458.0], [43.4, 458.0], [43.5, 458.0], [43.6, 458.0], [43.7, 458.0], [43.8, 458.0], [43.9, 458.0], [44.0, 458.0], [44.1, 458.0], [44.2, 458.0], [44.3, 458.0], [44.4, 458.0], [44.5, 478.0], [44.6, 478.0], [44.7, 478.0], [44.8, 478.0], [44.9, 478.0], [45.0, 478.0], [45.1, 478.0], [45.2, 478.0], [45.3, 478.0], [45.4, 478.0], [45.5, 478.0], [45.6, 478.0], [45.7, 478.0], [45.8, 478.0], [45.9, 478.0], [46.0, 478.0], [46.1, 487.0], [46.2, 487.0], [46.3, 487.0], [46.4, 487.0], [46.5, 487.0], [46.6, 487.0], [46.7, 487.0], [46.8, 487.0], [46.9, 487.0], [47.0, 487.0], [47.1, 487.0], [47.2, 487.0], [47.3, 487.0], [47.4, 487.0], [47.5, 487.0], [47.6, 487.0], [47.7, 490.0], [47.8, 490.0], [47.9, 490.0], [48.0, 490.0], [48.1, 490.0], [48.2, 490.0], [48.3, 490.0], [48.4, 490.0], [48.5, 490.0], [48.6, 490.0], [48.7, 490.0], [48.8, 490.0], [48.9, 490.0], [49.0, 490.0], [49.1, 490.0], [49.2, 490.0], [49.3, 497.0], [49.4, 497.0], [49.5, 497.0], [49.6, 497.0], [49.7, 497.0], [49.8, 497.0], [49.9, 497.0], [50.0, 497.0], [50.1, 497.0], [50.2, 497.0], [50.3, 497.0], [50.4, 497.0], [50.5, 497.0], [50.6, 497.0], [50.7, 497.0], [50.8, 507.0], [50.9, 507.0], [51.0, 507.0], [51.1, 507.0], [51.2, 507.0], [51.3, 507.0], [51.4, 507.0], [51.5, 507.0], [51.6, 507.0], [51.7, 507.0], [51.8, 507.0], [51.9, 507.0], [52.0, 507.0], [52.1, 507.0], [52.2, 507.0], [52.3, 507.0], [52.4, 518.0], [52.5, 518.0], [52.6, 518.0], [52.7, 518.0], [52.8, 518.0], [52.9, 518.0], [53.0, 518.0], [53.1, 518.0], [53.2, 518.0], [53.3, 518.0], [53.4, 518.0], [53.5, 518.0], [53.6, 518.0], [53.7, 518.0], [53.8, 518.0], [53.9, 518.0], [54.0, 621.0], [54.1, 621.0], [54.2, 621.0], [54.3, 621.0], [54.4, 621.0], [54.5, 621.0], [54.6, 621.0], [54.7, 621.0], [54.8, 621.0], [54.9, 621.0], [55.0, 621.0], [55.1, 621.0], [55.2, 621.0], [55.3, 621.0], [55.4, 621.0], [55.5, 621.0], [55.6, 648.0], [55.7, 648.0], [55.8, 648.0], [55.9, 648.0], [56.0, 648.0], [56.1, 648.0], [56.2, 648.0], [56.3, 648.0], [56.4, 648.0], [56.5, 648.0], [56.6, 648.0], [56.7, 648.0], [56.8, 648.0], [56.9, 648.0], [57.0, 648.0], [57.1, 648.0], [57.2, 681.0], [57.3, 681.0], [57.4, 681.0], [57.5, 681.0], [57.6, 681.0], [57.7, 681.0], [57.8, 681.0], [57.9, 681.0], [58.0, 681.0], [58.1, 681.0], [58.2, 681.0], [58.3, 681.0], [58.4, 681.0], [58.5, 681.0], [58.6, 681.0], [58.7, 681.0], [58.8, 690.0], [58.9, 690.0], [59.0, 690.0], [59.1, 690.0], [59.2, 690.0], [59.3, 690.0], [59.4, 690.0], [59.5, 690.0], [59.6, 690.0], [59.7, 690.0], [59.8, 690.0], [59.9, 690.0], [60.0, 690.0], [60.1, 690.0], [60.2, 690.0], [60.3, 690.0], [60.4, 712.0], [60.5, 712.0], [60.6, 712.0], [60.7, 712.0], [60.8, 712.0], [60.9, 712.0], [61.0, 712.0], [61.1, 712.0], [61.2, 712.0], [61.3, 712.0], [61.4, 712.0], [61.5, 712.0], [61.6, 712.0], [61.7, 712.0], [61.8, 712.0], [61.9, 712.0], [62.0, 776.0], [62.1, 776.0], [62.2, 776.0], [62.3, 776.0], [62.4, 776.0], [62.5, 776.0], [62.6, 776.0], [62.7, 776.0], [62.8, 776.0], [62.9, 776.0], [63.0, 776.0], [63.1, 776.0], [63.2, 776.0], [63.3, 776.0], [63.4, 776.0], [63.5, 796.0], [63.6, 796.0], [63.7, 796.0], [63.8, 796.0], [63.9, 796.0], [64.0, 796.0], [64.1, 796.0], [64.2, 796.0], [64.3, 796.0], [64.4, 796.0], [64.5, 796.0], [64.6, 796.0], [64.7, 796.0], [64.8, 796.0], [64.9, 796.0], [65.0, 796.0], [65.1, 803.0], [65.2, 803.0], [65.3, 803.0], [65.4, 803.0], [65.5, 803.0], [65.6, 803.0], [65.7, 803.0], [65.8, 803.0], [65.9, 803.0], [66.0, 803.0], [66.1, 803.0], [66.2, 803.0], [66.3, 803.0], [66.4, 803.0], [66.5, 803.0], [66.6, 803.0], [66.7, 836.0], [66.8, 836.0], [66.9, 836.0], [67.0, 836.0], [67.1, 836.0], [67.2, 836.0], [67.3, 836.0], [67.4, 836.0], [67.5, 836.0], [67.6, 836.0], [67.7, 836.0], [67.8, 836.0], [67.9, 836.0], [68.0, 836.0], [68.1, 836.0], [68.2, 836.0], [68.3, 898.0], [68.4, 898.0], [68.5, 898.0], [68.6, 898.0], [68.7, 898.0], [68.8, 898.0], [68.9, 898.0], [69.0, 898.0], [69.1, 898.0], [69.2, 898.0], [69.3, 898.0], [69.4, 898.0], [69.5, 898.0], [69.6, 898.0], [69.7, 898.0], [69.8, 898.0], [69.9, 937.0], [70.0, 937.0], [70.1, 937.0], [70.2, 937.0], [70.3, 937.0], [70.4, 937.0], [70.5, 937.0], [70.6, 937.0], [70.7, 937.0], [70.8, 937.0], [70.9, 937.0], [71.0, 937.0], [71.1, 937.0], [71.2, 937.0], [71.3, 937.0], [71.4, 937.0], [71.5, 985.0], [71.6, 985.0], [71.7, 985.0], [71.8, 985.0], [71.9, 985.0], [72.0, 985.0], [72.1, 985.0], [72.2, 985.0], [72.3, 985.0], [72.4, 985.0], [72.5, 985.0], [72.6, 985.0], [72.7, 985.0], [72.8, 985.0], [72.9, 985.0], [73.0, 985.0], [73.1, 991.0], [73.2, 991.0], [73.3, 991.0], [73.4, 991.0], [73.5, 991.0], [73.6, 991.0], [73.7, 991.0], [73.8, 991.0], [73.9, 991.0], [74.0, 991.0], [74.1, 991.0], [74.2, 991.0], [74.3, 991.0], [74.4, 991.0], [74.5, 991.0], [74.6, 991.0], [74.7, 995.0], [74.8, 995.0], [74.9, 995.0], [75.0, 995.0], [75.1, 995.0], [75.2, 995.0], [75.3, 995.0], [75.4, 995.0], [75.5, 995.0], [75.6, 995.0], [75.7, 995.0], [75.8, 995.0], [75.9, 995.0], [76.0, 995.0], [76.1, 995.0], [76.2, 1022.0], [76.3, 1022.0], [76.4, 1022.0], [76.5, 1022.0], [76.6, 1022.0], [76.7, 1022.0], [76.8, 1022.0], [76.9, 1022.0], [77.0, 1022.0], [77.1, 1022.0], [77.2, 1022.0], [77.3, 1022.0], [77.4, 1022.0], [77.5, 1022.0], [77.6, 1022.0], [77.7, 1022.0], [77.8, 1247.0], [77.9, 1247.0], [78.0, 1247.0], [78.1, 1247.0], [78.2, 1247.0], [78.3, 1247.0], [78.4, 1247.0], [78.5, 1247.0], [78.6, 1247.0], [78.7, 1247.0], [78.8, 1247.0], [78.9, 1247.0], [79.0, 1247.0], [79.1, 1247.0], [79.2, 1247.0], [79.3, 1247.0], [79.4, 1280.0], [79.5, 1280.0], [79.6, 1280.0], [79.7, 1280.0], [79.8, 1280.0], [79.9, 1280.0], [80.0, 1280.0], [80.1, 1280.0], [80.2, 1280.0], [80.3, 1280.0], [80.4, 1280.0], [80.5, 1280.0], [80.6, 1280.0], [80.7, 1280.0], [80.8, 1280.0], [80.9, 1280.0], [81.0, 1282.0], [81.1, 1282.0], [81.2, 1282.0], [81.3, 1282.0], [81.4, 1282.0], [81.5, 1282.0], [81.6, 1282.0], [81.7, 1282.0], [81.8, 1282.0], [81.9, 1282.0], [82.0, 1282.0], [82.1, 1282.0], [82.2, 1282.0], [82.3, 1282.0], [82.4, 1282.0], [82.5, 1282.0], [82.6, 1302.0], [82.7, 1302.0], [82.8, 1302.0], [82.9, 1302.0], [83.0, 1302.0], [83.1, 1302.0], [83.2, 1302.0], [83.3, 1302.0], [83.4, 1302.0], [83.5, 1302.0], [83.6, 1302.0], [83.7, 1302.0], [83.8, 1302.0], [83.9, 1302.0], [84.0, 1302.0], [84.1, 1302.0], [84.2, 4017.0], [84.3, 4017.0], [84.4, 4017.0], [84.5, 4017.0], [84.6, 4017.0], [84.7, 4017.0], [84.8, 4017.0], [84.9, 4017.0], [85.0, 4017.0], [85.1, 4017.0], [85.2, 4017.0], [85.3, 4017.0], [85.4, 4017.0], [85.5, 4017.0], [85.6, 4017.0], [85.7, 4017.0], [85.8, 4245.0], [85.9, 4245.0], [86.0, 4245.0], [86.1, 4245.0], [86.2, 4245.0], [86.3, 4245.0], [86.4, 4245.0], [86.5, 4245.0], [86.6, 4245.0], [86.7, 4245.0], [86.8, 4245.0], [86.9, 4245.0], [87.0, 4245.0], [87.1, 4245.0], [87.2, 4245.0], [87.3, 4245.0], [87.4, 4331.0], [87.5, 4331.0], [87.6, 4331.0], [87.7, 4331.0], [87.8, 4331.0], [87.9, 4331.0], [88.0, 4331.0], [88.1, 4331.0], [88.2, 4331.0], [88.3, 4331.0], [88.4, 4331.0], [88.5, 4331.0], [88.6, 4331.0], [88.7, 4331.0], [88.8, 4331.0], [88.9, 4332.0], [89.0, 4332.0], [89.1, 4332.0], [89.2, 4332.0], [89.3, 4332.0], [89.4, 4332.0], [89.5, 4332.0], [89.6, 4332.0], [89.7, 4332.0], [89.8, 4332.0], [89.9, 4332.0], [90.0, 4332.0], [90.1, 4332.0], [90.2, 4332.0], [90.3, 4332.0], [90.4, 4332.0], [90.5, 5529.0], [90.6, 5529.0], [90.7, 5529.0], [90.8, 5529.0], [90.9, 5529.0], [91.0, 5529.0], [91.1, 5529.0], [91.2, 5529.0], [91.3, 5529.0], [91.4, 5529.0], [91.5, 5529.0], [91.6, 5529.0], [91.7, 5529.0], [91.8, 5529.0], [91.9, 5529.0], [92.0, 5529.0], [92.1, 5581.0], [92.2, 5581.0], [92.3, 5581.0], [92.4, 5581.0], [92.5, 5581.0], [92.6, 5581.0], [92.7, 5581.0], [92.8, 5581.0], [92.9, 5581.0], [93.0, 5581.0], [93.1, 5581.0], [93.2, 5581.0], [93.3, 5581.0], [93.4, 5581.0], [93.5, 5581.0], [93.6, 5581.0], [93.7, 5612.0], [93.8, 5612.0], [93.9, 5612.0], [94.0, 5612.0], [94.1, 5612.0], [94.2, 5612.0], [94.3, 5612.0], [94.4, 5612.0], [94.5, 5612.0], [94.6, 5612.0], [94.7, 5612.0], [94.8, 5612.0], [94.9, 5612.0], [95.0, 5612.0], [95.1, 5612.0], [95.2, 5612.0], [95.3, 5790.0], [95.4, 5790.0], [95.5, 5790.0], [95.6, 5790.0], [95.7, 5790.0], [95.8, 5790.0], [95.9, 5790.0], [96.0, 5790.0], [96.1, 5790.0], [96.2, 5790.0], [96.3, 5790.0], [96.4, 5790.0], [96.5, 5790.0], [96.6, 5790.0], [96.7, 5790.0], [96.8, 5790.0], [96.9, 6093.0], [97.0, 6093.0], [97.1, 6093.0], [97.2, 6093.0], [97.3, 6093.0], [97.4, 6093.0], [97.5, 6093.0], [97.6, 6093.0], [97.7, 6093.0], [97.8, 6093.0], [97.9, 6093.0], [98.0, 6093.0], [98.1, 6093.0], [98.2, 6093.0], [98.3, 6093.0], [98.4, 6093.0], [98.5, 6191.0], [98.6, 6191.0], [98.7, 6191.0], [98.8, 6191.0], [98.9, 6191.0], [99.0, 6191.0], [99.1, 6191.0], [99.2, 6191.0], [99.3, 6191.0], [99.4, 6191.0], [99.5, 6191.0], [99.6, 6191.0], [99.7, 6191.0], [99.8, 6191.0], [99.9, 6191.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 12.0, "series": [{"data": [[600.0, 4.0], [700.0, 3.0], [200.0, 12.0], [800.0, 3.0], [900.0, 4.0], [4000.0, 1.0], [1000.0, 1.0], [4300.0, 2.0], [4200.0, 1.0], [300.0, 10.0], [1200.0, 3.0], [1300.0, 1.0], [5600.0, 1.0], [5500.0, 2.0], [5700.0, 1.0], [6100.0, 1.0], [6000.0, 1.0], [400.0, 6.0], [100.0, 4.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 32.0, "series": [{"data": [[0.0, 32.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.301587301587302, "minX": 1.604514E12, "maxY": 9.301587301587302, "series": [{"data": [[1.604514E12, 9.301587301587302]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604514E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 681.0, "minX": 1.0, "maxY": 1329.2037037037035, "series": [{"data": [[8.0, 991.0], [2.0, 681.0], [1.0, 1302.0], [9.0, 898.0], [10.0, 1329.2037037037035], [5.0, 1132.5], [6.0, 1022.0], [3.0, 796.0], [7.0, 712.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.301587301587302, 1276.8888888888885]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 888.8166666666667, "minX": 1.604514E12, "maxY": 394098.5333333333, "series": [{"data": [[1.604514E12, 394098.5333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.604514E12, 888.8166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604514E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1276.8888888888885, "minX": 1.604514E12, "maxY": 1276.8888888888885, "series": [{"data": [[1.604514E12, 1276.8888888888885]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604514E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1273.9999999999995, "minX": 1.604514E12, "maxY": 1273.9999999999995, "series": [{"data": [[1.604514E12, 1273.9999999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604514E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.8253968253968251, "minX": 1.604514E12, "maxY": 1.8253968253968251, "series": [{"data": [[1.604514E12, 1.8253968253968251]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604514E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 141.0, "minX": 1.604514E12, "maxY": 6191.0, "series": [{"data": [[1.604514E12, 6191.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.604514E12, 141.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.604514E12, 141.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.604514E12, 141.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.604514E12, 141.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.604514E12, 497.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604514E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 408.0, "minX": 1.0, "maxY": 4245.0, "series": [{"data": [[1.0, 1302.0], [5.0, 4245.0], [20.0, 408.0], [12.0, 504.0], [13.0, 803.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 407.5, "minX": 1.0, "maxY": 4244.0, "series": [{"data": [[1.0, 1292.0], [5.0, 4244.0], [20.0, 407.5], [12.0, 504.0], [13.0, 803.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.604514E12, "maxY": 1.05, "series": [{"data": [[1.604514E12, 1.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604514E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.604514E12, "maxY": 1.05, "series": [{"data": [[1.604514E12, 1.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.604514E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.604514E12, "maxY": 1.05, "series": [{"data": [[1.604514E12, 1.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604514E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.05, "minX": 1.604514E12, "maxY": 1.05, "series": [{"data": [[1.604514E12, 1.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.604514E12, "title": "Total Transactions Per Second"}},
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

