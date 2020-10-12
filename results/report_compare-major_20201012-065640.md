# QGIS Benchmark summary compare-major (20201012-065640)


compare different version of QGIS servers using the same settings

_run completed in 01h 51m 57s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201012-065640_plot.html)

## Summary
| name               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock      | Global  |       7303.6 |               0   |         11187 |            0 |     2528.8 |     9323.3 |    5485.1  |      12.4 |      99.9 |   97.6667 |          0 |
| qgis310-stock      | Global  |       8189.2 |              12.1 |         11187 |            0 |     2600.7 |     9544.6 |    5373.03 |      14.4 |      98.9 |   73.5667 |          0 |
| qgis314-stock      | Global  |       8397.3 |              15   |         11187 |            0 |     2678.3 |     9691.9 |    5252.13 |      12.8 |      98.8 |   73.2667 |          0 |
| qgis314-standalone | Global  |      41965.7 |             474.6 |         11187 |            0 |     2754.1 |    20758.9 |   11874    |      12.4 |      99.2 |   59.1    |          0 |

## Aggregated
| name                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig      | somap_grundplanav_farbig |        647.2 |               0   |           735 |            0 |     3762.2 |     4685.3 |     4271.5 |      28.3 |      99.2 |      97.1 |          0 |
| qgis310-stock > somap310_grundplanav_farbig      | somap_grundplanav_farbig |        775.8 |              19.9 |           735 |            0 |     2975.9 |     5224.8 |     4629   |      29.2 |      98.9 |      73.3 |          0 |
| qgis314-stock > somap314_grundplanav_farbig      | somap_grundplanav_farbig |        819.2 |              26.6 |           735 |            0 |     2951.9 |     5253   |     4444.2 |      25.1 |      98.2 |      73.2 |          0 |
| qgis314-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |       8906.3 |            1276.2 |           735 |            0 |     4264.4 |    14657.4 |    11596.7 |      24.8 |      99.2 |      53.9 |          0 |
| qgis218-stock > somap218_grundplanav_sw          | somap_grundplanav_sw     |       5241.9 |               0   |          5190 |            0 |     4019.5 |     9323.3 |     7972.9 |      13.4 |      99.9 |      98   |          0 |
| qgis310-stock > somap310_grundplanav_sw          | somap_grundplanav_sw     |       5456.5 |               4.1 |          5190 |            0 |     4298   |     9544.6 |     7684.1 |      28.4 |      96.7 |      74   |          0 |
| qgis314-stock > somap314_grundplanav_sw          | somap_grundplanav_sw     |       5591.4 |               6.7 |          5190 |            0 |     4090.5 |     9691.9 |     7471.4 |      12.8 |      98.8 |      73.9 |          0 |
| qgis314-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |      31086.3 |             493   |          5190 |            0 |    11963.3 |    20758.9 |    18891.3 |      12.4 |      94.7 |      56.6 |          0 |
| qgis218-stock > somap218_lk                      | somap_lk                 |       1414.5 |               0   |          5262 |            0 |     2528.8 |     5712.6 |     4210.9 |      12.4 |      99.8 |      97.9 |          0 |
| qgis310-stock > somap310_lk                      | somap_lk                 |       1957   |              38.3 |          5262 |            0 |     2600.7 |     5555.5 |     3806   |      14.4 |      85   |      73.4 |          0 |
| qgis314-standalone > somap314_lk                 | somap_lk                 |       1973.1 |              39.5 |          5262 |            0 |     2754.1 |     7112.8 |     5134   |      17.1 |      92.3 |      66.8 |          0 |
| qgis314-stock > somap314_lk                      | somap_lk                 |       1986.7 |              40.5 |          5262 |            0 |     2678.3 |     5783   |     3840.8 |      14.8 |      89.7 |      72.7 |          0 |

