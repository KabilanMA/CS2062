<?php
require_once('Facility.php');
require_once('FacilityResultBox.php');

class Hospital
{
    private $name;
    private $facilityList;
    public function __construct(string $name)
    {
        $this->facilityList = array();
        $this->name = $name;
    }

    public function putFacility(string $facilityName, $sTime, $eTime)
    {
        $facility = new Facility($facilityName, $sTime, $eTime);
        $this->facilityList[$facilityName] = $facility;
    }

    public function getName(){
        return $this->name;
    }

    public function display(string $fac)
    {
        $facilityBox = new FacilityResultBox($this->facilityList[$fac]);
        $div1 = $facilityBox->getDiv();
        
        foreach ($this->facilityList as $facility) {
            if($facility->getName() == $fac) continue;
            $facilityBox = new FacilityResultBox($facility);
            $div1 = $div1.$facilityBox->getDiv();
        }

        

        $div1 = "<div class=\"container\">\n".$div1."";
        $div2 = "<div class=\"box-area\">\n
        <header>\n
            <div class=\"wrapper\">\n
                <div class=\"hos-name\">\n
                    <h2>".strtoupper($this->name)."</h2>\n
                </div>\n
            </div>\n
        </header>\n
        </div>";
        $div3 = "
        <div class=\"window hidden\">
        <div class=\"email-form\">
            <div class=\"email-input\">
                <div class=\"email-title\">Enter email address</div>
                <input type=\"email\" name=\"email\" placeholder=\" julia@gmail.com\" class=\"email\">
                <input type=\"submit\" name=\"submit\" value=\"OK\" class=\"ok\">
            </div>
        </div>
        <div class=\"overlay\"></div>
        </div>";
        $document = "<div class=\"whole\"></div>" . $div2 .$div3. $div1 ."</div>";

        echo $document;
    }
}


?>