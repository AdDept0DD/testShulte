/**
 * функция которая перемешивает значения в массиве
 *
 */
function mix( data ){

    $.each( data, function( key, val ){

        var objectiveId = getRandomInt( 0, 24 );

        while( objectiveId == key ){

            objectiveId = getRandomInt( 0, 24 );
        }

        data[key] = data[objectiveId];
        data[objectiveId] = val;

    });

    return data;
}