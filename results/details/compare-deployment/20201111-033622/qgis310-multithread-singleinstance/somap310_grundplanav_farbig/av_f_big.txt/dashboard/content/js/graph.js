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
        data: {"result": {"minY": 307.0, "minX": 0.0, "maxY": 8894.0, "series": [{"data": [[0.0, 307.0], [0.1, 307.0], [0.2, 817.0], [0.3, 1527.0], [0.4, 1527.0], [0.5, 1953.0], [0.6, 2369.0], [0.7, 2585.0], [0.8, 2585.0], [0.9, 2638.0], [1.0, 2780.0], [1.1, 2910.0], [1.2, 2910.0], [1.3, 2938.0], [1.4, 2942.0], [1.5, 2969.0], [1.6, 2969.0], [1.7, 2975.0], [1.8, 3008.0], [1.9, 3008.0], [2.0, 3020.0], [2.1, 3059.0], [2.2, 3100.0], [2.3, 3100.0], [2.4, 3129.0], [2.5, 3137.0], [2.6, 3143.0], [2.7, 3143.0], [2.8, 3159.0], [2.9, 3162.0], [3.0, 3165.0], [3.1, 3165.0], [3.2, 3202.0], [3.3, 3203.0], [3.4, 3203.0], [3.5, 3296.0], [3.6, 3309.0], [3.7, 3328.0], [3.8, 3328.0], [3.9, 3342.0], [4.0, 3347.0], [4.1, 3347.0], [4.2, 3347.0], [4.3, 3351.0], [4.4, 3360.0], [4.5, 3371.0], [4.6, 3371.0], [4.7, 3382.0], [4.8, 3392.0], [4.9, 3399.0], [5.0, 3399.0], [5.1, 3403.0], [5.2, 3410.0], [5.3, 3410.0], [5.4, 3413.0], [5.5, 3414.0], [5.6, 3428.0], [5.7, 3428.0], [5.8, 3439.0], [5.9, 3441.0], [6.0, 3445.0], [6.1, 3445.0], [6.2, 3447.0], [6.3, 3455.0], [6.4, 3456.0], [6.5, 3456.0], [6.6, 3472.0], [6.7, 3478.0], [6.8, 3478.0], [6.9, 3484.0], [7.0, 3490.0], [7.1, 3490.0], [7.2, 3490.0], [7.3, 3490.0], [7.4, 3504.0], [7.5, 3509.0], [7.6, 3509.0], [7.7, 3512.0], [7.8, 3516.0], [7.9, 3516.0], [8.0, 3516.0], [8.1, 3520.0], [8.2, 3522.0], [8.3, 3523.0], [8.4, 3523.0], [8.5, 3525.0], [8.6, 3531.0], [8.7, 3531.0], [8.8, 3540.0], [8.9, 3548.0], [9.0, 3576.0], [9.1, 3576.0], [9.2, 3579.0], [9.3, 3588.0], [9.4, 3597.0], [9.5, 3597.0], [9.6, 3606.0], [9.7, 3608.0], [9.8, 3609.0], [9.9, 3609.0], [10.0, 3625.0], [10.1, 3627.0], [10.2, 3627.0], [10.3, 3648.0], [10.4, 3653.0], [10.5, 3663.0], [10.6, 3663.0], [10.7, 3665.0], [10.8, 3673.0], [10.9, 3673.0], [11.0, 3673.0], [11.1, 3677.0], [11.2, 3680.0], [11.3, 3683.0], [11.4, 3683.0], [11.5, 3683.0], [11.6, 3684.0], [11.7, 3684.0], [11.8, 3689.0], [11.9, 3692.0], [12.0, 3697.0], [12.1, 3697.0], [12.2, 3698.0], [12.3, 3706.0], [12.4, 3710.0], [12.5, 3710.0], [12.6, 3715.0], [12.7, 3722.0], [12.8, 3763.0], [12.9, 3763.0], [13.0, 3799.0], [13.1, 3817.0], [13.2, 3852.0], [13.3, 3852.0], [13.4, 3853.0], [13.5, 3859.0], [13.6, 3859.0], [13.7, 3859.0], [13.8, 3863.0], [13.9, 3864.0], [14.0, 3864.0], [14.1, 3865.0], [14.2, 3866.0], [14.3, 3883.0], [14.4, 3883.0], [14.5, 3883.0], [14.6, 3886.0], [14.7, 3887.0], [14.8, 3887.0], [14.9, 3892.0], [15.0, 3906.0], [15.1, 3906.0], [15.2, 3911.0], [15.3, 3925.0], [15.4, 3927.0], [15.5, 3927.0], [15.6, 3937.0], [15.7, 3941.0], [15.8, 3945.0], [15.9, 3945.0], [16.0, 3954.0], [16.1, 3969.0], [16.2, 3978.0], [16.3, 3978.0], [16.4, 3992.0], [16.5, 3997.0], [16.6, 4000.0], [16.7, 4000.0], [16.8, 4003.0], [16.9, 4009.0], [17.0, 4009.0], [17.1, 4014.0], [17.2, 4018.0], [17.3, 4022.0], [17.4, 4022.0], [17.5, 4030.0], [17.6, 4030.0], [17.7, 4039.0], [17.8, 4039.0], [17.9, 4042.0], [18.0, 4047.0], [18.1, 4055.0], [18.2, 4055.0], [18.3, 4070.0], [18.4, 4076.0], [18.5, 4076.0], [18.6, 4079.0], [18.7, 4091.0], [18.8, 4103.0], [18.9, 4103.0], [19.0, 4113.0], [19.1, 4114.0], [19.2, 4117.0], [19.3, 4117.0], [19.4, 4127.0], [19.5, 4128.0], [19.6, 4128.0], [19.7, 4128.0], [19.8, 4138.0], [19.9, 4139.0], [20.0, 4141.0], [20.1, 4141.0], [20.2, 4147.0], [20.3, 4148.0], [20.4, 4148.0], [20.5, 4157.0], [20.6, 4161.0], [20.7, 4162.0], [20.8, 4162.0], [20.9, 4166.0], [21.0, 4168.0], [21.1, 4169.0], [21.2, 4169.0], [21.3, 4171.0], [21.4, 4177.0], [21.5, 4191.0], [21.6, 4191.0], [21.7, 4204.0], [21.8, 4206.0], [21.9, 4206.0], [22.0, 4212.0], [22.1, 4214.0], [22.2, 4219.0], [22.3, 4219.0], [22.4, 4234.0], [22.5, 4240.0], [22.6, 4244.0], [22.7, 4244.0], [22.8, 4247.0], [22.9, 4249.0], [23.0, 4252.0], [23.1, 4252.0], [23.2, 4260.0], [23.3, 4265.0], [23.4, 4265.0], [23.5, 4265.0], [23.6, 4266.0], [23.7, 4270.0], [23.8, 4270.0], [23.9, 4272.0], [24.0, 4273.0], [24.1, 4276.0], [24.2, 4276.0], [24.3, 4288.0], [24.4, 4295.0], [24.5, 4296.0], [24.6, 4296.0], [24.7, 4298.0], [24.8, 4301.0], [24.9, 4312.0], [25.0, 4312.0], [25.1, 4318.0], [25.2, 4328.0], [25.3, 4328.0], [25.4, 4335.0], [25.5, 4338.0], [25.6, 4348.0], [25.7, 4348.0], [25.8, 4350.0], [25.9, 4361.0], [26.0, 4381.0], [26.1, 4381.0], [26.2, 4395.0], [26.3, 4416.0], [26.4, 4422.0], [26.5, 4422.0], [26.6, 4424.0], [26.7, 4430.0], [26.8, 4430.0], [26.9, 4437.0], [27.0, 4438.0], [27.1, 4440.0], [27.2, 4440.0], [27.3, 4447.0], [27.4, 4448.0], [27.5, 4482.0], [27.6, 4482.0], [27.7, 4491.0], [27.8, 4492.0], [27.9, 4496.0], [28.0, 4496.0], [28.1, 4500.0], [28.2, 4503.0], [28.3, 4503.0], [28.4, 4503.0], [28.5, 4504.0], [28.6, 4507.0], [28.7, 4507.0], [28.8, 4507.0], [28.9, 4510.0], [29.0, 4510.0], [29.1, 4510.0], [29.2, 4511.0], [29.3, 4513.0], [29.4, 4525.0], [29.5, 4525.0], [29.6, 4528.0], [29.7, 4542.0], [29.8, 4556.0], [29.9, 4556.0], [30.0, 4562.0], [30.1, 4576.0], [30.2, 4576.0], [30.3, 4576.0], [30.4, 4582.0], [30.5, 4583.0], [30.6, 4583.0], [30.7, 4587.0], [30.8, 4592.0], [30.9, 4594.0], [31.0, 4594.0], [31.1, 4608.0], [31.2, 4608.0], [31.3, 4615.0], [31.4, 4615.0], [31.5, 4618.0], [31.6, 4627.0], [31.7, 4627.0], [31.8, 4653.0], [31.9, 4657.0], [32.0, 4666.0], [32.1, 4666.0], [32.2, 4677.0], [32.3, 4680.0], [32.4, 4687.0], [32.5, 4687.0], [32.6, 4726.0], [32.7, 4747.0], [32.8, 4749.0], [32.9, 4749.0], [33.0, 4756.0], [33.1, 4756.0], [33.2, 4758.0], [33.3, 4758.0], [33.4, 4758.0], [33.5, 4764.0], [33.6, 4764.0], [33.7, 4764.0], [33.8, 4765.0], [33.9, 4766.0], [34.0, 4766.0], [34.1, 4772.0], [34.2, 4777.0], [34.3, 4780.0], [34.4, 4780.0], [34.5, 4781.0], [34.6, 4782.0], [34.7, 4792.0], [34.8, 4792.0], [34.9, 4796.0], [35.0, 4800.0], [35.1, 4800.0], [35.2, 4801.0], [35.3, 4801.0], [35.4, 4812.0], [35.5, 4812.0], [35.6, 4814.0], [35.7, 4815.0], [35.8, 4820.0], [35.9, 4820.0], [36.0, 4827.0], [36.1, 4827.0], [36.2, 4828.0], [36.3, 4828.0], [36.4, 4830.0], [36.5, 4836.0], [36.6, 4863.0], [36.7, 4863.0], [36.8, 4878.0], [36.9, 4880.0], [37.0, 4880.0], [37.1, 4885.0], [37.2, 4900.0], [37.3, 4904.0], [37.4, 4904.0], [37.5, 4907.0], [37.6, 4914.0], [37.7, 4917.0], [37.8, 4917.0], [37.9, 4921.0], [38.0, 4927.0], [38.1, 4928.0], [38.2, 4928.0], [38.3, 4928.0], [38.4, 4936.0], [38.5, 4936.0], [38.6, 4940.0], [38.7, 4941.0], [38.8, 4942.0], [38.9, 4942.0], [39.0, 4944.0], [39.1, 4944.0], [39.2, 4950.0], [39.3, 4950.0], [39.4, 4956.0], [39.5, 4958.0], [39.6, 4961.0], [39.7, 4961.0], [39.8, 4968.0], [39.9, 4969.0], [40.0, 4972.0], [40.1, 4972.0], [40.2, 4972.0], [40.3, 4973.0], [40.4, 4973.0], [40.5, 4974.0], [40.6, 4979.0], [40.7, 4980.0], [40.8, 4980.0], [40.9, 4986.0], [41.0, 4992.0], [41.1, 5007.0], [41.2, 5007.0], [41.3, 5009.0], [41.4, 5013.0], [41.5, 5014.0], [41.6, 5014.0], [41.7, 5014.0], [41.8, 5019.0], [41.9, 5019.0], [42.0, 5022.0], [42.1, 5025.0], [42.2, 5030.0], [42.3, 5030.0], [42.4, 5032.0], [42.5, 5036.0], [42.6, 5041.0], [42.7, 5041.0], [42.8, 5051.0], [42.9, 5059.0], [43.0, 5062.0], [43.1, 5062.0], [43.2, 5074.0], [43.3, 5078.0], [43.4, 5078.0], [43.5, 5091.0], [43.6, 5111.0], [43.7, 5112.0], [43.8, 5112.0], [43.9, 5115.0], [44.0, 5115.0], [44.1, 5119.0], [44.2, 5119.0], [44.3, 5120.0], [44.4, 5123.0], [44.5, 5125.0], [44.6, 5125.0], [44.7, 5129.0], [44.8, 5142.0], [44.9, 5149.0], [45.0, 5149.0], [45.1, 5156.0], [45.2, 5166.0], [45.3, 5166.0], [45.4, 5168.0], [45.5, 5170.0], [45.6, 5176.0], [45.7, 5176.0], [45.8, 5185.0], [45.9, 5196.0], [46.0, 5199.0], [46.1, 5199.0], [46.2, 5203.0], [46.3, 5210.0], [46.4, 5213.0], [46.5, 5213.0], [46.6, 5217.0], [46.7, 5225.0], [46.8, 5225.0], [46.9, 5229.0], [47.0, 5233.0], [47.1, 5237.0], [47.2, 5237.0], [47.3, 5238.0], [47.4, 5241.0], [47.5, 5245.0], [47.6, 5245.0], [47.7, 5246.0], [47.8, 5250.0], [47.9, 5254.0], [48.0, 5254.0], [48.1, 5257.0], [48.2, 5274.0], [48.3, 5275.0], [48.4, 5275.0], [48.5, 5279.0], [48.6, 5281.0], [48.7, 5281.0], [48.8, 5281.0], [48.9, 5284.0], [49.0, 5286.0], [49.1, 5286.0], [49.2, 5289.0], [49.3, 5294.0], [49.4, 5295.0], [49.5, 5295.0], [49.6, 5296.0], [49.7, 5301.0], [49.8, 5302.0], [49.9, 5302.0], [50.0, 5319.0], [50.1, 5320.0], [50.2, 5320.0], [50.3, 5323.0], [50.4, 5323.0], [50.5, 5325.0], [50.6, 5325.0], [50.7, 5328.0], [50.8, 5329.0], [50.9, 5332.0], [51.0, 5332.0], [51.1, 5333.0], [51.2, 5334.0], [51.3, 5336.0], [51.4, 5336.0], [51.5, 5338.0], [51.6, 5350.0], [51.7, 5350.0], [51.8, 5360.0], [51.9, 5360.0], [52.0, 5363.0], [52.1, 5363.0], [52.2, 5365.0], [52.3, 5366.0], [52.4, 5369.0], [52.5, 5369.0], [52.6, 5371.0], [52.7, 5374.0], [52.8, 5379.0], [52.9, 5379.0], [53.0, 5385.0], [53.1, 5387.0], [53.2, 5389.0], [53.3, 5389.0], [53.4, 5389.0], [53.5, 5393.0], [53.6, 5393.0], [53.7, 5398.0], [53.8, 5401.0], [53.9, 5404.0], [54.0, 5404.0], [54.1, 5412.0], [54.2, 5417.0], [54.3, 5418.0], [54.4, 5418.0], [54.5, 5419.0], [54.6, 5420.0], [54.7, 5420.0], [54.8, 5420.0], [54.9, 5421.0], [55.0, 5421.0], [55.1, 5421.0], [55.2, 5425.0], [55.3, 5428.0], [55.4, 5431.0], [55.5, 5431.0], [55.6, 5432.0], [55.7, 5433.0], [55.8, 5434.0], [55.9, 5434.0], [56.0, 5434.0], [56.1, 5434.0], [56.2, 5437.0], [56.3, 5437.0], [56.4, 5444.0], [56.5, 5445.0], [56.6, 5446.0], [56.7, 5446.0], [56.8, 5447.0], [56.9, 5452.0], [57.0, 5452.0], [57.1, 5453.0], [57.2, 5456.0], [57.3, 5457.0], [57.4, 5457.0], [57.5, 5469.0], [57.6, 5469.0], [57.7, 5474.0], [57.8, 5474.0], [57.9, 5475.0], [58.0, 5475.0], [58.1, 5478.0], [58.2, 5478.0], [58.3, 5480.0], [58.4, 5480.0], [58.5, 5480.0], [58.6, 5483.0], [58.7, 5483.0], [58.8, 5487.0], [58.9, 5487.0], [59.0, 5487.0], [59.1, 5500.0], [59.2, 5501.0], [59.3, 5501.0], [59.4, 5501.0], [59.5, 5502.0], [59.6, 5507.0], [59.7, 5507.0], [59.8, 5511.0], [59.9, 5513.0], [60.0, 5513.0], [60.1, 5513.0], [60.2, 5515.0], [60.3, 5518.0], [60.4, 5518.0], [60.5, 5519.0], [60.6, 5520.0], [60.7, 5521.0], [60.8, 5521.0], [60.9, 5521.0], [61.0, 5521.0], [61.1, 5523.0], [61.2, 5523.0], [61.3, 5523.0], [61.4, 5527.0], [61.5, 5528.0], [61.6, 5528.0], [61.7, 5528.0], [61.8, 5530.0], [61.9, 5530.0], [62.0, 5533.0], [62.1, 5554.0], [62.2, 5555.0], [62.3, 5555.0], [62.4, 5562.0], [62.5, 5566.0], [62.6, 5567.0], [62.7, 5567.0], [62.8, 5569.0], [62.9, 5571.0], [63.0, 5573.0], [63.1, 5573.0], [63.2, 5574.0], [63.3, 5576.0], [63.4, 5576.0], [63.5, 5577.0], [63.6, 5587.0], [63.7, 5588.0], [63.8, 5588.0], [63.9, 5592.0], [64.0, 5593.0], [64.1, 5593.0], [64.2, 5593.0], [64.3, 5595.0], [64.4, 5595.0], [64.5, 5600.0], [64.6, 5600.0], [64.7, 5604.0], [64.8, 5605.0], [64.9, 5616.0], [65.0, 5616.0], [65.1, 5618.0], [65.2, 5619.0], [65.3, 5619.0], [65.4, 5623.0], [65.5, 5626.0], [65.6, 5629.0], [65.7, 5629.0], [65.8, 5636.0], [65.9, 5638.0], [66.0, 5641.0], [66.1, 5641.0], [66.2, 5642.0], [66.3, 5642.0], [66.4, 5643.0], [66.5, 5643.0], [66.6, 5647.0], [66.7, 5647.0], [66.8, 5647.0], [66.9, 5648.0], [67.0, 5653.0], [67.1, 5655.0], [67.2, 5655.0], [67.3, 5655.0], [67.4, 5661.0], [67.5, 5667.0], [67.6, 5667.0], [67.7, 5671.0], [67.8, 5672.0], [67.9, 5673.0], [68.0, 5673.0], [68.1, 5677.0], [68.2, 5685.0], [68.3, 5692.0], [68.4, 5692.0], [68.5, 5693.0], [68.6, 5702.0], [68.7, 5702.0], [68.8, 5710.0], [68.9, 5714.0], [69.0, 5721.0], [69.1, 5721.0], [69.2, 5723.0], [69.3, 5724.0], [69.4, 5725.0], [69.5, 5725.0], [69.6, 5725.0], [69.7, 5726.0], [69.8, 5734.0], [69.9, 5734.0], [70.0, 5735.0], [70.1, 5738.0], [70.2, 5738.0], [70.3, 5740.0], [70.4, 5744.0], [70.5, 5750.0], [70.6, 5750.0], [70.7, 5756.0], [70.8, 5762.0], [70.9, 5763.0], [71.0, 5763.0], [71.1, 5768.0], [71.2, 5772.0], [71.3, 5776.0], [71.4, 5776.0], [71.5, 5777.0], [71.6, 5779.0], [71.7, 5779.0], [71.8, 5780.0], [71.9, 5780.0], [72.0, 5785.0], [72.1, 5785.0], [72.2, 5787.0], [72.3, 5787.0], [72.4, 5788.0], [72.5, 5788.0], [72.6, 5792.0], [72.7, 5792.0], [72.8, 5801.0], [72.9, 5801.0], [73.0, 5805.0], [73.1, 5805.0], [73.2, 5807.0], [73.3, 5807.0], [73.4, 5809.0], [73.5, 5814.0], [73.6, 5814.0], [73.7, 5816.0], [73.8, 5816.0], [73.9, 5818.0], [74.0, 5818.0], [74.1, 5822.0], [74.2, 5824.0], [74.3, 5826.0], [74.4, 5826.0], [74.5, 5827.0], [74.6, 5827.0], [74.7, 5830.0], [74.8, 5830.0], [74.9, 5831.0], [75.0, 5833.0], [75.1, 5833.0], [75.2, 5833.0], [75.3, 5838.0], [75.4, 5839.0], [75.5, 5839.0], [75.6, 5839.0], [75.7, 5839.0], [75.8, 5849.0], [75.9, 5849.0], [76.0, 5850.0], [76.1, 5853.0], [76.2, 5853.0], [76.3, 5853.0], [76.4, 5855.0], [76.5, 5865.0], [76.6, 5872.0], [76.7, 5872.0], [76.8, 5873.0], [76.9, 5875.0], [77.0, 5875.0], [77.1, 5884.0], [77.2, 5885.0], [77.3, 5892.0], [77.4, 5892.0], [77.5, 5892.0], [77.6, 5895.0], [77.7, 5896.0], [77.8, 5896.0], [77.9, 5898.0], [78.0, 5898.0], [78.1, 5912.0], [78.2, 5912.0], [78.3, 5913.0], [78.4, 5914.0], [78.5, 5914.0], [78.6, 5921.0], [78.7, 5923.0], [78.8, 5925.0], [78.9, 5925.0], [79.0, 5928.0], [79.1, 5928.0], [79.2, 5932.0], [79.3, 5932.0], [79.4, 5932.0], [79.5, 5933.0], [79.6, 5937.0], [79.7, 5937.0], [79.8, 5939.0], [79.9, 5940.0], [80.0, 5942.0], [80.1, 5942.0], [80.2, 5947.0], [80.3, 5951.0], [80.4, 5951.0], [80.5, 5955.0], [80.6, 5955.0], [80.7, 5955.0], [80.8, 5955.0], [80.9, 5958.0], [81.0, 5959.0], [81.1, 5969.0], [81.2, 5969.0], [81.3, 5971.0], [81.4, 5975.0], [81.5, 5975.0], [81.6, 5975.0], [81.7, 5977.0], [81.8, 5980.0], [81.9, 5980.0], [82.0, 5983.0], [82.1, 5985.0], [82.2, 5986.0], [82.3, 5986.0], [82.4, 5989.0], [82.5, 6001.0], [82.6, 6002.0], [82.7, 6002.0], [82.8, 6002.0], [82.9, 6020.0], [83.0, 6028.0], [83.1, 6028.0], [83.2, 6031.0], [83.3, 6033.0], [83.4, 6033.0], [83.5, 6036.0], [83.6, 6041.0], [83.7, 6042.0], [83.8, 6042.0], [83.9, 6065.0], [84.0, 6069.0], [84.1, 6080.0], [84.2, 6080.0], [84.3, 6082.0], [84.4, 6082.0], [84.5, 6083.0], [84.6, 6083.0], [84.7, 6087.0], [84.8, 6089.0], [84.9, 6101.0], [85.0, 6101.0], [85.1, 6104.0], [85.2, 6111.0], [85.3, 6111.0], [85.4, 6119.0], [85.5, 6133.0], [85.6, 6159.0], [85.7, 6159.0], [85.8, 6159.0], [85.9, 6162.0], [86.0, 6192.0], [86.1, 6192.0], [86.2, 6194.0], [86.3, 6210.0], [86.4, 6222.0], [86.5, 6222.0], [86.6, 6232.0], [86.7, 6234.0], [86.8, 6234.0], [86.9, 6235.0], [87.0, 6241.0], [87.1, 6248.0], [87.2, 6248.0], [87.3, 6253.0], [87.4, 6258.0], [87.5, 6266.0], [87.6, 6266.0], [87.7, 6301.0], [87.8, 6303.0], [87.9, 6309.0], [88.0, 6309.0], [88.1, 6323.0], [88.2, 6324.0], [88.3, 6331.0], [88.4, 6331.0], [88.5, 6340.0], [88.6, 6354.0], [88.7, 6354.0], [88.8, 6354.0], [88.9, 6365.0], [89.0, 6371.0], [89.1, 6371.0], [89.2, 6384.0], [89.3, 6442.0], [89.4, 6446.0], [89.5, 6446.0], [89.6, 6513.0], [89.7, 6517.0], [89.8, 6521.0], [89.9, 6521.0], [90.0, 6522.0], [90.1, 6554.0], [90.2, 6554.0], [90.3, 6577.0], [90.4, 6695.0], [90.5, 6698.0], [90.6, 6698.0], [90.7, 6713.0], [90.8, 6764.0], [90.9, 6776.0], [91.0, 6776.0], [91.1, 6838.0], [91.2, 6893.0], [91.3, 6943.0], [91.4, 6943.0], [91.5, 6966.0], [91.6, 6967.0], [91.7, 6967.0], [91.8, 7109.0], [91.9, 7127.0], [92.0, 7141.0], [92.1, 7141.0], [92.2, 7160.0], [92.3, 7164.0], [92.4, 7193.0], [92.5, 7193.0], [92.6, 7272.0], [92.7, 7281.0], [92.8, 7293.0], [92.9, 7293.0], [93.0, 7298.0], [93.1, 7331.0], [93.2, 7334.0], [93.3, 7334.0], [93.4, 7341.0], [93.5, 7350.0], [93.6, 7350.0], [93.7, 7372.0], [93.8, 7408.0], [93.9, 7473.0], [94.0, 7473.0], [94.1, 7552.0], [94.2, 7564.0], [94.3, 7616.0], [94.4, 7616.0], [94.5, 7645.0], [94.6, 7653.0], [94.7, 7677.0], [94.8, 7677.0], [94.9, 7677.0], [95.0, 7687.0], [95.1, 7687.0], [95.2, 7702.0], [95.3, 7750.0], [95.4, 7761.0], [95.5, 7761.0], [95.6, 7762.0], [95.7, 7780.0], [95.8, 7798.0], [95.9, 7798.0], [96.0, 7818.0], [96.1, 7859.0], [96.2, 7860.0], [96.3, 7860.0], [96.4, 7863.0], [96.5, 7863.0], [96.6, 7870.0], [96.7, 7870.0], [96.8, 7879.0], [96.9, 7922.0], [97.0, 7922.0], [97.1, 7925.0], [97.2, 7938.0], [97.3, 7971.0], [97.4, 7971.0], [97.5, 7972.0], [97.6, 7983.0], [97.7, 7986.0], [97.8, 7986.0], [97.9, 7989.0], [98.0, 7991.0], [98.1, 8072.0], [98.2, 8072.0], [98.3, 8092.0], [98.4, 8115.0], [98.5, 8115.0], [98.6, 8166.0], [98.7, 8181.0], [98.8, 8210.0], [98.9, 8210.0], [99.0, 8266.0], [99.1, 8285.0], [99.2, 8382.0], [99.3, 8382.0], [99.4, 8421.0], [99.5, 8509.0], [99.6, 8588.0], [99.7, 8588.0], [99.8, 8889.0], [99.9, 8894.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 40.0, "series": [{"data": [[800.0, 1.0], [1500.0, 1.0], [1900.0, 1.0], [2300.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 7.0], [3300.0, 11.0], [3200.0, 3.0], [3400.0, 17.0], [3500.0, 16.0], [3700.0, 6.0], [3600.0, 20.0], [3800.0, 14.0], [3900.0, 12.0], [4000.0, 16.0], [4300.0, 11.0], [4200.0, 23.0], [4100.0, 21.0], [4500.0, 22.0], [4600.0, 11.0], [4400.0, 13.0], [4800.0, 16.0], [4700.0, 18.0], [4900.0, 29.0], [5100.0, 19.0], [5000.0, 18.0], [5200.0, 26.0], [5300.0, 30.0], [5400.0, 39.0], [5500.0, 40.0], [5600.0, 30.0], [5800.0, 39.0], [5700.0, 31.0], [6100.0, 10.0], [6000.0, 18.0], [5900.0, 32.0], [6300.0, 12.0], [6200.0, 10.0], [6500.0, 6.0], [6600.0, 2.0], [6400.0, 2.0], [6900.0, 3.0], [6700.0, 3.0], [6800.0, 2.0], [7100.0, 6.0], [7400.0, 2.0], [7200.0, 4.0], [7300.0, 5.0], [7600.0, 6.0], [7500.0, 2.0], [7700.0, 6.0], [7900.0, 9.0], [7800.0, 7.0], [8100.0, 3.0], [8000.0, 2.0], [8200.0, 3.0], [8500.0, 2.0], [8300.0, 1.0], [8400.0, 1.0], [8800.0, 2.0], [300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 733.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 733.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.555555555555555, "minX": 1.60506756E12, "maxY": 12.0, "series": [{"data": [[1.60506768E12, 12.0], [1.60506786E12, 12.0], [1.60506756E12, 11.68421052631579], [1.60506774E12, 12.0], [1.60506792E12, 9.555555555555555], [1.60506762E12, 12.0], [1.6050678E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506792E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2124.0, "minX": 1.0, "maxY": 5227.5795297372, "series": [{"data": [[8.0, 3937.0], [4.0, 3969.0], [2.0, 3866.0], [1.0, 4240.0], [9.0, 3927.0], [10.0, 3504.0], [5.0, 3997.0], [11.0, 3484.0], [6.0, 2124.0], [12.0, 5227.5795297372], [3.0, 3911.0], [7.0, 3954.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.90204081632652, 5200.785034013597]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 144.76666666666668, "minX": 1.60506756E12, "maxY": 383375.13333333336, "series": [{"data": [[1.60506768E12, 289395.2], [1.60506786E12, 328366.23333333334], [1.60506756E12, 109670.33333333333], [1.60506774E12, 383375.13333333336], [1.60506792E12, 37835.05], [1.60506762E12, 383286.2], [1.6050678E12, 304355.18333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506768E12, 1073.1], [1.60506786E12, 1101.3833333333334], [1.60506756E12, 144.76666666666668], [1.60506774E12, 1097.8666666666666], [1.60506792E12, 190.96666666666667], [1.60506762E12, 975.8166666666667], [1.6050678E12, 939.1333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506792E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4258.1578947368425, "minX": 1.60506756E12, "maxY": 5804.572580645159, "series": [{"data": [[1.60506768E12, 5099.183098591552], [1.60506786E12, 4939.369863013696], [1.60506756E12, 4258.1578947368425], [1.60506774E12, 4779.270270270269], [1.60506792E12, 4692.814814814814], [1.60506762E12, 5756.860465116279], [1.6050678E12, 5804.572580645159]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506792E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4255.894736842106, "minX": 1.60506756E12, "maxY": 5803.241935483871, "series": [{"data": [[1.60506768E12, 5097.978873239437], [1.60506786E12, 4938.219178082192], [1.60506756E12, 4255.894736842106], [1.60506774E12, 4777.993243243245], [1.60506792E12, 4692.185185185183], [1.60506762E12, 5755.480620155038], [1.6050678E12, 5803.241935483871]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506792E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.054054054054054064, "minX": 1.60506756E12, "maxY": 7.105263157894737, "series": [{"data": [[1.60506768E12, 0.1056338028169014], [1.60506786E12, 0.10273972602739731], [1.60506756E12, 7.105263157894737], [1.60506774E12, 0.054054054054054064], [1.60506792E12, 0.5555555555555555], [1.60506762E12, 0.15503875968992245], [1.6050678E12, 0.09677419354838715]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506792E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 307.0, "minX": 1.60506756E12, "maxY": 8894.0, "series": [{"data": [[1.60506768E12, 6119.0], [1.60506786E12, 7372.0], [1.60506756E12, 7986.0], [1.60506774E12, 7983.0], [1.60506792E12, 6513.0], [1.60506762E12, 8894.0], [1.6050678E12, 7798.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506768E12, 3402.1569996249677], [1.60506786E12, 3343.6149998247624], [1.60506756E12, 307.0], [1.60506774E12, 2603.0729981172085], [1.60506792E12, 3484.0], [1.60506762E12, 3349.2099995970725], [1.6050678E12, 4196.3749987185]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506768E12, 3403.572700150013], [1.60506786E12, 3344.276500070095], [1.60506756E12, 307.0], [1.60506774E12, 2610.1803007531166], [1.60506792E12, 3484.0], [1.60506762E12, 3350.731000161171], [1.6050678E12, 4201.2125005126]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506768E12, 3402.943499812484], [1.60506786E12, 3343.982499912381], [1.60506756E12, 307.0], [1.60506774E12, 2607.021499058604], [1.60506792E12, 3484.0], [1.60506762E12, 3350.0549997985363], [1.6050678E12, 4199.06249935925]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506768E12, 3399.0], [1.60506786E12, 3342.0], [1.60506756E12, 307.0], [1.60506774E12, 2585.0], [1.60506792E12, 3484.0], [1.60506762E12, 3347.0], [1.6050678E12, 4191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506768E12, 5414.5], [1.60506786E12, 5010.0], [1.60506756E12, 4055.0], [1.60506774E12, 4611.5], [1.60506792E12, 4270.0], [1.60506762E12, 5642.0], [1.6050678E12, 5787.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506792E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4026.0, "minX": 1.0, "maxY": 5594.0, "series": [{"data": [[1.0, 5511.5], [2.0, 5594.0], [4.0, 4026.0], [5.0, 4961.0], [3.0, 5111.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4025.5, "minX": 1.0, "maxY": 5593.0, "series": [{"data": [[1.0, 5509.5], [2.0, 5593.0], [4.0, 4025.5], [5.0, 4961.0], [3.0, 5110.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60506756E12, "maxY": 2.466666666666667, "series": [{"data": [[1.60506768E12, 2.3666666666666667], [1.60506786E12, 2.433333333333333], [1.60506756E12, 0.5166666666666667], [1.60506774E12, 2.466666666666667], [1.60506792E12, 0.25], [1.60506762E12, 2.15], [1.6050678E12, 2.066666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506792E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60506756E12, "maxY": 2.466666666666667, "series": [{"data": [[1.60506768E12, 2.3666666666666667], [1.60506786E12, 2.433333333333333], [1.60506756E12, 0.31666666666666665], [1.60506774E12, 2.466666666666667], [1.60506792E12, 0.45], [1.60506762E12, 2.15], [1.6050678E12, 2.066666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506792E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60506756E12, "maxY": 2.466666666666667, "series": [{"data": [[1.60506768E12, 2.3666666666666667], [1.60506786E12, 2.433333333333333], [1.60506756E12, 0.31666666666666665], [1.60506774E12, 2.466666666666667], [1.60506792E12, 0.45], [1.60506762E12, 2.15], [1.6050678E12, 2.066666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506792E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60506756E12, "maxY": 2.466666666666667, "series": [{"data": [[1.60506768E12, 2.3666666666666667], [1.60506786E12, 2.433333333333333], [1.60506756E12, 0.31666666666666665], [1.60506774E12, 2.466666666666667], [1.60506792E12, 0.45], [1.60506762E12, 2.15], [1.6050678E12, 2.066666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506792E12, "title": "Total Transactions Per Second"}},
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

