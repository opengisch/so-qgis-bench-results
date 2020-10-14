# QGIS Benchmark summary compare-major (20201014-081746)


compare different version of QGIS servers using the same settings

_run completed in 00h 07m 09s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201014-081746_plot.html)

## Summary
| name                | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock       | Global  |         95.8 |               0   |            72 |            0 |     4337.5 |    3251.03 |     2917.6 |      98.1 |   44.2    |       4.1 |          0 |
| qgis314-standalone  | Global  |        781.8 |             715.9 |            72 |            0 |     8951.3 |    5919.37 |     2969.8 |      98.9 |   28.6333 |      12.5 |          0 |
| qgis3dev-standalone | Global  |       1119.2 |            1068   |            72 |            0 |     8383.7 |    5239.87 |     2982.6 |      98.9 |   27.6667 |      12.7 |          0 |

## Aggregated
| name                                              | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock > somap314_grundplanav_farbig       | somap_grundplanav_farbig |         48.6 |               0   |            22 |            0 |     4337.5 |     3561   |     2917.6 |      95.6 |      66.5 |      30.4 |          0 |
| qgis3dev-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |        388.1 |             697.7 |            22 |            0 |     5314.3 |     4692.4 |     3131.5 |      98.9 |      29   |      25   |          0 |
| qgis314-standalone > somap314_grundplanav_farbig  | somap_grundplanav_farbig |        392.3 |             706.3 |            22 |            0 |     6440.5 |     6082.5 |     3129.4 |      98.9 |      29.1 |      24.8 |          0 |
| qgis314-stock > somap314_grundplanav_sw           | somap_grundplanav_sw     |         38   |               0   |            20 |            0 |     3437.7 |     3248.1 |     3130.2 |      98.1 |      62   |      25.1 |          0 |
| qgis314-standalone > somap314_grundplanav_sw      | somap_grundplanav_sw     |        379.7 |             899   |            20 |            0 |     8951.3 |     8705.8 |     6561.1 |      98.5 |      39.6 |      12.5 |          0 |
| qgis3dev-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |        720.8 |            1796.4 |            20 |            0 |     8383.7 |     8044.6 |     5492.9 |      98.5 |      38.8 |      12.7 |          0 |
| qgis314-stock > somap314_lk                       | somap_lk                 |          9.2 |               0   |            30 |            0 |     2944   |     2944   |     2944   |       4.1 |       4.1 |       4.1 |          0 |
| qgis314-standalone > somap314_lk                  | somap_lk                 |          9.9 |               7.6 |            30 |            0 |     2969.8 |     2969.8 |     2969.8 |      17.2 |      17.2 |      17.2 |          0 |
| qgis3dev-standalone > somap314_lk                 | somap_lk                 |         10.4 |              13.1 |            30 |            0 |     2982.6 |     2982.6 |     2982.6 |      15.2 |      15.2 |      15.2 |          0 |

## Detail
| name                                                                                                                                                                                           | group                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis314-stock > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201014-081746/qgis314-stock/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f.txt |         48.6 |               0   |            22 |            0 |          0 |      2211.36  |          2112   |          648 |         3688 |        3314.2 |       3632.65 |          3688 |     3.5279   |               459.987  |          1.50337   |     4337.5 |     3561   |     2917.6 |      95.6 |      66.5 |      30.4 |
| [qgis3dev-standalone > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201014-081746/qgis3dev-standalone/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |        388.1 |             697.7 |            22 |            0 |          0 |     17639.6   |          2986   |          222 |        86509 |       86063.8 |      86479.3  |         86509 |     0.243352 |                29.5656 |          0.107028  |     5314.3 |     4692.4 |     3131.5 |      98.9 |      29   |      25   |
| [qgis314-standalone > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201014-081746/qgis314-standalone/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |        392.3 |             706.3 |            22 |            0 |          0 |     17830     |          3156   |          265 |        87169 |       86747.7 |      87148.1  |         87169 |     0.241562 |                29.3481 |          0.106241  |     6440.5 |     6082.5 |     3129.4 |      98.9 |      29.1 |      24.8 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201014-081746/qgis314-stock/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)                   | somap_grundplanav_sw > av_sw.txt    |         38   |               0   |            20 |            0 |          0 |      1900.3   |          2182.5 |          231 |         3800 |        3527.7 |       3789.5  |          3800 |     3.72926  |              1160.33   |          1.56163   |     3437.7 |     3248.1 |     3130.2 |      98.1 |      62   |      25.1 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201014-081746/qgis314-standalone/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |        379.7 |             899   |            20 |            0 |          0 |     18984.8   |          2659   |          236 |        88697 |       86073.2 |      88569.6  |         88697 |     0.217231 |                56.4328 |          0.0939353 |     8951.3 |     8705.8 |     6561.1 |      98.5 |      39.6 |      12.5 |
| [qgis3dev-standalone > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201014-081746/qgis3dev-standalone/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |        720.8 |            1796.4 |            20 |            0 |          0 |     36038     |          2589   |          226 |        91277 |       89131.8 |      91170.2  |         91277 |     0.218324 |                56.7167 |          0.094408  |     8383.7 |     8044.6 |     5492.9 |      98.5 |      38.8 |      12.7 |
| [qgis314-stock > somap314_lk > lk.txt](../results/details/compare-major/20201014-081746/qgis314-stock/somap314_lk/lk.txt/dashboard/index.html)                                                 | somap_lk > lk.txt                   |          9.2 |               0   |            30 |            0 |          0 |       305.467 |           236.5 |          115 |          756 |         750.4 |        753.8  |           756 |    22.6586   |               614.048  |          9.24341   |     2944   |     2944   |     2944   |       4.1 |       4.1 |       4.1 |
| [qgis314-standalone > somap314_lk > lk.txt](../results/details/compare-major/20201014-081746/qgis314-standalone/somap314_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |          9.9 |               7.6 |            30 |            0 |          0 |       328.633 |           189   |           61 |          962 |         896.8 |        962    |           962 |    21.1416   |               570.906  |          8.91363   |     2969.8 |     2969.8 |     2969.8 |      17.2 |      17.2 |      17.2 |
| [qgis3dev-standalone > somap314_lk > lk.txt](../results/details/compare-major/20201014-081746/qgis3dev-standalone/somap314_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         10.4 |              13.1 |            30 |            0 |          0 |       345.333 |           182   |           67 |          978 |         918.9 |        975.25 |           978 |    21.5517   |               581.979  |          9.08652   |     2982.6 |     2982.6 |     2982.6 |      15.2 |      15.2 |      15.2 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218-stock:
    active: no
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310-stock:
    active: no
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk.txt
      somap314_grundplanav_farbig:
        - av_f.txt
      somap314_grundplanav_sw:
        - av_sw.txt

  qgis314-standalone:
    active: yes
    inherit: qgis314-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

  qgis3dev-standalone:
    active: yes
    inherit: qgis314-standalone
    compose-variables:
      QGIS_VERSION: 'latest'


```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218-stock:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis314-stock
    path-prefix: ''
    projects:
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis3dev-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: latest
    inherit: qgis314-standalone
    path-prefix: ''
    projects:
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```