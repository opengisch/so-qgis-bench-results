# QGIS Benchmark summary compare-featureinfo (20201016-023622)


compare different version of QGIS servers using the same settings

_run completed in 02h 00m 22s_
## Summary plot
An interactive summary plot can be found [here](report_compare-featureinfo_20201016-023622_plot.html)

## Summary
| name               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock      | Global  |        100.4 |               0   |           347 |            0 |     7792.2 |     6325.8 |     3188.9 |      99.8 |      84.6 |      12.7 |          0 |
| qgis314-stock      | Global  |       9710.1 |            9575.8 |           347 |          347 |     6643.7 |     6475.1 |     3675.4 |      87.5 |      71.2 |      31.2 |        100 |
| qgis314-standalone | Global  |      20039.6 |           19868.9 |           347 |          347 |     6551.1 |     6353.5 |     3364.8 |      89.8 |      69.7 |      11.3 |        100 |
| qgis310-stock      | Global  |      40048.9 |           39807.6 |           347 |          347 |     6446.6 |     6285.8 |     3857.7 |      93   |      73.2 |      13.8 |        100 |

## Aggregated
| name                          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218      | somap   |        100.4 |               0   |           347 |            0 |     7792.2 |     6325.8 |     3188.9 |      99.8 |      84.6 |      12.7 |          0 |
| qgis314-stock > somap314      | somap   |       9710.1 |            9575.8 |           347 |          347 |     6643.7 |     6475.1 |     3675.4 |      87.5 |      71.2 |      31.2 |        100 |
| qgis314-standalone > somap314 | somap   |      20039.6 |           19868.9 |           347 |          347 |     6551.1 |     6353.5 |     3364.8 |      89.8 |      69.7 |      11.3 |        100 |
| qgis310-stock > somap310      | somap   |      40048.9 |           39807.6 |           347 |          347 |     6446.6 |     6285.8 |     3857.7 |      93   |      73.2 |      13.8 |        100 |

## Detail
| name                                                                                                                                                                       | group                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218 > featureinfo.txt](../results/details/compare-featureinfo/20201016-023622/qgis218-stock/somap218/featureinfo.txt/dashboard/index.html)           | somap > featureinfo.txt |        100.4 |               0   |           347 |            0 |          0 |       289.205 |              74 |           21 |         6814 |         534.6 |         905.6 |       4841.52 |   32.1415    |           2077.22      |         14.9829    |     7792.2 |     6325.8 |     3188.9 |      99.8 |      84.6 |      12.7 |
| [qgis314-stock > somap314 > featureinfo.txt](../results/details/compare-featureinfo/20201016-023622/qgis314-stock/somap314/featureinfo.txt/dashboard/index.html)           | somap > featureinfo.txt |       9710.1 |            9575.8 |           347 |          347 |        100 |     27982.9   |               1 |            0 |       120123 |      120064   |      120090   |     120119    |    0.33811   |              0.107776  |          0.157611  |     6643.7 |     6475.1 |     3675.4 |      87.5 |      71.2 |      31.2 |
| [qgis314-standalone > somap314 > featureinfo.txt](../results/details/compare-featureinfo/20201016-023622/qgis314-standalone/somap314/featureinfo.txt/dashboard/index.html) | somap > featureinfo.txt |      20039.6 |           19868.9 |           347 |          347 |        100 |     57750.9   |           36048 |        33276 |       215566 |      109921   |      141557   |     204102    |    0.166761  |              0.0268707 |          0.080016  |     6551.1 |     6353.5 |     3364.8 |      89.8 |      69.7 |      11.3 |
| [qgis310-stock > somap310 > featureinfo.txt](../results/details/compare-featureinfo/20201016-023622/qgis310-stock/somap310/featureinfo.txt/dashboard/index.html)           | somap > featureinfo.txt |      40048.9 |           39807.6 |           347 |          347 |        100 |    115415     |          120058 |        39077 |       120118 |      120080   |      120083   |     120088    |    0.0850116 |              0.0278978 |          0.0396284 |     6446.6 |     6285.8 |     3857.7 |      93   |      73.2 |      13.8 |

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
      somap218:
        - featureinfo.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310:
        - featureinfo.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314:
        - featureinfo.txt

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
      somap218:
      - featureinfo.txt
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
      somap310:
      - featureinfo.txt
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
      somap314:
      - featureinfo.txt
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
      somap314:
      - featureinfo.txt
    template: docker-compose-qgis-3-nginx

```