## Detail
| name                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201012-065640/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |        647.2 |               0   |           735 |            0 |          0 |       880.525 |           694   |          220 |         9109 |        1529.4 |       1852.6  |       3116.44 |    11.1286   |               1947.91  |           4.89985  |     4685.3 |     4271.5 |     3762.2 |      99.2 |      97.1 |      28.3 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201012-065640/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |        775.8 |              19.9 |           735 |            0 |          0 |      1055.46  |           976   |          194 |         4213 |        1779.6 |       2062.4  |       3398.92 |     9.34865  |               1368.14  |           4.11614  |     5224.8 |     4629   |     2975.9 |      98.9 |      73.3 |      29.2 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201012-065640/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |        819.2 |              26.6 |           735 |            0 |          0 |      1114.54  |          1011   |          208 |         4250 |        1884   |       2159.6  |       3505.44 |     8.84817  |               1294.85  |           3.89579  |     5253   |     4444.2 |     2951.9 |      98.2 |      73.2 |      25.1 |
| [qgis314-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201012-065640/qgis314-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       8906.3 |            1276.2 |           735 |            0 |          0 |     12117.4   |           809   |          184 |       296662 |       10887.4 |      87139.8  |     224424    |     0.824579 |                115.414 |           0.37433  |    14657.4 |    11596.7 |     4264.4 |      99.2 |      53.9 |      24.8 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201012-065640/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |       5241.9 |               0   |          5190 |            0 |          0 |      1010     |           605   |          212 |        17133 |        2302   |       2843.9  |       5492.8  |     9.79976  |               3051.47  |           4.26807  |     9323.3 |     7972.9 |     4019.5 |      99.9 |      98   |      13.4 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201012-065640/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |       5456.5 |               4.1 |          5190 |            0 |          0 |      1051.34  |           866   |          187 |         6957 |        1942   |       2420.35 |       3401.87 |     9.46773  |               2562.4   |           4.12346  |     9544.6 |     7684.1 |     4298   |      96.7 |      74   |      28.4 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201012-065640/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |       5591.4 |               6.7 |          5190 |            0 |          0 |      1077.35  |           901.5 |          199 |         9532 |        1972   |       2469.45 |       3462.71 |     9.22558  |               2496.84  |           4.018    |     9691.9 |     7471.4 |     4090.5 |      98.8 |      73.9 |      12.8 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201012-065640/qgis314-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      31086.3 |             493   |          5190 |            0 |          0 |      5989.66  |           753.5 |          185 |       299279 |        3292.9 |      21292.1  |     143725    |     1.65073  |                430.541 |           0.741508 |    20758.9 |    18891.3 |    11963.3 |      94.7 |      56.6 |      12.4 |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201012-065640/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |       1414.5 |               0   |          5262 |            0 |          0 |       268.815 |           142   |            5 |         3831 |         710   |       1013.55 |       1795.59 |    36.8777   |               1877.47  |          18.6805   |     5712.6 |     4210.9 |     2528.8 |      99.8 |      97.9 |      12.4 |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201012-065640/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |       1957   |              38.3 |          5262 |            0 |          0 |       371.905 |           194   |           31 |         3754 |         943   |       1261.85 |       2042.85 |    26.5566   |               1257.02  |          13.4523   |     5555.5 |     3806   |     2600.7 |      85   |      73.4 |      14.4 |
| [qgis314-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201012-065640/qgis314-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       1973.1 |              39.5 |          5262 |            0 |          0 |       374.968 |           206   |           34 |         5475 |         952.7 |       1290.85 |       2261.33 |    26.4447   |               1248.43  |          13.7572   |     7112.8 |     5134   |     2754.1 |      92.3 |      66.8 |      17.1 |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201012-065640/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |       1986.7 |              40.5 |          5262 |            0 |          0 |       377.554 |           207   |           37 |         4582 |         893   |       1209.85 |       1974.37 |    26.1324   |               1236.33  |          13.2375   |     5783   |     3840.8 |     2678.3 |      89.7 |      72.7 |      14.8 |

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
    active: yes
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
    active: yes
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
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis314-standalone:
    active: yes
    inherit: qgis314-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

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
    active: true
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
    active: true
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
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
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
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```