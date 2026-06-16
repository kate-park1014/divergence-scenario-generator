export const scenario_snowy_skaalbane_83_01 = {
	"scenario_id": "snowy_skaalbane_83_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "탑의 가장 깊은 곳, 얼음으로 뒤덮인 통로가 열렸다. 푸른빛의 박동이 발밑에서 전해진다.",
						"english": "In the deepest part of the Tower, an ice-covered passage opened. A blue pulse resonates from beneath our feet.",
						"japanese": "塔の最深部、氷に覆われた通路が開かれた。足元から青い光の鼓動が伝わる。",
						"chinese": "塔的最深处，一条冰雪覆盖的通道开启了。蓝色的脉动从脚下传来。",
						"french": "Dans les profondeurs de la Tour, un passage recouvert de glace s'est ouvert. Une pulsation bleue résonne sous nos pieds.",
						"spanish": "En lo más profundo de la Torre, un pasaje cubierto de hielo se ha abierto. Un pulso azul resuena bajo nuestros pies.",
						"vietnamese": "Sâu nhất trong Tháp, một lối đi phủ đầy băng đã mở ra. Nhịp đập xanh biếc lan truyền từ dưới chân.",
						"thai": "ในส่วนที่ลึกที่สุดของหอคอย ทางเดินที่ปกคลุมด้วยน้ำแข็งได้เปิดออก ชีพจรสีน้ำเงินแผ่ซ่านจากใต้ฝ่าเท้าของเรา",
						"hindi": "टॉवर के सबसे गहरे हिस्से में, बर्फ से ढका एक मार्ग खुल गया है। नीली धड़कन हमारे पैरों के नीचे से गूँज रही है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…심장 소리? 땅에서 울려와.",
						"english": "...A heart sound? Resonating from the ground.",
						"japanese": "…心臓の音？地面から響いてくる。",
						"chinese": "……心跳声？从地面上传来。",
						"french": "...Un battement de cœur ? Résonnant du sol.",
						"spanish": "...¿Un latido de corazón? Resuena desde el suelo.",
						"vietnamese": "...Tiếng tim đập? Vọng lên từ mặt đất.",
						"thai": "...เสียงหัวใจเต้น? ดังมาจากพื้นดิน",
						"hindi": "...दिल की आवाज़? ज़मीन से गूँज रही है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 리듬… 범상치 않아. 얼음을 통해 온몸으로 전해져.",
						"english": "This rhythm... it's unusual. It's spreading through the ice, throughout my whole body.",
						"japanese": "このリズム…尋常じゃない。氷を通して全身に伝わってくる。",
						"chinese": "这节奏……不寻常。它通过冰传遍全身。",
						"french": "Ce rythme... c'est inhabituel. Il se propage à travers la glace, dans tout mon corps.",
						"spanish": "Este ritmo... es inusual. Se transmite por el hielo, por todo mi cuerpo.",
						"vietnamese": "Nhịp điệu này... thật khác thường. Nó lan truyền qua băng, thấm vào toàn bộ cơ thể.",
						"thai": "จังหวะนี้... มันไม่ปกติเลย มันแพร่กระจายไปทั่วร่างกายผ่านน้ำแข็ง",
						"hindi": "यह लय... असामान्य है। यह बर्फ के ज़रिए पूरे शरीर में फैल रही है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치 탑 자체가 살아 숨 쉬는 것 같아.",
						"english": "It's as if the Tower itself is alive.",
						"japanese": "まるで塔自体が生きているようだ。",
						"chinese": "仿佛高塔本身就活了过来。",
						"french": "C'est comme si la Tour elle-même était vivante.",
						"spanish": "Es como si la Torre misma estuviera viva.",
						"vietnamese": "Cứ như thể chính tòa Tháp đang sống dậy vậy.",
						"thai": "ราวกับว่าหอคอยนี้มีชีวิต",
						"hindi": "ऐसा लगता है जैसे टावर खुद ही जीवित है।"
					},
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "리듬이 점점 선명해져. 고대 룬 문자에도 이런 맥동에 대한 기록이 있었지.",
						"english": "The rhythm is getting clearer. Ancient runes also had records of such pulsations.",
						"japanese": "リズムがどんどん鮮明になる。古代のルーン文字にも、この脈動に関する記録があったはずだ。",
						"chinese": "节奏越来越清晰。古代符文也有关于这种脉动的记载。",
						"french": "Le rythme devient de plus en plus clair. Les runes anciennes faisaient aussi mention de telles pulsations.",
						"spanish": "El ritmo se vuelve cada vez más claro. Las runas antiguas también tenían registros de tales pulsaciones.",
						"vietnamese": "Nhịp điệu ngày càng rõ ràng. Cổ tự rune cũng có ghi chép về những dao động như thế này.",
						"thai": "จังหวะเริ่มชัดเจนขึ้นเรื่อยๆ อักษรรูนโบราณก็มีบันทึกเกี่ยวกับชีพจรแบบนี้ด้วย",
						"hindi": "लय ज़्यादा साफ़ होती जा रही है। प्राचीन रुनिक अक्षरों में भी ऐसी धड़कनों के बारे में रिकॉर्ड थे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어떤 기록인데?",
						"english": "What kind of records?",
						"japanese": "どんな記録だ？",
						"chinese": "是什么记录？",
						"french": "Quels genres de registres ?",
						"spanish": "¿Qué clase de registros?",
						"vietnamese": "Ghi chép gì vậy?",
						"thai": "บันทึกแบบไหน?",
						"hindi": "किस तरह के रिकॉर्ड?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "잊힌 존재의… 굶주림.",
						"english": "The Forgotten's... hunger.",
						"japanese": "忘れ去られた存在の…飢え。",
						"chinese": "被遗忘者的…饥饿。",
						"french": "La faim de l'être oublié...",
						"spanish": "El hambre del ser olvidado...",
						"vietnamese": "Cơn đói của kẻ bị lãng quên...",
						"thai": "ความหิวโหยของสิ่งมีชีวิตที่ถูกลืม...",
						"hindi": "भूले हुए अस्तित्व की... भूख।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "굶주림?",
						"english": "Hunger?",
						"japanese": "飢え？",
						"chinese": "饥饿？",
						"french": "La faim ?",
						"spanish": "¿Hambre?",
						"vietnamese": "Đói sao?",
						"thai": "ความหิวโหย?",
						"hindi": "भूख?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "박동의 강도가 심상치 않아. 단순한 진동이 아니야.",
						"english": "The pulse's intensity is unusual. It's not just a simple vibration.",
						"japanese": "鼓動の強さが尋常じゃない。ただの振動ではない。",
						"chinese": "搏动的强度非同寻常。这不是简单的震动。",
						"french": "L'intensité du battement est inhabituelle. Ce n'est pas une simple vibration.",
						"spanish": "La intensidad del latido es inusual. No es una simple vibración.",
						"vietnamese": "Cường độ của nhịp đập thật bất thường. Không phải là rung động đơn thuần.",
						"thai": "ความแรงของการเต้นไม่ปกติ มันไม่ใช่แค่การสั่นสะเทือนธรรมดา",
						"hindi": "धड़कन की तीव्रता असामान्य है। यह केवल एक कंपन नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ何なの？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy nó là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "생명의 흐름… 아니, 생명을 빼앗은 흔적 같아. (얼음 바닥을 만져본다)",
						"english": "A flow of life... no, it feels like traces of life taken away. (Touches the icy floor)",
						"japanese": "生命の流れ…いや、生命を奪った痕跡のようだ。(氷の床に触れる)",
						"chinese": "生命的流动……不，更像是生命被夺走的痕迹。(触摸冰冷的地板)",
						"french": "Un flux de vie... non, plutôt des traces de vie arrachée. (Touche le sol gelé)",
						"spanish": "Un flujo de vida... no, parece más bien el rastro de vidas arrebatadas. (Toca el suelo helado)",
						"vietnamese": "Dòng chảy của sự sống... không, giống như dấu vết của sự sống bị cướp đi. (Chạm vào sàn băng)",
						"thai": "กระแสแห่งชีวิต… ไม่สิ เหมือนร่องรอยของชีวิตที่ถูกพรากไป (สัมผัสพื้นน้ำแข็ง)",
						"hindi": "जीवन का प्रवाह... नहीं, यह जीवन के छीने जाने के निशान जैसा लगता है। (बर्फीले फर्श को छूता है)"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "你是什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là gì?",
						"thai": "หมายความว่าไง?",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "박동이 더욱 거세졌다. 심장을 옥죄는 듯한 압박감이 탐험대를 덮친다.",
						"english": "The pulse grew stronger. A constricting pressure, as if squeezing the heart, overwhelmed the expedition.",
						"japanese": "鼓動はさらに激しくなった。心臓を締め付けるような圧迫感が探検隊を襲う。",
						"chinese": "搏动更加剧烈。一股仿佛要勒紧心脏的压迫感席卷了探险队。",
						"french": "Le battement s'intensifia. Une pression oppressante, comme si elle serrait le cœur, submergea l'expédition.",
						"spanish": "El latido se hizo más fuerte. Una presión asfixiante, como si oprimiera el corazón, abrumó a la expedición.",
						"vietnamese": "Nhịp đập càng lúc càng mạnh. Một cảm giác áp lực như bóp nghẹt trái tim bao trùm lấy đoàn thám hiểm.",
						"thai": "การเต้นรุนแรงขึ้น ความรู้สึกกดดันที่รัดรึงหัวใจเข้าปกคลุมทีมสำรวจ",
						"hindi": "धड़कन और भी तेज हो गई। हृदय को जकड़ने वाले दबाव ने अभियान दल को घेर लिया।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…흡수한 모든 죽음이 하나로 뛰는 굶주림의 맥박.",
						"english": "...The pulse of hunger, where all absorbed deaths beat as one.",
						"japanese": "…吸収した全ての死が一つとなって脈打つ、飢えの鼓動。",
						"chinese": "……所有被吸收的死亡，化为一体跳动的饥饿脉搏。",
						"french": "...Le pouls de la faim, où toutes les morts absorbées battent à l'unisson.",
						"spanish": "...El pulso del hambre, donde todas las muertes absorbidas laten como una sola.",
						"vietnamese": "...Nhịp đập của cơn đói, nơi mọi cái chết đã hấp thụ cùng đập chung một nhịp.",
						"thai": "...ชีพจรแห่งความหิวโหย ที่ความตายทั้งหมดที่ถูกดูดซับรวมกันเป็นหนึ่งเดียว",
						"hindi": "...अवशोषित सभी मृत्युओं की एक साथ धड़कती हुई भूख की नब्ज।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐라고?",
						"english": "What did you say?",
						"japanese": "何だって？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Anh nói gì?",
						"thai": "ว่าอะไรนะ?",
						"hindi": "क्या कहा?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 박동은… 수많은 생명을 집어삼킨 심장의 울림이야.",
						"english": "This pulse... is the throb of a heart that has devoured countless lives.",
						"japanese": "この鼓動は…数えきれないほどの命を貪り食った心臓の響きだ。",
						"chinese": "这搏动……是吞噬了无数生命的，心脏的轰鸣。",
						"french": "Ce battement... est le battement d'un cœur qui a dévoré d'innombrables vies.",
						"spanish": "Este latido... es el eco de un corazón que ha devorado incontables vidas.",
						"vietnamese": "Nhịp đập này... là tiếng vọng của một trái tim đã nuốt chửng vô số sinh mạng.",
						"thai": "การเต้นนี้… คือเสียงสะท้อนจากหัวใจที่กลืนกินชีวิตนับไม่ถ้วน",
						"hindi": "यह धड़कन... उन अनगिनत जिंदगियों को निगलने वाले दिल की गूँज है।"
					},
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 너무 늦었나?",
						"english": "Damn… Am I too late?",
						"japanese": "くそ… 遅すぎたか？",
						"chinese": "该死… 我来晚了吗？",
						"french": "Bon sang... Suis-je trop tard ?",
						"spanish": "Maldición... ¿Llegué demasiado tarde?",
						"vietnamese": "Chết tiệt… Mình đến quá muộn sao?",
						"thai": "แย่แล้ว… สายเกินไปแล้วเหรอ?",
						"hindi": "धिक्कार है… क्या मैं बहुत देर हो चुकी हूँ?"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도… 너희의 심장도… 결국…",
						"english": "Ugh... Just this much... Your hearts too... will eventually...",
						"japanese": "くぅっ… この程度… お前たちの心臓も… 結局…",
						"chinese": "呃… 就这样吗… 你们的心脏也… 终究会…",
						"french": "Ugh... Juste ça... Vos cœurs aussi... finiront par...",
						"spanish": "Uf... Solo esto... Vuestros corazones también... al final...",
						"vietnamese": "Khụ… Chỉ có vậy thôi sao… Tim của các ngươi rồi cũng…",
						"thai": "อึก… แค่นี้เองเหรอ… หัวใจของพวกเจ้าก็… ในที่สุดก็…",
						"hindi": "उह... बस इतना ही... तुम्हारे दिल भी... आखिरकार..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝난 건가?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "…结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "¿...Ha terminado?",
						"vietnamese": "…Kết thúc rồi sao?",
						"thai": "…จบแล้วเหรอ?",
						"hindi": "...क्या यह खत्म हो गया?"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "박동이… 조금 잦아들었어. 하지만 완전히 멈춘 게 아니야.",
						"english": "The pulsation... has slowed a bit. But it hasn't completely stopped.",
						"japanese": "鼓動が… 少し落ち着いた。だが、完全に止まったわけじゃない。",
						"chinese": "脉动… 稍微平息了。但还没有完全停止。",
						"french": "La pulsation... a un peu ralenti. Mais elle ne s'est pas complètement arrêtée.",
						"spanish": "La pulsación... ha disminuido un poco. Pero no se ha detenido por completo.",
						"vietnamese": "Nhịp đập… đã chậm lại một chút. Nhưng nó vẫn chưa dừng hẳn.",
						"thai": "การเต้น… ช้าลงเล็กน้อย แต่ก็ยังไม่หยุดสนิท",
						"hindi": "स्पंदन... थोड़ा धीमा हो गया है। लेकिन यह पूरी तरह से रुका नहीं है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 핵의 박동은 완전히 멈추지 않았다. 탐험대의 심장도 그 리듬에 미묘하게 반응하기 시작한다.",
						"english": "{random_boss} has fallen. Yet the core's pulsation has not entirely ceased. The expedition team's hearts subtly begin to resonate with its rhythm.",
						"japanese": "倒れた{random_boss}。しかし、核の鼓動は完全に止まっていない。探検隊の心臓もそのリズムに微妙に反応し始める。",
						"chinese": "倒下的 {random_boss}。然而核心的脉动并未完全停止。探险队的心脏也开始微妙地与它的节奏产生共鸣。",
						"french": "{random_boss} est tombé. Pourtant, la pulsation du cœur n'a pas entièrement cessé. Les cœurs de l'équipe d'expédition commencent subtilement à résonner avec son rythme.",
						"spanish": "{random_boss} ha caído. Sin embargo, la pulsación del núcleo no ha cesado por completo. Los corazones del equipo de expedición comienzan a resonar sutilmente con su ritmo.",
						"vietnamese": "{random_boss} đã gục ngã. Tuy nhiên, nhịp đập của lõi vẫn chưa dừng hoàn toàn. Trái tim của đội thám hiểm cũng bắt đầu phản ứng một cách tinh tế với nhịp điệu đó.",
						"thai": "{random_boss} ล้มลงแล้ว แต่การเต้นของแกนกลางยังไม่หยุดสนิท หัวใจของทีมสำรวจก็เริ่มตอบสนองกับจังหวะนั้นอย่างละเอียดอ่อน",
						"hindi": "{random_boss} गिर गया है। फिर भी कोर का स्पंदन पूरी तरह से बंद नहीं हुआ है। अभियान दल के दिल भी सूक्ष्म रूप से उसकी ताल के साथ प्रतिध्वनित होने लगते हैं।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 나의 굶주림은 영원하다. 너희도 곧 나의 일부가 될 것이다.",
						"english": "Fools. My hunger is eternal. You too shall soon be part of me.",
						"japanese": "愚かな者たちめ。我が飢えは永遠なり。お前たちもやがて我の一部となるだろう。",
						"chinese": "愚蠢的东西。我的饥饿是永恒的。你们也很快会成为我的一部分。",
						"french": "Fous. Ma faim est éternelle. Vous aussi ferez bientôt partie de moi.",
						"spanish": "Necios. Mi hambre es eterna. Vosotros también seréis pronto parte de mí.",
						"vietnamese": "Lũ ngu ngốc. Cơn đói của ta là vĩnh cửu. Các ngươi cũng sẽ sớm trở thành một phần của ta thôi.",
						"thai": "พวกโง่เง่า ความหิวของข้าเป็นนิรันดร์ พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของข้าในไม่ช้า",
						"hindi": "मूर्खों। मेरी भूख शाश्वत है। तुम भी जल्द ही मेरा हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는… 포기하지 않아!",
						"english": "...It's not over yet. We... won't give up!",
						"japanese": "…まだ終わってない。我々は…諦めない！",
						"chinese": "……还没有结束。我们……不会放弃！",
						"french": "...Ce n'est pas fini. Nous... n'abandonnerons pas !",
						"spanish": "...Aún no ha terminado. ¡Nosotros... no nos rendiremos!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta... sẽ không bỏ cuộc!",
						"thai": "...ยังไม่จบ เรา... จะไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम... हार नहीं मानेंगे!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 박동이 모든 것을 집어삼킨다. 탐험대는 다시 한번 칼을 고쳐 쥐었다.",
						"english": "A colossal pulse devours all. The expedition team tightened their grip on their swords once more.",
						"japanese": "巨大な鼓動がすべてを飲み込む。探検隊は再び剣を握りしめた。",
						"chinese": "巨大的搏动吞噬一切。探险队再次紧握手中的剑。",
						"french": "Une pulsation colossale engloutit tout. L'équipe d'expédition resserra sa prise sur ses épées.",
						"spanish": "Una pulsación colosal lo devora todo. El equipo de expedición volvió a empuñar sus espadas.",
						"vietnamese": "Nhịp đập khổng lồ nuốt chửng mọi thứ. Đoàn thám hiểm lại một lần nữa nắm chặt thanh kiếm của mình.",
						"thai": "แรงสั่นสะเทือนมหาศาลกลืนกินทุกสิ่ง ทีมสำรวจกระชับดาบในมืออีกครั้ง",
						"hindi": "एक विशाल स्पंदन सब कुछ निगल जाता है। अभियान दल ने एक बार फिर अपनी तलवारें कसकर पकड़ लीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 형상이 푸른 박동의 중심으로 나타났다. 잊힌 전설의 조각이 모습을 드러냈다.",
						"english": "A colossal figure emerged from the heart of the blue pulsation. A fragment of forgotten legend revealed itself.",
						"japanese": "巨大な姿が青い鼓動の中心から現れた。忘れ去られた伝説の断片がその姿を現した。",
						"chinese": "一个巨大的身影从蓝色脉动的中心显现。一段被遗忘的传说碎片现出了原形。",
						"french": "Une figure colossale émergea du cœur de la pulsation bleue. Un fragment de légende oubliée se révéla.",
						"spanish": "Una figura colosal emergió del corazón de la pulsación azul. Un fragmento de una leyenda olvidada se reveló.",
						"vietnamese": "Một hình dáng khổng lồ xuất hiện từ trung tâm của nhịp đập xanh. Một mảnh vỡ của truyền thuyết bị lãng quên đã lộ diện.",
						"thai": "รูปร่างมหึมาปรากฏขึ้นจากใจกลางของการเต้นสีน้ำเงิน ชิ้นส่วนของตำนานที่ถูกลืมได้เผยโฉมออกมา",
						"hindi": "एक विशाल आकृति नीले स्पंदन के केंद्र से उभरी। भूली हुई किंवदंती का एक टुकड़ा सामने आया।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 나의 영역에 발을 들이다니. 이 박동이 곧 너희의 운명이다.",
						"english": "How dare you... set foot in my domain. This pulsation shall be your fate.",
						"japanese": "よくも… 我が領域に足を踏み入れたな。この鼓動がお前たちの運命となるだろう。",
						"chinese": "竟敢… 踏入我的领域。这脉动便是你们的宿命。",
						"french": "Comment osez-vous... poser le pied sur mon domaine. Cette pulsation sera votre destin.",
						"spanish": "Cómo osas... pisar mi dominio. Esta pulsación será vuestro destino.",
						"vietnamese": "Dám… đặt chân vào lãnh địa của ta. Nhịp đập này sẽ là số phận của các ngươi.",
						"thai": "บังอาจ… มาเหยียบย่างในอาณาเขตของข้า การเต้นนี้จะเป็นชะตากรรมของพวกเจ้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे क्षेत्र में कदम रखने की। यह स्पंदन ही तुम्हारा भाग्य होगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃기지 마! 네 맘대로 되게 두지 않아!",
						"english": "Don't make me laugh! I won't let you have your way!",
						"japanese": "笑わせるな！ お前の思い通りにはさせない！",
						"chinese": "别开玩笑了！我不会让你得逞的！",
						"french": "Ne me fais pas rire ! Je ne te laisserai pas faire ta volonté !",
						"spanish": "¡No me hagas reír! ¡No te saldrás con la tuya!",
						"vietnamese": "Đừng làm tôi cười! Tôi sẽ không để ngươi toại nguyện đâu!",
						"thai": "อย่ามาหัวเราะให้ยาก! ฉันไม่ยอมให้แกทำตามใจชอบหรอก!",
						"hindi": "मुझे हँसाओ मत! मैं तुम्हें अपनी मनमानी नहीं करने दूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "(random_boss를 응시하며) 이름을 기억하려 하지 않는… 존재.",
						"english": "(Gazing at {random_boss}) The being that refuses to remember its name...",
						"japanese": "（{random_boss}を見つめながら）名を記憶しようとしない…存在。",
						"chinese": "（凝视着 {random_boss}）拒绝记住名字的…存在。",
						"french": "(Fixant {random_boss}) L'être qui refuse de se souvenir de son nom...",
						"spanish": "(Contemplando a {random_boss}) El ser que se niega a recordar su nombre...",
						"vietnamese": "(Nhìn chằm chằm vào {random_boss}) Sinh vật không chịu nhớ tên của mình...",
						"thai": "(จ้องมองที่ {random_boss}) สิ่งมีชีวิตที่ไม่ยอมจำชื่อของมัน...",
						"hindi": "({random_boss} को घूरते हुए) वह अस्तित्व जो अपना नाम याद रखने से इनकार करता है..."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "건방진 계집. 네 기록은 여기서 끝난다.",
						"english": "Arrogant wench. Your record ends here.",
						"japanese": "生意気な小娘め。お前の記録はここで終わる。",
						"chinese": "狂妄的丫头。你的记录到此为止。",
						"french": "Petite effrontée. Ton histoire s'arrête ici.",
						"spanish": "Niña insolente. Tu historia termina aquí.",
						"vietnamese": "Đồ con ranh kiêu ngạo. Kỷ lục của ngươi kết thúc tại đây.",
						"thai": "นังเด็กอวดดี บันทึกของเจ้าจบลงแค่นี้แหละ",
						"hindi": "घमंडी छोकरी। तुम्हारा रिकॉर्ड यहीं समाप्त होता है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"탑의 심장, 그 푸른 박동이 시작됐다.",
			"얼어붙은 대지 아래, 잊힌 역사가 꿈틀거린다.",
			"이 맥동은 우리를 어디로 이끄는가.",
			"심장의 정체를 쫓는 여정, 발밑에서부터."
		],
		"english": [
			"The Tower's Heart, its blue pulse has begun.",
			"Beneath the frozen earth, forgotten history stirs.",
			"Where does this pulse lead us?",
			"The journey to uncover the Heart's true nature begins beneath our feet."
		],
		"japanese": [
			"塔の心臓、その青い鼓動が始まった。",
			"凍てついた大地の下、忘れられた歴史が蠢いている。",
			"この脈動は、我々をどこへ導くのか。",
			"心臓の正体を追う旅は、足元から始まる。"
		],
		"chinese": [
			"塔之心脏，其蓝色脉动已然开始。",
			"冰封大地之下，遗忘的历史正在蠕动。",
			"这脉动将我们引向何方？",
			"追寻心脏真面目的旅程，从脚下开始。"
		],
		"french": [
			"Le Cœur de la Tour, sa pulsation bleue a commencé.",
			"Sous la terre gelée, l'histoire oubliée s'agite.",
			"Où nous mène cette pulsation ?",
			"La quête pour le cœur commence sous nos pieds."
		],
		"spanish": [
			"El Corazón de la Torre, su pulso azul ha comenzado.",
			"Bajo la tierra helada, una historia olvidada se agita.",
			"¿Adónde nos lleva este pulso?",
			"La búsqueda de la verdadera naturaleza del Corazón, desde nuestros pies."
		],
		"vietnamese": [
			"Trái tim của Tháp, nhịp đập xanh biếc đã bắt đầu.",
			"Dưới lòng đất đóng băng, lịch sử bị lãng quên đang cựa quậy.",
			"Nhịp đập này sẽ dẫn chúng ta đi đâu?",
			"Cuộc hành trình truy tìm bản chất của Trái tim, bắt đầu từ dưới chân chúng ta."
		],
		"thai": [
			"หัวใจของหอคอย, ชีพจรสีน้ำเงินของมันได้เริ่มต้นขึ้นแล้ว",
			"ใต้ผืนดินที่เยือกแข็ง ประวัติศาสตร์ที่ถูกลืมกำลังเคลื่อนไหว",
			"ชีพจรนี้จะนำเราไปที่ไหน?",
			"การเดินทางเพื่อเปิดเผยตัวตนที่แท้จริงของหัวใจ เริ่มต้นจากใต้ฝ่าเท้าของเรา"
		],
		"hindi": [
			"टॉवर का हृदय, उसकी नीली धड़कन शुरू हो गई है।",
			"जमी हुई धरती के नीचे, भूला हुआ इतिहास हिल रहा है।",
			"यह धड़कन हमें कहाँ ले जाती है?",
			"हृदय की असलियत जानने की यात्रा, हमारे पैरों के नीचे से शुरू होती है।"
		]
	}
} as const;
