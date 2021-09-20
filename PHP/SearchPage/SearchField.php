<?php

require_once 'Detail.php';

abstract class SearchField
{
    protected string $startingHTML = "
    <div class=\"select-box\">
        <div class=\"search-bar\">
      <input type=\"text\" placeholder=\"Start typing..\" />
        </div>
        <div class=\"options-container\">";
    protected string $endingHTML = "</div>";
    
    abstract protected function putData(Detail $details);
}

?>